console.log("strings")

let a="Geeta"
console.log(a)
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a.length)
let b="Rani"
console.log(`First name is ${a} and Last name is ${b} `)
// or
console.log("First Name is "+ a+ "and last name is "+b)
console.log(a+b+"Aaruhi")
console.log(a.toLowerCase())
console.log(b.toUpperCase())
let c="   Chiragi   "
console.log(c)
console.log(c.trim())
console.log(a.charAt(3))
console.log(a.slice(1))
console.log(a.slice(0,4))
// this 4th index will not be included , this is the boundary)
console.log(c.replace("i","1"))
// here this first i will be replaced only with 1 in name chiragi
console.log(a.concat(b,c,"aish","surat"))
console.log(a.indexOf("ta"))
console.log(b.charAt(1))
console.log(c.endsWith("t"))
console.log(a.startsWith("g"))
console.log(a.startsWith("G"))

// note-strings are immutable... the org string will remain same ...even after applying any of the functions




