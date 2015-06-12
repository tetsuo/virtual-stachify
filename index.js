var path = require('path');
var compile = require('virtual-stache');
var through = require('through2');

module.exports = function (file) {
  if ('.html' !== path.extname(file))
    return through();

  var pipeline = compile();

  pipeline.get('pack').push(through.obj(function (row, enc, next) {
    this.push('module.exports=' + String(row));
    next();
  }));

  return pipeline;
};