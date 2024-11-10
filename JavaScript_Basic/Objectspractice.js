// Object Literal Declare
mySym=Symbol() 
const user = {
    name:"Eman Shahid",
    age:18,
    email:"emanshahid@gmail.com",
    gender:"Male",
    isLogIn: false,
    lastDaysLogin:["Monday","Saturday"],
    "location":"Sialkot",
    [mySym]:"Key1" // This is a way to write a symbol variable in object 
}

console.log (user.name)
console.log(user["name"]);
console.log(user.lastDaysLogin);
//console.log(user.mySym)(I checked the mySym before as a symbol declared)
//console.log("Check Data type of mySym:", typeof(user.mySym));
console.log (user[mySym])
console.log(user["location"]);
//console.log (user.["locaion"]) i cannot access the variable through this 
//Object.freeze(user)// now object is freeze we cannot change value
// add a function in object 
user.greetings1=function(){
    console.log("Hello! JS User ");
} 
user.greetings2=function(){
    console.log(`Hello!, ${this.name}`);
} 
console.log(user.greetings1)
console.log(user.greetings1());
console.log(user.greetings2());





