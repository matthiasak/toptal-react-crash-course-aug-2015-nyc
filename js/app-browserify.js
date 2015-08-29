// es6 polyfills, powered by babel
require("babel/polyfill")

let fetch = require('./fetcher')
import {resolver, container, m, engine} from 'mithril-slide-engine'

window.addEventListener('load', app)

const frame = (_src, title) => {
    let src = m.prop('')

    if(_src.indexOf('.js') !== -1){
        m.startComputation()
        fetch(_src)
            .then(r => r.text())
            .then(scriptText =>
                src(`./Arbiter-frame/#${escape(scriptText)}`))
            .then(_ => m.endComputation())
            .catch(e => console.log(e))
    }

    return {
        view: () =>
            m('div',
                title && m('.hr', title),
                m('iframe', {src: src()}))
    }
}

let home = {
    controller: () => {

    },
    view: () => {
        return m('.home', [
            m('.hr', 'This session:'),
            m('h1', 'Toptal\'s React Crash Course', m('br'), 'NYC, Aug 2015'),
            m('.hr', 'With this guy'),
            m('img', {src: './images/me.gif'}),
            m('.hr', [
                m('a', {href:'mkeas.org'}, 'mkeas.org'),
                ' • ',
                m('a', {href:'twitter.com/matthiasak'}, '@matthiasak')
            ])
        ])
    }
}

let recap = (bullets, title) => m('div',
    m('.hr', title || 'Let\'s Recap'),
    m('ul', bullets.map(bullet => m('li', bullet)))
)

const buildTools = [
    'https://github.com/matthiasak/universal-js-boilerplate',
    'https://github.com/christianalfoni/flux-react-boilerplate',
    'https://github.com/petehunt/react-boilerplate',
    'https://github.com/rackt/react-boilerplate',
    'https://github.com/gaearon/react-hot-boilerplate',
    'https://github.com/davezuko/react-redux-starter-kit',
    'https://github.com/svenanders/isomorphic-react-boilerplate',
    'https://github.com/koba04/react-boilerplate',
    'https://github.com/christianalfoni/react-app-boilerplate',
    'https://www.npmjs.com/package/es6-react-boilerplate',
].map(u => m('a', {url: u}, u))

const pre = (text, title) => {
    return m('div',
        title && m('.hr', title),
        m('pre',
            m('code',
                text)))
}

const concepts = [
    'npm / package.json',
    'browserify (vs webpack, etc)',
    'npm scripts (vs. grunt/gulp/broccoli/etc)',
    'transpilation (Babel, Traceur, etc)',
    'polyfills (babel-polyfill --> core-js, es5 shim, etc',
    'babel-register (running es6/7 in old\'ish node)',
    'React DevTools'
]

const solarSystem = () => m('div',
    m('.hr',
        m('a', {href:'http://shaunlebron.github.io/solar-system-of-js/'}, 'Solar System of JS')))

const antipattern = () => m('div',
    m('.hr', 'ES6 classes.. an antipattern?'),
    m('ul',
        m('li', 'just syntactic sugar for the old prototypal inheritance pattern'),
        m('li', 'no more mixins :-('),
        m('li', 'takes away the focus on functions and closures')))

const components0 = [
    `boilerplate React class (es6 destructuring, etc)`,
    `Not "Reactive", it's "Declarative"`,
    `virtual DOM representation`,
    `state (is async, and triggers re-renders)`,
    `props (are sync, and don't), spread operator`
]

const components1 = [
    m('code', `setState`),
    m('code', `forceUpdate`),
    'mount and unmount lifecycle methods'
]

const components2 = [
    m('code', 'React.findDOMNode(this.refs.name)'),
    m('code', 'this.props.children')
]

const questionsAboutLifecycles = [
    `How would you implement jQuery UI/Kendo/jQuery plugins on a React-managed element?`,
    `How would you have a component listen on mouseMove or scroll, and stop when it is removed from the screen?`
]

const notes1 = [
    `React event callbacks are currently (v0.3.X) **NOT** bound to the object, so we must do that manually`,
    `React virtual events are "recycled" quickly, so grab the values immediately`,
    `React has some global methods (check the API/docs for discussion)`,
    `JSX has tricky naming: DOM events, className, htmlFor, setInnerHTMLDangerously`
]

const links = [
    ['https://egghead.io/lessons/react-react-in-7-minutes', 'React in 7 minutes'],
    ['https://vimeo.com/130921996', 'React components review, Component event handlers, lifecycle methods, state vs props, PropTypes'],
    ['https://facebook.github.io/react/docs/reusable-components.html#prop-validation'],
    ['http://ricostacruz.com/cheatsheets/react.html', 'Cheatsheet'],
    ['https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi', 'DevTools Plugin'],
    ['http://react.parts/web', 'awesome components resource'],
    ['https://github.com/ericclemmons/react-resolver', 'React Resolver'],
    ['http://material-ui.com/#/get-started', 'Material UI in React'],
    ['https://github.com/chenglou/react-motion', 'physics-driven animation for React components'],
    ['http://devdocs.io/react/', 'DevDocs.io documentation'],
    ['http://facebook.github.io/react/docs/getting-started.html'],
    ['http://calendar.perfplanet.com/2013/diff/', 'React\'s Diffing Algorithm: why it\'s fast'],
    ['https://github.com/facebook/immutable-js'],
    ['https://github.com/swannodette/mori'],
    ['https://www.npmjs.com/package/redux']
]

const overview = [
    'Build tools & npm',
    'ES6 concepts',
    'React.Component methods',
    'Refs and Children',
    'lifecycle methods, defaults',
    'Keys, Events, and Gotchas'
]

const img = (url, title, style={}) =>
    m('div',
        title && m('.hr', title),
        m('img', {src: url, style}))

let refs = (links) => {
    return m('.home',
        m('.hr', 'References & Resources'),
        m('hr'),
        m('ul',
            links.map(([href, text]) => m('li', m('a', {href}, text || href)))
        )
    )
}

function app() {
    let e = engine()
    e.insert(home)
    e.insert(img('http://assets.toptal.io/assets/public/blocks/branding/logo/logo-9e7f5c5a7e212a6b2d5f8a2bb0ea3e1f.png', 'Top 3% of freelance developers.', {width:'40%'}))
    e.insert(img('http://theironyard.com/images/iron-yard-logo.svg', "Passion at the intersection of tech and education.", {width:'30%'}))
    e.insert(recap(overview, 'Overview'))
    e.insert(recap(buildTools, 'Build tools'))
    e.insert(recap(concepts, 'Concepts'))
    e.insert(pre(packageJSON, 'package.json / npm'))
    e.insert(solarSystem)
    e.insert(frame('./slides/transpile1.js'))
    e.insert(antipattern)
    e.insert(frame('./slides/decorators1.js'))
    e.insert(recap(components0, 'Up next...'))
    e.insert(frame('./slides/components0.js'))
    e.insert(recap(components1, 'Up next... React.Component methods'))
    e.insert(frame('./slides/components1.js'))
    e.insert(recap(components2, 'Up next... Refs and Children'))
    e.insert(frame('./slides/components2.js'))
    e.insert(pre(lifecycle, 'Up next... Lifecycle Methods, Defaults'))
    e.insert(frame('./slides/components3.js'))
    e.insert(recap(questionsAboutLifecycles, 'Questions for the room'))
    e.insert(recap([], 'Keys, Events, and Gotchas'))
    e.insert(img('http://calendar.perfplanet.com/wp-content/uploads/2013/12/vjeux/2.png', 'Keys and Diffing'))
    e.insert(frame('./slides/keys.js'))
    e.insert(recap(notes1, 'Notes'))
    e.insert(recap([], 'PropTypes'))
    e.insert(frame('./slides/proptypes.js'))
    e.insert(refs(links))
    e.render('html')
}

const packageJSON = `
{
  "name": "toptal-react-crash-course-aug-2015-nyc",
  "version": "0.0.1",
  "description": "React crash course at Viacom HQ on Time Square in NYC",
  "author": "Matt Keas (@matthiasak)",
  "license": "MIT",
  "engines": {
    "node": "^0.12.5"
  },
  "browser": {
    "./js/fetcher/index.js": "./js/fetcher/browser.js"
  },
  "scripts": {
    "build:css": "postcss -o ./dist/style.css scss/style.scss;",
    "build:js-min": "browserify -e ./js/app-browserify.js -t [babelify --stage 1] | uglifyjs > ./dist/app-browserify.js",
    "build": "npm run build:js-min & npm run build:css",
    "watch:css": "chokidar-cmd -c 'npm run build:css' -t ./scss/",
    "watch:js": "watchify ./js/app-browserify.js -t [ babelify --stage 1 ] -o ./dist/app-browserify.js",
    "watch": "npm run watch:css & npm run watch:js;",
    "test": "mocha ./js/test/; echo '----- tests done'",
    "server": "nodemon --watch . --ext js,jsx heroku-server.js & npm run watch",
    "start": "npm run n heroku-server.js",
    "s": "npm run start & npm run watch",
    "n": "node  --use_strict --harmony --es_staging"
  },
  "dependencies": {
    "babel": "^5.6.7",
    "express": "^4.12.3",
    "react": "^0.13.3",
    ...
  },
  "devDependencies": {
    "node-sass": "^0.9.2"
    ...
  }
}

`

const lifecycle = `
initializing --> will mount --> did mount --> will unmount --> did unmount
            |
            |\\
            | \\
            |  will receive props --> did receive props
            |
            \\
             \\
              should update? --> will update --> did update
`