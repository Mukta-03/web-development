// list of all mouse events - https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
// list of all form eventshttps://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form

let button=document.getElementById("btn")
// first event is written then action through function
button.addEventListener("click" ,()=>{
document.querySelector(".container").innerHTML="This is an altered box"
})

let button2=document.getElementById("btn2")
button2.addEventListener("dblclick",()=>{
    document.querySelector(".box").setAttribute("style","color:red")
})

let button3=document.getElementById("btn3")
button3.addEventListener("contextmenu",()=>{
alert("u have Right clicked")
})

// here keydown is fired when any key is pressed over the document
document.addEventListener("keydown",((e)=>{
console.log(e,e.keyCode)
}))