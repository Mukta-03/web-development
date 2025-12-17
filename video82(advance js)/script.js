async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}
//following throws an error as shown in img
// let a =await sleep()
// let b =await sleep()

// now we will use iife(immediately invoked function expression),like f=given below
(async function main(){
    //hoisting(used for var only, no let and const), here var a1=6 is defined below and hoist will be at the top of the function
         console.log(a1)
    let a=await sleep()
    console.log(a)
    let b =await sleep()
    console.log(b)
         var a1=6
    })()

// destructuring variables and objects
// this is an array below, with  three variables x, y, z... if u write z without destructuring it (without...), ot will only pick 1 digit like x and y,here ... is spread operator 

let [x,y,...z]=[1,2,3,4,5,6,7]
console.log(x,y,z)

// now to destruct objects
let obj={
    a:11,
    b:22,
    c:33
}
// to extract a nd b from object
let {a,b}=obj
console.log(a,b)

// spread syntax
function sum(a,b,c){
return (a+b+c)
}

let arr=[4,6,8]
// one way to add elements of arr
console.log(sum(arr[0],arr[1],arr[2])) 
// now we we use the spread operator to spread the array with its element
console.log(sum(...arr))

// to map the elements of arr with its element
let obj2={...arr}
console.log(obj2)

// quick quiz
const p ="the",q="no"
const r={p,q}
console.log(r)

