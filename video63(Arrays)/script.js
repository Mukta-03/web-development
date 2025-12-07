let arr=[2,6,4,5,7,3]
// arrays are mutable , there value can be changed
console.log(arr)
console.log(arr.length)
console.log(arr[0])
console.log(arr[2])
console.log(arr[4])
console.log(arr,typeof arr)
console.log(arr.toString())
// push and pop methods are used to add or remove last elements respectively
arr.push("Home")
console.log(arr)
arr.pop()
console.log(arr)
//shift and unshift methods are used to remove and add elements at the beginning respectively
arr.shift()
console.log(arr)
arr.unshift("Sweet")
console.log(arr)
console.log(arr.reverse())
console.log(arr.join(" and "))
// deleted method-memory is allocated but element is deleted
delete arr[4]
console.log(arr)
console.log(arr[4])
let arr1=["a","b","c"],arr2=["d","e","f","x","y","z"],arr3=["g","h","i","j","k","l"]
console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(typeof arr1)
console.log(arr1.concat(arr2,arr3))
console.log(arr.sort())
console.log(arr1.sort())
// here splice method takes out elements from index 2 ,here 4 is how many no. to delete ..similarly we can add through splice, there is one more method-slice method-not working
arr3.splice(2,4)
console.log(arr3)
arr3.splice(2,4,55,66)
console.log(arr3)
// array.from is used to make array from the objects
console.log(Array.from("Suman"))
// map method can be used to make a new array from an existing array
let newarr=arr.map((e)=>{
    // new array contains squares of elements in arr
    return e**2;
})
console.log(newarr)

let arr4=[2,4,7,8,5,9,20]

const greaterthan7 =e=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr4.filter(greaterthan7))

// reduce fuction is used to reduce all the elements to one element
const red=(a,b)=>{
    return a*b
}
console.log(arr4)
console.log(arr4.reduce(red))

// loops, for, foreach, forof, forin
let arr5=[10,9,8,7,6,5]
for(i=0;i<=arr5.length;i++){
    const e = arr5[i];
    console.log(e)
}
// here e is the index
arr5.forEach((value,e,arr5)=>{
console.log(value,e,arr5)
})

let obj={
    a:1,
    b:2,
    c:3
}
// forin
for (const key in obj) {
    const e = obj[key]; 
    console.log(key,e)
}
// forof
for (const e of arr5) {
    console.log(e)
    
}


    
    

