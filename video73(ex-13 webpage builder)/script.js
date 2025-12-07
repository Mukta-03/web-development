
function createCard(title,cname,views,months,duration,imglink){

let viewstr
if (views<1000 ){
    viewstr=views
}
else if(views>1000000){
    viewstr=views/1000000+"M"
}
else{
    viewstr=views/1000+"k"
}
let html=`<div class="cards">
        <div class="image">
            <img src="${imglink}">
            <div class="capsule">${duration}</div>
        </div>
        <div class="text">
         <h1>
            ${title} 
         </h1>
         <p>${cname} . ${viewstr} views . ${months} months ago</p>
        </div>
    </div>`

    document.querySelector(".container").innerHTML= document.querySelector(".container").innerHTML + html
}

    createCard("Welcome To Web Dev | Sigma Web Dev Course","Code With Harry",567,7,"32:12","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDWfGPsuQKuWateaRbWeBo1MDhM3A")