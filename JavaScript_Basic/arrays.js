// Arrays
//let myArr=[1,5,2,6,89,4,5]
// function
//myArr.push(7,6) 
//console.log(myArr);
//myArr.pop()
//console.log(myArr);
//let index=myArr.indexOf(5);
//console.log(index);
//let arrIndex=[... myArr.keys()]// (...)Here, myArr.keys() returns an iterator object with the array's indices. Using ... in [...myArr.keys()] spreads these indices into a new array.
//console.log(arrIndex)
// Some()
//let arr1=["eman","umair","sami","abdullah"]
//ans=arr1.some(name=> name.length>=9)
//console.log("Laes:",ans);
// From and Of function 
let name="Eman Shahid"
console.log(Array.isArray(name))
name=Array.from(name)
//console.log(name);
name1=name.splice(4,1)
console.log(name)
console.log(name1);
 