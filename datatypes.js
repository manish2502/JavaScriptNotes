// 1.string
//group of characters enclosed within quotes
//qoutes  - '',"",``(backticks)


let institute = 'pyspiders'
console.log("institute is:",institute)

let students = "pyspider's student"
console.log("we are:",students)

let place = 'BTM Bangalore'
console.log("Location of pyspiders:",place)

//checking datatype
console.log("type of pyspiders: ", typeof institute)

//string interpolation
console.log("addition : 10+2")
console.log(`Addition : ${10+2}`)

console.log(`we are ${students},${institute} is located in ${place}`)


// 2.NUMBER
//  js number can hold whole as well as decimal number
//  can store only 16 digits

let num = 1001
console.log("Number:",num)
let decNum = 1001.111
console.log(typeof num,typeof decNum)

// 3.BIGINT
let capacity = BigInt("765432356576543567")
console.log(capacity)
console.log(typeof capacity)
// or
let capacity2 = 324546352645468436546586546354675n
console.log(capacity2)
console.log(typeof capacity2)

// 4.BOOLEAN
// can hold only 2 entities i.e true or false
let areStudentsFeelingSleepy = false
console.log("Are students in web class feeling sleepy:",areStudentsFeelingSleepy)
console.log(typeof areStudentsFeelingSleepy)

// 5.UNDEFINED
// A variable with value is known as udefined
// here declarartion of variable will be done, but wont be initialized with value

let age
console.log("age is:",age)

console.log(typeof age)

// 6.NULL
// refers to non existing object
// it represents empty,unknown,nothing
// intentionally making the value as absent

let salary = null
console.log("salary is: ",salary)
console.log(typeof salary)

// 7.OBJECT
//derived from primitive data
//can hold multiple values in thhe form of key and value

// syntax:
// let obj = { key:value,key:value,key:value}

// characteristics of object:-
// Mutable
// key should be unique,if key is present alaready new value will be over written
// value can be of any type,key should be either string or number
// ordered

let patientdetails = {
    name : "Shweta",
    place : "Bengaluru",
    disease : "Heart Broken",
    DOA : "01/01/2026",
    weight : "35kg",
    height : `5'10"`,
    bloodgroup : "B+ve",
    contact : {
        mobile : 9843294384,
        mail : "Shweta1@gamil.com"
    }
}
console.log("Patient detail in kiims hospital: ",patientdetails)
console.table(patientdetails)


// Accessing value
console.log("PAtient name:",patientdetails.name)
console.log("place:",patientdetails["place"])

//changing value
patientdetails.gender = "Female"
console.log("Updated patient details:",patientdetails)

//Note: if key is already existed then value will be over written, or else will be inserte das new property