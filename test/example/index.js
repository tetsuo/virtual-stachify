var Template = require('virtual-stache/template');

function Text (text) { this.text = text }

function Node (tag, props, children) {
  this.tag = tag;
  this.props = props;
  this.children = children;
}

var render = require('./layout.html');

var tree = render({
  title: 'fruits',
  fruits: [
    { name: 'Kiwi' },
    { name: 'Mango' }
  ]
}, { Node: Node, Text: Text }, Template);

console.log(tree);