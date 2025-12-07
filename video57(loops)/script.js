console.log("while loop")

let i=1
while(i<=10)
{
    console.log(i)
    i++;
}

console.log("do while")
let j=1
do
{
    console.log(j)
    j++;
}
while(j<=10)

console.log("for loop")
let a=1;
 for(i=0;i<100;i++)
 {
    (console.log(a+i))
 }

 console.log("forin loop")

 let obj={
    Name: "John",
    Empcode: "1001",
    Profile:"Developer"
 }
 for (const key in obj) {
    const element = obj[key];
    console.log(element)
    
 }
  for (const key in obj) {
    
    const element = obj[key];
    console.log(key,element)
    
  }

  for (const key in obj) {
    
    const element = obj[key];
    console.log(key)
  }

  console.log("forof loop")
  
  for (const char of "John") {
   console.log(char)
   
  }