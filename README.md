# axios-replay

- npm install
- after installing `replay` npm, you will need to fix a bug. Browse to `/axios_replay/node_modules/replay/lib/replay/proxy.js` and add following line at line 27

```
this._readableState = {}

```

So your code should look like

```
 this.proxy = proxy;
 this._readableState = {}
 HTTP.IncomingMessage.call(this);
 this.method = (options.method || "GET").toUpperCase();
```
- run REPLAY=record node test.js
