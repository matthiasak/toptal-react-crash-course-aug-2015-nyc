// decorators

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

// oooo, mixins
Student.prototype = Object.assign(new Person(), Array.prototype)

// now let's try ES6
//
//
//
// I can haz mixins?
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
// class Student2 extends Person2, Array {}


//
// decorators to the rescue (ES7, babel "stage 1")
//

const extend = (...fns) =>
    (target) => {
        return subclassTree
    }

@extend(Person2, Array)
class Student3 {
    constructor(name){
        Person2.call(this, name)
    }
}

let m = new Student3('matt')
log(m.name+'')