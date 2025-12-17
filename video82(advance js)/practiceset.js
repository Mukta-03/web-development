
// print hello world after 2 sec of delay
setTimeout(() => {
    console.log("Hello")
    console.log("World")
}, 2000);

// find avg of an array

function avg(...array){
    let sum=0
    for (elmnt of arr) {
        sum+=elmnt
    }
    return (sum/arr.length)
}

let arr=[3,6,9,12,15,18]

console.log("average=",avg(...arr))

//use of iife , resolving a promise after n seconds, take diff values of n as input

async function delay(n){
return new Promise((resolve,reject)=>{
    timeout=n
    setTimeout(() => {
        resolve("resolved after "+ n/1000 + " seconds")
    }, timeout);
})
}
// here we are using iife
(async function main(){
let a= await delay(2000)
console.log(a)
let b= await delay(3000)
console.log(b)
let c= await delay(4000)
console.log(c)
})()

// simple ineterest calculator

function simplintrst(p,r,t){
return((p*r*t)/100)
}
let p=prompt("enter the principle amount")
let r=prompt("enter the rate")
let t=prompt("enter the time")

let a=simplintrst(p,r,t)
console.log(a)