
function getrandomcolor(){
    // here math.ceil is to get integer value to exclude real no, and the rest is to get the number from 0-255
    let val1 =Math.ceil(0+Math.random()*255);
    let val2 =Math.ceil(0+Math.random()*255);
    let val3 =Math.ceil(0+Math.random()*255);
    return `rgb(${val1},${val2},${val3})`
    // eg. rgb(106, 87, 87)...thats why we have used three values
    
}

let boxes=document.getElementsByClassName("box")

Array.from(boxes).forEach(e=>{
e.style.backgroundColor=getrandomcolor()
e.style.color=getrandomcolor()
})
