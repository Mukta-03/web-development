console.log("Hello")
let boxes=document.getElementsByClassName("box")
boxes[3].style.backgroundColor="red"
document.getElementById("k3").style.backgroundColor="pink"
// this query selector only selects the first element
document.querySelector(".box").style.backgroundColor="yellow";
// for selecting all use queryselectorall with for loop
document.querySelectorAll(".box").forEach(e=>{
    e.style.color="green";
})
// another selection is by tag name use this in console log
// document.getElementsByTagName("div")
// use of some methoda like matches,closest,contains are also written in console given in image