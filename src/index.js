// Imports 'Teacher' from the 'teacher.js' file. 
// Since it was exported as 'default', we don't need curly braces.
import Teacher from "./teacher";

// ==========================================
// ES6 BASICS FOR REACT
// ==========================================

// ------------------------------------------
// 1. Arrow Functions
// ------------------------------------------
// A shorter way to write functions.
// If there is only one parameter (number), parentheses () are optional.
// If there is only one line of code, the 'return' keyword and curly braces {} are implicit.
const square = number => number * number;
console.log("Square of 5:", square(5));


// ------------------------------------------
// 2. Array.filter()
// ------------------------------------------
// Used to create a new array with only the elements that pass a test.
const jobs = [
  {id: 1, isActive: true},
  {id: 2, isActive: true},
  {id: 3, isActive: false}
];

// We pass a function that returns true or false for each item.
// Here we keep only jobs where isActive is true.
const activeJobs = jobs.filter(job => job.isActive);
console.log("Active Jobs:", activeJobs);


// ------------------------------------------
// 3. Arrow Functions & 'this'
// ------------------------------------------
// Arrow functions don't rebind 'this'. They inherit 'this' from the outer scope.
const human = {
  talk() {
    // In a regular function, 'this' inside setTimeout would refer to the Window object.
    // With an arrow function, 'this' correctly refers to the 'human' object.
    setTimeout(() => {
      console.log("this inside timeout:", this);
    }, 1000);
  }
};

human.talk();


// ------------------------------------------
// 4. Array.map()
// ------------------------------------------
// Used to transform each element in an array into something else.
// Very useful in React for rendering lists of items.
const colors = ['red', 'green', 'orange'];

// We are converting each color string into an HTML template string.
const items = colors.map(color => `<li>${color}</li>`); // Template literal using backticks `
console.log("Mapped Colors:", items);


// ------------------------------------------
// 5. Object Destructuring
// ------------------------------------------
// A way to extract properties from an object into variables.
const address = {
  street: 'Main St',
  city: 'New York',
  country: 'USA',
};

// Extracts 'street', 'city', and 'country' properties into standalone variables.
const { street, city, country } = address;

// You can also assign them to a new variable name (alias)
const { street: st } = address;
// Now 'st' holds the value of 'address.street'.


// ------------------------------------------
// 6. Spread Operator (...)
// ------------------------------------------
// Used to combine arrays or objects.
const first = [1, 2, 3];
const second = [4, 5, 6];

// Creates a new array with elements from 'first', then 'v', then 'second', then 'c'.
const combined = [...first, 'v', ...second, 'c'];
console.log("Combined Array:", combined);


// ------------------------------------------
// 7. Classes & Modules
// ------------------------------------------
// We created a 'Person' class and a 'Teacher' class that extends it.
// We imported 'Teacher' at the top of this file.

const teacher = new Teacher("Nishant", "B.Tech");

// Teacher inherits 'walk' from Person
teacher.walk();

// Teacher has its own method 'teach'
teacher.teach();

// Accessing properties
console.log("Teacher Name:", teacher.name);
console.log("Teacher Degree:", teacher.degree);


// ------------------------------------------
// 8. Spread Operator (Objects)
// ------------------------------------------
// Combine properties from multiple objects.
const firstObj = { name: 'Mosh' };
const secondObj = { job: 'Instructor' };

const combinedObj = { ...firstObj, ...secondObj, location: 'Australia' };
console.log("Combined Object:", combinedObj);


// ------------------------------------------
// 9. Ternary Operator
// ------------------------------------------
// A shortcut for if-else statements.
// Syntax: condition ? expressionIfTrue : expressionIfFalse
const age = 22;
const type = age > 18 ? 'Adult' : 'Child';
console.log("User Type:", type);


// ------------------------------------------
// 10. Destructuring Arguments
// ------------------------------------------
// Extract object properties directly in the function argument.
// Very common in React for 'props'.
const profile = { name: 'Alice', age: 25 };

const printName = ({ name }) => {
  console.log("Extracted Name:", name);
};
printName(profile);


// ------------------------------------------
// 11. Optional Chaining (?.)
// ------------------------------------------
// Safely access nested properties. Returns undefined if a reference is nullish.
const user = { id: 1, info: { name: 'Sara' } };

// No error even if 'address' is missing.
const streetName = user.address?.street; 
console.log("Street (Optional Chain):", streetName);


// ------------------------------------------
// 12. Async / Await
// ------------------------------------------
// Modern syntax for promises.
const fetchData = async () => {
  // Simulating an API call
  const result = await new Promise(resolve => setTimeout(() => resolve("Data Loaded"), 500));
  console.log(result);
};

fetchData();

