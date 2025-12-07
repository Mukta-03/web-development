// js is asynchronous in nature , if js finds any function which is asynchronous , it avoids it for later,if you think it runs functions in sequence, then its wrong cuz it can skip a function which is asynchronous for other one, for eg ist run-1,2 and 4 then it runs 3rd bcz it is asynchronous.,

console.log("This is first")
console.log("This is Second")
setTimeout(() => {
    console.log("I arrived two sec late")
},2000);

// even when you set 0 sec interval , it will run the whole script then it will run 3rd

setTimeout(() => {
    console.log("I arrived zero sec late")
},0);
console.log("This is Third")
// in this tutorial we have just installed 2 similar extensions es7 react... if we type anfn after function name= ... it provides any anonymous function

// if functions has functions inside them and so on....it is called callback hell... to avoid this we use promises, below is the example of function inside function

const fn=()=>{
console.log("just a function , called inside callback function")
}

const callback=(arg,fn)=>{
console.log("this is callback function's arg",arg)
fn()
}

    const loadscript=(src,callback) => {
    let sc=document.createElement("script")
    sc.src=src;
    sc.onload=callback("harry",fn)
    document.head.append(sc)  
}
// i copy pasted this script link from prism js cdn
loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)
