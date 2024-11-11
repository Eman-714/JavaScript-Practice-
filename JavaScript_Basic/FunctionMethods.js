//Method of function 
// apply Syntax 
//functionName.apply(thisArg, [arg1, arg2, ...])
const person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + " from " + city + ", " + country;
    }
};
const person1 = {
    firstName: "John",
    lastName: "Doe"
};
console.log(person.fullName.apply(person1, ["New York", "USA"])); // Output: "John Doe from New York, USA"
// another example 
const numbers = [5, 8, 2, 9, 3];
const max = Math.max.apply(null, numbers);
console.log(max); // Output: 9
// another example 
function multiply(a, b, c) {
    return a * b * c;
}

const values = [2, 3, 4];
const result = multiply.apply(null, values);
console.log(result); // Output: 24
//null is passed as thisArg because multiply doesn’t use this.
//values is an array passed as arguments for a, b, and c.
// another Example 
const person = {
    name: "Alice",
    greet: function(city) {
        console.log(`Hello, ${this.name} from ${city}!`);
    }
};

const anotherPerson = { name: "Bob" };

// Using `apply` to call `greet` with `anotherPerson` as `this`
person.greet.apply(anotherPerson, ["Paris"]); // Output: "Hello, Bob from Paris!"



