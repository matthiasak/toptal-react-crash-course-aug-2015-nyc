(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// es6 polyfills, powered by babel
'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _mithrilSlideEngine = require('mithril-slide-engine');

require("babel/polyfill");

var fetch = require('./fetcher');

window.addEventListener('load', app);

var frame = function frame(_src, title) {
    var src = _mithrilSlideEngine.m.prop('');

    if (_src.indexOf('.js') !== -1) {
        _mithrilSlideEngine.m.startComputation();
        fetch(_src).then(function (r) {
            return r.text();
        }).then(function (scriptText) {
            return src('./Arbiter-frame/#' + escape(scriptText));
        }).then(function (_) {
            return _mithrilSlideEngine.m.endComputation();
        })['catch'](function (e) {
            return console.log(e);
        });
    }

    return {
        view: function view() {
            return (0, _mithrilSlideEngine.m)('div', title && (0, _mithrilSlideEngine.m)('.hr', title), (0, _mithrilSlideEngine.m)('iframe', { src: src() }));
        }
    };
};

var home = {
    controller: function controller() {},
    view: function view() {
        return (0, _mithrilSlideEngine.m)('.home', [(0, _mithrilSlideEngine.m)('.hr', 'This session:'), (0, _mithrilSlideEngine.m)('h1', 'Toptal\'s React Crash Course', (0, _mithrilSlideEngine.m)('br'), 'NYC, Aug 2015'), (0, _mithrilSlideEngine.m)('.hr', 'With this guy'), (0, _mithrilSlideEngine.m)('img', { src: './images/me.gif' }), (0, _mithrilSlideEngine.m)('.hr', [(0, _mithrilSlideEngine.m)('a', { href: 'mkeas.org' }, 'mkeas.org'), ' • ', (0, _mithrilSlideEngine.m)('a', { href: 'twitter.com/matthiasak' }, '@matthiasak')])]);
    }
};

var recap = function recap(bullets, title) {
    return (0, _mithrilSlideEngine.m)('div', (0, _mithrilSlideEngine.m)('.hr', title || 'Let\'s Recap'), (0, _mithrilSlideEngine.m)('ul', bullets.map(function (bullet) {
        return (0, _mithrilSlideEngine.m)('li', bullet);
    })));
};

var buildTools = ['https://github.com/matthiasak/universal-js-boilerplate', 'https://github.com/christianalfoni/flux-react-boilerplate', 'https://github.com/petehunt/react-boilerplate', 'https://github.com/rackt/react-boilerplate', 'https://github.com/gaearon/react-hot-boilerplate', 'https://github.com/davezuko/react-redux-starter-kit', 'https://github.com/svenanders/isomorphic-react-boilerplate', 'https://github.com/koba04/react-boilerplate', 'https://github.com/christianalfoni/react-app-boilerplate', 'https://www.npmjs.com/package/es6-react-boilerplate'].map(function (u) {
    return (0, _mithrilSlideEngine.m)('a', { url: u }, u);
});

var pre = function pre(text, title) {
    return (0, _mithrilSlideEngine.m)('div', title && (0, _mithrilSlideEngine.m)('.hr', title), (0, _mithrilSlideEngine.m)('pre', (0, _mithrilSlideEngine.m)('code', text)));
};

var concepts = ['npm / package.json', 'browserify (vs webpack, etc)', 'npm scripts (vs. grunt/gulp/broccoli/etc)', 'transpilation (Babel, Traceur, etc)', 'polyfills (babel-polyfill --> core-js, es5 shim, etc', 'babel-register (running es6/7 in old\'ish node)', 'React DevTools'];

var solarSystem = function solarSystem() {
    return (0, _mithrilSlideEngine.m)('div', (0, _mithrilSlideEngine.m)('.hr', (0, _mithrilSlideEngine.m)('a', { href: 'http://shaunlebron.github.io/solar-system-of-js/' }, 'Solar System of JS')));
};

var antipattern = function antipattern() {
    return (0, _mithrilSlideEngine.m)('div', (0, _mithrilSlideEngine.m)('.hr', 'ES6 classes.. an antipattern?'), (0, _mithrilSlideEngine.m)('ul', (0, _mithrilSlideEngine.m)('li', 'just syntactic sugar for the old prototypal inheritance pattern'), (0, _mithrilSlideEngine.m)('li', 'no more mixins :-('), (0, _mithrilSlideEngine.m)('li', 'takes away the focus on functions and closures')));
};

var components0 = ['boilerplate React class (es6 destructuring, etc)', 'Not "Reactive", it\'s "Declarative"', 'virtual DOM representation', 'state (is async, and triggers re-renders)', 'props (are sync, and don\'t), spread operator'];

var components1 = [(0, _mithrilSlideEngine.m)('code', 'setState'), (0, _mithrilSlideEngine.m)('code', 'forceUpdate'), 'mount and unmount lifecycle methods'];

var components2 = [(0, _mithrilSlideEngine.m)('code', 'React.findDOMNode(this.refs.name)'), (0, _mithrilSlideEngine.m)('code', 'this.props.children')];

var questionsAboutLifecycles = ['How would you implement jQuery UI/Kendo/jQuery plugins on a React-managed element?', 'How would you have a component listen on mouseMove or scroll, and stop when it is removed from the screen?'];

var notes1 = ['React event callbacks are currently (v0.3.X) **NOT** bound to the object, so we must do that manually', 'React virtual events are "recycled" quickly, so grab the values immediately', 'React has some global methods (check the API/docs for discussion)', 'JSX has tricky naming: DOM events, className, htmlFor, setInnerHTMLDangerously'];

var links = [['https://egghead.io/lessons/react-react-in-7-minutes', 'React in 7 minutes'], ['https://vimeo.com/130921996', 'React components review, Component event handlers, lifecycle methods, state vs props, PropTypes'], ['https://facebook.github.io/react/docs/reusable-components.html#prop-validation'], ['http://ricostacruz.com/cheatsheets/react.html', 'Cheatsheet'], ['https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi', 'DevTools Plugin'], ['http://react.parts/web', 'awesome components resource'], ['https://github.com/ericclemmons/react-resolver', 'React Resolver'], ['http://material-ui.com/#/get-started', 'Material UI in React'], ['https://github.com/chenglou/react-motion', 'physics-driven animation for React components'], ['http://devdocs.io/react/', 'DevDocs.io documentation'], ['http://facebook.github.io/react/docs/getting-started.html'], ['http://calendar.perfplanet.com/2013/diff/', 'React\'s Diffing Algorithm: why it\'s fast'], ['https://github.com/facebook/immutable-js'], ['https://github.com/swannodette/mori'], ['https://www.npmjs.com/package/redux']];

var overview = ['Build tools & npm', 'ES6 concepts', 'React.Component methods', 'Refs and Children', 'lifecycle methods, defaults', 'Keys, Events, and Gotchas'];

var img = function img(url, title) {
    var style = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
    return (0, _mithrilSlideEngine.m)('div', title && (0, _mithrilSlideEngine.m)('.hr', title), (0, _mithrilSlideEngine.m)('img', { src: url, style: style }));
};

var refs = function refs(links) {
    return (0, _mithrilSlideEngine.m)('.home', (0, _mithrilSlideEngine.m)('.hr', 'References & Resources'), (0, _mithrilSlideEngine.m)('hr'), (0, _mithrilSlideEngine.m)('ul', links.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var href = _ref2[0];
        var text = _ref2[1];
        return (0, _mithrilSlideEngine.m)('li', (0, _mithrilSlideEngine.m)('a', { href: href }, text || href));
    })));
};

function app() {
    var e = (0, _mithrilSlideEngine.engine)();
    e.insert(home);
    e.insert(img('http://assets.toptal.io/assets/public/blocks/branding/logo/logo-9e7f5c5a7e212a6b2d5f8a2bb0ea3e1f.png', 'Top 3% of freelance developers.', { width: '40%' }));
    e.insert(img('http://theironyard.com/images/iron-yard-logo.svg', "Passion at the intersection of tech and education.", { width: '30%' }));
    e.insert(recap(overview, 'Overview'));
    e.insert(recap(buildTools, 'Build tools'));
    e.insert(recap(concepts, 'Concepts'));
    e.insert(pre(packageJSON, 'package.json / npm'));
    e.insert(solarSystem);
    e.insert(frame('./slides/transpile1.js'));
    e.insert(antipattern);
    e.insert(frame('./slides/decorators1.js'));
    e.insert(recap(components0, 'Up next...'));
    e.insert(frame('./slides/components0.js'));
    e.insert(recap(components1, 'Up next... React.Component methods'));
    e.insert(frame('./slides/components1.js'));
    e.insert(recap(components2, 'Up next... Refs and Children'));
    e.insert(frame('./slides/components2.js'));
    e.insert(pre(lifecycle, 'Up next... Lifecycle Methods, Defaults'));
    e.insert(frame('./slides/components3.js'));
    e.insert(recap(questionsAboutLifecycles, 'Questions for the room'));
    e.insert(recap([], 'Keys, Events, and Gotchas'));
    e.insert(img('http://calendar.perfplanet.com/wp-content/uploads/2013/12/vjeux/2.png', 'Keys and Diffing'));
    e.insert(frame('./slides/keys.js'));
    e.insert(recap(notes1, 'Notes'));
    e.insert(recap([], 'PropTypes'));
    e.insert(frame('./slides/proptypes.js'));
    e.insert(refs(links));
    e.render('html');
}

var packageJSON = '\n{\n  "name": "toptal-react-crash-course-aug-2015-nyc",\n  "version": "0.0.1",\n  "description": "React crash course at Viacom HQ on Time Square in NYC",\n  "author": "Matt Keas (@matthiasak)",\n  "license": "MIT",\n  "engines": {\n    "node": "^0.12.5"\n  },\n  "browser": {\n    "./js/fetcher/index.js": "./js/fetcher/browser.js"\n  },\n  "scripts": {\n    "build:css": "postcss -o ./dist/style.css scss/style.scss;",\n    "build:js-min": "browserify -e ./js/app-browserify.js -t [babelify --stage 1] | uglifyjs > ./dist/app-browserify.js",\n    "build": "npm run build:js-min & npm run build:css",\n    "watch:css": "chokidar-cmd -c \'npm run build:css\' -t ./scss/",\n    "watch:js": "watchify ./js/app-browserify.js -t [ babelify --stage 1 ] -o ./dist/app-browserify.js",\n    "watch": "npm run watch:css & npm run watch:js;",\n    "test": "mocha ./js/test/; echo \'----- tests done\'",\n    "server": "nodemon --watch . --ext js,jsx heroku-server.js & npm run watch",\n    "start": "npm run n heroku-server.js",\n    "s": "npm run start & npm run watch",\n    "n": "node  --use_strict --harmony --es_staging"\n  },\n  "dependencies": {\n    "babel": "^5.6.7",\n    "express": "^4.12.3",\n    "react": "^0.13.3",\n    ...\n  },\n  "devDependencies": {\n    "node-sass": "^0.9.2"\n    ...\n  }\n}\n\n';

var lifecycle = '\ninitializing --> will mount --> did mount --> will unmount --> did unmount\n            |\n            |\\\n            | \\\n            |  will receive props --> did receive props\n            |\n            \\\n             \\\n              should update? --> will update --> did update\n';

},{"./fetcher":2,"babel/polyfill":189,"mithril-slide-engine":3}],2:[function(require,module,exports){
'use strict';

require('whatwg-fetch');
module.exports = window.fetch;

},{"whatwg-fetch":5}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _mithrilResolver = require('mithril-resolver');

var qs = function qs(s) {
    var e = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];
    return s ? e.querySelector(s) : e;
};

var computable = function computable(fn) {
    return function () {
        _mithrilResolver.m.startComputation();
        var result = fn.apply(undefined, arguments);
        _mithrilResolver.m.endComputation();
        return result;
    };
};

var engine = function engine() {
    var parseHash = function parseHash() {
        return parseInt(window.location.hash.slice(1)) || 0;
    };

    var slides = _mithrilResolver.m.prop([]),
        active = _mithrilResolver.m.prop(parseHash()),
        prev = _mithrilResolver.m.prop();

    var insert = computable(function (val, index) {
        if (val instanceof Function) val = { view: val };
        if (!val.controller) val.controller = function () {};

        if (typeof index === 'undefined') index = slides().length;

        var i = slides();
        var first = i.slice(0, index);
        var third = i.slice(index + 1);

        return slides([].concat(_toConsumableArray(first), [val], _toConsumableArray(third)));
    });

    var remove = computable(function (index) {
        var i = slides();
        var first = i.slice(0, index);
        var second = i.slice(index + 1);

        return slides([].concat(_toConsumableArray(first), _toConsumableArray(second)));
    });

    var navigate = function navigate(index) {
        window.location.hash = '#' + index;
        prev(active());
        return active(index);
    };

    var LEFT = 37,
        RIGHT = 39;

    var events = {
        onkeyup: function onkeyup(e) {
            var keyCode = e.keyCode;

            if (LEFT === keyCode) {
                var next = active() - 1;
                if (next < 0) next = slides().length - 1;
                navigate(next);
            } else if (RIGHT === keyCode) {
                var next = active() + 1;
                if (next > slides().length - 1) next = 0;
                navigate(next);
            }
        }
    };

    var config = function config(element, init, vdom) {
        if (active() === prev()) return;
    };

    var hashChanger = function hashChanger() {
        return window.addEventListener('hashchange', function () {
            var hash = window.location.hash;
            var slide = parseInt(hash.slice(1));
            if (slide !== NaN) {
                navigate(slide);
            }
        });
    };

    var valueOf = function valueOf(a) {
        return a();
    };

    var view = function view(ctrl) {
        var a = active(),
            s = slides(),
            sel = active() < prev() && 'from-left' || active() > prev() && 'from-right' || '';

        var _slide = (0, _mithrilResolver.m)('div', { key: a, className: sel }, s[a]);

        return (0, _mithrilResolver.m)('html', { config: config }, [(0, _mithrilResolver.m)('head', [(0, _mithrilResolver.m)('title', 'something'), (0, _mithrilResolver.m)('meta', { name: 'viewport', content: "width=device-width, initial-scale=1.0" }), (0, _mithrilResolver.m)('link', { href: './style.css', type: 'text/css', rel: 'stylesheet' })]), (0, _mithrilResolver.m)('body', events, [(0, _mithrilResolver.m)('.slides', _slide)])]);
    };

    var render = function render() {
        return (hashChanger(), _mithrilResolver.m.mount(qs.apply(undefined, arguments), { view: view }));
    };

    return { slides: slides, insert: insert, remove: remove, navigate: navigate, render: render };
};

exports.engine = engine;
exports.resolver = _mithrilResolver.resolver;
exports.container = _mithrilResolver.container;
exports.m = _mithrilResolver.m;


},{"mithril-resolver":4}],4:[function(require,module,exports){
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var m = (function app(window, undefined) {
    "use strict";
    var VERSION = "v0.2.1";
    function isFunction(object) {
        return typeof object === "function";
    }
    function isObject(object) {
        return type.call(object) === "[object Object]";
    }
    function isString(object) {
        return type.call(object) === "[object String]";
    }
    var isArray = Array.isArray || function (object) {
        return type.call(object) === "[object Array]";
    };
    var type = ({}).toString;
    var parser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[.+?\])/g,
        attrParser = /\[(.+?)(?:=("|'|)(.*?)\2)?\]/;
    var voidElements = /^(AREA|BASE|BR|COL|COMMAND|EMBED|HR|IMG|INPUT|KEYGEN|LINK|META|PARAM|SOURCE|TRACK|WBR)$/;
    var noop = function noop() {};

    // caching commonly used variables
    var $document, $location, $requestAnimationFrame, $cancelAnimationFrame;

    // self invoking function needed because of the way mocks work
    function initialize(window) {
        $document = window.document;
        $location = window.location;
        $cancelAnimationFrame = window.cancelAnimationFrame || window.clearTimeout;
        $requestAnimationFrame = window.requestAnimationFrame || window.setTimeout;
    }

    initialize(window);

    m.version = function () {
        return VERSION;
    };

    function slice(x) {
        return Array.prototype.slice.call(x);
    }

    function getAttributes(node) {
        return slice(node.attributes).reduce(function (a, v) {
            if (v.name === 'class') {
                a.className = a["class"];
            } else {
                a[v.name] = v.value;
            }
            return a;
        }, {});
    }

    function rebuild(node) {
        if (node instanceof NodeList) {
            return Array.prototype.slice.call(node).map(rebuild);
        } else if (node instanceof Text) {
            return {
                children: [String(node.textContent)],
                nodes: [node],
                attrs: {},
                intact: true
            };
        } else {
            nodeCache.push(node);
            var r = {
                tag: node.tagName.toLowerCase(),
                attrs: getAttributes(node),
                children: rebuild(node.childNodes),
                nodes: [node],
                intact: true
            };
            r.children.nodes = Array.prototype.slice.call(node.childNodes);
            return r;
        }
    }

    /**
     * @typedef {String} Tag
     * A string that looks like -> div.classname#id[param=one][param2=two]
     * Which describes a DOM node
     */

    /**
     *
     * @param {Tag} The DOM node tag
     * @param {Object=[]} optional key-value pairs to be mapped to DOM attrs
     * @param {...mNode=[]} Zero or more Mithril child nodes. Can be an array, or splat (optional)
     *
     */
    function m(tag, pairs) {
        for (var args = [], i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
        if (isObject(tag)) return parameterize(tag, args);
        var hasAttrs = pairs != null && isObject(pairs) && !("tag" in pairs || "view" in pairs || "subtree" in pairs);
        var attrs = hasAttrs ? pairs : {};
        var classAttrName = "class" in attrs ? "class" : "className";
        var cell = { tag: "div", attrs: {} };
        var match,
            classes = [];
        if (!isString(tag)) throw new Error("selector in m(selector, attrs, children) should be a string");
        while ((match = parser.exec(tag)) != null) {
            if (match[1] === "" && match[2]) cell.tag = match[2];else if (match[1] === "#") cell.attrs.id = match[2];else if (match[1] === ".") classes.push(match[2]);else if (match[3][0] === "[") {
                var pair = attrParser.exec(match[3]);
                cell.attrs[pair[1]] = pair[3] || (pair[2] ? "" : true);
            }
        }

        var children = hasAttrs ? args.slice(1) : args;
        if (children.length === 1 && isArray(children[0])) {
            cell.children = children[0];
        } else {
            cell.children = children;
        }

        for (var attrName in attrs) {
            if (attrs.hasOwnProperty(attrName)) {
                if (attrName === classAttrName && attrs[attrName] != null && attrs[attrName] !== "") {
                    classes.push(attrs[attrName]);
                    cell.attrs[attrName] = ""; //create key in correct iteration order
                } else cell.attrs[attrName] = attrs[attrName];
            }
        }
        if (classes.length) cell.attrs[classAttrName] = classes.join(" ");

        return cell;
    }
    function forEach(list, f) {
        if (list === undefined) list = [];

        for (var i = 0; i < list.length && !f(list[i], i++);) {}
    }
    function forKeys(list, f) {
        forEach(list, function (attrs, i) {
            return (attrs = attrs && attrs.attrs) && attrs.key != null && f(attrs, i);
        });
    }
    // This function was causing deopts in Chrome.
    function dataToString(data) {
        //data.toString() might throw or return null if data is the return value of Console.log in Firefox (behavior depends on version)
        try {
            if (data == null || data.toString() == null) return "";
        } catch (e) {
            return "";
        }
        return data;
    }
    // This function was causing deopts in Chrome.
    function injectTextNode(parentElement, first, index, data) {
        try {
            insertNode(parentElement, first, index);
            first.nodeValue = data;
        } catch (e) {} //IE erroneously throws error when appending an empty text node after a null
    }

    function flatten(list) {
        //recursively flatten array
        for (var i = 0; i < list.length; i++) {
            if (isArray(list[i])) {
                list = list.concat.apply([], list);
                //check current index again and flatten until there are no more nested arrays at that index
                i--;
            }
        }
        return list;
    }

    function insertNode(parentElement, node, index) {
        parentElement.insertBefore(node, parentElement.childNodes[index] || null);
    }

    var DELETION = 1,
        INSERTION = 2,
        MOVE = 3;

    function handleKeysDiffer(data, existing, cached, parentElement) {
        forKeys(data, function (key, i) {
            existing[key = key.key] = existing[key] ? {
                action: MOVE,
                index: i,
                from: existing[key].index,
                element: cached.nodes[existing[key].index] || $document.createElement("div")
            } : { action: INSERTION, index: i };
        });
        var actions = [];
        for (var prop in existing) actions.push(existing[prop]);
        var changes = actions.sort(sortChanges),
            newCached = new Array(cached.length);
        newCached.nodes = cached.nodes.slice();

        forEach(changes, function (change) {
            var index = change.index;
            if (change.action === DELETION) {
                clear(cached[index].nodes, cached[index]);
                newCached.splice(index, 1);
            }
            if (change.action === INSERTION) {
                var dummy = $document.createElement("div");
                dummy.key = data[index].attrs.key;
                insertNode(parentElement, dummy, index);
                newCached.splice(index, 0, {
                    attrs: { key: data[index].attrs.key },
                    nodes: [dummy]
                });
                newCached.nodes[index] = dummy;
            }

            if (change.action === MOVE) {
                var changeElement = change.element;
                var maybeChanged = parentElement.childNodes[index];
                if (maybeChanged !== changeElement && changeElement !== null) {
                    parentElement.insertBefore(changeElement, maybeChanged || null);
                }
                newCached[index] = cached[change.from];
                newCached.nodes[index] = changeElement;
            }
        });

        return newCached;
    }

    function diffKeys(data, cached, existing, parentElement) {
        var keysDiffer = data.length !== cached.length;
        if (!keysDiffer) {
            forKeys(data, function (attrs, i) {
                var cachedCell = cached[i];
                return keysDiffer = cachedCell && cachedCell.attrs && cachedCell.attrs.key !== attrs.key;
            });
        }

        return keysDiffer ? handleKeysDiffer(data, existing, cached, parentElement) : cached;
    }

    function diffArray(data, cached, nodes) {
        //diff the array itself

        //update the list of DOM nodes by collecting the nodes from each item
        forEach(data, function (_, i) {
            if (cached[i] != null) nodes.push.apply(nodes, cached[i].nodes);
        });
        //remove items from the end of the array if the new array is shorter than the old one. if errors ever happen here, the issue is most likely
        //a bug in the construction of the `cached` data structure somewhere earlier in the program
        forEach(cached.nodes, function (node, i) {
            if (node.parentNode != null && nodes.indexOf(node) < 0) clear([node], [cached[i]]);
        });
        if (data.length < cached.length) cached.length = data.length;
        cached.nodes = nodes;
    }

    function buildArrayKeys(data) {
        var guid = 0;
        forKeys(data, function () {
            forEach(data, function (attrs) {
                if ((attrs = attrs && attrs.attrs) && attrs.key == null) attrs.key = "__mithril__" + guid++;
            });
            return 1;
        });
    }

    function maybeRecreateObject(data, cached, dataAttrKeys) {
        //if an element is different enough from the one in cache, recreate it
        if (data.tag !== cached.tag || dataAttrKeys.sort().join() !== Object.keys(cached.attrs).sort().join() || data.attrs.id !== cached.attrs.id || data.attrs.key !== cached.attrs.key || m.redraw.strategy() === "all" && (!cached.configContext || cached.configContext.retain !== true) || m.redraw.strategy() === "diff" && cached.configContext && cached.configContext.retain === false) {
            if (cached.nodes.length) clear(cached.nodes);
            if (cached.configContext && isFunction(cached.configContext.onunload)) cached.configContext.onunload();
            if (cached.controllers) {
                forEach(cached.controllers, function (controller) {
                    if (controller.unload) controller.onunload({ preventDefault: noop });
                });
            }
        }
    }

    function getObjectNamespace(data, namespace) {
        return data.attrs.xmlns ? data.attrs.xmlns : data.tag === "svg" ? "http://www.w3.org/2000/svg" : data.tag === "math" ? "http://www.w3.org/1998/Math/MathML" : namespace;
    }

    function unloadCachedControllers(cached, views, controllers) {
        if (controllers.length) {
            cached.views = views;
            cached.controllers = controllers;
            forEach(controllers, function (controller) {
                if (controller.onunload && controller.onunload.$old) controller.onunload = controller.onunload.$old;
                if (pendingRequests && controller.onunload) {
                    var onunload = controller.onunload;
                    controller.onunload = noop;
                    controller.onunload.$old = onunload;
                }
            });
        }
    }

    function scheduleConfigsToBeCalled(configs, data, node, isNew, cached) {
        //schedule configs to be called. They are called after `build`
        //finishes running
        if (isFunction(data.attrs.config)) {
            var context = cached.configContext = cached.configContext || {};

            //bind
            configs.push(function () {
                return data.attrs.config.call(data, node, !isNew, context, cached);
            });
        }
    }

    function buildUpdatedNode(cached, data, editable, hasKeys, namespace, views, configs, controllers) {
        var node = cached.nodes[0];
        if (hasKeys) setAttributes(node, data.tag, data.attrs, cached.attrs, namespace);
        cached.children = build(node, data.tag, undefined, undefined, data.children, cached.children, false, 0, data.attrs.contenteditable ? node : editable, namespace, configs);
        cached.nodes.intact = true;

        if (controllers.length) {
            cached.views = views;
            cached.controllers = controllers;
        }

        return node;
    }

    function handleNonexistentNodes(data, parentElement, index) {
        var nodes;
        if (data.$trusted) {
            nodes = injectHTML(parentElement, index, data);
        } else {
            nodes = [$document.createTextNode(data)];
            if (!parentElement.nodeName.match(voidElements)) insertNode(parentElement, nodes[0], index);
        }

        var cached = typeof data === "string" || typeof data === "number" || typeof data === "boolean" ? new data.constructor(data) : data;
        cached.nodes = nodes;
        return cached;
    }

    function reattachNodes(data, cached, parentElement, editable, index, parentTag) {
        var nodes = cached.nodes;
        if (!editable || editable !== $document.activeElement) {
            if (data.$trusted) {
                clear(nodes, cached);
                nodes = injectHTML(parentElement, index, data);
            }
            //corner case: replacing the nodeValue of a text node that is a child of a textarea/contenteditable doesn't work
            //we need to update the value property of the parent textarea or the innerHTML of the contenteditable element instead
            else if (parentTag === "textarea") {
                    parentElement.value = data;
                } else if (editable) {
                    editable.innerHTML = data;
                } else {
                    //was a trusted string
                    if (nodes[0].nodeType === 1 || nodes.length > 1) {
                        clear(cached.nodes, cached);
                        nodes = [$document.createTextNode(data)];
                    }
                    injectTextNode(parentElement, nodes[0], index, data);
                }
        }
        cached = new data.constructor(data);
        cached.nodes = nodes;
        return cached;
    }

    function handleText(cached, data, index, parentElement, shouldReattach, editable, parentTag) {
        //handle text nodes
        return !cached.nodes || cached.nodes.length === 0 ? handleNonexistentNodes(data, parentElement, index) : cached.valueOf() !== data.valueOf() || shouldReattach === true ? reattachNodes(data, cached, parentElement, editable, index, parentTag) : (cached.nodes.intact = true, cached);
    }

    function getSubArrayCount(item) {
        if (item.$trusted) {
            //fix offset of next element if item was a trusted string w/ more than one html element
            //the first clause in the regexp matches elements
            //the second clause (after the pipe) matches text nodes
            var match = item.match(/<[^\/]|\>\s*[^<]/g);
            if (match != null) return match.length;
        } else if (isArray(item)) {
            return item.length;
        }
        return 1;
    }

    function buildArray(data, cached, parentElement, index, parentTag, shouldReattach, editable, namespace, configs) {
        data = flatten(data);
        var nodes = [],
            intact = cached.length === data.length,
            subArrayCount = 0;

        //keys algorithm: sort elements without recreating them if keys are present
        //1) create a map of all existing keys, and mark all for deletion
        //2) add new keys to map and mark them for addition
        //3) if key exists in new list, change action from deletion to a move
        //4) for each key, handle its corresponding action as marked in previous steps
        var existing = {},
            shouldMaintainIdentities = false;
        forKeys(cached, function (attrs, i) {
            shouldMaintainIdentities = true;
            existing[cached[i].attrs.key] = { action: DELETION, index: i };
        });

        buildArrayKeys(data);
        if (shouldMaintainIdentities) cached = diffKeys(data, cached, existing, parentElement);
        //end key algorithm

        var cacheCount = 0;
        //faster explicitly written
        for (var i = 0, len = data.length; i < len; i++) {
            //diff each item in the array
            var item = build(parentElement, parentTag, cached, index, data[i], cached[cacheCount], shouldReattach, index + subArrayCount || subArrayCount, editable, namespace, configs);

            if (item !== undefined) {
                intact = intact && item.nodes.intact;
                subArrayCount += getSubArrayCount(item);
                cached[cacheCount++] = item;
            }
        }

        if (!intact) diffArray(data, cached, nodes);
        return cached;
    }

    function makeCache(data, cached, index, parentIndex, parentCache) {
        if (cached != null) {
            if (type.call(cached) === type.call(data)) return cached;

            if (parentCache && parentCache.nodes) {
                var offset = index - parentIndex,
                    end = offset + (isArray(data) ? data : cached.nodes).length;
                clear(parentCache.nodes.slice(offset, end), parentCache.slice(offset, end));
            } else if (cached.nodes) {
                clear(cached.nodes, cached);
            }
        }

        cached = new data.constructor();
        //if constructor creates a virtual dom element, use a blank object
        //as the base cached node instead of copying the virtual el (#277)
        if (cached.tag) cached = {};
        cached.nodes = [];
        return cached;
    }

    function constructNode(data, namespace) {
        return namespace === undefined ? data.attrs.is ? $document.createElement(data.tag, data.attrs.is) : $document.createElement(data.tag) : data.attrs.is ? $document.createElementNS(namespace, data.tag, data.attrs.is) : $document.createElementNS(namespace, data.tag);
    }

    function constructAttrs(data, node, namespace, hasKeys) {
        return hasKeys ? setAttributes(node, data.tag, data.attrs, {}, namespace) : data.attrs;
    }

    function constructChildren(data, node, cached, editable, namespace, configs) {
        return data.children != null && data.children.length > 0 ? build(node, data.tag, undefined, undefined, data.children, cached.children, true, 0, data.attrs.contenteditable ? node : editable, namespace, configs) : data.children;
    }

    function reconstructCached(data, attrs, children, node, namespace, views, controllers) {
        var cached = { tag: data.tag, attrs: attrs, children: children, nodes: [node] };
        unloadCachedControllers(cached, views, controllers);
        if (cached.children && !cached.children.nodes) cached.children.nodes = [];
        //edge case: setting value on <select> doesn't work before children exist, so set it again after children have been created
        if (data.tag === "select" && "value" in data.attrs) setAttributes(node, data.tag, { value: data.attrs.value }, {}, namespace);
        return cached;
    }

    function getController(views, view, cachedControllers, controller) {
        var controllerIndex = m.redraw.strategy() === "diff" && views ? views.indexOf(view) : -1;
        return controllerIndex > -1 ? cachedControllers[controllerIndex] : typeof controller === "function" ? new controller() : {};
    }

    function updateLists(views, controllers, view, controller) {
        if (controller.onunload != null) unloaders.push({ controller: controller, handler: controller.onunload });
        views.push(view);
        controllers.push(controller);
    }

    function checkView(data, view, cached, cachedControllers, controllers, views) {
        var controller = getController(cached.views, view, cachedControllers, data.controller);
        //Faster to coerce to number and check for NaN
        var key = +(data && data.attrs && data.attrs.key);
        data = pendingRequests === 0 || forcing || cachedControllers && cachedControllers.indexOf(controller) > -1 ? data.view(controller) : { tag: "placeholder" };
        if (data.subtree === "retain") return cached;
        if (key === key) (data.attrs = data.attrs || {}).key = key;
        updateLists(views, controllers, view, controller);
        return data;
    }

    function markViews(data, cached, views, controllers) {
        var cachedControllers = cached && cached.controllers;
        while (data.view != null) data = checkView(data, data.view.$original || data.view, cached, cachedControllers, controllers, views);
        return data;
    }

    function buildObject(data, cached, editable, parentElement, index, shouldReattach, namespace, configs) {
        var views = [],
            controllers = [];
        data = markViews(data, cached, views, controllers);
        if (!data.tag && controllers.length) throw new Error("Component template must return a virtual element, not an array, string, etc.");
        data.attrs = data.attrs || {};
        cached.attrs = cached.attrs || {};
        var dataAttrKeys = Object.keys(data.attrs);
        var hasKeys = dataAttrKeys.length > ("key" in data.attrs ? 1 : 0);
        maybeRecreateObject(data, cached, dataAttrKeys);
        if (!isString(data.tag)) return;
        var isNew = cached.nodes.length === 0;
        namespace = getObjectNamespace(data, namespace);
        var node;
        if (isNew) {
            node = constructNode(data, namespace);
            //set attributes first, then create children
            var attrs = constructAttrs(data, node, namespace, hasKeys);
            var children = constructChildren(data, node, cached, editable, namespace, configs);
            cached = reconstructCached(data, attrs, children, node, namespace, views, controllers);
        } else {
            node = buildUpdatedNode(cached, data, editable, hasKeys, namespace, views, configs, controllers);
        }
        if (isNew || shouldReattach === true && node != null) insertNode(parentElement, node, index);
        //schedule configs to be called. They are called after `build`
        //finishes running
        scheduleConfigsToBeCalled(configs, data, node, isNew, cached);
        return cached;
    }

    function build(parentElement, parentTag, parentCache, parentIndex, data, cached, shouldReattach, index, editable, namespace, configs) {
        //`build` is a recursive function that manages creation/diffing/removal
        //of DOM elements based on comparison between `data` and `cached`
        //the diff algorithm can be summarized as this:
        //1 - compare `data` and `cached`
        //2 - if they are different, copy `data` to `cached` and update the DOM
        //    based on what the difference is
        //3 - recursively apply this algorithm for every array and for the
        //    children of every virtual element

        //the `cached` data structure is essentially the same as the previous
        //redraw's `data` data structure, with a few additions:
        //- `cached` always has a property called `nodes`, which is a list of
        //   DOM elements that correspond to the data represented by the
        //   respective virtual element
        //- in order to support attaching `nodes` as a property of `cached`,
        //   `cached` is *always* a non-primitive object, i.e. if the data was
        //   a string, then cached is a String instance. If data was `null` or
        //   `undefined`, cached is `new String("")`
        //- `cached also has a `configContext` property, which is the state
        //   storage object exposed by config(element, isInitialized, context)
        //- when `cached` is an Object, it represents a virtual element; when
        //   it's an Array, it represents a list of elements; when it's a
        //   String, Number or Boolean, it represents a text node

        //`parentElement` is a DOM element used for W3C DOM API calls
        //`parentTag` is only used for handling a corner case for textarea
        //values
        //`parentCache` is used to remove nodes in some multi-node cases
        //`parentIndex` and `index` are used to figure out the offset of nodes.
        //They're artifacts from before arrays started being flattened and are
        //likely refactorable
        //`data` and `cached` are, respectively, the new and old nodes being
        //diffed
        //`shouldReattach` is a flag indicating whether a parent node was
        //recreated (if so, and if this node is reused, then this node must
        //reattach itself to the new parent)
        //`editable` is a flag that indicates whether an ancestor is
        //contenteditable
        //`namespace` indicates the closest HTML namespace as it cascades down
        //from an ancestor
        //`configs` is a list of config functions to run after the topmost
        //`build` call finishes running

        //there's logic that relies on the assumption that null and undefined
        //data are equivalent to empty strings
        //- this prevents lifecycle surprises from procedural helpers that mix
        //  implicit and explicit return statements (e.g.
        //  function foo() {if (cond) return m("div")}
        //- it simplifies diffing code
        data = dataToString(data);
        if (data.subtree === "retain") return cached;
        cached = makeCache(data, cached, index, parentIndex, parentCache);
        return isArray(data) ? buildArray(data, cached, parentElement, index, parentTag, shouldReattach, editable, namespace, configs) : data != null && isObject(data) ? buildObject(data, cached, editable, parentElement, index, shouldReattach, namespace, configs) : !isFunction(data) ? handleText(cached, data, index, parentElement, shouldReattach, editable, parentTag) : cached;
    }
    function sortChanges(a, b) {
        return a.action - b.action || a.index - b.index;
    }
    function setAttributes(node, tag, dataAttrs, cachedAttrs, namespace) {
        for (var attrName in dataAttrs) {
            var dataAttr = dataAttrs[attrName];
            var cachedAttr = cachedAttrs[attrName];
            if (!(attrName in cachedAttrs) || cachedAttr !== dataAttr) {
                cachedAttrs[attrName] = dataAttr;
                try {
                    //`config` isn't a real attributes, so ignore it
                    if (attrName === "config" || attrName === "key") continue;
                    //hook event handlers to the auto-redrawing system
                    else if (isFunction(dataAttr) && attrName.slice(0, 2) === "on") {
                            node[attrName] = autoredraw(dataAttr, node);
                        }
                        //handle `style: {...}`
                        else if (attrName === "style" && dataAttr != null && isObject(dataAttr)) {
                                for (var rule in dataAttr) {
                                    if (cachedAttr == null || cachedAttr[rule] !== dataAttr[rule]) node.style[rule] = dataAttr[rule];
                                }
                                for (var rule in cachedAttr) {
                                    if (!(rule in dataAttr)) node.style[rule] = "";
                                }
                            }
                            //handle SVG
                            else if (namespace != null) {
                                    if (attrName === "href") node.setAttributeNS("http://www.w3.org/1999/xlink", "href", dataAttr);else node.setAttribute(attrName === "className" ? "class" : attrName, dataAttr);
                                }
                                //handle cases that are properties (but ignore cases where we should use setAttribute instead)
                                //- list and form are typically used as strings, but are DOM element references in js
                                //- when using CSS selectors (e.g. `m("[style='']")`), style is used as a string, but it's an object in js
                                else if (attrName in node && attrName !== "list" && attrName !== "style" && attrName !== "form" && attrName !== "type" && attrName !== "width" && attrName !== "height") {
                                        //#348 don't set the value if not needed otherwise cursor placement breaks in Chrome
                                        if (tag !== "input" || node[attrName] !== dataAttr) node[attrName] = dataAttr;
                                    } else node.setAttribute(attrName, dataAttr);
                } catch (e) {
                    //swallow IE's invalid argument errors to mimic HTML's fallback-to-doing-nothing-on-invalid-attributes behavior
                    if (e.message.indexOf("Invalid argument") < 0) throw e;
                }
            }
            //#348 dataAttr may not be a string, so use loose comparison (double equal) instead of strict (triple equal)
            else if (attrName === "value" && tag === "input" && node.value != dataAttr) {
                    node.value = dataAttr;
                }
        }
        return cachedAttrs;
    }
    function clear(nodes, cached) {
        for (var i = nodes.length - 1; i > -1; i--) {
            if (nodes[i] && nodes[i].parentNode) {
                try {
                    nodes[i].parentNode.removeChild(nodes[i]);
                } catch (e) {} //ignore if this fails due to order of events (see http://stackoverflow.com/questions/21926083/failed-to-execute-removechild-on-node)
                cached = [].concat(cached);
                if (cached[i]) unload(cached[i]);
            }
        }
        //release memory if nodes is an array. This check should fail if nodes is a NodeList (see loop above)
        if (nodes.length) nodes.length = 0;
    }
    function unload(cached) {
        if (cached.configContext && isFunction(cached.configContext.onunload)) {
            cached.configContext.onunload();
            cached.configContext.onunload = null;
        }
        if (cached.controllers) {
            forEach(cached.controllers, function (controller) {
                if (isFunction(controller.onunload)) controller.onunload({ preventDefault: noop });
            });
        }
        if (cached.children) {
            if (isArray(cached.children)) forEach(cached.children, unload);else if (cached.children.tag) unload(cached.children);
        }
    }

    var insertAdjacentBeforeEnd = (function () {
        var rangeStrategy = function rangeStrategy(parentElement, data) {
            parentElement.appendChild($document.createRange().createContextualFragment(data));
        };
        var insertAdjacentStrategy = function insertAdjacentStrategy(parentElement, data) {
            parentElement.insertAdjacentHTML("beforeend", data);
        };

        try {
            $document.createRange().createContextualFragment('x');
            return rangeStrategy;
        } catch (e) {
            return insertAdjacentStrategy;
        }
    })();

    function injectHTML(parentElement, index, data) {
        var nextSibling = parentElement.childNodes[index];
        if (nextSibling) {
            var isElement = nextSibling.nodeType !== 1;
            var placeholder = $document.createElement("span");
            if (isElement) {
                parentElement.insertBefore(placeholder, nextSibling || null);
                placeholder.insertAdjacentHTML("beforebegin", data);
                parentElement.removeChild(placeholder);
            } else nextSibling.insertAdjacentHTML("beforebegin", data);
        } else insertAdjacentBeforeEnd(parentElement, data);

        var nodes = [];
        while (parentElement.childNodes[index] !== nextSibling) {
            nodes.push(parentElement.childNodes[index]);
            index++;
        }
        return nodes;
    }
    function autoredraw(callback, object) {
        return function (e) {
            e = e || event;
            m.redraw.strategy("diff");
            m.startComputation();
            try {
                return callback.call(object, e);
            } finally {
                endFirstComputation();
            }
        };
    }

    var html;
    var documentNode = {
        appendChild: function appendChild(node) {
            if (html === undefined) html = $document.createElement("html");
            if ($document.documentElement && $document.documentElement !== node) {
                $document.replaceChild(node, $document.documentElement);
            } else $document.appendChild(node);
            this.childNodes = $document.childNodes;
        },
        insertBefore: function insertBefore(node) {
            this.appendChild(node);
        },
        childNodes: []
    };
    var nodeCache = [],
        cellCache = {};
    m.render = function (root, cell, forceRecreation) {
        var configs = [];
        if (!root) throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");
        var id = getCellCacheKey(root);
        var isDocumentRoot = root === $document;
        var node = isDocumentRoot || root === $document.documentElement ? documentNode : root;
        if (isDocumentRoot && cell.tag !== "html") cell = { tag: "html", attrs: {}, children: cell };
        if (cellCache[id] === undefined) {
            // if we have a single node in an array, just rebuild with a single node
            // if we pass an array of nodes, rebuild all
            // otherwise clear out the container
            if (node.childNodes.length === 1) {
                cellCache[id] = rebuild(node.childNodes[0]);
            } else if (node.childNodes.length) {
                cellCache[id] = rebuild(node.childNodes);
            } else {
                clear(node.childNodes);
            }
        }
        if (forceRecreation === true) reset(root);
        cellCache[id] = build(node, null, undefined, undefined, cell, cellCache[id], false, 0, null, undefined, configs);
        forEach(configs, function (config) {
            config();
        });
    };
    function getCellCacheKey(element) {
        var index = nodeCache.indexOf(element);
        return index < 0 ? nodeCache.push(element) - 1 : index;
    }

    m.trust = function (value) {
        value = new String(value);
        value.$trusted = true;
        return value;
    };

    function gettersetter(store) {
        var prop = function prop() {
            if (arguments.length) store = arguments[0];
            return store;
        };

        prop.toJSON = function () {
            return store;
        };

        return prop;
    }

    m.prop = function (store) {
        //note: using non-strict equality check here because we're checking if store is null OR undefined
        if ((store != null && isObject(store) || isFunction(store)) && isFunction(store.then)) {
            return propify(store);
        }

        return gettersetter(store);
    };

    var roots = [],
        components = [],
        controllers = [],
        lastRedrawId = null,
        lastRedrawCallTime = 0,
        computePreRedrawHook = null,
        computePostRedrawHook = null,
        topComponent,
        unloaders = [];
    var FRAME_BUDGET = 16; //60 frames per second = 1 call per 16 ms
    function parameterize(component, args) {
        var controller = function controller() {
            return (component.controller || noop).apply(this, args) || this;
        };
        if (component.controller) controller.prototype = component.controller.prototype;
        var view = function view(ctrl) {
            var currentArgs = arguments.length > 1 ? args.concat([].slice.call(arguments, 1)) : args;
            return component.view.apply(component, currentArgs ? [ctrl].concat(currentArgs) : [ctrl]);
        };
        view.$original = component.view;
        var output = { controller: controller, view: view };
        if (args[0] && args[0].key != null) output.attrs = { key: args[0].key };
        return output;
    }
    m.component = function (component) {
        for (var args = [], i = 1; i < arguments.length; i++) args.push(arguments[i]);
        return parameterize(component, args);
    };
    m.mount = m.module = function (root, component) {
        if (!root) throw new Error("Please ensure the DOM element exists before rendering a template into it.");
        var index = roots.indexOf(root);
        if (index < 0) index = roots.length;

        var isPrevented = false;
        var event = { preventDefault: function preventDefault() {
                isPrevented = true;
                computePreRedrawHook = computePostRedrawHook = null;
            } };

        forEach(unloaders, function (unloader) {
            unloader.handler.call(unloader.controller, event);
            unloader.controller.onunload = null;
        });

        if (isPrevented) {
            forEach(unloaders, function (unloader) {
                unloader.controller.onunload = unloader.handler;
            });
        } else unloaders = [];

        if (controllers[index] && isFunction(controllers[index].onunload)) {
            controllers[index].onunload(event);
        }

        var isNullComponent = component === null;

        if (!isPrevented) {
            m.redraw.strategy("diff");
            m.startComputation();
            roots[index] = root;
            var currentComponent = component ? topComponent = component : topComponent = component = { controller: noop };
            var controller = new (component.controller || noop)();
            //controllers may call m.mount recursively (via m.route redirects, for example)
            //this conditional ensures only the last recursive m.mount call is applied
            if (currentComponent === topComponent) {
                controllers[index] = controller;
                components[index] = component;
            }
            endFirstComputation();
            if (isNullComponent) {
                removeRootElement(root, index);
            }
            return controllers[index];
        }
        if (isNullComponent) {
            removeRootElement(root, index);
        }
    };

    function removeRootElement(root, index) {
        roots.splice(index, 1);
        controllers.splice(index, 1);
        components.splice(index, 1);
        reset(root);
        nodeCache.splice(getCellCacheKey(root), 1);
    }

    var redrawing = false,
        forcing = false;
    m.redraw = function (force) {
        if (redrawing) return;
        redrawing = true;
        if (force) forcing = true;
        try {
            //lastRedrawId is a positive number if a second redraw is requested before the next animation frame
            //lastRedrawID is null if it's the first redraw and not an event handler
            if (lastRedrawId && !force) {
                //when setTimeout: only reschedule redraw if time between now and previous redraw is bigger than a frame, otherwise keep currently scheduled timeout
                //when rAF: always reschedule redraw
                if ($requestAnimationFrame === window.requestAnimationFrame || new Date() - lastRedrawCallTime > FRAME_BUDGET) {
                    if (lastRedrawId > 0) $cancelAnimationFrame(lastRedrawId);
                    lastRedrawId = $requestAnimationFrame(redraw, FRAME_BUDGET);
                }
            } else {
                redraw();
                lastRedrawId = $requestAnimationFrame(function () {
                    lastRedrawId = null;
                }, FRAME_BUDGET);
            }
        } finally {
            redrawing = forcing = false;
        }
    };
    m.redraw.strategy = m.prop();
    function redraw() {
        if (computePreRedrawHook) {
            computePreRedrawHook();
            computePreRedrawHook = null;
        }
        forEach(roots, function (root, i) {
            var component = components[i];
            if (controllers[i]) {
                var args = [controllers[i]];
                m.render(root, component.view ? component.view(controllers[i], args) : "");
            }
        });
        //after rendering within a routed context, we need to scroll back to the top, and fetch the document title for history.pushState
        if (computePostRedrawHook) {
            computePostRedrawHook();
            computePostRedrawHook = null;
        }
        lastRedrawId = null;
        lastRedrawCallTime = new Date();
        m.redraw.strategy("diff");
    }

    var pendingRequests = 0;
    m.startComputation = function () {
        pendingRequests++;
    };
    m.endComputation = function () {
        if (pendingRequests > 1) pendingRequests--;else {
            pendingRequests = 0;
            m.redraw();
        }
    };

    function endFirstComputation() {
        if (m.redraw.strategy() === "none") {
            pendingRequests--;
            m.redraw.strategy("diff");
        } else m.endComputation();
    }

    m.withAttr = function (prop, withAttrCallback, callbackThis) {
        return function (e) {
            e = e || event;
            var currentTarget = e.currentTarget || this;
            var _this = callbackThis || this;
            withAttrCallback.call(_this, prop in currentTarget ? currentTarget[prop] : currentTarget.getAttribute(prop));
        };
    };

    //routing
    var modes = { pathname: "", hash: "#", search: "?" };
    var redirect = noop,
        routeParams,
        currentRoute,
        isDefaultRoute = false;
    m.route = function (root, arg1, arg2, vdom) {
        //m.route()
        if (arguments.length === 0) return currentRoute;
        //m.route(el, defaultRoute, routes)
        else if (arguments.length === 3 && isString(arg1)) {
                redirect = function (source) {
                    var path = currentRoute = normalizeRoute(source);
                    if (!routeByValue(root, arg2, path)) {
                        if (isDefaultRoute) throw new Error("Ensure the default route matches one of the routes defined in m.route");
                        isDefaultRoute = true;
                        m.route(arg1, true);
                        isDefaultRoute = false;
                    }
                };
                var listener = m.route.mode === "hash" ? "onhashchange" : "onpopstate";
                window[listener] = function () {
                    var path = $location[m.route.mode];
                    if (m.route.mode === "pathname") path += $location.search;
                    if (currentRoute !== normalizeRoute(path)) redirect(path);
                };

                computePreRedrawHook = setScroll;
                window[listener]();
            }
            //config: m.route
            else if (root.addEventListener || root.attachEvent) {
                    root.href = (m.route.mode !== 'pathname' ? $location.pathname : '') + modes[m.route.mode] + vdom.attrs.href;
                    if (root.addEventListener) {
                        root.removeEventListener("click", routeUnobtrusive);
                        root.addEventListener("click", routeUnobtrusive);
                    } else {
                        root.detachEvent("onclick", routeUnobtrusive);
                        root.attachEvent("onclick", routeUnobtrusive);
                    }
                }
                //m.route(route, params, shouldReplaceHistoryEntry)
                else if (isString(root)) {
                        var oldRoute = currentRoute;
                        currentRoute = root;
                        var args = arg1 || {};
                        var queryIndex = currentRoute.indexOf("?");
                        var params = queryIndex > -1 ? parseQueryString(currentRoute.slice(queryIndex + 1)) : {};
                        for (var i in args) params[i] = args[i];
                        var querystring = buildQueryString(params);
                        var currentPath = queryIndex > -1 ? currentRoute.slice(0, queryIndex) : currentRoute;
                        if (querystring) currentRoute = currentPath + (currentPath.indexOf("?") === -1 ? "?" : "&") + querystring;

                        var shouldReplaceHistoryEntry = (arguments.length === 3 ? arg2 : arg1) === true || oldRoute === root;

                        if (window.history.pushState) {
                            computePreRedrawHook = setScroll;
                            computePostRedrawHook = function () {
                                window.history[shouldReplaceHistoryEntry ? "replaceState" : "pushState"](null, $document.title, modes[m.route.mode] + currentRoute);
                            };
                            redirect(modes[m.route.mode] + currentRoute);
                        } else {
                            $location[m.route.mode] = currentRoute;
                            redirect(modes[m.route.mode] + currentRoute);
                        }
                    }
    };
    m.route.param = function (key) {
        if (!routeParams) throw new Error("You must call m.route(element, defaultRoute, routes) before calling m.route.param()");
        return routeParams[key];
    };
    m.route.mode = "search";
    function normalizeRoute(route) {
        return route.slice(modes[m.route.mode].length);
    }
    function routeByValue(root, router, path) {
        routeParams = {};

        var queryStart = path.indexOf("?");
        if (queryStart !== -1) {
            routeParams = parseQueryString(path.substr(queryStart + 1, path.length));
            path = path.substr(0, queryStart);
        }

        // Get all routes and check if there's
        // an exact match for the current path
        var keys = Object.keys(router);
        var index = keys.indexOf(path);
        if (index !== -1) {
            m.mount(root, router[keys[index]]);
            return true;
        }

        for (var route in router) {
            if (route === path) {
                m.mount(root, router[route]);
                return true;
            }

            var matcher = new RegExp("^" + route.replace(/:[^\/]+?\.{3}/g, "(.*?)").replace(/:[^\/]+/g, "([^\\/]+)") + "\/?$");

            if (matcher.test(path)) {
                path.replace(matcher, function () {
                    var keys = route.match(/:[^\/]+/g) || [];
                    var values = [].slice.call(arguments, 1, -2);
                    forEach(keys, function (key, i) {
                        routeParams[key.replace(/:|\./g, "")] = decodeURIComponent(values[i]);
                    });
                    m.mount(root, router[route]);
                });
                return true;
            }
        }
    }
    function routeUnobtrusive(e) {
        e = e || event;

        if (e.ctrlKey || e.metaKey || e.which === 2) return;

        if (e.preventDefault) e.preventDefault();else e.returnValue = false;

        var currentTarget = e.currentTarget || e.srcElement;
        var args = m.route.mode === "pathname" && currentTarget.search ? parseQueryString(currentTarget.search.slice(1)) : {};
        while (currentTarget && currentTarget.nodeName.toUpperCase() !== "A") currentTarget = currentTarget.parentNode;
        m.route(currentTarget[m.route.mode].slice(modes[m.route.mode].length), args);
    }
    function setScroll() {
        if (m.route.mode !== "hash" && $location.hash) $location.hash = $location.hash;else window.scrollTo(0, 0);
    }
    function buildQueryString(object, prefix) {
        var duplicates = {};
        var str = [];
        for (var prop in object) {
            var key = prefix ? prefix + "[" + prop + "]" : prop;
            var value = object[prop];

            if (value === null) {
                str.push(encodeURIComponent(key));
            } else if (isObject(value)) {
                str.push(buildQueryString(value, key));
            } else if (isArray(value)) {
                var keys = [];
                duplicates[key] = duplicates[key] || {};
                forEach(value, function (item) {
                    if (!duplicates[key][item]) {
                        duplicates[key][item] = true;
                        keys.push(encodeURIComponent(key) + "=" + encodeURIComponent(item));
                    }
                });
                str.push(keys.join("&"));
            } else if (value !== undefined) {
                str.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
            }
        }
        return str.join("&");
    }
    function parseQueryString(str) {
        if (str === "" || str == null) return {};
        if (str.charAt(0) === "?") str = str.slice(1);

        var pairs = str.split("&"),
            params = {};
        forEach(pairs, function (string) {
            var pair = string.split("=");
            var key = decodeURIComponent(pair[0]);
            var value = pair.length === 2 ? decodeURIComponent(pair[1]) : null;
            if (params[key] != null) {
                if (!isArray(params[key])) params[key] = [params[key]];
                params[key].push(value);
            } else params[key] = value;
        });

        return params;
    }
    m.route.buildQueryString = buildQueryString;
    m.route.parseQueryString = parseQueryString;

    function reset(root) {
        var cacheKey = getCellCacheKey(root);
        clear(root.childNodes, cellCache[cacheKey]);
        cellCache[cacheKey] = undefined;
    }

    m.deferred = function () {
        var deferred = new Deferred();
        deferred.promise = propify(deferred.promise);
        return deferred;
    };
    function propify(promise, initialValue) {
        var prop = m.prop(initialValue);
        promise.then(prop);
        prop.then = function (resolve, reject) {
            return propify(promise.then(resolve, reject), initialValue);
        };
        prop["catch"] = prop.then.bind(null, null);
        prop["finally"] = function (callback) {
            var _callback = function _callback() {
                return m.deferred().resolve(callback()).promise;
            };
            return prop.then(function (value) {
                return propify(_callback().then(function () {
                    return value;
                }), initialValue);
            }, function (reason) {
                return propify(_callback().then(function () {
                    throw new Error(reason);
                }), initialValue);
            });
        };
        return prop;
    }
    //Promiz.mithril.js | Zolmeister | MIT
    //a modified version of Promiz.js, which does not conform to Promises/A+ for two reasons:
    //1) `then` callbacks are called synchronously (because setTimeout is too slow, and the setImmediate polyfill is too big
    //2) throwing subclasses of Error cause the error to be bubbled up instead of triggering rejection (because the spec does not account for the important use case of default browser error handling, i.e. message w/ line number)
    function Deferred(successCallback, failureCallback) {
        var RESOLVING = 1,
            REJECTING = 2,
            RESOLVED = 3,
            REJECTED = 4;
        var self = this,
            state = 0,
            promiseValue = 0,
            next = [];

        self.promise = {};

        self.resolve = function (value) {
            if (!state) {
                promiseValue = value;
                state = RESOLVING;

                fire();
            }
            return this;
        };

        self.reject = function (value) {
            if (!state) {
                promiseValue = value;
                state = REJECTING;

                fire();
            }
            return this;
        };

        self.promise.then = function (successCallback, failureCallback) {
            var deferred = new Deferred(successCallback, failureCallback);
            if (state === RESOLVED) {
                deferred.resolve(promiseValue);
            } else if (state === REJECTED) {
                deferred.reject(promiseValue);
            } else {
                next.push(deferred);
            }
            return deferred.promise;
        };

        function finish(type) {
            state = type || REJECTED;
            next.map(function (deferred) {
                state === RESOLVED ? deferred.resolve(promiseValue) : deferred.reject(promiseValue);
            });
        }

        function thennable(then, successCallback, failureCallback, notThennableCallback) {
            if ((promiseValue != null && isObject(promiseValue) || isFunction(promiseValue)) && isFunction(then)) {
                try {
                    // count protects against abuse calls from spec checker
                    var count = 0;
                    then.call(promiseValue, function (value) {
                        if (count++) return;
                        promiseValue = value;
                        successCallback();
                    }, function (value) {
                        if (count++) return;
                        promiseValue = value;
                        failureCallback();
                    });
                } catch (e) {
                    m.deferred.onerror(e);
                    promiseValue = e;
                    failureCallback();
                }
            } else {
                notThennableCallback();
            }
        }

        function fire() {
            var _again = true;

            _function: while (_again) {
                then = undefined;
                _again = false;

                // check if it's a thenable
                var then;
                try {
                    then = promiseValue && promiseValue.then;
                } catch (e) {
                    m.deferred.onerror(e);
                    promiseValue = e;
                    state = REJECTING;
                    _again = true;
                    continue _function;
                }

                thennable(then, function () {
                    state = RESOLVING;
                    fire();
                }, function () {
                    state = REJECTING;
                    fire();
                }, function () {
                    try {
                        if (state === RESOLVING && isFunction(successCallback)) {
                            promiseValue = successCallback(promiseValue);
                        } else if (state === REJECTING && isFunction(failureCallback)) {
                            promiseValue = failureCallback(promiseValue);
                            state = RESOLVING;
                        }
                    } catch (e) {
                        m.deferred.onerror(e);
                        promiseValue = e;
                        return finish();
                    }

                    if (promiseValue === self) {
                        promiseValue = TypeError();
                        finish();
                    } else {
                        thennable(then, function () {
                            finish(RESOLVED);
                        }, finish, function () {
                            finish(state === RESOLVING && RESOLVED);
                        });
                    }
                });
            }
        }
    }
    m.deferred.onerror = function (e) {
        if (type.call(e) === "[object Error]" && !e.constructor.toString().match(/ Error/)) {
            pendingRequests = 0;
            throw e;
        }
    };

    m.sync = function (args) {
        var method = "resolve";

        function synchronizer(pos, resolved) {
            return function (value) {
                results[pos] = value;
                if (!resolved) method = "reject";
                if (--outstanding === 0) {
                    deferred.promise(results);
                    deferred[method](results);
                }
                return value;
            };
        }

        var deferred = m.deferred();
        var outstanding = args.length;
        var results = new Array(outstanding);
        if (args.length > 0) {
            forEach(args, function (arg, i) {
                arg.then(synchronizer(i, true), synchronizer(i, false));
            });
        } else deferred.resolve([]);

        return deferred.promise;
    };
    function identity(value) {
        return value;
    }

    function ajax(options) {
        if (options.dataType && options.dataType.toLowerCase() === "jsonp") {
            var callbackKey = "mithril_callback_" + new Date().getTime() + "_" + Math.round(Math.random() * 1e16).toString(36);
            var script = $document.createElement("script");

            window[callbackKey] = function (resp) {
                script.parentNode.removeChild(script);
                options.onload({
                    type: "load",
                    target: {
                        responseText: resp
                    }
                });
                window[callbackKey] = undefined;
            };

            script.onerror = function () {
                script.parentNode.removeChild(script);

                options.onerror({
                    type: "error",
                    target: {
                        status: 500,
                        responseText: JSON.stringify({
                            error: "Error making jsonp request"
                        })
                    }
                });
                window[callbackKey] = undefined;

                return false;
            };

            script.onload = function () {
                return false;
            };

            script.src = options.url + (options.url.indexOf("?") > 0 ? "&" : "?") + (options.callbackKey ? options.callbackKey : "callback") + "=" + callbackKey + "&" + buildQueryString(options.data || {});
            $document.body.appendChild(script);
        } else {
            var xhr = new window.XMLHttpRequest();
            xhr.open(options.method, options.url, true, options.user, options.password);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) options.onload({ type: "load", target: xhr });else options.onerror({ type: "error", target: xhr });
                }
            };
            if (options.serialize === JSON.stringify && options.data && options.method !== "GET") {
                xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            }
            if (options.deserialize === JSON.parse) {
                xhr.setRequestHeader("Accept", "application/json, text/*");
            }
            if (isFunction(options.config)) {
                var maybeXhr = options.config(xhr, options);
                if (maybeXhr != null) xhr = maybeXhr;
            }

            var data = options.method === "GET" || !options.data ? "" : options.data;
            if (data && (!isString(data) && data.constructor !== window.FormData)) {
                throw new Error("Request data should be either be a string or FormData. Check the `serialize` option in `m.request`");
            }
            xhr.send(data);
            return xhr;
        }
    }

    function bindData(xhrOptions, data, serialize) {
        if (xhrOptions.method === "GET" && xhrOptions.dataType !== "jsonp") {
            var prefix = xhrOptions.url.indexOf("?") < 0 ? "?" : "&";
            var querystring = buildQueryString(data);
            xhrOptions.url = xhrOptions.url + (querystring ? prefix + querystring : "");
        } else xhrOptions.data = serialize(data);
        return xhrOptions;
    }

    function parameterizeUrl(url, data) {
        var tokens = url.match(/:[a-z]\w+/gi);
        if (tokens && data) {
            forEach(tokens, function (token) {
                var key = token.slice(1);
                url = url.replace(token, data[key]);
                delete data[key];
            });
        }
        return url;
    }

    m.request = function (xhrOptions) {
        if (xhrOptions.background !== true) m.startComputation();
        var deferred = new Deferred();
        var isJSONP = xhrOptions.dataType && xhrOptions.dataType.toLowerCase() === "jsonp";
        var serialize = xhrOptions.serialize = isJSONP ? identity : xhrOptions.serialize || JSON.stringify;
        var deserialize = xhrOptions.deserialize = isJSONP ? identity : xhrOptions.deserialize || JSON.parse;
        var extract = isJSONP ? function (jsonp) {
            return jsonp.responseText;
        } : xhrOptions.extract || function (xhr) {
            if (xhr.responseText.length === 0 && deserialize === JSON.parse) {
                return null;
            } else {
                return xhr.responseText;
            }
        };
        xhrOptions.method = (xhrOptions.method || "GET").toUpperCase();
        xhrOptions.url = parameterizeUrl(xhrOptions.url, xhrOptions.data);
        xhrOptions = bindData(xhrOptions, xhrOptions.data, serialize);
        xhrOptions.onload = xhrOptions.onerror = function (e) {
            try {
                e = e || event;
                var unwrap = (e.type === "load" ? xhrOptions.unwrapSuccess : xhrOptions.unwrapError) || identity;
                var response = unwrap(deserialize(extract(e.target, xhrOptions)), e.target);
                if (e.type === "load") {
                    if (isArray(response) && xhrOptions.type) {
                        forEach(response, function (res, i) {
                            response[i] = new xhrOptions.type(res);
                        });
                    } else if (xhrOptions.type) {
                        response = new xhrOptions.type(response);
                    }
                }

                deferred[e.type === "load" ? "resolve" : "reject"](response);
            } catch (e) {
                m.deferred.onerror(e);
                deferred.reject(e);
            }

            if (xhrOptions.background !== true) m.endComputation();
        };

        ajax(xhrOptions);
        deferred.promise = propify(deferred.promise, xhrOptions.initialValue);
        return deferred.promise;
    };

    //testing API
    m.deps = function (mock) {
        initialize(window = mock || window);
        return window;
    };
    //for internal testing only, do not use `m.deps.factory`
    m.deps.factory = app;

    return m;
})(typeof window !== "undefined" ? window : {});

var containsAllProps = function containsAllProps(obj) {
    return Object.keys(obj).reduce(function (a, name) {
        return a && obj[name] instanceof Function && obj[name].name === 'prop';
    }, true);
};
var container = function container(component) {
    var queries = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    return function (resolver) {
        return m.component({
            controller: function controller() {
                // run the controller on this controller,
                // then return that value
                // if the value is undefined, mithril passes `this`
                // to the `view()` as `ctrl`
                m.startComputation();
                var done = m.prop(false);
                resolver.resolve(queries).then(function () {
                    done(true);
                    m.endComputation();
                });
                component.controller.call(this);
                return done;
            },
            view: function view(done, args) {
                if (!done()) return null;

                return m.component(component, _extends({}, args, { resolver: resolver }, resolver.getState()));
            }
        });
    };
};

var resolver = function resolver() {
    var states = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var promises = [];

    var _await = function _await() {
        var _promises = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        promises = promises.concat(_promises);
        return Promise.all(promises);
    };

    var finish = function finish() {
        var total = promises.length;
        return Promise.all(promises).then(function (values) {
            if (promises.length > total) {
                return finish();
            }
            return values;
        });
    };

    var resolve = function resolve(props) {
        var keys = Object.keys(props);
        if (!keys.length) {
            return Promise.resolve(true);
        }

        var f = [];
        keys.forEach(function (name) {
            var p = m.prop(),
                x = props[name],
                fn = x instanceof Function && x();

            if (fn && fn.then instanceof Function) {
                f.push(fn.then(p));
                states[name] = p;
            }
        });

        return _await(f);
    };

    var getState = function getState() {
        return states;
    };

    return { finish: finish, resolve: resolve, getState: getState };
};

resolver.renderToString = function (component, renderer) {
    var instance = arguments.length <= 2 || arguments[2] === undefined ? resolver() : arguments[2];

    var t = component(instance);
    renderer(t);
    return instance.finish().then(function () {
        console.log(instance.getState());
        return renderer(t);
    });
};

resolver.render = function (component, node) {
    var instance = arguments.length <= 2 || arguments[2] === undefined ? resolver() : arguments[2];

    var t = component(instance);
    m.mount(node, t);
};

module.exports = { resolver: resolver, m: m, container: container };


},{}],5:[function(require,module,exports){
(function() {
  'use strict';

  if (self.fetch) {
    return
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = name.toString();
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = value.toString();
    }
    return value
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)

    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var list = this.map[name]
    if (!list) {
      list = []
      this.map[name] = list
    }
    list.push(value)
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    var values = this.map[normalizeName(name)]
    return values ? values[0] : null
  }

  Headers.prototype.getAll = function(name) {
    return this.map[normalizeName(name)] || []
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = [normalizeValue(value)]
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    Object.getOwnPropertyNames(this.map).forEach(function(name) {
      this.map[name].forEach(function(value) {
        callback.call(thisArg, value, name, this)
      }, this)
    }, this)
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    reader.readAsArrayBuffer(blob)
    return fileReaderReady(reader)
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    reader.readAsText(blob)
    return fileReaderReady(reader)
  }

  var support = {
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob();
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self
  }

  function Body() {
    this.bodyUsed = false


    this._initBody = function(body) {
      this._bodyInit = body
      if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (!body) {
        this._bodyText = ''
      } else {
        throw new Error('unsupported BodyInit type')
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        return this.blob().then(readBlobAsArrayBuffer)
      }

      this.text = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return readBlobAsText(this._bodyBlob)
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as text')
        } else {
          return Promise.resolve(this._bodyText)
        }
      }
    } else {
      this.text = function() {
        var rejected = consumed(this)
        return rejected ? rejected : Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(url, options) {
    options = options || {}
    this.url = url

    this.credentials = options.credentials || 'omit'
    this.headers = new Headers(options.headers)
    this.method = normalizeMethod(options.method || 'GET')
    this.mode = options.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && options.body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(options.body)
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function headers(xhr) {
    var head = new Headers()
    var pairs = xhr.getAllResponseHeaders().trim().split('\n')
    pairs.forEach(function(header) {
      var split = header.trim().split(':')
      var key = split.shift().trim()
      var value = split.join(':').trim()
      head.append(key, value)
    })
    return head
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this._initBody(bodyInit)
    this.type = 'default'
    this.url = null
    this.status = options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = options.statusText
    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
    this.url = options.url || ''
  }

  Body.call(Response.prototype)

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function(input, init) {
    // TODO: Request constructor should accept input, init
    var request
    if (Request.prototype.isPrototypeOf(input) && !init) {
      request = input
    } else {
      request = new Request(input, init)
    }

    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest()

      function responseURL() {
        if ('responseURL' in xhr) {
          return xhr.responseURL
        }

        // Avoid security warnings on getResponseHeader when not allowed by CORS
        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
          return xhr.getResponseHeader('X-Request-URL')
        }

        return;
      }

      xhr.onload = function() {
        var status = (xhr.status === 1223) ? 204 : xhr.status
        if (status < 100 || status > 599) {
          reject(new TypeError('Network request failed'))
          return
        }
        var options = {
          status: status,
          statusText: xhr.statusText,
          headers: headers(xhr),
          url: responseURL()
        }
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})();

},{}],6:[function(require,module,exports){
(function (global){
"use strict";

require("core-js/shim");

require("regenerator/runtime");

if (global._babelPolyfill) {
  throw new Error("only one instance of babel/polyfill is allowed");
}
global._babelPolyfill = true;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"core-js/shim":186,"regenerator/runtime":187}],7:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],8:[function(require,module,exports){
var isObject = require('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":38}],9:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./$.to-iobject')
  , toLength  = require('./$.to-length')
  , toIndex   = require('./$.to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index;
    } return !IS_INCLUDES && -1;
  };
};
},{"./$.to-index":74,"./$.to-iobject":76,"./$.to-length":77}],10:[function(require,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = require('./$.ctx')
  , IObject  = require('./$.iobject')
  , toObject = require('./$.to-object')
  , toLength = require('./$.to-length');
module.exports = function(TYPE){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? Array(length) : IS_FILTER ? [] : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};
},{"./$.ctx":19,"./$.iobject":35,"./$.to-length":77,"./$.to-object":78}],11:[function(require,module,exports){
// 19.1.2.1 Object.assign(target, source, ...)
var toObject = require('./$.to-object')
  , IObject  = require('./$.iobject')
  , enumKeys = require('./$.enum-keys');
/* eslint-disable no-unused-vars */
module.exports = Object.assign || function assign(target, source){
/* eslint-enable no-unused-vars */
  var T = toObject(target)
    , l = arguments.length
    , i = 1;
  while(l > i){
    var S      = IObject(arguments[i++])
      , keys   = enumKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)T[key = keys[j++]] = S[key];
  }
  return T;
};
},{"./$.enum-keys":23,"./$.iobject":35,"./$.to-object":78}],12:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./$.cof')
  , TAG = require('./$.wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./$.cof":13,"./$.wks":81}],13:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],14:[function(require,module,exports){
'use strict';
var $            = require('./$')
  , hide         = require('./$.hide')
  , ctx          = require('./$.ctx')
  , species      = require('./$.species')
  , strictNew    = require('./$.strict-new')
  , defined      = require('./$.defined')
  , forOf        = require('./$.for-of')
  , step         = require('./$.iter-step')
  , ID           = require('./$.uid')('id')
  , $has         = require('./$.has')
  , isObject     = require('./$.is-object')
  , isExtensible = Object.isExtensible || isObject
  , SUPPORT_DESC = require('./$.support-desc')
  , SIZE         = SUPPORT_DESC ? '_s' : 'size'
  , id           = 0;

var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!$has(it, ID)){
    // can't set id to frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add id
    if(!create)return 'E';
    // add missing object id
    hide(it, ID, ++id);
  // return object id with prefix
  } return 'O' + it[ID];
};

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      strictNew(that, C, NAME);
      that._i = $.create(null); // index
      that._f = undefined;      // first entry
      that._l = undefined;      // last entry
      that[SIZE] = 0;           // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    require('./$.mix')(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        var f = ctx(callbackfn, arguments[1], 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(SUPPORT_DESC)$.setDesc(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    require('./$.iter-define')(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    species(C);
    species(require('./$.core')[NAME]); // for wrapper
  }
};
},{"./$":46,"./$.core":18,"./$.ctx":19,"./$.defined":21,"./$.for-of":28,"./$.has":31,"./$.hide":32,"./$.is-object":38,"./$.iter-define":42,"./$.iter-step":44,"./$.mix":51,"./$.species":64,"./$.strict-new":65,"./$.support-desc":71,"./$.uid":79}],15:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var forOf   = require('./$.for-of')
  , classof = require('./$.classof');
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    var arr = [];
    forOf(this, false, arr.push, arr);
    return arr;
  };
};
},{"./$.classof":12,"./$.for-of":28}],16:[function(require,module,exports){
'use strict';
var hide         = require('./$.hide')
  , anObject     = require('./$.an-object')
  , strictNew    = require('./$.strict-new')
  , forOf        = require('./$.for-of')
  , method       = require('./$.array-methods')
  , WEAK         = require('./$.uid')('weak')
  , isObject     = require('./$.is-object')
  , $has         = require('./$.has')
  , isExtensible = Object.isExtensible || isObject
  , find         = method(5)
  , findIndex    = method(6)
  , id           = 0;

// fallback for frozen keys
var frozenStore = function(that){
  return that._l || (that._l = new FrozenStore);
};
var FrozenStore = function(){
  this.a = [];
};
var findFrozen = function(store, key){
  return find(store.a, function(it){
    return it[0] === key;
  });
};
FrozenStore.prototype = {
  get: function(key){
    var entry = findFrozen(this, key);
    if(entry)return entry[1];
  },
  has: function(key){
    return !!findFrozen(this, key);
  },
  set: function(key, value){
    var entry = findFrozen(this, key);
    if(entry)entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function(key){
    var index = findIndex(this.a, function(it){
      return it[0] === key;
    });
    if(~index)this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      strictNew(that, C, NAME);
      that._i = id++;      // collection id
      that._l = undefined; // leak store for frozen objects
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    require('./$.mix')(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function(key){
        if(!isObject(key))return false;
        if(!isExtensible(key))return frozenStore(this)['delete'](key);
        return $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key){
        if(!isObject(key))return false;
        if(!isExtensible(key))return frozenStore(this).has(key);
        return $has(key, WEAK) && $has(key[WEAK], this._i);
      }
    });
    return C;
  },
  def: function(that, key, value){
    if(!isExtensible(anObject(key))){
      frozenStore(that).set(key, value);
    } else {
      $has(key, WEAK) || hide(key, WEAK, {});
      key[WEAK][that._i] = value;
    } return that;
  },
  frozenStore: frozenStore,
  WEAK: WEAK
};
},{"./$.an-object":8,"./$.array-methods":10,"./$.for-of":28,"./$.has":31,"./$.hide":32,"./$.is-object":38,"./$.mix":51,"./$.strict-new":65,"./$.uid":79}],17:[function(require,module,exports){
'use strict';
var global     = require('./$.global')
  , $def       = require('./$.def')
  , BUGGY      = require('./$.iter-buggy')
  , forOf      = require('./$.for-of')
  , strictNew  = require('./$.strict-new');

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  var fixMethod = function(KEY){
    var fn = proto[KEY];
    require('./$.redef')(proto, KEY,
      KEY == 'delete' ? function(a){ return fn.call(this, a === 0 ? 0 : a); }
      : KEY == 'has' ? function has(a){ return fn.call(this, a === 0 ? 0 : a); }
      : KEY == 'get' ? function get(a){ return fn.call(this, a === 0 ? 0 : a); }
      : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
      : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if(typeof C != 'function' || !(IS_WEAK || !BUGGY && proto.forEach && proto.entries)){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    require('./$.mix')(C.prototype, methods);
  } else {
    var inst  = new C
      , chain = inst[ADDER](IS_WEAK ? {} : -0, 1)
      , buggyZero;
    // wrap for init collections from iterable
    if(!require('./$.iter-detect')(function(iter){ new C(iter); })){ // eslint-disable-line no-new
      C = wrapper(function(target, iterable){
        strictNew(target, C, NAME);
        var that = new Base;
        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    IS_WEAK || inst.forEach(function(val, key){
      buggyZero = 1 / key === -Infinity;
    });
    // fix converting -0 key to +0
    if(buggyZero){
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    // + fix .add & .set for chaining
    if(buggyZero || chain !== inst)fixMethod(ADDER);
    // weak collections should not contains .clear method
    if(IS_WEAK && proto.clear)delete proto.clear;
  }

  require('./$.tag')(C, NAME);

  O[NAME] = C;
  $def($def.G + $def.W + $def.F * (C != Base), O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};
},{"./$.def":20,"./$.for-of":28,"./$.global":30,"./$.iter-buggy":39,"./$.iter-detect":43,"./$.mix":51,"./$.redef":58,"./$.strict-new":65,"./$.tag":72}],18:[function(require,module,exports){
var core = module.exports = {};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],19:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./$.a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  } return function(/* ...args */){
      return fn.apply(that, arguments);
    };
};
},{"./$.a-function":7}],20:[function(require,module,exports){
var global     = require('./$.global')
  , core       = require('./$.core')
  , hide       = require('./$.hide')
  , $redef     = require('./$.redef')
  , PROTOTYPE  = 'prototype';
var ctx = function(fn, that){
  return function(){
    return fn.apply(that, arguments);
  };
};
var $def = function(type, name, source){
  var key, own, out, exp
    , isGlobal = type & $def.G
    , isProto  = type & $def.P
    , target   = isGlobal ? global : type & $def.S
        ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
    , exports  = isGlobal ? core : core[name] || (core[name] = {});
  if(isGlobal)source = name;
  for(key in source){
    // contains in native
    own = !(type & $def.F) && target && key in target;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    if(type & $def.B && own)exp = ctx(out, global);
    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target && !own)$redef(target, key, out);
    // export
    if(exports[key] != out)hide(exports, key, exp);
    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
global.core = core;
// type bitmap
$def.F = 1;  // forced
$def.G = 2;  // global
$def.S = 4;  // static
$def.P = 8;  // proto
$def.B = 16; // bind
$def.W = 32; // wrap
module.exports = $def;
},{"./$.core":18,"./$.global":30,"./$.hide":32,"./$.redef":58}],21:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],22:[function(require,module,exports){
var isObject = require('./$.is-object')
  , document = require('./$.global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./$.global":30,"./$.is-object":38}],23:[function(require,module,exports){
// all enumerable object keys, includes symbols
var $ = require('./$');
module.exports = function(it){
  var keys       = $.getKeys(it)
    , getSymbols = $.getSymbols;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = $.isEnum
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
  }
  return keys;
};
},{"./$":46}],24:[function(require,module,exports){
// 20.2.2.14 Math.expm1(x)
module.exports = Math.expm1 || function expm1(x){
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
};
},{}],25:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],26:[function(require,module,exports){
'use strict';
module.exports = function(KEY, length, exec){
  var defined  = require('./$.defined')
    , SYMBOL   = require('./$.wks')(KEY)
    , original = ''[KEY];
  if(require('./$.fails')(function(){
    var O = {};
    O[SYMBOL] = function(){ return 7; };
    return ''[KEY](O) != 7;
  })){
    require('./$.redef')(String.prototype, KEY, exec(defined, SYMBOL, original));
    require('./$.hide')(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function(string, arg){ return original.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function(string){ return original.call(string, this); }
    );
  }
};
},{"./$.defined":21,"./$.fails":25,"./$.hide":32,"./$.redef":58,"./$.wks":81}],27:[function(require,module,exports){
'use strict';
// 21.2.5.3 get RegExp.prototype.flags
var anObject = require('./$.an-object');
module.exports = function(){
  var that   = anObject(this)
    , result = '';
  if(that.global)result += 'g';
  if(that.ignoreCase)result += 'i';
  if(that.multiline)result += 'm';
  if(that.unicode)result += 'u';
  if(that.sticky)result += 'y';
  return result;
};
},{"./$.an-object":8}],28:[function(require,module,exports){
var ctx         = require('./$.ctx')
  , call        = require('./$.iter-call')
  , isArrayIter = require('./$.is-array-iter')
  , anObject    = require('./$.an-object')
  , toLength    = require('./$.to-length')
  , getIterFn   = require('./core.get-iterator-method');
module.exports = function(iterable, entries, fn, that){
  var iterFn = getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    call(iterator, f, step.value, entries);
  }
};
},{"./$.an-object":8,"./$.ctx":19,"./$.is-array-iter":36,"./$.iter-call":40,"./$.to-length":77,"./core.get-iterator-method":82}],29:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toString  = {}.toString
  , toIObject = require('./$.to-iobject')
  , getNames  = require('./$').getNames;

var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return getNames(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.get = function getOwnPropertyNames(it){
  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
  return getNames(toIObject(it));
};
},{"./$":46,"./$.to-iobject":76}],30:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var UNDEFINED = 'undefined';
var global = module.exports = typeof window != UNDEFINED && window.Math == Math
  ? window : typeof self != UNDEFINED && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],31:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],32:[function(require,module,exports){
var $          = require('./$')
  , createDesc = require('./$.property-desc');
module.exports = require('./$.support-desc') ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./$":46,"./$.property-desc":57,"./$.support-desc":71}],33:[function(require,module,exports){
module.exports = require('./$.global').document && document.documentElement;
},{"./$.global":30}],34:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};
},{}],35:[function(require,module,exports){
// indexed object, fallback for non-array-like ES3 strings
var cof = require('./$.cof');
module.exports = 0 in Object('z') ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":13}],36:[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./$.iterators')
  , ITERATOR  = require('./$.wks')('iterator');
module.exports = function(it){
  return (Iterators.Array || Array.prototype[ITERATOR]) === it;
};
},{"./$.iterators":45,"./$.wks":81}],37:[function(require,module,exports){
// 20.1.2.3 Number.isInteger(number)
var isObject = require('./$.is-object')
  , floor    = Math.floor;
module.exports = function isInteger(it){
  return !isObject(it) && isFinite(it) && floor(it) === it;
};
},{"./$.is-object":38}],38:[function(require,module,exports){
// http://jsperf.com/core-js-isobject
module.exports = function(it){
  return it !== null && (typeof it == 'object' || typeof it == 'function');
};
},{}],39:[function(require,module,exports){
// Safari has buggy iterators w/o `next`
module.exports = 'keys' in [] && !('next' in [].keys());
},{}],40:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./$.an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./$.an-object":8}],41:[function(require,module,exports){
'use strict';
var $ = require('./$')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./$.hide')(IteratorPrototype, require('./$.wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = $.create(IteratorPrototype, {next: require('./$.property-desc')(1,next)});
  require('./$.tag')(Constructor, NAME + ' Iterator');
};
},{"./$":46,"./$.hide":32,"./$.property-desc":57,"./$.tag":72,"./$.wks":81}],42:[function(require,module,exports){
'use strict';
var LIBRARY         = require('./$.library')
  , $def            = require('./$.def')
  , $redef          = require('./$.redef')
  , hide            = require('./$.hide')
  , has             = require('./$.has')
  , SYMBOL_ITERATOR = require('./$.wks')('iterator')
  , Iterators       = require('./$.iterators')
  , FF_ITERATOR     = '@@iterator'
  , KEYS            = 'keys'
  , VALUES          = 'values';
var returnThis = function(){ return this; };
module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
  require('./$.iter-create')(Constructor, NAME, next);
  var createMethod = function(kind){
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG      = NAME + ' Iterator'
    , proto    = Base.prototype
    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , _default = _native || createMethod(DEFAULT)
    , methods, key;
  // Fix native
  if(_native){
    var IteratorPrototype = require('./$').getProto(_default.call(new Base));
    // Set @@toStringTag to native iterators
    require('./$.tag')(IteratorPrototype, TAG, true);
    // FF fix
    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
  }
  // Define iterator
  if(!LIBRARY || FORCE)hide(proto, SYMBOL_ITERATOR, _default);
  // Plug for library
  Iterators[NAME] = _default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      keys:    IS_SET            ? _default : createMethod(KEYS),
      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
      entries: DEFAULT != VALUES ? _default : createMethod('entries')
    };
    if(FORCE)for(key in methods){
      if(!(key in proto))$redef(proto, key, methods[key]);
    } else $def($def.P + $def.F * require('./$.iter-buggy'), NAME, methods);
  }
};
},{"./$":46,"./$.def":20,"./$.has":31,"./$.hide":32,"./$.iter-buggy":39,"./$.iter-create":41,"./$.iterators":45,"./$.library":48,"./$.redef":58,"./$.tag":72,"./$.wks":81}],43:[function(require,module,exports){
var SYMBOL_ITERATOR = require('./$.wks')('iterator')
  , SAFE_CLOSING    = false;
try {
  var riter = [7][SYMBOL_ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }
module.exports = function(exec){
  if(!SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[SYMBOL_ITERATOR]();
    iter.next = function(){ safe = true; };
    arr[SYMBOL_ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./$.wks":81}],44:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],45:[function(require,module,exports){
module.exports = {};
},{}],46:[function(require,module,exports){
var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};
},{}],47:[function(require,module,exports){
var $         = require('./$')
  , toIObject = require('./$.to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = $.getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./$":46,"./$.to-iobject":76}],48:[function(require,module,exports){
module.exports = false;
},{}],49:[function(require,module,exports){
// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x){
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};
},{}],50:[function(require,module,exports){
var global    = require('./$.global')
  , macrotask = require('./$.task').set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , isNode    = require('./$.cof')(process) == 'process'
  , head, last, notify;

var flush = function(){
  var parent, domain;
  if(isNode && (parent = process.domain)){
    process.domain = null;
    parent.exit();
  }
  while(head){
    domain = head.domain;
    if(domain)domain.enter();
    head.fn.call(); // <- currently we use it only for Promise - try / catch not required
    if(domain)domain.exit();
    head = head.next;
  } last = undefined;
  if(parent)parent.enter();
}

// Node.js
if(isNode){
  notify = function(){
    process.nextTick(flush);
  };
// browsers with MutationObserver
} else if(Observer){
  var toggle = 1
    , node   = document.createTextNode('');
  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
  notify = function(){
    node.data = toggle = -toggle;
  };
// for other environments - macrotask based on:
// - setImmediate
// - MessageChannel
// - window.postMessag
// - onreadystatechange
// - setTimeout
} else {
  notify = function(){
    // strange IE + webpack dev server bug - use .call(global)
    macrotask.call(global, flush);
  };
}

module.exports = function asap(fn){
  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
  if(last)last.next = task;
  if(!head){
    head = task;
    notify();
  } last = task;
};
},{"./$.cof":13,"./$.global":30,"./$.task":73}],51:[function(require,module,exports){
var $redef = require('./$.redef');
module.exports = function(target, src){
  for(var key in src)$redef(target, key, src[key]);
  return target;
};
},{"./$.redef":58}],52:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
module.exports = function(KEY, exec){
  var $def = require('./$.def')
    , fn   = (require('./$.core').Object || {})[KEY] || Object[KEY]
    , exp  = {};
  exp[KEY] = exec(fn);
  $def($def.S + $def.F * require('./$.fails')(function(){ fn(1); }), 'Object', exp);
};
},{"./$.core":18,"./$.def":20,"./$.fails":25}],53:[function(require,module,exports){
var $         = require('./$')
  , toIObject = require('./$.to-iobject');
module.exports = function(isEntries){
  return function(it){
    var O      = toIObject(it)
      , keys   = $.getKeys(O)
      , length = keys.length
      , i      = 0
      , result = Array(length)
      , key;
    if(isEntries)while(length > i)result[i] = [key = keys[i++], O[key]];
    else while(length > i)result[i] = O[keys[i++]];
    return result;
  };
};
},{"./$":46,"./$.to-iobject":76}],54:[function(require,module,exports){
// all object keys, includes non-enumerable and symbols
var $        = require('./$')
  , anObject = require('./$.an-object')
  , Reflect  = require('./$.global').Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
  var keys       = $.getNames(anObject(it))
    , getSymbols = $.getSymbols;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};
},{"./$":46,"./$.an-object":8,"./$.global":30}],55:[function(require,module,exports){
'use strict';
var path      = require('./$.path')
  , invoke    = require('./$.invoke')
  , aFunction = require('./$.a-function');
module.exports = function(/* ...pargs */){
  var fn     = aFunction(this)
    , length = arguments.length
    , pargs  = Array(length)
    , i      = 0
    , _      = path._
    , holder = false;
  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
  return function(/* ...args */){
    var that    = this
      , _length = arguments.length
      , j = 0, k = 0, args;
    if(!holder && !_length)return invoke(fn, pargs, that);
    args = pargs.slice();
    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
    while(_length > k)args.push(arguments[k++]);
    return invoke(fn, args, that);
  };
};
},{"./$.a-function":7,"./$.invoke":34,"./$.path":56}],56:[function(require,module,exports){
module.exports = require('./$.global');
},{"./$.global":30}],57:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],58:[function(require,module,exports){
// add fake Function#toString
// for correct work wrapped methods / constructors with methods like LoDash isNative
var global    = require('./$.global')
  , hide      = require('./$.hide')
  , SRC       = require('./$.uid')('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

require('./$.core').inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  if(typeof val == 'function'){
    hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    if(!('name' in val))val.name = key;
  }
  if(O === global){
    O[key] = val;
  } else {
    if(!safe)delete O[key];
    hide(O, key, val);
  }
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
},{"./$.core":18,"./$.global":30,"./$.hide":32,"./$.uid":79}],59:[function(require,module,exports){
module.exports = function(regExp, replace){
  var replacer = replace === Object(replace) ? function(part){
    return replace[part];
  } : replace;
  return function(it){
    return String(it).replace(regExp, replacer);
  };
};
},{}],60:[function(require,module,exports){
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};
},{}],61:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var getDesc  = require('./$').getDesc
  , isObject = require('./$.is-object')
  , anObject = require('./$.an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} // eslint-disable-line
    ? function(buggy, set){
        try {
          set = require('./$.ctx')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
          set({}, []);
        } catch(e){ buggy = true; }
        return function setPrototypeOf(O, proto){
          check(O, proto);
          if(buggy)O.__proto__ = proto;
          else set(O, proto);
          return O;
        };
      }()
    : undefined),
  check: check
};
},{"./$":46,"./$.an-object":8,"./$.ctx":19,"./$.is-object":38}],62:[function(require,module,exports){
var global = require('./$.global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$.global":30}],63:[function(require,module,exports){
// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x){
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};
},{}],64:[function(require,module,exports){
'use strict';
var $       = require('./$')
  , SPECIES = require('./$.wks')('species');
module.exports = function(C){
  if(require('./$.support-desc') && !(SPECIES in C))$.setDesc(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./$":46,"./$.support-desc":71,"./$.wks":81}],65:[function(require,module,exports){
module.exports = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};
},{}],66:[function(require,module,exports){
// true  -> String#at
// false -> String#codePointAt
var toInteger = require('./$.to-integer')
  , defined   = require('./$.defined');
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l
      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./$.defined":21,"./$.to-integer":75}],67:[function(require,module,exports){
// helper for String#{startsWith, endsWith, includes}
var defined = require('./$.defined')
  , cof     = require('./$.cof');

module.exports = function(that, searchString, NAME){
  if(cof(searchString) == 'RegExp')throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};
},{"./$.cof":13,"./$.defined":21}],68:[function(require,module,exports){
// https://github.com/ljharb/proposal-string-pad-left-right
var toLength = require('./$.to-length')
  , repeat   = require('./$.string-repeat')
  , defined  = require('./$.defined');

module.exports = function(that, maxLength, fillString, left){
  var S            = String(defined(that))
    , stringLength = S.length
    , fillStr      = fillString === undefined ? ' ' : String(fillString)
    , intMaxLength = toLength(maxLength);
  if(intMaxLength <= stringLength)return S;
  if(fillStr == '')fillStr = ' ';
  var fillLen = intMaxLength - stringLength
    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if(stringFiller.length > fillLen)stringFiller = left
    ? stringFiller.slice(stringFiller.length - fillLen)
    : stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};
},{"./$.defined":21,"./$.string-repeat":69,"./$.to-length":77}],69:[function(require,module,exports){
'use strict';
var toInteger = require('./$.to-integer')
  , defined   = require('./$.defined');

module.exports = function repeat(count){
  var str = String(defined(this))
    , res = ''
    , n   = toInteger(count);
  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
  return res;
};
},{"./$.defined":21,"./$.to-integer":75}],70:[function(require,module,exports){
// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = function(string, TYPE){
  string = String(defined(string));
  if(TYPE & 1)string = string.replace(ltrim, '');
  if(TYPE & 2)string = string.replace(rtrim, '');
  return string;
};

var $def    = require('./$.def')
  , defined = require('./$.defined')
  , spaces  = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
      '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
  , space   = '[' + spaces + ']'
  , non     = '\u200b\u0085'
  , ltrim   = RegExp('^' + space + space + '*')
  , rtrim   = RegExp(space + space + '*$');

module.exports = function(KEY, exec){
  var exp  = {};
  exp[KEY] = exec(trim);
  $def($def.P + $def.F * require('./$.fails')(function(){
    return !!spaces[KEY]() || non[KEY]() != non;
  }), 'String', exp);
};
},{"./$.def":20,"./$.defined":21,"./$.fails":25}],71:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./$.fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./$.fails":25}],72:[function(require,module,exports){
var has  = require('./$.has')
  , hide = require('./$.hide')
  , TAG  = require('./$.wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))hide(it, TAG, tag);
};
},{"./$.has":31,"./$.hide":32,"./$.wks":81}],73:[function(require,module,exports){
'use strict';
var ctx                = require('./$.ctx')
  , invoke             = require('./$.invoke')
  , html               = require('./$.html')
  , cel                = require('./$.dom-create')
  , global             = require('./$.global')
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listner = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(require('./$.cof')(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listner;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScript){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listner, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./$.cof":13,"./$.ctx":19,"./$.dom-create":22,"./$.global":30,"./$.html":33,"./$.invoke":34}],74:[function(require,module,exports){
var toInteger = require('./$.to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./$.to-integer":75}],75:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],76:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./$.iobject')
  , defined = require('./$.defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./$.defined":21,"./$.iobject":35}],77:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./$.to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./$.to-integer":75}],78:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./$.defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./$.defined":21}],79:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],80:[function(require,module,exports){
// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = require('./$.wks')('unscopables');
if(!(UNSCOPABLES in []))require('./$.hide')(Array.prototype, UNSCOPABLES, {});
module.exports = function(key){
  [][UNSCOPABLES][key] = true;
};
},{"./$.hide":32,"./$.wks":81}],81:[function(require,module,exports){
var store  = require('./$.shared')('wks')
  , Symbol = require('./$.global').Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || require('./$.uid'))('Symbol.' + name));
};
},{"./$.global":30,"./$.shared":62,"./$.uid":79}],82:[function(require,module,exports){
var classof   = require('./$.classof')
  , ITERATOR  = require('./$.wks')('iterator')
  , Iterators = require('./$.iterators');
module.exports = require('./$.core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};
},{"./$.classof":12,"./$.core":18,"./$.iterators":45,"./$.wks":81}],83:[function(require,module,exports){
'use strict';
var $                = require('./$')
  , SUPPORT_DESC     = require('./$.support-desc')
  , createDesc       = require('./$.property-desc')
  , html             = require('./$.html')
  , cel              = require('./$.dom-create')
  , has              = require('./$.has')
  , cof              = require('./$.cof')
  , $def             = require('./$.def')
  , invoke           = require('./$.invoke')
  , arrayMethod      = require('./$.array-methods')
  , IE_PROTO         = require('./$.uid')('__proto__')
  , isObject         = require('./$.is-object')
  , anObject         = require('./$.an-object')
  , aFunction        = require('./$.a-function')
  , toObject         = require('./$.to-object')
  , toIObject        = require('./$.to-iobject')
  , toInteger        = require('./$.to-integer')
  , toIndex          = require('./$.to-index')
  , toLength         = require('./$.to-length')
  , IObject          = require('./$.iobject')
  , fails            = require('./$.fails')
  , ObjectProto      = Object.prototype
  , A                = []
  , _slice           = A.slice
  , _join            = A.join
  , defineProperty   = $.setDesc
  , getOwnDescriptor = $.getDesc
  , defineProperties = $.setDescs
  , $indexOf         = require('./$.array-includes')(false)
  , factories        = {}
  , IE8_DOM_DEFINE;

if(!SUPPORT_DESC){
  IE8_DOM_DEFINE = !fails(function(){
    return defineProperty(cel('div'), 'a', {get: function(){ return 7; }}).a != 7;
  });
  $.setDesc = function(O, P, Attributes){
    if(IE8_DOM_DEFINE)try {
      return defineProperty(O, P, Attributes);
    } catch(e){ /* empty */ }
    if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
    if('value' in Attributes)anObject(O)[P] = Attributes.value;
    return O;
  };
  $.getDesc = function(O, P){
    if(IE8_DOM_DEFINE)try {
      return getOwnDescriptor(O, P);
    } catch(e){ /* empty */ }
    if(has(O, P))return createDesc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P]);
  };
  $.setDescs = defineProperties = function(O, Properties){
    anObject(O);
    var keys   = $.getKeys(Properties)
      , length = keys.length
      , i = 0
      , P;
    while(length > i)$.setDesc(O, P = keys[i++], Properties[P]);
    return O;
  };
}
$def($def.S + $def.F * !SUPPORT_DESC, 'Object', {
  // 19.1.2.6 / 15.2.3.3 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $.getDesc,
  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
  defineProperty: $.setDesc,
  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
  defineProperties: defineProperties
});

  // IE 8- don't enum bug keys
var keys1 = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,' +
            'toLocaleString,toString,valueOf').split(',')
  // Additional keys for getOwnPropertyNames
  , keys2 = keys1.concat('length', 'prototype')
  , keysLen1 = keys1.length;

// Create object with `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = cel('iframe')
    , i      = keysLen1
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write('<script>document.F=Object</script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict.prototype[keys1[i]];
  return createDict();
};
var createGetKeys = function(names, length){
  return function(object){
    var O      = toIObject(object)
      , i      = 0
      , result = []
      , key;
    for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while(length > i)if(has(O, key = names[i++])){
      ~$indexOf(result, key) || result.push(key);
    }
    return result;
  };
};
var Empty = function(){};
$def($def.S, 'Object', {
  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
  getPrototypeOf: $.getProto = $.getProto || function(O){
    O = toObject(O);
    if(has(O, IE_PROTO))return O[IE_PROTO];
    if(typeof O.constructor == 'function' && O instanceof O.constructor){
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectProto : null;
  },
  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $.getNames = $.getNames || createGetKeys(keys2, keys2.length, true),
  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
  create: $.create = $.create || function(O, /*?*/Properties){
    var result;
    if(O !== null){
      Empty.prototype = anObject(O);
      result = new Empty();
      Empty.prototype = null;
      // add "__proto__" for Object.getPrototypeOf shim
      result[IE_PROTO] = O;
    } else result = createDict();
    return Properties === undefined ? result : defineProperties(result, Properties);
  },
  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
  keys: $.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, false)
});

var construct = function(F, len, args){
  if(!(len in factories)){
    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  }
  return factories[len](F, args);
};

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
$def($def.P, 'Function', {
  bind: function bind(that /*, args... */){
    var fn       = aFunction(this)
      , partArgs = _slice.call(arguments, 1);
    var bound = function(/* args... */){
      var args = partArgs.concat(_slice.call(arguments));
      return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
    };
    if(isObject(fn.prototype))bound.prototype = fn.prototype;
    return bound;
  }
});

// fallback for not array-like ES3 strings and DOM objects
var buggySlice = fails(function(){
  if(html)_slice.call(html);
});

$def($def.P + $def.F * buggySlice, 'Array', {
  slice: function(begin, end){
    var len   = toLength(this.length)
      , klass = cof(this);
    end = end === undefined ? len : end;
    if(klass == 'Array')return _slice.call(this, begin, end);
    var start  = toIndex(begin, len)
      , upTo   = toIndex(end, len)
      , size   = toLength(upTo - start)
      , cloned = Array(size)
      , i      = 0;
    for(; i < size; i++)cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});
$def($def.P + $def.F * (IObject != Object), 'Array', {
  join: function(){
    return _join.apply(IObject(this), arguments);
  }
});

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
$def($def.S, 'Array', {isArray: function(arg){ return cof(arg) == 'Array'; }});

var createArrayReduce = function(isRight){
  return function(callbackfn, memo){
    aFunction(callbackfn);
    var O      = IObject(this)
      , length = toLength(O.length)
      , index  = isRight ? length - 1 : 0
      , i      = isRight ? -1 : 1;
    if(arguments.length < 2)for(;;){
      if(index in O){
        memo = O[index];
        index += i;
        break;
      }
      index += i;
      if(isRight ? index < 0 : length <= index){
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for(;isRight ? index >= 0 : length > index; index += i)if(index in O){
      memo = callbackfn(memo, O[index], index, this);
    }
    return memo;
  };
};
var methodize = function($fn){
  return function(arg1/*, arg2 = undefined */){
    return $fn(this, arg1, arguments[1]);
  };
};
$def($def.P, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: $.each = $.each || methodize(arrayMethod(0)),
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: methodize(arrayMethod(1)),
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: methodize(arrayMethod(2)),
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: methodize(arrayMethod(3)),
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: methodize(arrayMethod(4)),
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: createArrayReduce(false),
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: createArrayReduce(true),
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: methodize($indexOf),
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function(el, fromIndex /* = @[*-1] */){
    var O      = toIObject(this)
      , length = toLength(O.length)
      , index  = length - 1;
    if(arguments.length > 1)index = Math.min(index, toInteger(fromIndex));
    if(index < 0)index = toLength(length + index);
    for(;index >= 0; index--)if(index in O)if(O[index] === el)return index;
    return -1;
  }
});

// 20.3.3.1 / 15.9.4.4 Date.now()
$def($def.S, 'Date', {now: function(){ return +new Date; }});

var lz = function(num){
  return num > 9 ? num : '0' + num;
};

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
// PhantomJS and old webkit had a broken Date implementation.
var date       = new Date(-5e13 - 1)
  , brokenDate = !(date.toISOString && date.toISOString() == '0385-07-25T07:06:39.999Z'
      && fails(function(){ new Date(NaN).toISOString(); }));
$def($def.P + $def.F * brokenDate, 'Date', {
  toISOString: function toISOString(){
    if(!isFinite(this))throw RangeError('Invalid time value');
    var d = this
      , y = d.getUTCFullYear()
      , m = d.getUTCMilliseconds()
      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
  }
});
},{"./$":46,"./$.a-function":7,"./$.an-object":8,"./$.array-includes":9,"./$.array-methods":10,"./$.cof":13,"./$.def":20,"./$.dom-create":22,"./$.fails":25,"./$.has":31,"./$.html":33,"./$.invoke":34,"./$.iobject":35,"./$.is-object":38,"./$.property-desc":57,"./$.support-desc":71,"./$.to-index":74,"./$.to-integer":75,"./$.to-iobject":76,"./$.to-length":77,"./$.to-object":78,"./$.uid":79}],84:[function(require,module,exports){
'use strict';
var $def     = require('./$.def')
  , toObject = require('./$.to-object')
  , toIndex  = require('./$.to-index')
  , toLength = require('./$.to-length');
$def($def.P, 'Array', {
  // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
  copyWithin: function copyWithin(target/* = 0 */, start /* = 0, end = @length */){
    var O     = toObject(this)
      , len   = toLength(O.length)
      , to    = toIndex(target, len)
      , from  = toIndex(start, len)
      , end   = arguments[2]
      , fin   = end === undefined ? len : toIndex(end, len)
      , count = Math.min(fin - from, len - to)
      , inc   = 1;
    if(from < to && to < from + count){
      inc  = -1;
      from = from + count - 1;
      to   = to   + count - 1;
    }
    while(count-- > 0){
      if(from in O)O[to] = O[from];
      else delete O[to];
      to   += inc;
      from += inc;
    } return O;
  }
});
require('./$.unscope')('copyWithin');
},{"./$.def":20,"./$.to-index":74,"./$.to-length":77,"./$.to-object":78,"./$.unscope":80}],85:[function(require,module,exports){
'use strict';
var $def     = require('./$.def')
  , toObject = require('./$.to-object')
  , toIndex  = require('./$.to-index')
  , toLength = require('./$.to-length');
$def($def.P, 'Array', {
  // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
  fill: function fill(value /*, start = 0, end = @length */){
    var O      = toObject(this, true)
      , length = toLength(O.length)
      , index  = toIndex(arguments[1], length)
      , end    = arguments[2]
      , endPos = end === undefined ? length : toIndex(end, length);
    while(endPos > index)O[index++] = value;
    return O;
  }
});
require('./$.unscope')('fill');
},{"./$.def":20,"./$.to-index":74,"./$.to-length":77,"./$.to-object":78,"./$.unscope":80}],86:[function(require,module,exports){
'use strict';
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var KEY    = 'findIndex'
  , $def   = require('./$.def')
  , forced = true
  , $find  = require('./$.array-methods')(6);
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$def($def.P + $def.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments[1]);
  }
});
require('./$.unscope')(KEY);
},{"./$.array-methods":10,"./$.def":20,"./$.unscope":80}],87:[function(require,module,exports){
'use strict';
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var KEY    = 'find'
  , $def   = require('./$.def')
  , forced = true
  , $find  = require('./$.array-methods')(5);
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$def($def.P + $def.F * forced, 'Array', {
  find: function find(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments[1]);
  }
});
require('./$.unscope')(KEY);
},{"./$.array-methods":10,"./$.def":20,"./$.unscope":80}],88:[function(require,module,exports){
'use strict';
var ctx         = require('./$.ctx')
  , $def        = require('./$.def')
  , toObject    = require('./$.to-object')
  , call        = require('./$.iter-call')
  , isArrayIter = require('./$.is-array-iter')
  , toLength    = require('./$.to-length')
  , getIterFn   = require('./core.get-iterator-method');
$def($def.S + $def.F * !require('./$.iter-detect')(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , mapfn   = arguments[1]
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, arguments[2], 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
      }
    } else {
      for(result = new C(length = toLength(O.length)); length > index; index++){
        result[index] = mapping ? mapfn(O[index], index) : O[index];
      }
    }
    result.length = index;
    return result;
  }
});
},{"./$.ctx":19,"./$.def":20,"./$.is-array-iter":36,"./$.iter-call":40,"./$.iter-detect":43,"./$.to-length":77,"./$.to-object":78,"./core.get-iterator-method":82}],89:[function(require,module,exports){
'use strict';
var setUnscope = require('./$.unscope')
  , step       = require('./$.iter-step')
  , Iterators  = require('./$.iterators')
  , toIObject  = require('./$.to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
require('./$.iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

setUnscope('keys');
setUnscope('values');
setUnscope('entries');
},{"./$.iter-define":42,"./$.iter-step":44,"./$.iterators":45,"./$.to-iobject":76,"./$.unscope":80}],90:[function(require,module,exports){
'use strict';
var $def = require('./$.def');
$def($def.S, 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */){
    var index  = 0
      , length = arguments.length
      , result = new (typeof this == 'function' ? this : Array)(length);
    while(length > index)result[index] = arguments[index++];
    result.length = length;
    return result;
  }
});
},{"./$.def":20}],91:[function(require,module,exports){
require('./$.species')(Array);
},{"./$.species":64}],92:[function(require,module,exports){
'use strict';
var $             = require('./$')
  , isObject      = require('./$.is-object')
  , HAS_INSTANCE  = require('./$.wks')('hasInstance')
  , FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if(!(HAS_INSTANCE in FunctionProto))$.setDesc(FunctionProto, HAS_INSTANCE, {value: function(O){
  if(typeof this != 'function' || !isObject(O))return false;
  if(!isObject(this.prototype))return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while(O = $.getProto(O))if(this.prototype === O)return true;
  return false;
}});
},{"./$":46,"./$.is-object":38,"./$.wks":81}],93:[function(require,module,exports){
var setDesc    = require('./$').setDesc
  , createDesc = require('./$.property-desc')
  , has        = require('./$.has')
  , FProto     = Function.prototype
  , nameRE     = /^\s*function ([^ (]*)/
  , NAME       = 'name';
// 19.2.4.2 name
NAME in FProto || require('./$.support-desc') && setDesc(FProto, NAME, {
  configurable: true,
  get: function(){
    var match = ('' + this).match(nameRE)
      , name  = match ? match[1] : '';
    has(this, NAME) || setDesc(this, NAME, createDesc(5, name));
    return name;
  }
});
},{"./$":46,"./$.has":31,"./$.property-desc":57,"./$.support-desc":71}],94:[function(require,module,exports){
'use strict';
var strong = require('./$.collection-strong');

// 23.1 Map Objects
require('./$.collection')('Map', function(get){
  return function Map(){ return get(this, arguments[0]); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);
},{"./$.collection":17,"./$.collection-strong":14}],95:[function(require,module,exports){
// 20.2.2.3 Math.acosh(x)
var $def   = require('./$.def')
  , log1p  = require('./$.log1p')
  , sqrt   = Math.sqrt
  , $acosh = Math.acosh;

// V8 bug https://code.google.com/p/v8/issues/detail?id=3509 
$def($def.S + $def.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710), 'Math', {
  acosh: function acosh(x){
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});
},{"./$.def":20,"./$.log1p":49}],96:[function(require,module,exports){
// 20.2.2.5 Math.asinh(x)
var $def = require('./$.def');

function asinh(x){
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

$def($def.S, 'Math', {asinh: asinh});
},{"./$.def":20}],97:[function(require,module,exports){
// 20.2.2.7 Math.atanh(x)
var $def = require('./$.def');

$def($def.S, 'Math', {
  atanh: function atanh(x){
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});
},{"./$.def":20}],98:[function(require,module,exports){
// 20.2.2.9 Math.cbrt(x)
var $def = require('./$.def')
  , sign = require('./$.sign');

$def($def.S, 'Math', {
  cbrt: function cbrt(x){
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});
},{"./$.def":20,"./$.sign":63}],99:[function(require,module,exports){
// 20.2.2.11 Math.clz32(x)
var $def = require('./$.def');

$def($def.S, 'Math', {
  clz32: function clz32(x){
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});
},{"./$.def":20}],100:[function(require,module,exports){
// 20.2.2.12 Math.cosh(x)
var $def = require('./$.def')
  , exp  = Math.exp;

$def($def.S, 'Math', {
  cosh: function cosh(x){
    return (exp(x = +x) + exp(-x)) / 2;
  }
});
},{"./$.def":20}],101:[function(require,module,exports){
// 20.2.2.14 Math.expm1(x)
var $def = require('./$.def');

$def($def.S, 'Math', {expm1: require('./$.expm1')});
},{"./$.def":20,"./$.expm1":24}],102:[function(require,module,exports){
// 20.2.2.16 Math.fround(x)
var $def  = require('./$.def')
  , sign  = require('./$.sign')
  , pow   = Math.pow
  , EPSILON   = pow(2, -52)
  , EPSILON32 = pow(2, -23)
  , MAX32     = pow(2, 127) * (2 - EPSILON32)
  , MIN32     = pow(2, -126);

var roundTiesToEven = function(n){
  return n + 1 / EPSILON - 1 / EPSILON;
};


$def($def.S, 'Math', {
  fround: function fround(x){
    var $abs  = Math.abs(x)
      , $sign = sign(x)
      , a, result;
    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs);
    if(result > MAX32 || result != result)return $sign * Infinity;
    return $sign * result;
  }
});
},{"./$.def":20,"./$.sign":63}],103:[function(require,module,exports){
// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $def = require('./$.def')
  , abs  = Math.abs;

$def($def.S, 'Math', {
  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
    var sum  = 0
      , i    = 0
      , len  = arguments.length
      , larg = 0
      , arg, div;
    while(i < len){
      arg = abs(arguments[i++]);
      if(larg < arg){
        div  = larg / arg;
        sum  = sum * div * div + 1;
        larg = arg;
      } else if(arg > 0){
        div  = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});
},{"./$.def":20}],104:[function(require,module,exports){
// 20.2.2.18 Math.imul(x, y)
var $def = require('./$.def');

// WebKit fails with big numbers
$def($def.S + $def.F * require('./$.fails')(function(){
  return Math.imul(0xffffffff, 5) != -5;
}), 'Math', {
  imul: function imul(x, y){
    var UINT16 = 0xffff
      , xn = +x
      , yn = +y
      , xl = UINT16 & xn
      , yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});
},{"./$.def":20,"./$.fails":25}],105:[function(require,module,exports){
// 20.2.2.21 Math.log10(x)
var $def = require('./$.def');

$def($def.S, 'Math', {
  log10: function log10(x){
    return Math.log(x) / Math.LN10;
  }
});
},{"./$.def":20}],106:[function(require,module,exports){
// 20.2.2.20 Math.log1p(x)
var $def = require('./$.def');

$def($def.S, 'Math', {log1p: require('./$.log1p')});
},{"./$.def":20,"./$.log1p":49}],107:[function(require,module,exports){
// 20.2.2.22 Math.log2(x)
var $def = require('./$.def');

$def($def.S, 'Math', {
  log2: function log2(x){
    return Math.log(x) / Math.LN2;
  }
});
},{"./$.def":20}],108:[function(require,module,exports){
// 20.2.2.28 Math.sign(x)
var $def = require('./$.def');

$def($def.S, 'Math', {sign: require('./$.sign')});
},{"./$.def":20,"./$.sign":63}],109:[function(require,module,exports){
// 20.2.2.30 Math.sinh(x)
var $def  = require('./$.def')
  , expm1 = require('./$.expm1')
  , exp   = Math.exp;

$def($def.S, 'Math', {
  sinh: function sinh(x){
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});
},{"./$.def":20,"./$.expm1":24}],110:[function(require,module,exports){
// 20.2.2.33 Math.tanh(x)
var $def  = require('./$.def')
  , expm1 = require('./$.expm1')
  , exp   = Math.exp;

$def($def.S, 'Math', {
  tanh: function tanh(x){
    var a = expm1(x = +x)
      , b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});
},{"./$.def":20,"./$.expm1":24}],111:[function(require,module,exports){
// 20.2.2.34 Math.trunc(x)
var $def = require('./$.def');

$def($def.S, 'Math', {
  trunc: function trunc(it){
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});
},{"./$.def":20}],112:[function(require,module,exports){
'use strict';
var $          = require('./$')
  , global     = require('./$.global')
  , has        = require('./$.has')
  , cof        = require('./$.cof')
  , isObject   = require('./$.is-object')
  , fails      = require('./$.fails')
  , NUMBER     = 'Number'
  , $Number    = global[NUMBER]
  , Base       = $Number
  , proto      = $Number.prototype
  // Opera ~12 has broken Object#toString
  , BROKEN_COF = cof($.create(proto)) == NUMBER;
var toPrimitive = function(it){
  var fn, val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to number");
};
var toNumber = function(it){
  if(isObject(it))it = toPrimitive(it);
  if(typeof it == 'string' && it.length > 2 && it.charCodeAt(0) == 48){
    var binary = false;
    switch(it.charCodeAt(1)){
      case 66 : case 98  : binary = true;
      case 79 : case 111 : return parseInt(it.slice(2), binary ? 2 : 8);
    }
  } return +it;
};
if(!($Number('0o1') && $Number('0b1'))){
  $Number = function Number(it){
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? new Base(toNumber(it)) : toNumber(it);
  };
  $.each.call(require('./$.support-desc') ? $.getNames(Base) : (
      // ES3:
      'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
      // ES6 (in case, if modules with ES6 Number statics required before):
      'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
      'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
    ).split(','), function(key){
      if(has(Base, key) && !has($Number, key)){
        $.setDesc($Number, key, $.getDesc(Base, key));
      }
    }
  );
  $Number.prototype = proto;
  proto.constructor = $Number;
  require('./$.redef')(global, NUMBER, $Number);
}
},{"./$":46,"./$.cof":13,"./$.fails":25,"./$.global":30,"./$.has":31,"./$.is-object":38,"./$.redef":58,"./$.support-desc":71}],113:[function(require,module,exports){
// 20.1.2.1 Number.EPSILON
var $def = require('./$.def');

$def($def.S, 'Number', {EPSILON: Math.pow(2, -52)});
},{"./$.def":20}],114:[function(require,module,exports){
// 20.1.2.2 Number.isFinite(number)
var $def      = require('./$.def')
  , _isFinite = require('./$.global').isFinite;

$def($def.S, 'Number', {
  isFinite: function isFinite(it){
    return typeof it == 'number' && _isFinite(it);
  }
});
},{"./$.def":20,"./$.global":30}],115:[function(require,module,exports){
// 20.1.2.3 Number.isInteger(number)
var $def = require('./$.def');

$def($def.S, 'Number', {isInteger: require('./$.is-integer')});
},{"./$.def":20,"./$.is-integer":37}],116:[function(require,module,exports){
// 20.1.2.4 Number.isNaN(number)
var $def = require('./$.def');

$def($def.S, 'Number', {
  isNaN: function isNaN(number){
    return number != number;
  }
});
},{"./$.def":20}],117:[function(require,module,exports){
// 20.1.2.5 Number.isSafeInteger(number)
var $def      = require('./$.def')
  , isInteger = require('./$.is-integer')
  , abs       = Math.abs;

$def($def.S, 'Number', {
  isSafeInteger: function isSafeInteger(number){
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});
},{"./$.def":20,"./$.is-integer":37}],118:[function(require,module,exports){
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $def = require('./$.def');

$def($def.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});
},{"./$.def":20}],119:[function(require,module,exports){
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $def = require('./$.def');

$def($def.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});
},{"./$.def":20}],120:[function(require,module,exports){
// 20.1.2.12 Number.parseFloat(string)
var $def = require('./$.def');

$def($def.S, 'Number', {parseFloat: parseFloat});
},{"./$.def":20}],121:[function(require,module,exports){
// 20.1.2.13 Number.parseInt(string, radix)
var $def = require('./$.def');

$def($def.S, 'Number', {parseInt: parseInt});
},{"./$.def":20}],122:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $def = require('./$.def');
$def($def.S, 'Object', {assign: require('./$.assign')});
},{"./$.assign":11,"./$.def":20}],123:[function(require,module,exports){
// 19.1.2.5 Object.freeze(O)
var isObject = require('./$.is-object');

require('./$.object-sap')('freeze', function($freeze){
  return function freeze(it){
    return $freeze && isObject(it) ? $freeze(it) : it;
  };
});
},{"./$.is-object":38,"./$.object-sap":52}],124:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./$.to-iobject');

require('./$.object-sap')('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});
},{"./$.object-sap":52,"./$.to-iobject":76}],125:[function(require,module,exports){
// 19.1.2.7 Object.getOwnPropertyNames(O)
require('./$.object-sap')('getOwnPropertyNames', function(){
  return require('./$.get-names').get;
});
},{"./$.get-names":29,"./$.object-sap":52}],126:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./$.to-object');

require('./$.object-sap')('getPrototypeOf', function($getPrototypeOf){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./$.object-sap":52,"./$.to-object":78}],127:[function(require,module,exports){
// 19.1.2.11 Object.isExtensible(O)
var isObject = require('./$.is-object');

require('./$.object-sap')('isExtensible', function($isExtensible){
  return function isExtensible(it){
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});
},{"./$.is-object":38,"./$.object-sap":52}],128:[function(require,module,exports){
// 19.1.2.12 Object.isFrozen(O)
var isObject = require('./$.is-object');

require('./$.object-sap')('isFrozen', function($isFrozen){
  return function isFrozen(it){
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});
},{"./$.is-object":38,"./$.object-sap":52}],129:[function(require,module,exports){
// 19.1.2.13 Object.isSealed(O)
var isObject = require('./$.is-object');

require('./$.object-sap')('isSealed', function($isSealed){
  return function isSealed(it){
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});
},{"./$.is-object":38,"./$.object-sap":52}],130:[function(require,module,exports){
// 19.1.3.10 Object.is(value1, value2)
var $def = require('./$.def');
$def($def.S, 'Object', {
  is: require('./$.same')
});
},{"./$.def":20,"./$.same":60}],131:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./$.to-object');

require('./$.object-sap')('keys', function($keys){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./$.object-sap":52,"./$.to-object":78}],132:[function(require,module,exports){
// 19.1.2.15 Object.preventExtensions(O)
var isObject = require('./$.is-object');

require('./$.object-sap')('preventExtensions', function($preventExtensions){
  return function preventExtensions(it){
    return $preventExtensions && isObject(it) ? $preventExtensions(it) : it;
  };
});
},{"./$.is-object":38,"./$.object-sap":52}],133:[function(require,module,exports){
// 19.1.2.17 Object.seal(O)
var isObject = require('./$.is-object');

require('./$.object-sap')('seal', function($seal){
  return function seal(it){
    return $seal && isObject(it) ? $seal(it) : it;
  };
});
},{"./$.is-object":38,"./$.object-sap":52}],134:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $def = require('./$.def');
$def($def.S, 'Object', {setPrototypeOf: require('./$.set-proto').set});
},{"./$.def":20,"./$.set-proto":61}],135:[function(require,module,exports){
'use strict';
// 19.1.3.6 Object.prototype.toString()
var classof = require('./$.classof')
  , test    = {};
test[require('./$.wks')('toStringTag')] = 'z';
if(test + '' != '[object z]'){
  require('./$.redef')(Object.prototype, 'toString', function toString(){
    return '[object ' + classof(this) + ']';
  }, true);
}
},{"./$.classof":12,"./$.redef":58,"./$.wks":81}],136:[function(require,module,exports){
'use strict';
var $          = require('./$')
  , LIBRARY    = require('./$.library')
  , global     = require('./$.global')
  , ctx        = require('./$.ctx')
  , classof    = require('./$.classof')
  , $def       = require('./$.def')
  , isObject   = require('./$.is-object')
  , anObject   = require('./$.an-object')
  , aFunction  = require('./$.a-function')
  , strictNew  = require('./$.strict-new')
  , forOf      = require('./$.for-of')
  , setProto   = require('./$.set-proto').set
  , same       = require('./$.same')
  , species    = require('./$.species')
  , SPECIES    = require('./$.wks')('species')
  , RECORD     = require('./$.uid')('record')
  , asap       = require('./$.microtask')
  , PROMISE    = 'Promise'
  , process    = global.process
  , isNode     = classof(process) == 'process'
  , P          = global[PROMISE]
  , Wrapper;

var testResolve = function(sub){
  var test = new P(function(){});
  if(sub)test.constructor = Object;
  return P.resolve(test) === test;
};

var useNative = function(){
  var works = false;
  function P2(x){
    var self = new P(x);
    setProto(self, P2.prototype);
    return self;
  }
  try {
    works = P && P.resolve && testResolve();
    setProto(P2, P);
    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
    // actual Firefox has broken subclass support, test that
    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
      works = false;
    }
    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
    if(works && require('./$.support-desc')){
      var thenableThenGotten = false;
      P.resolve($.setDesc({}, 'then', {
        get: function(){ thenableThenGotten = true; }
      }));
      works = thenableThenGotten;
    }
  } catch(e){ works = false; }
  return works;
}();

// helpers
var isPromise = function(it){
  return isObject(it) && (useNative ? classof(it) == 'Promise' : RECORD in it);
};
var sameConstructor = function(a, b){
  // library wrapper special case
  if(LIBRARY && a === P && b === Wrapper)return true;
  return same(a, b);
};
var getConstructor = function(C){
  var S = anObject(C)[SPECIES];
  return S != undefined ? S : C;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function(record, isReject){
  if(record.n)return;
  record.n = true;
  var chain = record.c;
  asap(function(){
    var value = record.v
      , ok    = record.s == 1
      , i     = 0;
    var run = function(react){
      var cb = ok ? react.ok : react.fail
        , ret, then;
      try {
        if(cb){
          if(!ok)record.h = true;
          ret = cb === true ? value : cb(value);
          if(ret === react.P){
            react.rej(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(ret)){
            then.call(ret, react.res, react.rej);
          } else react.res(ret);
        } else react.rej(value);
      } catch(err){
        react.rej(err);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    chain.length = 0;
    record.n = false;
    if(isReject)setTimeout(function(){
      asap(function(){
        if(isUnhandled(record.p)){
          if(isNode){
            process.emit('unhandledRejection', value, record.p);
          } else if(global.console && console.error){
            console.error('Unhandled promise rejection', value);
          }
        }
        record.a = undefined;
      });
    }, 1);
  });
};
var isUnhandled = function(promise){
  var record = promise[RECORD]
    , chain  = record.a || record.c
    , i      = 0
    , react;
  if(record.h)return false;
  while(chain.length > i){
    react = chain[i++];
    if(react.fail || !isUnhandled(react.P))return false;
  } return true;
};
var $reject = function(value){
  var record = this;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  record.v = value;
  record.s = 2;
  record.a = record.c.slice();
  notify(record, true);
};
var $resolve = function(value){
  var record = this
    , then;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  try {
    if(then = isThenable(value)){
      asap(function(){
        var wrapper = {r: record, d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      record.v = value;
      record.s = 1;
      notify(record, false);
    }
  } catch(e){
    $reject.call({r: record, d: false}, e); // wrap
  }
};

// constructor polyfill
if(!useNative){
  // 25.4.3.1 Promise(executor)
  P = function Promise(executor){
    aFunction(executor);
    var record = {
      p: strictNew(this, P, PROMISE),         // <- promise
      c: [],                                  // <- awaiting reactions
      a: undefined,                           // <- checked in isUnhandled reactions
      s: 0,                                   // <- state
      d: false,                               // <- done
      v: undefined,                           // <- value
      h: false,                               // <- handled rejection
      n: false                                // <- notify
    };
    this[RECORD] = record;
    try {
      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
    } catch(err){
      $reject.call(record, err);
    }
  };
  require('./$.mix')(P.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var S = anObject(anObject(this).constructor)[SPECIES];
      var react = {
        ok:   typeof onFulfilled == 'function' ? onFulfilled : true,
        fail: typeof onRejected == 'function'  ? onRejected  : false
      };
      var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
        react.res = aFunction(res);
        react.rej = aFunction(rej);
      });
      var record = this[RECORD];
      record.c.push(react);
      if(record.a)record.a.push(react);
      if(record.s)notify(record, false);
      return promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
}

// export
$def($def.G + $def.W + $def.F * !useNative, {Promise: P});
require('./$.tag')(P, PROMISE);
species(P);
species(Wrapper = require('./$.core')[PROMISE]);

// statics
$def($def.S + $def.F * !useNative, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    return new this(function(res, rej){ rej(r); });
  }
});
$def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    return isPromise(x) && sameConstructor(x.constructor, this)
      ? x : new this(function(res){ res(x); });
  }
});
$def($def.S + $def.F * !(useNative && require('./$.iter-detect')(function(iter){
  P.all(iter)['catch'](function(){});
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C      = getConstructor(this)
      , values = [];
    return new C(function(res, rej){
      forOf(iterable, false, values.push, values);
      var remaining = values.length
        , results   = Array(remaining);
      if(remaining)$.each.call(values, function(promise, index){
        C.resolve(promise).then(function(value){
          results[index] = value;
          --remaining || res(results);
        }, rej);
      });
      else res(results);
    });
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C = getConstructor(this);
    return new C(function(res, rej){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(res, rej);
      });
    });
  }
});
},{"./$":46,"./$.a-function":7,"./$.an-object":8,"./$.classof":12,"./$.core":18,"./$.ctx":19,"./$.def":20,"./$.for-of":28,"./$.global":30,"./$.is-object":38,"./$.iter-detect":43,"./$.library":48,"./$.microtask":50,"./$.mix":51,"./$.same":60,"./$.set-proto":61,"./$.species":64,"./$.strict-new":65,"./$.support-desc":71,"./$.tag":72,"./$.uid":79,"./$.wks":81}],137:[function(require,module,exports){
// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $def   = require('./$.def')
  , _apply = Function.apply;

$def($def.S, 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList){
    return _apply.call(target, thisArgument, argumentsList);
  }
});
},{"./$.def":20}],138:[function(require,module,exports){
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $         = require('./$')
  , $def      = require('./$.def')
  , aFunction = require('./$.a-function')
  , anObject  = require('./$.an-object')
  , isObject  = require('./$.is-object')
  , bind      = Function.bind || require('./$.core').Function.prototype.bind;

// MS Edge supports only 2 arguments
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
$def($def.S + $def.F * require('./$.fails')(function(){
  function F(){}
  return !(Reflect.construct(function(){}, [], F) instanceof F);
}), 'Reflect', {
  construct: function construct(Target, args /*, newTarget*/){
    aFunction(Target);
    if(arguments.length < 3){
      // w/o newTarget, optimization for 0-4 arguments
      if(args != undefined)switch(anObject(args).length){
        case 0: return new Target;
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args));
    }
    // with newTarget, not support built-in constructors
    var proto    = aFunction(arguments[2]).prototype
      , instance = $.create(isObject(proto) ? proto : Object.prototype)
      , result   = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});
},{"./$":46,"./$.a-function":7,"./$.an-object":8,"./$.core":18,"./$.def":20,"./$.fails":25,"./$.is-object":38}],139:[function(require,module,exports){
// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var $        = require('./$')
  , $def     = require('./$.def')
  , anObject = require('./$.an-object');

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$def($def.S + $def.F * require('./$.fails')(function(){
  Reflect.defineProperty($.setDesc({}, 1, {value: 1}), 1, {value: 2});
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes){
    anObject(target);
    try {
      $.setDesc(target, propertyKey, attributes);
      return true;
    } catch(e){
      return false;
    }
  }
});
},{"./$":46,"./$.an-object":8,"./$.def":20,"./$.fails":25}],140:[function(require,module,exports){
// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $def     = require('./$.def')
  , getDesc  = require('./$').getDesc
  , anObject = require('./$.an-object');

$def($def.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey){
    var desc = getDesc(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});
},{"./$":46,"./$.an-object":8,"./$.def":20}],141:[function(require,module,exports){
'use strict';
// 26.1.5 Reflect.enumerate(target)
var $def     = require('./$.def')
  , anObject = require('./$.an-object');
var Enumerate = function(iterated){
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = []       // keys
    , key;
  for(key in iterated)keys.push(key);
};
require('./$.iter-create')(Enumerate, 'Object', function(){
  var that = this
    , keys = that._k
    , key;
  do {
    if(that._i >= keys.length)return {value: undefined, done: true};
  } while(!((key = keys[that._i++]) in that._t));
  return {value: key, done: false};
});

$def($def.S, 'Reflect', {
  enumerate: function enumerate(target){
    return new Enumerate(target);
  }
});
},{"./$.an-object":8,"./$.def":20,"./$.iter-create":41}],142:[function(require,module,exports){
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var $        = require('./$')
  , $def     = require('./$.def')
  , anObject = require('./$.an-object');

$def($def.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
    return $.getDesc(anObject(target), propertyKey);
  }
});
},{"./$":46,"./$.an-object":8,"./$.def":20}],143:[function(require,module,exports){
// 26.1.8 Reflect.getPrototypeOf(target)
var $def     = require('./$.def')
  , getProto = require('./$').getProto
  , anObject = require('./$.an-object');

$def($def.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target){
    return getProto(anObject(target));
  }
});
},{"./$":46,"./$.an-object":8,"./$.def":20}],144:[function(require,module,exports){
// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var $        = require('./$')
  , has      = require('./$.has')
  , $def     = require('./$.def')
  , isObject = require('./$.is-object')
  , anObject = require('./$.an-object');

function get(target, propertyKey/*, receiver*/){
  var receiver = arguments.length < 3 ? target : arguments[2]
    , desc, proto;
  if(anObject(target) === receiver)return target[propertyKey];
  if(desc = $.getDesc(target, propertyKey))return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if(isObject(proto = $.getProto(target)))return get(proto, propertyKey, receiver);
}

$def($def.S, 'Reflect', {get: get});
},{"./$":46,"./$.an-object":8,"./$.def":20,"./$.has":31,"./$.is-object":38}],145:[function(require,module,exports){
// 26.1.9 Reflect.has(target, propertyKey)
var $def = require('./$.def');

$def($def.S, 'Reflect', {
  has: function has(target, propertyKey){
    return propertyKey in target;
  }
});
},{"./$.def":20}],146:[function(require,module,exports){
// 26.1.10 Reflect.isExtensible(target)
var $def          = require('./$.def')
  , anObject      = require('./$.an-object')
  , $isExtensible = Object.isExtensible;

$def($def.S, 'Reflect', {
  isExtensible: function isExtensible(target){
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});
},{"./$.an-object":8,"./$.def":20}],147:[function(require,module,exports){
// 26.1.11 Reflect.ownKeys(target)
var $def = require('./$.def');

$def($def.S, 'Reflect', {ownKeys: require('./$.own-keys')});
},{"./$.def":20,"./$.own-keys":54}],148:[function(require,module,exports){
// 26.1.12 Reflect.preventExtensions(target)
var $def               = require('./$.def')
  , anObject           = require('./$.an-object')
  , $preventExtensions = Object.preventExtensions;

$def($def.S, 'Reflect', {
  preventExtensions: function preventExtensions(target){
    anObject(target);
    try {
      if($preventExtensions)$preventExtensions(target);
      return true;
    } catch(e){
      return false;
    }
  }
});
},{"./$.an-object":8,"./$.def":20}],149:[function(require,module,exports){
// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $def     = require('./$.def')
  , setProto = require('./$.set-proto');

if(setProto)$def($def.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto){
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch(e){
      return false;
    }
  }
});
},{"./$.def":20,"./$.set-proto":61}],150:[function(require,module,exports){
// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var $          = require('./$')
  , has        = require('./$.has')
  , $def       = require('./$.def')
  , createDesc = require('./$.property-desc')
  , anObject   = require('./$.an-object')
  , isObject   = require('./$.is-object');

function set(target, propertyKey, V/*, receiver*/){
  var receiver = arguments.length < 4 ? target : arguments[3]
    , ownDesc  = $.getDesc(anObject(target), propertyKey)
    , existingDescriptor, proto;
  if(!ownDesc){
    if(isObject(proto = $.getProto(target))){
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if(has(ownDesc, 'value')){
    if(ownDesc.writable === false || !isObject(receiver))return false;
    existingDescriptor = $.getDesc(receiver, propertyKey) || createDesc(0);
    existingDescriptor.value = V;
    $.setDesc(receiver, propertyKey, existingDescriptor);
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$def($def.S, 'Reflect', {set: set});
},{"./$":46,"./$.an-object":8,"./$.def":20,"./$.has":31,"./$.is-object":38,"./$.property-desc":57}],151:[function(require,module,exports){
var $       = require('./$')
  , global  = require('./$.global')
  , cof     = require('./$.cof')
  , $flags  = require('./$.flags')
  , $RegExp = global.RegExp
  , Base    = $RegExp
  , proto   = $RegExp.prototype
  , re      = /a/g
  // "new" creates a new object
  , CORRECT_NEW = new $RegExp(re) !== re
  // RegExp allows a regex with flags as the pattern
  , ALLOWS_RE_WITH_FLAGS = function(){
    try {
      return $RegExp(re, 'i') == '/a/i';
    } catch(e){ /* empty */ }
  }();

if(require('./$.support-desc')){
  if(!CORRECT_NEW || !ALLOWS_RE_WITH_FLAGS){
    $RegExp = function RegExp(pattern, flags){
      var patternIsRegExp  = cof(pattern) == 'RegExp'
        , flagsIsUndefined = flags === undefined;
      if(!(this instanceof $RegExp) && patternIsRegExp && flagsIsUndefined)return pattern;
      return CORRECT_NEW
        ? new Base(patternIsRegExp && !flagsIsUndefined ? pattern.source : pattern, flags)
        : new Base(patternIsRegExp ? pattern.source : pattern
          , patternIsRegExp && flagsIsUndefined ? $flags.call(pattern) : flags);
    };
    $.each.call($.getNames(Base), function(key){
      key in $RegExp || $.setDesc($RegExp, key, {
        configurable: true,
        get: function(){ return Base[key]; },
        set: function(it){ Base[key] = it; }
      });
    });
    proto.constructor = $RegExp;
    $RegExp.prototype = proto;
    require('./$.redef')(global, 'RegExp', $RegExp);
  }
}

require('./$.species')($RegExp);
},{"./$":46,"./$.cof":13,"./$.flags":27,"./$.global":30,"./$.redef":58,"./$.species":64,"./$.support-desc":71}],152:[function(require,module,exports){
// 21.2.5.3 get RegExp.prototype.flags()
var $ = require('./$');
if(require('./$.support-desc') && /./g.flags != 'g')$.setDesc(RegExp.prototype, 'flags', {
  configurable: true,
  get: require('./$.flags')
});
},{"./$":46,"./$.flags":27,"./$.support-desc":71}],153:[function(require,module,exports){
// @@match logic
require('./$.fix-re-wks')('match', 1, function(defined, MATCH){
  // 21.1.3.11 String.prototype.match(regexp)
  return function match(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  };
});
},{"./$.fix-re-wks":26}],154:[function(require,module,exports){
// @@replace logic
require('./$.fix-re-wks')('replace', 2, function(defined, REPLACE, $replace){
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return function replace(searchValue, replaceValue){
    'use strict';
    var O  = defined(this)
      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  };
});
},{"./$.fix-re-wks":26}],155:[function(require,module,exports){
// @@search logic
require('./$.fix-re-wks')('search', 1, function(defined, SEARCH){
  // 21.1.3.15 String.prototype.search(regexp)
  return function search(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  };
});
},{"./$.fix-re-wks":26}],156:[function(require,module,exports){
// @@split logic
require('./$.fix-re-wks')('split', 2, function(defined, SPLIT, $split){
  // 21.1.3.17 String.prototype.split(separator, limit)
  return function split(separator, limit){
    'use strict';
    var O  = defined(this)
      , fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined
      ? fn.call(separator, O, limit)
      : $split.call(String(O), separator, limit);
  };
});
},{"./$.fix-re-wks":26}],157:[function(require,module,exports){
'use strict';
var strong = require('./$.collection-strong');

// 23.2 Set Objects
require('./$.collection')('Set', function(get){
  return function Set(){ return get(this, arguments[0]); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);
},{"./$.collection":17,"./$.collection-strong":14}],158:[function(require,module,exports){
'use strict';
var $def = require('./$.def')
  , $at  = require('./$.string-at')(false);
$def($def.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos){
    return $at(this, pos);
  }
});
},{"./$.def":20,"./$.string-at":66}],159:[function(require,module,exports){
'use strict';
var $def     = require('./$.def')
  , toLength = require('./$.to-length')
  , context  = require('./$.string-context');

// should throw error on regex
$def($def.P + $def.F * !require('./$.fails')(function(){ 'q'.endsWith(/./); }), 'String', {
  // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
  endsWith: function endsWith(searchString /*, endPosition = @length */){
    var that = context(this, searchString, 'endsWith')
      , endPosition = arguments[1]
      , len    = toLength(that.length)
      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
      , search = String(searchString);
    return that.slice(end - search.length, end) === search;
  }
});
},{"./$.def":20,"./$.fails":25,"./$.string-context":67,"./$.to-length":77}],160:[function(require,module,exports){
var $def    = require('./$.def')
  , toIndex = require('./$.to-index')
  , fromCharCode = String.fromCharCode
  , $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$def($def.S + $def.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
    var res = []
      , len = arguments.length
      , i   = 0
      , code;
    while(len > i){
      code = +arguments[i++];
      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});
},{"./$.def":20,"./$.to-index":74}],161:[function(require,module,exports){
'use strict';
var $def    = require('./$.def')
  , context = require('./$.string-context');

$def($def.P, 'String', {
  // 21.1.3.7 String.prototype.includes(searchString, position = 0)
  includes: function includes(searchString /*, position = 0 */){
    return !!~context(this, searchString, 'includes').indexOf(searchString, arguments[1]);
  }
});
},{"./$.def":20,"./$.string-context":67}],162:[function(require,module,exports){
'use strict';
var $at  = require('./$.string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./$.iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./$.iter-define":42,"./$.string-at":66}],163:[function(require,module,exports){
var $def      = require('./$.def')
  , toIObject = require('./$.to-iobject')
  , toLength  = require('./$.to-length');

$def($def.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite){
    var tpl = toIObject(callSite.raw)
      , len = toLength(tpl.length)
      , sln = arguments.length
      , res = []
      , i   = 0;
    while(len > i){
      res.push(String(tpl[i++]));
      if(i < sln)res.push(String(arguments[i]));
    } return res.join('');
  }
});
},{"./$.def":20,"./$.to-iobject":76,"./$.to-length":77}],164:[function(require,module,exports){
var $def = require('./$.def');

$def($def.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: require('./$.string-repeat')
});
},{"./$.def":20,"./$.string-repeat":69}],165:[function(require,module,exports){
'use strict';
var $def     = require('./$.def')
  , toLength = require('./$.to-length')
  , context  = require('./$.string-context');

// should throw error on regex
$def($def.P + $def.F * !require('./$.fails')(function(){ 'q'.startsWith(/./); }), 'String', {
  // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
  startsWith: function startsWith(searchString /*, position = 0 */){
    var that   = context(this, searchString, 'startsWith')
      , index  = toLength(Math.min(arguments[1], that.length))
      , search = String(searchString);
    return that.slice(index, index + search.length) === search;
  }
});
},{"./$.def":20,"./$.fails":25,"./$.string-context":67,"./$.to-length":77}],166:[function(require,module,exports){
'use strict';
// 21.1.3.25 String.prototype.trim()
require('./$.string-trim')('trim', function($trim){
  return function trim(){
    return $trim(this, 3);
  };
});
},{"./$.string-trim":70}],167:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var $              = require('./$')
  , global         = require('./$.global')
  , has            = require('./$.has')
  , SUPPORT_DESC   = require('./$.support-desc')
  , $def           = require('./$.def')
  , $redef         = require('./$.redef')
  , shared         = require('./$.shared')
  , setTag         = require('./$.tag')
  , uid            = require('./$.uid')
  , wks            = require('./$.wks')
  , keyOf          = require('./$.keyof')
  , $names         = require('./$.get-names')
  , enumKeys       = require('./$.enum-keys')
  , anObject       = require('./$.an-object')
  , toIObject      = require('./$.to-iobject')
  , createDesc     = require('./$.property-desc')
  , getDesc        = $.getDesc
  , setDesc        = $.setDesc
  , _create        = $.create
  , getNames       = $names.get
  , $Symbol        = global.Symbol
  , setter         = false
  , HIDDEN         = wks('_hidden')
  , isEnum         = $.isEnum
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , useNative      = typeof $Symbol == 'function'
  , ObjectProto    = Object.prototype;

var setSymbolDesc = SUPPORT_DESC ? function(){ // fallback for old Android
  try {
    return _create(setDesc({}, HIDDEN, {
      get: function(){
        return setDesc(this, HIDDEN, {value: false})[HIDDEN];
      }
    }))[HIDDEN] || setDesc;
  } catch(e){
    return function(it, key, D){
      var protoDesc = getDesc(ObjectProto, key);
      if(protoDesc)delete ObjectProto[key];
      setDesc(it, key, D);
      if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
    };
  }
}() : setDesc;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol.prototype);
  sym._k = tag;
  SUPPORT_DESC && setter && setSymbolDesc(ObjectProto, tag, {
    configurable: true,
    set: function(value){
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    }
  });
  return sym;
};

var $defineProperty = function defineProperty(it, key, D){
  if(D && has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return setDesc(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key);
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
    ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  var D = getDesc(it = toIObject(it), key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
  return result;
};

// 19.4.1.1 Symbol([description])
if(!useNative){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor');
    return wrap(uid(arguments[0]));
  };
  $redef($Symbol.prototype, 'toString', function toString(){
    return this._k;
  });

  $.create     = $create;
  $.isEnum     = $propertyIsEnumerable;
  $.getDesc    = $getOwnPropertyDescriptor;
  $.setDesc    = $defineProperty;
  $.setDescs   = $defineProperties;
  $.getNames   = $names.get = $getOwnPropertyNames;
  $.getSymbols = $getOwnPropertySymbols;

  if(SUPPORT_DESC && !require('./$.library')){
    $redef(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
}

// MS Edge converts symbols to JSON as '{}'
if(!useNative || require('./$.fails')(function(){
  return JSON.stringify([$Symbol()]) != '[null]';
}))$redef($Symbol.prototype, 'toJSON', function toJSON(){ /* return undefined */ });

var symbolStatics = {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    return keyOf(SymbolRegistry, key);
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
};
// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call((
    'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
    'species,split,toPrimitive,toStringTag,unscopables'
  ).split(','), function(it){
    var sym = wks(it);
    symbolStatics[it] = useNative ? sym : wrap(sym);
  }
);

setter = true;

$def($def.G + $def.W, {Symbol: $Symbol});

$def($def.S, 'Symbol', symbolStatics);

$def($def.S + $def.F * !useNative, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 19.4.3.5 Symbol.prototype[@@toStringTag]
setTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setTag(global.JSON, 'JSON', true);
},{"./$":46,"./$.an-object":8,"./$.def":20,"./$.enum-keys":23,"./$.fails":25,"./$.get-names":29,"./$.global":30,"./$.has":31,"./$.keyof":47,"./$.library":48,"./$.property-desc":57,"./$.redef":58,"./$.shared":62,"./$.support-desc":71,"./$.tag":72,"./$.to-iobject":76,"./$.uid":79,"./$.wks":81}],168:[function(require,module,exports){
'use strict';
var $            = require('./$')
  , weak         = require('./$.collection-weak')
  , isObject     = require('./$.is-object')
  , has          = require('./$.has')
  , frozenStore  = weak.frozenStore
  , WEAK         = weak.WEAK
  , isExtensible = Object.isExtensible || isObject
  , tmp          = {};

// 23.3 WeakMap Objects
var $WeakMap = require('./$.collection')('WeakMap', function(get){
  return function WeakMap(){ return get(this, arguments[0]); };
}, {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key){
    if(isObject(key)){
      if(!isExtensible(key))return frozenStore(this).get(key);
      if(has(key, WEAK))return key[WEAK][this._i];
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value){
    return weak.def(this, key, value);
  }
}, weak, true, true);

// IE11 WeakMap frozen keys fix
if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
  $.each.call(['delete', 'has', 'get', 'set'], function(key){
    var proto  = $WeakMap.prototype
      , method = proto[key];
    require('./$.redef')(proto, key, function(a, b){
      // store frozen objects on leaky map
      if(isObject(a) && !isExtensible(a)){
        var result = frozenStore(this)[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}
},{"./$":46,"./$.collection":17,"./$.collection-weak":16,"./$.has":31,"./$.is-object":38,"./$.redef":58}],169:[function(require,module,exports){
'use strict';
var weak = require('./$.collection-weak');

// 23.4 WeakSet Objects
require('./$.collection')('WeakSet', function(get){
  return function WeakSet(){ return get(this, arguments[0]); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value){
    return weak.def(this, value, true);
  }
}, weak, false, true);
},{"./$.collection":17,"./$.collection-weak":16}],170:[function(require,module,exports){
'use strict';
var $def      = require('./$.def')
  , $includes = require('./$.array-includes')(true);
$def($def.P, 'Array', {
  // https://github.com/domenic/Array.prototype.includes
  includes: function includes(el /*, fromIndex = 0 */){
    return $includes(this, el, arguments[1]);
  }
});
require('./$.unscope')('includes');
},{"./$.array-includes":9,"./$.def":20,"./$.unscope":80}],171:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $def  = require('./$.def');

$def($def.P, 'Map', {toJSON: require('./$.collection-to-json')('Map')});
},{"./$.collection-to-json":15,"./$.def":20}],172:[function(require,module,exports){
// http://goo.gl/XkBrjD
var $def     = require('./$.def')
  , $entries = require('./$.object-to-array')(true);

$def($def.S, 'Object', {
  entries: function entries(it){
    return $entries(it);
  }
});
},{"./$.def":20,"./$.object-to-array":53}],173:[function(require,module,exports){
// https://gist.github.com/WebReflection/9353781
var $          = require('./$')
  , $def       = require('./$.def')
  , ownKeys    = require('./$.own-keys')
  , toIObject  = require('./$.to-iobject')
  , createDesc = require('./$.property-desc');

$def($def.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
    var O       = toIObject(object)
      , setDesc = $.setDesc
      , getDesc = $.getDesc
      , keys    = ownKeys(O)
      , result  = {}
      , i       = 0
      , key, D;
    while(keys.length > i){
      D = getDesc(O, key = keys[i++]);
      if(key in result)setDesc(result, key, createDesc(0, D));
      else result[key] = D;
    } return result;
  }
});
},{"./$":46,"./$.def":20,"./$.own-keys":54,"./$.property-desc":57,"./$.to-iobject":76}],174:[function(require,module,exports){
// http://goo.gl/XkBrjD
var $def    = require('./$.def')
  , $values = require('./$.object-to-array')(false);

$def($def.S, 'Object', {
  values: function values(it){
    return $values(it);
  }
});
},{"./$.def":20,"./$.object-to-array":53}],175:[function(require,module,exports){
// https://github.com/benjamingr/RexExp.escape
var $def = require('./$.def')
  , $re  = require('./$.replacer')(/[\\^$*+?.()|[\]{}]/g, '\\$&');
$def($def.S, 'RegExp', {escape: function escape(it){ return $re(it); }});

},{"./$.def":20,"./$.replacer":59}],176:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $def  = require('./$.def');

$def($def.P, 'Set', {toJSON: require('./$.collection-to-json')('Set')});
},{"./$.collection-to-json":15,"./$.def":20}],177:[function(require,module,exports){
// https://github.com/mathiasbynens/String.prototype.at
'use strict';
var $def = require('./$.def')
  , $at  = require('./$.string-at')(true);
$def($def.P, 'String', {
  at: function at(pos){
    return $at(this, pos);
  }
});
},{"./$.def":20,"./$.string-at":66}],178:[function(require,module,exports){
'use strict';
var $def = require('./$.def')
  , $pad = require('./$.string-pad');
$def($def.P, 'String', {
  padLeft: function padLeft(maxLength /*, fillString = ' ' */){
    return $pad(this, maxLength, arguments[1], true);
  }
});
},{"./$.def":20,"./$.string-pad":68}],179:[function(require,module,exports){
'use strict';
var $def = require('./$.def')
  , $pad = require('./$.string-pad');
$def($def.P, 'String', {
  padRight: function padRight(maxLength /*, fillString = ' ' */){
    return $pad(this, maxLength, arguments[1], false);
  }
});
},{"./$.def":20,"./$.string-pad":68}],180:[function(require,module,exports){
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require('./$.string-trim')('trimLeft', function($trim){
  return function trimLeft(){
    return $trim(this, 1);
  };
});
},{"./$.string-trim":70}],181:[function(require,module,exports){
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require('./$.string-trim')('trimRight', function($trim){
  return function trimRight(){
    return $trim(this, 2);
  };
});
},{"./$.string-trim":70}],182:[function(require,module,exports){
// JavaScript 1.6 / Strawman array statics shim
var $       = require('./$')
  , $def    = require('./$.def')
  , $Array  = require('./$.core').Array || Array
  , statics = {};
var setStatics = function(keys, length){
  $.each.call(keys.split(','), function(key){
    if(length == undefined && key in $Array)statics[key] = $Array[key];
    else if(key in [])statics[key] = require('./$.ctx')(Function.call, [][key], length);
  });
};
setStatics('pop,reverse,shift,keys,values,entries', 1);
setStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
setStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
           'reduce,reduceRight,copyWithin,fill');
$def($def.S, 'Array', statics);
},{"./$":46,"./$.core":18,"./$.ctx":19,"./$.def":20}],183:[function(require,module,exports){
require('./es6.array.iterator');
var global      = require('./$.global')
  , hide        = require('./$.hide')
  , Iterators   = require('./$.iterators')
  , ITERATOR    = require('./$.wks')('iterator')
  , NL          = global.NodeList
  , HTC         = global.HTMLCollection
  , NLProto     = NL && NL.prototype
  , HTCProto    = HTC && HTC.prototype
  , ArrayValues = Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
if(NL && !(ITERATOR in NLProto))hide(NLProto, ITERATOR, ArrayValues);
if(HTC && !(ITERATOR in HTCProto))hide(HTCProto, ITERATOR, ArrayValues);
},{"./$.global":30,"./$.hide":32,"./$.iterators":45,"./$.wks":81,"./es6.array.iterator":89}],184:[function(require,module,exports){
var $def  = require('./$.def')
  , $task = require('./$.task');
$def($def.G + $def.B, {
  setImmediate:   $task.set,
  clearImmediate: $task.clear
});
},{"./$.def":20,"./$.task":73}],185:[function(require,module,exports){
// ie9- setTimeout & setInterval additional parameters fix
var global     = require('./$.global')
  , $def       = require('./$.def')
  , invoke     = require('./$.invoke')
  , partial    = require('./$.partial')
  , navigator  = global.navigator
  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
var wrap = function(set){
  return MSIE ? function(fn, time /*, ...args */){
    return set(invoke(
      partial,
      [].slice.call(arguments, 2),
      typeof fn == 'function' ? fn : Function(fn)
    ), time);
  } : set;
};
$def($def.G + $def.B + $def.F * MSIE, {
  setTimeout:  wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});
},{"./$.def":20,"./$.global":30,"./$.invoke":34,"./$.partial":55}],186:[function(require,module,exports){
require('./modules/es5');
require('./modules/es6.symbol');
require('./modules/es6.object.assign');
require('./modules/es6.object.is');
require('./modules/es6.object.set-prototype-of');
require('./modules/es6.object.to-string');
require('./modules/es6.object.freeze');
require('./modules/es6.object.seal');
require('./modules/es6.object.prevent-extensions');
require('./modules/es6.object.is-frozen');
require('./modules/es6.object.is-sealed');
require('./modules/es6.object.is-extensible');
require('./modules/es6.object.get-own-property-descriptor');
require('./modules/es6.object.get-prototype-of');
require('./modules/es6.object.keys');
require('./modules/es6.object.get-own-property-names');
require('./modules/es6.function.name');
require('./modules/es6.function.has-instance');
require('./modules/es6.number.constructor');
require('./modules/es6.number.epsilon');
require('./modules/es6.number.is-finite');
require('./modules/es6.number.is-integer');
require('./modules/es6.number.is-nan');
require('./modules/es6.number.is-safe-integer');
require('./modules/es6.number.max-safe-integer');
require('./modules/es6.number.min-safe-integer');
require('./modules/es6.number.parse-float');
require('./modules/es6.number.parse-int');
require('./modules/es6.math.acosh');
require('./modules/es6.math.asinh');
require('./modules/es6.math.atanh');
require('./modules/es6.math.cbrt');
require('./modules/es6.math.clz32');
require('./modules/es6.math.cosh');
require('./modules/es6.math.expm1');
require('./modules/es6.math.fround');
require('./modules/es6.math.hypot');
require('./modules/es6.math.imul');
require('./modules/es6.math.log10');
require('./modules/es6.math.log1p');
require('./modules/es6.math.log2');
require('./modules/es6.math.sign');
require('./modules/es6.math.sinh');
require('./modules/es6.math.tanh');
require('./modules/es6.math.trunc');
require('./modules/es6.string.from-code-point');
require('./modules/es6.string.raw');
require('./modules/es6.string.trim');
require('./modules/es6.string.iterator');
require('./modules/es6.string.code-point-at');
require('./modules/es6.string.ends-with');
require('./modules/es6.string.includes');
require('./modules/es6.string.repeat');
require('./modules/es6.string.starts-with');
require('./modules/es6.array.from');
require('./modules/es6.array.of');
require('./modules/es6.array.iterator');
require('./modules/es6.array.species');
require('./modules/es6.array.copy-within');
require('./modules/es6.array.fill');
require('./modules/es6.array.find');
require('./modules/es6.array.find-index');
require('./modules/es6.regexp.constructor');
require('./modules/es6.regexp.flags');
require('./modules/es6.regexp.match');
require('./modules/es6.regexp.replace');
require('./modules/es6.regexp.search');
require('./modules/es6.regexp.split');
require('./modules/es6.promise');
require('./modules/es6.map');
require('./modules/es6.set');
require('./modules/es6.weak-map');
require('./modules/es6.weak-set');
require('./modules/es6.reflect.apply');
require('./modules/es6.reflect.construct');
require('./modules/es6.reflect.define-property');
require('./modules/es6.reflect.delete-property');
require('./modules/es6.reflect.enumerate');
require('./modules/es6.reflect.get');
require('./modules/es6.reflect.get-own-property-descriptor');
require('./modules/es6.reflect.get-prototype-of');
require('./modules/es6.reflect.has');
require('./modules/es6.reflect.is-extensible');
require('./modules/es6.reflect.own-keys');
require('./modules/es6.reflect.prevent-extensions');
require('./modules/es6.reflect.set');
require('./modules/es6.reflect.set-prototype-of');
require('./modules/es7.array.includes');
require('./modules/es7.string.at');
require('./modules/es7.string.pad-left');
require('./modules/es7.string.pad-right');
require('./modules/es7.string.trim-left');
require('./modules/es7.string.trim-right');
require('./modules/es7.regexp.escape');
require('./modules/es7.object.get-own-property-descriptors');
require('./modules/es7.object.values');
require('./modules/es7.object.entries');
require('./modules/es7.map.to-json');
require('./modules/es7.set.to-json');
require('./modules/js.array.statics');
require('./modules/web.timers');
require('./modules/web.immediate');
require('./modules/web.dom.iterable');
module.exports = require('./modules/$.core');
},{"./modules/$.core":18,"./modules/es5":83,"./modules/es6.array.copy-within":84,"./modules/es6.array.fill":85,"./modules/es6.array.find":87,"./modules/es6.array.find-index":86,"./modules/es6.array.from":88,"./modules/es6.array.iterator":89,"./modules/es6.array.of":90,"./modules/es6.array.species":91,"./modules/es6.function.has-instance":92,"./modules/es6.function.name":93,"./modules/es6.map":94,"./modules/es6.math.acosh":95,"./modules/es6.math.asinh":96,"./modules/es6.math.atanh":97,"./modules/es6.math.cbrt":98,"./modules/es6.math.clz32":99,"./modules/es6.math.cosh":100,"./modules/es6.math.expm1":101,"./modules/es6.math.fround":102,"./modules/es6.math.hypot":103,"./modules/es6.math.imul":104,"./modules/es6.math.log10":105,"./modules/es6.math.log1p":106,"./modules/es6.math.log2":107,"./modules/es6.math.sign":108,"./modules/es6.math.sinh":109,"./modules/es6.math.tanh":110,"./modules/es6.math.trunc":111,"./modules/es6.number.constructor":112,"./modules/es6.number.epsilon":113,"./modules/es6.number.is-finite":114,"./modules/es6.number.is-integer":115,"./modules/es6.number.is-nan":116,"./modules/es6.number.is-safe-integer":117,"./modules/es6.number.max-safe-integer":118,"./modules/es6.number.min-safe-integer":119,"./modules/es6.number.parse-float":120,"./modules/es6.number.parse-int":121,"./modules/es6.object.assign":122,"./modules/es6.object.freeze":123,"./modules/es6.object.get-own-property-descriptor":124,"./modules/es6.object.get-own-property-names":125,"./modules/es6.object.get-prototype-of":126,"./modules/es6.object.is":130,"./modules/es6.object.is-extensible":127,"./modules/es6.object.is-frozen":128,"./modules/es6.object.is-sealed":129,"./modules/es6.object.keys":131,"./modules/es6.object.prevent-extensions":132,"./modules/es6.object.seal":133,"./modules/es6.object.set-prototype-of":134,"./modules/es6.object.to-string":135,"./modules/es6.promise":136,"./modules/es6.reflect.apply":137,"./modules/es6.reflect.construct":138,"./modules/es6.reflect.define-property":139,"./modules/es6.reflect.delete-property":140,"./modules/es6.reflect.enumerate":141,"./modules/es6.reflect.get":144,"./modules/es6.reflect.get-own-property-descriptor":142,"./modules/es6.reflect.get-prototype-of":143,"./modules/es6.reflect.has":145,"./modules/es6.reflect.is-extensible":146,"./modules/es6.reflect.own-keys":147,"./modules/es6.reflect.prevent-extensions":148,"./modules/es6.reflect.set":150,"./modules/es6.reflect.set-prototype-of":149,"./modules/es6.regexp.constructor":151,"./modules/es6.regexp.flags":152,"./modules/es6.regexp.match":153,"./modules/es6.regexp.replace":154,"./modules/es6.regexp.search":155,"./modules/es6.regexp.split":156,"./modules/es6.set":157,"./modules/es6.string.code-point-at":158,"./modules/es6.string.ends-with":159,"./modules/es6.string.from-code-point":160,"./modules/es6.string.includes":161,"./modules/es6.string.iterator":162,"./modules/es6.string.raw":163,"./modules/es6.string.repeat":164,"./modules/es6.string.starts-with":165,"./modules/es6.string.trim":166,"./modules/es6.symbol":167,"./modules/es6.weak-map":168,"./modules/es6.weak-set":169,"./modules/es7.array.includes":170,"./modules/es7.map.to-json":171,"./modules/es7.object.entries":172,"./modules/es7.object.get-own-property-descriptors":173,"./modules/es7.object.values":174,"./modules/es7.regexp.escape":175,"./modules/es7.set.to-json":176,"./modules/es7.string.at":177,"./modules/es7.string.pad-left":178,"./modules/es7.string.pad-right":179,"./modules/es7.string.trim-left":180,"./modules/es7.string.trim-right":181,"./modules/js.array.statics":182,"./modules/web.dom.iterable":183,"./modules/web.immediate":184,"./modules/web.timers":185}],187:[function(require,module,exports){
(function (process,global){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var iteratorSymbol =
    typeof Symbol === "function" && Symbol.iterator || "@@iterator";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided, then outerFn.prototype instanceof Generator.
    var generator = Object.create((outerFn || Generator).prototype);

    generator._invoke = makeInvokeMethod(
      innerFn, self || null,
      new Context(tryLocsList || [])
    );

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    genFun.__proto__ = GeneratorFunctionPrototype;
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `value instanceof AwaitArgument` to determine if the yielded value is
  // meant to be awaited. Some may consider the name of this method too
  // cutesy, but they are curmudgeons.
  runtime.awrap = function(arg) {
    return new AwaitArgument(arg);
  };

  function AwaitArgument(arg) {
    this.arg = arg;
  }

  function AsyncIterator(generator) {
    // This invoke function is written in a style that assumes some
    // calling function (or Promise) will handle exceptions.
    function invoke(method, arg) {
      var result = generator[method](arg);
      var value = result.value;
      return value instanceof AwaitArgument
        ? Promise.resolve(value.arg).then(invokeNext, invokeThrow)
        : Promise.resolve(value).then(function(unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration. If the Promise is rejected, however, the
            // result for this iteration will be rejected with the same
            // reason. Note that rejections of yielded Promises are not
            // thrown back into the generator function, as is the case
            // when an awaited Promise is rejected. This difference in
            // behavior between yield and await is important, because it
            // allows the consumer to decide what to do with the yielded
            // rejection (swallow it and continue, manually .throw it back
            // into the generator, abandon iteration, whatever). With
            // await, by contrast, there is no opportunity to examine the
            // rejection reason outside the generator function, so the
            // only option is to throw it from the await expression, and
            // let the generator function handle the exception.
            result.value = unwrapped;
            return result;
          });
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var invokeNext = invoke.bind(generator, "next");
    var invokeThrow = invoke.bind(generator, "throw");
    var invokeReturn = invoke.bind(generator, "return");
    var previousPromise;

    function enqueue(method, arg) {
      var enqueueResult =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(function() {
          return invoke(method, arg);
        }) : new Promise(function(resolve) {
          resolve(invoke(method, arg));
        });

      // Avoid propagating enqueueResult failures to Promises returned by
      // later invocations of the iterator.
      previousPromise = enqueueResult["catch"](function(ignored){});

      return enqueueResult;
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" ||
              (method === "throw" && delegate.iterator[method] === undefined)) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(
            delegate.iterator[method],
            delegate.iterator,
            arg
          );

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          if (state === GenStateSuspendedYield) {
            context.sent = arg;
          } else {
            context.sent = undefined;
          }

        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }

        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":190}],188:[function(require,module,exports){
module.exports = require("./lib/polyfill");

},{"./lib/polyfill":6}],189:[function(require,module,exports){
module.exports = require("babel-core/polyfill");

},{"babel-core/polyfill":188}],190:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            currentQueue[queueIndex].run();
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[1]);
