let obj={
    a:1,
    b:"Bobby"
}
console.log(obj)

let animal={
    eats:"animal is eating"
}

let cow={
    graze:"cow is grazing"
}

// suppose there is no oop... we can use prototype as follows
cow._proto_=animal

// now we will use class instead prototype , cuz prototype is not enough
class birds{
    // constructor
    constructor(name){
        this.name=name
        console.log("object is created")
    }
    // methods
    fly(){
        console.log("the birds are flying")
    }
    sleep(){
        console.log("the birds are sleeping")
    }
}
// creating an object b for class birds to call the methods of it
let b=new birds("peepa")
console.log(b)

// inherit class using extends
class sparrow extends birds{
    // // to change constructor 
    constructor(name){
        // here super keyword is used to run a method of a super class
        super(name)
        console.log("object is created as new")
    }
    // method overriding
    sleep(){
        // u can also call a method using super keyword like below
        // super.fly()
        console.log("sparrow is sleeping deeply")
    }
}


let s=new sparrow("peepi")
console.log(s)


