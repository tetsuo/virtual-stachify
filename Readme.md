# virtual-stachify

browserify transform for precompiling stache using [virtual-stache](https://github.com/tetsuo/virtual-stache).

# example

given this template, `layout.html`:

```
<div>
  <h1>{title}</h1>
  {#fruits}
    <li>{name}</li>
  {/fruits}
</div>
```

you can require it as a precompiled function that can be evaluated for rendering:

```js
var Template = require('virtual-stache/template');
var VNode = require('virtual-dom/vnode/vnode');
var VText = require('virtual-dom/vnode/vtext');
var createElement = require('virtual-dom/create-element');

var render = require(__dirname + '/layout.html'); // just like this

var virtualTree = render({
  title: 'Fruits',
  fruits: [
    { name: 'Kiwi' },
    { name: 'Mango' }
  ]
}, { Node: VNode, Text: VText }, Template);

var rootNode = createElement(virtualTree);
document.body.appendChild(rootNode);
```

then bundle up with browserify:

```
λ browserify -t "virtual-stachify" ./index.js > bundle.js
```

# api

See [virtual-stache](https://github.com/tetsuo/virtual-stache).

# license

mit