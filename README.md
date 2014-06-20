AutoImg.js
==========
AutoImg is a simple server that provides on-demand placeholder images.

It exposes an API that allows images to be served directly to requests from code sources, like an `<img>` tag.
Currently, it can only be used to serve generic PNG images generated server-side (`/solid/`).


Examples
---------
Assuming a domain of "autoimg.com":
```html
<img src="http://www.autoimg.com/solid/100/200"> 

```
will produce a simple gray image, 100px wide and 200px tall.


Dependencies
------------
AutoImg is built using:
* [node-canvas]
* [Express]
* [node.js]

Inspired by:
-------------
* [placehold.it]
* [placekitten]

[node-canvas]:https://github.com/learnboost/node-canvas
[node.js]:http://nodejs.org
[express]:http://expressjs.com
[placehold.it]:http://placehold.it
[placekitten]:http://placekitten.com
