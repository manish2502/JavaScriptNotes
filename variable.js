// 1. using var
// used to declare global scoped variables
var trainerName     //Declaration
console.log(trainerName)
//This area is temporal dead zone
// Initialisation
trainerName = "Suraj"
console.log("Trainer name after initialization:",trainerName)

{
    var usernamewhoisactive = "Ayush"
    // var userNameWhoIsActive = "Vikram"
    console.log("Active user name inside the block:",usernamewhoisactive)
    console.log("***************************************")
}
console.log("Active user name outside the block:",usernamewhoisactive)
console.log("***************************************")


//Re-init
trainerName = "Irshan Sir"
console.log(" Trainer name after re-init: " , trainerName)
trainerName = "Rahul Sir"
console.log(" Trainer name after re-init: " , trainerName)


// using let
// can reinitialize but cant redeclare
{
    let insti = "Pyspiders"
    console.log("Inside the block",insti)
}

// console.log("Outside the block",insti)

let insti = "Qspider"
console.log("Re-initialize the value",insti)

insti="Jspiders"
console.log("Re-initialize the value",insti)

// Using const
// {
//     const
// }