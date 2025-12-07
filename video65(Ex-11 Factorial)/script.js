console.log("factorial of a number")
let a = prompt("Enter a no. =")
console.log("The number is =",a)
let arr=[]
for(i=a;i>=1;i--){
   arr.push(i)
    }
    console.log(arr)

    const red=(a,b)=>{
        return a*b
    }
    
console.log("The Factorial of", a ,"is",arr.reduce(red) )