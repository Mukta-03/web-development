console.log("Functions")

function demo(name) {
    console.log("Hii"+ name + ", you are a gentleman")
    console.log("Hii"+ name + ", you are a king")
    console.log("Hii"+ name + ", you are a good person")
}
 
demo("Rohit")
demo("Shubham")

function sum(a,b,c=5) {
// here c is optional if the cvalue of the c is not given , this value will be used, in 1st call the value of b is not given , so the resukt will be nan and the value of b will be given as undefined
console.log(a,b,c)
return(a+b+c)
}

// console.log("1st call", sum(13))
// console.log("2nd call", sum(12,13))
// console.log("3rd call", sum(1,1,1))
// or 

result1=sum(13)
result2=sum(12,13)
result3=sum(1,1,1)

console.log("1st call", result1)
console.log("2nd call", result2)
console.log("3rd call", result3)

const function1 =(x)=>{
    // here function1 is the variable name and ()=> is the arrow function
    console.log("this is an arrow function",x)

}

function1(43)
function1(143)
function1(243)
