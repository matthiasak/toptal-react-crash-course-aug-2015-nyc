// transpilation and ES6

// es3 function
var test = function(){}
// log(test+'')

// es3 function
var sum = function(a,b){
    return a+b
}
// log(sum+'')

// es6 arrow function, single expression
let sum2 = (a,b) => a+b
// log(sum2+'')

// es3 variadic sum
const sum3 = function(){
    return Array.prototype.slice.call(arguments)
        .reduce(function(memo, val){
            return memo + val
        })
}
// log(sum3+'')

// es6 variadic sum with argument spread operator (destructuring)
const sum4 = (...nums) => nums.reduce((memo,val) => memo+val)
// log(sum4+'')

// es6 variadic average with spread operator (destructuring and restructuring)
const avg = (...nums) => sum4(...nums) / nums.length

// pure es3/5 way of making OOP-like structures and inheritance (es6 multiline string with string templating)
function Person(name){
    this.name = name
}
Person.prototype = {
    greet: function(){
        log(`hello! I'm
            ========
            ${name}
            ========
        `)
    }
}
function Student(name){
    Person.call(this)
}
Student.prototype = new Person()

// es6 way of OOP-like structures / inheritance
class Person2 {
    constructor(name){
        this.name = name
    }

    greet(){
        log(`hello! I'm
            ========
            ${name}
            ========
        `)
    }
}
class Student2 extends Person2 {
    constructor(name){
        super(name)
    }
}

// more fun destructuring / restructuring with objects and arrays

let a = 1,
    b = 2,
    c = 3,
    person = {name:'matt'}

// log( { a,b,c, ...person } )

let d = 4,
    e = 5,
    f = 6,
    person2 = ['Algebraic!', 'Mathemagical!']

// log( [d,e,f, ...person2] )

// default params
const random = () => Math.random()
const hi = (greeting="hello world", info=random()) => log(greeting, info)

// hi()
// hi()
// hi()

// es6 JSX code
const app = () => <div></div>
// log(app+'')
