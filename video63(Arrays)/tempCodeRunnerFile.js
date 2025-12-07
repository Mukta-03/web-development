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
let arr1=["a","b","c"],arr2=["d","e","f"],arr3=["g","h","i","j","k","l"]
console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(typeof arr1)
console.log(arr1.concat(arr2,arr3))
console.log(arr.sort())
console.log(arr1.sort())
// here splice method removes elements from index 1 to 3
console.log(arr3.splice(2,4))
