//
// HELPER CODE
//
// so I can inject
//
// - external scripts, and
// - CSS generated by Sass
//
// into the iframe on the right
//
const qs = (s, el) => (el || document).querySelector(s)
const loadScripts = (...urls) => Promise.all(
    urls.map(url => {
        let s = document.createElement('script')
        s.src = url
        document.body.appendChild(s)
        return new Promise((res,rej) => s.onload = res)
    })
)

const createStylesheet = () => {
    let style = document.createElement('style')
    Sass.compile(css, result => {
        style.textContent = result.text
        qs('head').appendChild(style)
    })
}

window.onload = loadScripts(
    'https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react.min.js',
'https://medialize.github.io/sass.js/dist/sass.sync.js'
).then(_ => createStylesheet()).then(() => init()).catch(e => log(e))

const css = `
body {
    background: green;
    color: white;
    padding:1.5rem;
}
ul {
    li {
        animation: fadeIn .25s ease both;
    }
}
button {
    background-color: black;
}

@keyframes fadeIn {
    0%   {opacity:0; transform: translateY(-2rem);}
    100% {opacity:1; transform:  translateY(0rem);}
}
`

//
// END HELPER CODE - START APP
//

let init = function(){

    let {Component} = React

    class Clock extends Component {
        constructor(...p){
            super(...p)
            this.state = {
                time: new Date(),
                items: []
            }
        }
        _setTime() {
            this.setState({ time: new Date })
        }
        _addItem() {
            let {items} = this.state,
                rand = ~~(Math.random()*1000000)

            this.setState({ items: [rand].concat(items) })
        }
        // componentWillMount() {}
        // componentWillReceiveProps() {}
        // componentWillUnmount() {}
        // componentWillUpdate(nextProps, nextState) {}
        componentDidMount() {
            this.interval = setInterval(() => this._setTime(), 1000)
        }
        // componentDidReceiveProps() {}
        componentDidUnmount() {
            clearInterval(this.interval)
        }
        componentDidUpdate(prevProps, prevState) {}
        // shouldComponentUpdate(nextState, nextProps) {}

        render(){
            return <div>
                <p ref="dommy">{this.props.message}</p>
                <p>time: { this.state.time.toTimeString() }</p>
                <hr/>

                {this.props.children}

                <hr/>
                <p>Notice which list items below are new, and which ones actually receive the CSS animation</p>
                <ul>
                    {this.state.items.map(i =>
                        <li>{i}</li>
                    )}
                </ul>
                <button onClick={(e) => this._addItem(e)}>add an item</button>
            </div>
        }
    }

    // new "static" values
    Clock.displayName = 'Clock'
    Clock.defaultProps = { message: "Default props: Let's get some lunch." }

    // log(<Clock message={'Coffee time after this!'} />, new Date)
    React.render(
        <Clock>
            <p>Oh, did I sneak this in here?</p>
        </Clock>,
    qs('body'))
}

