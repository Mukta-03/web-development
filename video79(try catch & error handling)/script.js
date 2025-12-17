let a=prompt("Enter first no.=")
let b=prompt("Enter second no.=")
// let sum=a+b
// prompt("The sum is",sum)
// this appends a and b instead giving addition of these two no. ... bcz this a nand b are strings

// suppose someone types a string in input , nan(not a no.) will be returned as result, we can throw an error telling the user that this is not allowed (in console)

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Characters are not allowed")
}

prompt("the sum is ",parseInt(a)+parseInt(b))

prompt("the subtraction is ",parseInt(a)-parseInt(b))
// here we have added *c into subtraction... this will show an error to user , now we can use try catch ,where first the line of code will be tried and if it has error it will be catched, if their is no error, catch will be ignored
function main()
{
    let x = 1
try {
    prompt("the subtraction is ",parseInt(a)-parseInt(b)*c)
    return true;
} catch (error) {
    console.log("This is an error bcz x is multiplied to subtraction")
    return false;
}
// finally is used to run a block of code in a function even after the return statement , here u can remove finally keyword to see the difference in console
finally{
    console.log("this is running even after the return statement")
}
}

main()
