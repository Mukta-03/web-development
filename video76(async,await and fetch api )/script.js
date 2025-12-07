// as we know js is asynchronous in nature it avoids the asynchronous functions(which takes time) for later and runs rest of the script first, which is why we use await by making the function async

// async function getdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("final data")
//         }, 4000);
//     })
// }

// let us see some actual use by fetching api (copy pasted the link  from json placeholder)
// you can also copy from fetch api post request
async function getdata(){
    let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // console.log(x)
    let data=await x.json()
    return data
    
    // this return is added to print the result
    // it takes some time to purse the json placeholder, u can see the results clearly on console by slowing the internet

}

// now the js will avoid this 3rd one for later as shown below and will run others, if thhe function is not async
// console.log("abc is printed")
// console.log("some other thing is printed")
// console.log("data is loading")
// let data = getdata()
// console.log(data)
// console.log("data is processing")

// now we will make the ist commented function given above as async and wrap the block of code given below inside an async function  for demo use

async function main(){
console.log("abc is printed")
console.log("some other thing is printed")
console.log("data is loading")
let data = await getdata()
console.log(data)
console.log("data is processing")
}

main()