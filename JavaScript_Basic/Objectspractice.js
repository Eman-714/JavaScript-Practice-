// Object Literal Declare
mySym=Symbol() 
const user = {
   "name":"Eman Shahid",
    age:18,
    email:"emanshahid@gmail.com",
    gender:"Male",
    isLogIn: false,
    lastDaysLogin:["Monday","Saturday"],
    "location":"Sialkot",
    [mySym]:1// This is a way to write a symbol variable in object 
}

//console.log (user.name)
//console.log(user["name"]);
//console.log(user.lastDaysLogin);
//console.log(user.mySym)(I checked the mySym before as a symbol declared)
console.log("Check Data type of mySym:", typeof(user.mySym));
//console.log (user[mySym])
//console.log(user["location"]);
//console.log (user.["locaion"]) i cannot access the variable through this 
//Object.freeze(user)// now object is freeze we cannot change value
// add a function in object 
//user.greetings1=function(){
  //  console.log("Hello! JS User ");
//} 
//user.greetings2=function(){
  //  console.log(`Hello!, ${this.name}`);
//} 
//console.log(user.greetings1)
//console.log(user.greetings1());
//console.log(user.greetings2());
console.log(typeof(user.name))
let ob1={
    1:"a",
    2:"b",
};
let ob2={
    3:"c",
    4:"d"
};
let obj3={
    5:"e",
    6:"f"
};
// assign method to merge in single object 
//let ob4=Object.assign({},ob1,ob2,obj3);
//console.log(ob4);
// Now we use spread operater 
//let ob4={...ob1,...ob2,...obj3}
//console.log(ob4);
//console.log(user.hasOwnProperty("name"));
//let keyofObject=Object.keys(ob2);// return array
//console.log(keyofObject);
//let values=Object.values(user)
//console.log(values);
for (const keys in user) {
      console.log(keys);
      
}








