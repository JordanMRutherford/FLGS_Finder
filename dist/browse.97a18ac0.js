// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iGyo7":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "a71be61e97a18ac0";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"d4ysq":[function(require,module,exports) {
// import stores from '../modules/storesJSON.geojson' assert {type: 'json'};
const stores = {
    "type": "FeatureCollection",
    "crs": {
        "type": "name",
        "properties": {
            "name": "Stores-JSON"
        }
    },
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -123.127228,
                    49.251163
                ]
            },
            "properties": {
                "id": 38,
                "name": "Wildwood Games",
                "streetAddress": "3880 Oak St",
                "city": "Vancouver",
                "province": "British Columbia",
                "phoneNumber": "(604) 555-0138",
                "imageAddress": "../img/stores/store38.jpg",
                "domesticGames": true,
                "importGames": true,
                "miniatureGames": true,
                "cardGames": false,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -79.648762,
                    44.364561
                ]
            },
            "properties": {
                "id": 46,
                "name": "Good Move Games",
                "streetAddress": "52 Bruce Crescent",
                "city": "Barrie",
                "province": "Ontario",
                "phoneNumber": "(705) 555-0146",
                "imageAddress": "../img/stores/store46.jpg",
                "domesticGames": true,
                "importGames": true,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -63.572751,
                    44.635341
                ]
            },
            "properties": {
                "id": 42,
                "name": "HFX Cards & Games",
                "streetAddress": "5487 Inglis St",
                "city": "Halifax",
                "province": "Nova Scotia",
                "phoneNumber": "(902) 555-0142",
                "imageAddress": "../img/stores/store42.jpg",
                "domesticGames": true,
                "importGames": true,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -73.623247,
                    45.529727
                ]
            },
            "properties": {
                "id": 21,
                "name": "Jeux & Jouets",
                "streetAddress": "7222 Rue Hutchison",
                "city": "Montreal",
                "province": "Quebec",
                "phoneNumber": "(514) 555-0121",
                "imageAddress": "../img/stores/store21.jpg",
                "domesticGames": true,
                "importGames": true,
                "miniatureGames": false,
                "cardGames": false,
                "roleplayingGames": false
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -79.323155,
                    43.683269
                ]
            },
            "properties": {
                "id": 22,
                "name": "Hellas Games",
                "streetAddress": "1577 Danforth Ave",
                "city": "Toronto",
                "province": "Ontario",
                "phoneNumber": "(416) 555-0122",
                "imageAddress": "../img/stores/store22.jpg",
                "domesticGames": true,
                "importGames": true,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -80.994319,
                    46.491529
                ]
            },
            "properties": {
                "id": 18,
                "name": "The Larch & Quill",
                "streetAddress": "52 Larch St",
                "city": "Sudbury",
                "province": "Ontario",
                "phoneNumber": "(705) 555-0118",
                "imageAddress": "../img/stores/store18.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": false,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -104.581742,
                    50.450687
                ]
            },
            "properties": {
                "id": 2,
                "name": "Rhymes with Fun Games",
                "streetAddress": "1751 Mcara St",
                "city": "Regina",
                "province": "Saskatchewan",
                "phoneNumber": "(474) 555-0102",
                "imageAddress": "../img/stores/store2.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": false,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -79.842605,
                    43.201747
                ]
            },
            "properties": {
                "id": 16,
                "name": "Hogtown Hijinx",
                "streetAddress": "399 Queen Victoria Dr",
                "city": "Hamilton",
                "province": "Ontario",
                "phoneNumber": "(905) 555-0116",
                "imageAddress": "../img/stores/store16.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": true,
                "cardGames": false,
                "roleplayingGames": false
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -52.749059,
                    47.559959
                ]
            },
            "properties": {
                "id": 43,
                "name": "New Found Games",
                "streetAddress": "25 Kenmount Rd",
                "city": "St. John's",
                "province": "Newfoundland",
                "phoneNumber": "(709) 555-0143",
                "imageAddress": "../img/stores/store43.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -79.521815,
                    43.834274
                ]
            },
            "properties": {
                "id": 47,
                "name": "Rutherford Road Games",
                "streetAddress": "2650 Rutherford Rd",
                "city": "Concord",
                "province": "Ontario",
                "phoneNumber": "(905) 555-0147",
                "imageAddress": "../img/stores/store47.jpg",
                "domesticGames": true,
                "importGames": true,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -71.863733,
                    45.408678
                ]
            },
            "properties": {
                "id": 49,
                "name": "Boutique Imaginaire",
                "streetAddress": "1135 Rue King E",
                "city": "Sherbrooke",
                "province": "Quebec",
                "phoneNumber": "(819) 555-0149",
                "imageAddress": "../img/stores/store49.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -79.249916,
                    43.157585
                ]
            },
            "properties": {
                "id": 1,
                "name": "The War College",
                "streetAddress": "47 Williams St",
                "city": "St. Catharines",
                "province": "Ontario",
                "phoneNumber": "(905) 555-0101",
                "imageAddress": "../img/stores/store1.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": true,
                "cardGames": false,
                "roleplayingGames": false
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -79.072848,
                    43.101578
                ]
            },
            "properties": {
                "id": 7,
                "name": "Armoury Games",
                "streetAddress": "4775 Armoury St",
                "city": "Niagara Falls",
                "province": "Ontario",
                "phoneNumber": "(905) 555-0107",
                "imageAddress": "../img/stores/store7.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": false,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -113.496832,
                    53.498606
                ]
            },
            "properties": {
                "id": 11,
                "name": "Board Game Junction",
                "streetAddress": "6107 104 St NW",
                "city": "Edmonton",
                "province": "Alberta",
                "phoneNumber": "(780) 555-0111",
                "imageAddress": "../img/stores/store11.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -123.098351,
                    49.280418
                ]
            },
            "properties": {
                "id": 15,
                "name": "Chits and Giggles",
                "streetAddress": "223 E. Pender St.",
                "city": "Vancouver",
                "province": "British Columbia",
                "phoneNumber": "(604) 555-0115",
                "imageAddress": "../img/stores/store15.jpg",
                "domesticGames": true,
                "importGames": true,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -66.056996,
                    45.276205
                ]
            },
            "properties": {
                "id": 41,
                "name": "Poseidon Games",
                "streetAddress": "42 Waterloo St",
                "city": "Saint John",
                "province": "New Brunswick",
                "phoneNumber": "(506) 555-0141",
                "imageAddress": "../img/stores/store41.jpg",
                "domesticGames": true,
                "importGames": true,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -79.594447,
                    43.597112
                ]
            },
            "properties": {
                "id": 0,
                "name": "War Games Academy",
                "streetAddress": "888 Dundas St E. Unit E1",
                "city": "Mississauga",
                "province": "Ontario",
                "phoneNumber": "(905) 555-0100",
                "imageAddress": "../img/stores/store0.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -73.57807,
                    45.503334
                ]
            },
            "properties": {
                "id": 33,
                "name": "Magic University Games",
                "streetAddress": "3480 McTavish St",
                "city": "Montreal",
                "province": "Quebec",
                "phoneNumber": "(514) 555-0133",
                "imageAddress": "../img/stores/store33.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -75.724687,
                    45.269498
                ]
            },
            "properties": {
                "id": 19,
                "name": "The Robot's Cellar",
                "streetAddress": "702 Beatrice Dr",
                "city": "Nepean",
                "province": "Ontario",
                "phoneNumber": "(613) 555-0119",
                "imageAddress": "../img/stores/store19.jpg",
                "domesticGames": true,
                "importGames": true,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -79.430641,
                    43.642849
                ]
            },
            "properties": {
                "id": 28,
                "name": "Noble Games",
                "streetAddress": "24 Noble St Unit 111",
                "city": "Toronto",
                "province": "Ontario",
                "phoneNumber": "(416) 555-0128",
                "imageAddress": "../img/stores/store28.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": false
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -75.724794,
                    45.403426
                ]
            },
            "properties": {
                "id": 13,
                "name": "Good Move Games",
                "streetAddress": "1076 Wellington St. W",
                "city": "Ottawa",
                "province": "Ontario",
                "phoneNumber": "(753) 555-0113",
                "imageAddress": "../img/stores/store13.jpg",
                "domesticGames": true,
                "importGames": true,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -79.767372,
                    43.377319
                ]
            },
            "properties": {
                "id": 26,
                "name": "We the Meeple",
                "streetAddress": "850 Appleby Line",
                "city": "Burlington",
                "province": "Ontario",
                "phoneNumber": "(905) 555-0126",
                "imageAddress": "../img/stores/store26.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -78.865127,
                    43.899998
                ]
            },
            "properties": {
                "id": 48,
                "name": "The Game Box",
                "streetAddress": "3 William St W",
                "city": "Oshawa",
                "province": "Ontario",
                "phoneNumber": "(289) 555-0148",
                "imageAddress": "../img/stores/store48.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": false,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -106.664812,
                    52.157586
                ]
            },
            "properties": {
                "id": 34,
                "name": "The Wolf Den",
                "streetAddress": "405 Circle Dr",
                "city": "Saskatoon",
                "province": "Saskatchewan",
                "phoneNumber": "(306) 555-0134",
                "imageAddress": "../img/stores/store34.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": false,
                "cardGames": true,
                "roleplayingGames": false
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -76.481561,
                    44.232198
                ]
            },
            "properties": {
                "id": 10,
                "name": "Big House Games",
                "streetAddress": "51 Queen St",
                "city": "Kingston",
                "province": "Ontario",
                "phoneNumber": "(613) 555-0110",
                "imageAddress": "../img/stores/store10.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -123.356411,
                    48.414196
                ]
            },
            "properties": {
                "id": 23,
                "name": "Beacon Hill Games",
                "streetAddress": "301 Cook St",
                "city": "Victoria",
                "province": "British Columbia",
                "phoneNumber": "(250) 555-0123",
                "imageAddress": "../img/stores/store23.jpg",
                "domesticGames": true,
                "importGames": true,
                "miniatureGames": false,
                "cardGames": true,
                "roleplayingGames": false
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -97.133425,
                    49.864745
                ]
            },
            "properties": {
                "id": 14,
                "name": "Victory Point",
                "streetAddress": "568 Osborne St",
                "city": "Winnipeg",
                "province": "Manitoba",
                "phoneNumber": "(204) 555-0114",
                "imageAddress": "../img/stores/store14.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": false,
                "cardGames": true,
                "roleplayingGames": false
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -73.736081,
                    45.567421
                ]
            },
            "properties": {
                "id": 37,
                "name": "Guilde des Voleurs",
                "streetAddress": "1804 Blvd. le Corbusier",
                "city": "Laval",
                "province": "Quebec",
                "phoneNumber": "(450) 555-0137",
                "imageAddress": "../img/stores/store37.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": true,
                "cardGames": false,
                "roleplayingGames": false
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -80.493509,
                    43.451608
                ]
            },
            "properties": {
                "id": 29,
                "name": "Bell Tolls Games",
                "streetAddress": "250 King St W",
                "city": "Kitchener",
                "province": "Ontario",
                "phoneNumber": "(519) 555-0129",
                "imageAddress": "../img/stores/store29.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -79.41801,
                    43.68302
                ]
            },
            "properties": {
                "id": 25,
                "name": "6ix-Sided Games",
                "streetAddress": "501 St Clair Ave W",
                "city": "Toronto",
                "province": "Ontario",
                "phoneNumber": "(416) 555-0125",
                "imageAddress": "../img/stores/store25.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -79.83894,
                    43.23883
                ]
            },
            "properties": {
                "id": 6,
                "name": "Miniature Worlds",
                "streetAddress": "8 E 36th St",
                "city": "Hamilton",
                "province": "Ontario",
                "phoneNumber": "(905) 555-0106",
                "imageAddress": "../img/stores/store6.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": true,
                "cardGames": false,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -84.326397,
                    46.507369
                ]
            },
            "properties": {
                "id": 39,
                "name": "Quiet Nook Games",
                "streetAddress": "756 Queen St E",
                "city": "Sault Ste. Marie",
                "province": "Ontario",
                "phoneNumber": "(705) 555-0139",
                "imageAddress": "../img/stores/store39.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": false,
                "cardGames": true,
                "roleplayingGames": false
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -97.263041,
                    49.875533
                ]
            },
            "properties": {
                "id": 4,
                "name": "The Board and Peg",
                "streetAddress": "500 Moray St",
                "city": "Winnipeg",
                "province": "Manitoba",
                "phoneNumber": "(204) 555-0104",
                "imageAddress": "../img/stores/store4.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -75.706314,
                    45.404577
                ]
            },
            "properties": {
                "id": 24,
                "name": "Parliament Hobby & Toy",
                "streetAddress": "234 Lebreton St N",
                "city": "Ottawa",
                "province": "Ontario",
                "phoneNumber": "(753) 555-0124",
                "imageAddress": "../img/stores/store24.jpg",
                "domesticGames": true,
                "importGames": true,
                "miniatureGames": false,
                "cardGames": false,
                "roleplayingGames": false
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -123.107404,
                    49.280383
                ]
            },
            "properties": {
                "id": 9,
                "name": "So Fun City",
                "streetAddress": "526 Abbott St",
                "city": "Vancouver",
                "province": "British Columbia",
                "phoneNumber": "(604) 555-0109",
                "imageAddress": "../img/stores/store9.jpg",
                "domesticGames": true,
                "importGames": true,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -81.213545,
                    42.996491
                ]
            },
            "properties": {
                "id": 44,
                "name": "Gateway Game Shop",
                "streetAddress": "471 Nightingale Ave",
                "city": "London",
                "province": "Ontario",
                "phoneNumber": "(519) 555-0144",
                "imageAddress": "../img/stores/store44.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -66.650403,
                    45.955791
                ]
            },
            "properties": {
                "id": 40,
                "name": "Rabbitton Games",
                "streetAddress": "364 Victoria St",
                "city": "Fredericton",
                "province": "New Brunswick",
                "phoneNumber": "(506) 555-0140",
                "imageAddress": "../img/stores/store40.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": false,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -79.798584,
                    43.322783
                ]
            },
            "properties": {
                "id": 31,
                "name": "Man the Games",
                "streetAddress": "1407 Lakeshore Rd",
                "city": "Burlington",
                "province": "Ontario",
                "phoneNumber": "(905) 555-0131",
                "imageAddress": "../img/stores/store31.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -79.378219,
                    43.659931
                ]
            },
            "properties": {
                "id": 20,
                "name": "Top Dex Card Shop",
                "streetAddress": "55 Gerrard St E",
                "city": "Toronto",
                "province": "Ontario",
                "phoneNumber": "(416) 555-0120",
                "imageAddress": "../img/stores/store20.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": false,
                "cardGames": true,
                "roleplayingGames": false
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -122.975596,
                    49.249551
                ]
            },
            "properties": {
                "id": 5,
                "name": "GiGi's Game Shop",
                "streetAddress": "3905 Norland Ave",
                "city": "Burnaby",
                "province": "British Columbia",
                "phoneNumber": "(604) 555-0105",
                "imageAddress": "../img/stores/store5.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": false,
                "cardGames": true,
                "roleplayingGames": false
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -75.677623,
                    45.490911
                ]
            },
            "properties": {
                "id": 12,
                "name": "Rouler+Bouger",
                "streetAddress": "655 Bd Saint-Ren\xe9 O",
                "city": "Gatineau",
                "province": "Quebec",
                "phoneNumber": "(819) 555-0112",
                "imageAddress": "../img/stores/store12.jpg",
                "domesticGames": true,
                "importGames": true,
                "miniatureGames": false,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -80.264087,
                    43.145033
                ]
            },
            "properties": {
                "id": 30,
                "name": "Brant Games",
                "streetAddress": "187 Market St",
                "city": "Brantford",
                "province": "Ontario",
                "phoneNumber": "(519) 555-0130",
                "imageAddress": "../img/stores/store30.jpg",
                "domesticGames": true,
                "importGames": true,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -80.232651,
                    43.521155
                ]
            },
            "properties": {
                "id": 27,
                "name": "Academic Games & Toys",
                "streetAddress": "502 Edinburgh Rd S",
                "city": "Guelph",
                "province": "Ontario",
                "phoneNumber": "(519) 555-0127",
                "imageAddress": "../img/stores/store27.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -113.477455,
                    53.512612
                ]
            },
            "properties": {
                "id": 17,
                "name": "Dice Guys",
                "streetAddress": "9618 76 Ave NW",
                "city": "Edmonton",
                "province": "Alberta",
                "phoneNumber": "(780) 555-0117",
                "imageAddress": "../img/stores/store17.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -114.081083,
                    51.044259
                ]
            },
            "properties": {
                "id": 3,
                "name": "Magic Mountain Games",
                "streetAddress": "830 10 Ave SW",
                "city": "Calgary",
                "province": "Alberta",
                "phoneNumber": "(403) 555-0103",
                "imageAddress": "../img/stores/store3.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": false,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -79.86343,
                    43.250011
                ]
            },
            "properties": {
                "id": 8,
                "name": "Board Game Renaissance",
                "streetAddress": "100 Ferguson Ave S",
                "city": "Hamilton",
                "province": "Ontario",
                "phoneNumber": "(905) 555-0108",
                "imageAddress": "../img/stores/store8.jpg",
                "domesticGames": true,
                "importGames": true,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -83.004302,
                    42.300199
                ]
            },
            "properties": {
                "id": 45,
                "name": "Many Sisters Toys & Games",
                "streetAddress": "1421 Tecumseh Rd E",
                "city": "Windsor",
                "province": "Ontario",
                "phoneNumber": "(519) 555-0145",
                "imageAddress": "../img/stores/store45.jpg",
                "domesticGames": true,
                "importGames": true,
                "miniatureGames": false,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -89.936015,
                    48.436324
                ]
            },
            "properties": {
                "id": 36,
                "name": "Storm Giant Games",
                "streetAddress": "200 Van Norman St",
                "city": "Thunder Bay",
                "province": "Ontario",
                "phoneNumber": "(807) 555-0136",
                "imageAddress": "../img/stores/store36.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": true,
                "cardGames": false,
                "roleplayingGames": false
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -113.814881,
                    52.285798
                ]
            },
            "properties": {
                "id": 35,
                "name": "Highland Games",
                "streetAddress": "6320 Gaetz Ave",
                "city": "Red Deer",
                "province": "Alberta",
                "phoneNumber": "(403) 555-0135",
                "imageAddress": "../img/stores/store35.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": true,
                "cardGames": true,
                "roleplayingGames": true
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "point",
                "coordinates": [
                    -75.656186,
                    45.438113
                ]
            },
            "properties": {
                "id": 32,
                "name": "Janeville Games",
                "streetAddress": "347 Montr\xe9al Rd",
                "city": "Vanier",
                "province": "Ontario",
                "phoneNumber": "(613) 555-0132",
                "imageAddress": "../img/stores/store32.jpg",
                "domesticGames": true,
                "importGames": false,
                "miniatureGames": true,
                "cardGames": false,
                "roleplayingGames": true
            }
        }
    ]
};
const booleanTrue = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#064e3b" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>`;
const booleanFalse = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#c62828" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg>`;
// ---- MAP ---- //
mapboxgl.accessToken = "pk.eyJ1IjoianJ1ZnUiLCJhIjoiY2wyNHl6bnhzMGsweTNpbXgzZWZta2JkZSJ9.VAagCgqtyE8OyCbdRj6ocQ";
const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v10",
    center: [
        -79.55,
        43.45
    ],
    zoom: 8
});
map.on("load", ()=>{
    // ---- FUNCTIONS ---- //
    function userBbox(sortedStores, storeIdentifier, userLocation) {
        const lats = [
            sortedStores.features[storeIdentifier].geometry.coordinates[1],
            userLocation[1]
        ];
        const lons = [
            sortedStores.features[storeIdentifier].geometry.coordinates[0],
            userLocation[0]
        ];
        const sortedLons = lons.sort((a, b)=>{
            if (a > b) return 1;
            if (a.distance < b.distance) return -1;
            return 0;
        });
        const sortedLats = lats.sort((a, b)=>{
            if (a > b) return 1;
            if (a.distance < b.distance) return -1;
            return 0;
        });
        return [
            [
                sortedLons[0],
                sortedLats[0]
            ],
            [
                sortedLons[1],
                sortedLats[1]
            ]
        ];
    }
    function searchBbox(sortedStores, storeIdentifier, searchResult) {
        const lats = [
            sortedStores.features[storeIdentifier].geometry.coordinates[1],
            searchResult.coordinates[1]
        ];
        const lons = [
            sortedStores.features[storeIdentifier].geometry.coordinates[0],
            searchResult.coordinates[0]
        ];
        const sortedLons = lons.sort((a, b)=>{
            if (a > b) return 1;
            if (a.distance < b.distance) return -1;
            return 0;
        });
        const sortedLats = lats.sort((a, b)=>{
            if (a > b) return 1;
            if (a.distance < b.distance) return -1;
            return 0;
        });
        return [
            [
                sortedLons[0],
                sortedLats[0]
            ],
            [
                sortedLons[1],
                sortedLats[1]
            ]
        ];
    }
    //------ ADD SOURCE ------//
    map.addSource("stores", {
        type: "geojson",
        data: stores,
        cluster: true,
        clusterMaxZoom: 8,
        clusterRadius: 65
    });
    //------ GEOCODER/SEARCH BAR ------ //
    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: true,
        marker: {
            color: "#047857",
            scale: 1.5
        },
        bbox: [
            -140.99778,
            41.6751050889,
            -52.6480987209,
            83.23324
        ]
    });
    map.addControl(geocoder, "top-right");
    geocoder.on("result", (event)=>{
        const searchResult = event.result.geometry;
        const options = {
            units: "kilometers"
        };
        for (const store of stores.features)store.properties.distance = turf.distance(searchResult, store.geometry.coordinates, options);
        stores.features.sort((a, b)=>{
            if (a.properties.distance > b.properties.distance) return 1;
            if (a.properties.distance < b.properties.distance) return -1;
            return 0;
        });
        const listings = document.getElementById("listings");
        while(listings.firstChild)listings.removeChild(listings.firstChild);
        buildLocationList(stores);
        const activeListing = document.getElementById(`listing-${stores.features[0].properties.id}`);
        activeListing.classList.add("active");
        const bbox = searchBbox(stores, 0, searchResult);
        map.fitBounds(bbox, {
            padding: 100
        });
        createPopUp(stores.features[0]);
    });
    // ------CENTER ON USER------ //
    const geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: false
    });
    map.addControl(geolocate);
    geolocate.on("geolocate", function(e) {
        const lon = e.coords.longitude;
        const lat = e.coords.latitude;
        const userLocation = [
            lon,
            lat
        ];
        const options = {
            units: "kilometers"
        };
        for (const store of stores.features)store.properties.distance = turf.distance(userLocation, store.geometry.coordinates, options);
        stores.features.sort((a, b)=>{
            if (a.properties.distance > b.properties.distance) return 1;
            if (a.properties.distance < b.properties.distance) return -1;
            return 0;
        });
        const listings = document.getElementById("listings");
        while(listings.firstChild)listings.removeChild(listings.firstChild);
        buildLocationList(stores);
        const activeListing = document.getElementById(`listing-${stores.features[0].properties.id}`);
        activeListing.classList.add("active");
        const bbox = userBbox(stores, 0, userLocation);
        map.fitBounds(bbox, {
            padding: 100
        });
        createPopUp(stores.features[0]);
    });
    // ------MAP LAYERS------//
    map.addLayer({
        id: "unclustered-point",
        type: "circle",
        source: "stores",
        filter: [
            "!",
            [
                "has",
                "point_count"
            ]
        ],
        paint: {
            "circle-color": "#047857",
            "circle-radius": 4,
            "circle-stroke-width": 1,
            "circle-stroke-color": "#fff"
        }
    });
    map.addLayer({
        id: "clusters",
        type: "circle",
        source: "stores",
        filter: [
            "has",
            "point_count"
        ],
        paint: {
            "circle-color": [
                "step",
                [
                    "get",
                    "point_count"
                ],
                "#059669",
                10,
                "#047857",
                25,
                "#065f46", 
            ],
            "circle-radius": [
                "step",
                [
                    "get",
                    "point_count"
                ],
                20,
                10,
                30,
                25,
                40, 
            ]
        }
    });
    map.addLayer({
        id: "cluster-count",
        type: "symbol",
        source: "stores",
        filter: [
            "has",
            "point_count"
        ],
        layout: {
            "text-field": "{point_count_abbreviated}",
            "text-font": [
                "DIN Offc Pro Medium",
                "Arial Unicode MS Bold"
            ],
            "text-size": 16
        },
        paint: {
            "text-color": "#ffffff"
        }
    });
    map.on("click", "clusters", (event)=>{
        const features = map.queryRenderedFeatures(event.point, {
            layers: [
                "clusters"
            ]
        });
        const clusterId = features[0].properties.cluster_id;
        map.getSource("stores").getClusterExpansionZoom(clusterId, (err, zoom)=>{
            if (err) return;
            map.easeTo({
                center: features[0].geometry.coordinates,
                zoom: zoom
            });
        });
    });
    map.on("click", (event)=>{
        const features = map.queryRenderedFeatures(event.point, {
            layers: [
                "unclustered-point"
            ]
        });
        if (!features.length) return;
        const clickedPoint = features[0];
        flyToStore(clickedPoint);
        createPopUp(clickedPoint);
        const activeItem = document.getElementsByClassName("active");
        if (activeItem[0]) activeItem[0].classList.remove("active");
        const listing = document.getElementById(`listing-${clickedPoint.properties.id}`);
        try {
            listing.classList.add("active");
        } catch  {}
    });
    function buildLocationList(stores) {
        let limit = 8;
        for (const store of stores.features.slice(0, limit)){
            const listings = document.getElementById("listings");
            const listing = listings.appendChild(document.createElement("div"));
            listing.id = `listing-${store.properties.id}`;
            listing.className = "item";
            const link = listing.appendChild(document.createElement("a"));
            link.href = "#";
            link.className = "title";
            link.id = `link-${store.properties.id}`;
            link.innerHTML = `${store.properties.name}`;
            const details = listing.appendChild(document.createElement("div"));
            details.innerHTML = `
        ${store.properties.streetAddress} - ${store.properties.city}, ${store.properties.province}
        `;
            if (store.properties.distance) {
                const roundedDistance = Math.round(store.properties.distance * 100) / 100;
                details.innerHTML += `<div><strong>${roundedDistance} km away</strong></div>`;
            }
            link.addEventListener("click", function() {
                for (const feature of stores.features)if (this.id === `link-${feature.properties.id}`) {
                    flyToStore(feature);
                    createPopUp(feature);
                }
                const activeItem = document.getElementsByClassName("active");
                if (activeItem[0]) activeItem[0].classList.remove("active");
                this.parentNode.classList.add("active");
            });
        }
    }
    function flyToStore(currentFeature) {
        map.flyTo({
            center: currentFeature.geometry.coordinates,
            zoom: 12
        });
    }
    function createPopUp(currentFeature) {
        const storeName = currentFeature.properties.name;
        const storeImage = currentFeature.properties.imageAddress;
        const storePhone = currentFeature.properties.phoneNumber;
        const storeStreet = currentFeature.properties.streetAddress;
        const storeAddress = currentFeature.properties.city + ", " + currentFeature.properties.province;
        const domesticGames = currentFeature.properties.domesticGames === true ? `${booleanTrue}` : `${booleanFalse}`;
        const importGames = currentFeature.properties.importGames === true ? `${booleanTrue}` : `${booleanFalse}`;
        const miniatureGames = currentFeature.properties.miniatureGames === true ? `${booleanTrue}` : `${booleanFalse}`;
        const cardGames = currentFeature.properties.cardGames === true ? `${booleanTrue}` : `${booleanFalse}`;
        const roleplayingGames = currentFeature.properties.roleplayingGames === true ? `${booleanTrue}` : `${booleanFalse}`;
        const popUps = document.getElementsByClassName("mapboxgl-popup");
        if (popUps[0]) popUps[0].remove();
        const popup = new mapboxgl.Popup().setLngLat(currentFeature.geometry.coordinates).setHTML(`
        <div class="popup">
        
          <div class="popup_storePic"> 
            <img src=${storeImage}>
          </div>
          
          <div class="popup_storeDetails">
            <p>${storeName}</p>
            <p>${storePhone}</p>
            <p>${storeStreet}</p>
            <p>${storeAddress}</p>
          </div>

          <div class="popup_storeDetails_rule">
            <hr>
          </div>

          <div class="popup_storeSpecialties">
              <p>Domestic Games: </p>
              <p>Import Games:</p>
              <p>Miniature Games:</p>
              <p>Card Games:</p>
              <p>Roleplaying Games:</p>
          </div>
        
          <div class="popup_storeSpecialties_boolean">
              <p>${domesticGames}</p>
              <p>${importGames}</p>
              <p>${miniatureGames}</p>
              <p>${cardGames}</p>
              <p>${roleplayingGames}</p>
          </div>
          
        </div>
      `).addTo(map);
    }
});

},{}]},["iGyo7","d4ysq"], "d4ysq", "parcelRequire089b")

//# sourceMappingURL=browse.97a18ac0.js.map
