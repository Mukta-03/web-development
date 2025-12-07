// now due the snippets ... i typed alt only and it provided me alert(''), similarly for clog it provided me consol.log

// alert('This is an alert');
console.log('this is console log');

// the correct order for promise is resolve , reject not reject,resolve

let prom1 = new Promise((resolve,reject)=>{
let r=Math.random();
if(r<0.5){
    reject("random no. is lesser than 0.5")
}
else{
    resolve("random no. is greater than 0.5")
}
})

// to catch error/rejection in prom1

prom1.then((a)=>{
    console.log(a)
}).catch((err)=>{
console.log(err)
})


let prom2 = new Promise((resolve,reject)=>{
setTimeout(() => {
    console.log("This is from prom2")
    resolve("resolved prom2")
},2000);
})

prom2.then((a)=>{
    console.log(a)
})

// promise.all..the output will come in form of array
// let p3=Promise.all([prom1,prom2])
// p3.then((a)=>{
// console.log(a)
// })

// promise.allsettled....will tell the status and the value
// let p3=Promise.allSettled([prom1,prom2])
// p3.then((a)=>{
// console.log(a)
// })

let p3=Promise.race([prom1,prom2])
p3.then((a)=>{
console.log(a)
})

// similarly-promise.any....will tell the status and the value