// es6 polyfills, powered by babel
require("babel/polyfill")

let fetch = require('./fetcher')
import e from 'mithril-slide-engine'
let {resolver, container, m, engine} = e

window.addEventListener('load', app)

const arbiter = (_src) => {
    let src = m.prop('')

    if(_src.indexOf('.js') !== -1){
        m.startComputation()
        fetch(_src)
            .then(r => r.text())
            .then(scriptText =>
                src(`./Arbiter/#${escape(scriptText)}`))
            .then(_ => m.endComputation())
            .catch(e => console.log(e))
    }

    return {
        controller: () => {},
        view: () => m('iframe', {src: src()})
    }
}

const frame = (_src) => {
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
        controller: () => {},
        view: () => m('iframe', {src: src()})
    }
}

let home = {
    controller: () => {

    },
    view: () => {
        return m('.home', [
            m('.hr', 'This talk is called'),
            m('h1', 'Natural Physics Simulations', m('br'), 'and Canvas Hackery'),
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
]

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
    m('hr'),
    m('a', {href:'http://shaunlebron.github.io/solar-system-of-js/'}, 'Solar System of JS'),
    m('hr'))

let refs = (links) => {
    return m('.home',
        m('h2', 'References & Resources'),
        m('hr'),
        m('ul',
            links.map(href => m('li', m('a', {href}, href)))
        )
    )
}

function app() {
    let e = engine()
    e.insert(home)
    e.insert(recap(buildTools))
    e.insert(recap(concepts))
    e.insert(solarSystem)
    e.insert(frame('./slides/transpile1.js'))
    e.insert(refs())
    e.render('html')
}

