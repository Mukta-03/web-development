console.log("Faulty Calculator")

let random = Math.random()
console.log(random)
// this random value will be seen in the browser inspection's console section
let num1 = prompt("Enter first number=")
let op = prompt("Enter the operation u want to perform(+,-,/,*)=")
let num2 = prompt("Enter second number=")


let obj={
     "+":"-",
     "-":"/",
     "*":"+",
     "/":"**",
}

if(random>0.1){
   alert(`The result is ${eval(`${num1} ${op} ${num2}`)}`)

}
else{
   op=obj[op]
   alert(`The result is ${eval(`${num1} ${op} ${num2}`)}`)

}

