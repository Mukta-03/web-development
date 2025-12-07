let First,Second,Third;

// to generate first word
let random=Math.random()
if(random<0.33){
    First="Crazy"
}
else if(random>=0.33 && random<0.66 ){
    First="Amazing"
}
else{
    First="Fire"
}
// to generate Second word
random=Math.random()
if(random<0.33){
    Second="Engine"
}
else if(random>=0.33 && random<0.66 ){
    Second="Foods"
}
else{
    Second="Garments"
}
// to generate Third word
random=Math.random()
if(random<0.33){
    Third="Bros"
}
else if(random>=0.33 && random<0.66 ){
    Third="Limited"
}
else{
    Third="Club"
}
console.log(`${First} ${Second} ${Third}`)
