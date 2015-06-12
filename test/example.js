var browserify = require('browserify');
var transform = require('../');
var test = require('tap').test;
var vm = require('vm');

test('example', function (t) {
  browserify(__dirname + '/example/index.js')
    .transform(transform)
    .bundle(function (err, src) {
      if (err) throw err;
      vm.runInNewContext(src, {
        console: {
          log: function (s) {
            var expected = { tag: 'div',
              props: {},
              children:
               [ { text: '\n  ' },
                 { tag: 'h1', props: {}, children: [ { text: 'fruits' } ] },
                 { text: '\n  ' },
                 { text: '\n    ' },
                 { tag: 'li', props: {}, children: [ { text: 'Kiwi' } ] },
                 { text: '\n  ' },
                 { text: '\n    ' },
                 { tag: 'li', props: {}, children: [ { text: 'Mango' } ] },
                 { text: '\n  ' },
                 { text: '\n' } ] };
            t.deepEqual(s, expected);
            t.end();
          }
        }
      });
    });
});
