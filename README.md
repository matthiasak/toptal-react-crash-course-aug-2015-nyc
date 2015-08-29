### Toptal React JS crash course

> hosted by Viacom HQ on Times Square in NYC

Toptal React single-day crash course
---

> Duration of instruction (not including exercise time): ~4.5 hours

Primary Topics (Broken down into ~90min sections, not always including exercises):
---

Section 0: Tools and Prerequisites (30min)

    1. Get all of our tools and build steps in-place.
        - https://github.com/matthiasak/universal-js-boilerplate
        - https://github.com/davezuko/react-redux-starter-kit
    2. General review of concepts
        - npm / package.json
        - browserify (vs. webpack, etc)
        - npm scripts (vs. grunt/gulp/broccoli/etc)
        - transpilation with Babel
        - Babel polyfills, es5 shim, Babel/ES6 on node (babel-register)
        - React DevTools (https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
    3. Solar System of JS -> shaunlebron.github.io/solar-system-of-js/
    4. Show Babel examples of ES6/7 and JSX being transpiled into JS
    5. ES6 classes (the anti-pattern)
    6. ES7 decorators (the un-anti-pattern)

Section 1: React Components

    - boilerplate React class (es6 destructuring, etc)
    - Not "Reactive", it's "Declarative"
    - virtual DOM representation
    - state (is async, and triggers re-renders)
    - props (are sync, and don't), spread operator

    React.Component Methods:

    1. `setState`
    2. `forceUpdate`

    > exercise: counter, and lazy image-loader

    - refs (find the actual DOM nodes)
    - children (embed other elements inside this one dynamically (for when you have a component that is specifying the outer element, not the inner)) --> powerful for HOCs

    > exercise: github profile

Section 2: Lifecycle of React Components

    ```
    initializing --> will mount --> did mount --> will unmount --> did unmount
                  |
                  |\
                  | \
                  |  will receive props --> did receive props
                  |
                   \
                    \
                     should update? --> will update --> did update
    ```

    ```js
    class ConstructorName extends React.Component {

        constructor(props){
            super(props)
            this.state = {} // initial state
        }

        // these key-value pairs ensure that props
        // are of the type defined:
        propTypes: {
            list: React.PropTypes.array, // i.e. this.props.list must be an array
            isReady: React.PropTypes.bool,
            finish: React.PropTypes.func,
            size: React.PropTypes.number,
            data: React.PropTypes.object,
            description: React.PropTypes.string
        }

        componentWillMount() {} // called when a component is attached to the DOM
        componentWillReceiveProps() {} // called when props are updated
        componentWillUnmount() {} // called when a component is removed from the DOM

        componentDidMount() {} // called after a component is attached to the DOM
        componentDidReceiveProps() {} // called after props are updated
        componentDidUnmount() {} // called after a component is removed from the DOM

        shouldComponentUpdate(nextState, nextProps) {} // if returns true, re-renders, otherwise nothing happens
        componentWillUpdate(object nextProps, object nextState) // called before the component is re-rendered
        componentDidUpdate(object prevProps, object prevState) // called when the component did update

        // custom methods added to this component...
        // given an underscore in the name to denote 'custom'
        _parseData() {}
        _onSelect() {}

        // called by React whenever the state changes
        render() {}
    }

    ConstructorName.displayName = 'Dudley'
    ConstructorName.initialProps = {}
    ```

    > exercise: make a component that logs out every lifecycle event

    Questions for the room:

    - How would you implement jQuery UI/Kendo/jQuery plugins on a React-managed element?
    - How would you have a component listen on mouseMove or scroll, and stop when it is removed from the screen?

    Notes:

    - React virtual events are "recycled" quickly, so grab the values immediately
    - React has some global methods (check the API/docs for discussion)
    - DOM events, className, htmlFor, setInnerHTMLDangerously

Section 3: Troubleshooting, State, and React on the server

    - keys, React DevTools

    ![](http://calendar.perfplanet.com/wp-content/uploads/2013/12/vjeux/2.png)

    > exercise: demonstrate how keys are sometimes needed to prevent re-rendering

    - propTypes

    > exercise: demonstrate how propTypes (used only in dev mode) are used to ensure inputs to your components

    - simple state management with POJOs

    > exercise: build a todolist

    - routing (Backbone, React router, or page.js) # tons to choose from

    > exercise: build a blog with multiple views/screens

Extras: Flexible Flux and Advanced Concepts

    - React.renderToString vs. Resolver.renderToString
    - A list of awesome components online: http://react.parts/web
    - state management (Backbone, Flux)
    - lots of flux implementations, but Redux and Alt are most popular
    - CSP, channels, RxJS, and other ways to "push" data
    - testing? http://blog.venmo.com/hf2t3h4x98p5e13z82pl8j66ngcmry/2015/6/4/testing-reactjs --> react.addons.testutils
    - auto-output with disc npm tool?
    - immutable JS, mori JS, immutable state and persistent data structures
    - The Diffing Algorithm™ --> http://calendar.perfplanet.com/2013/diff/


#### License

MIT.
