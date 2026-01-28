import Teacher from "./teacher";

// ES6 BASICS 
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// var -> function
// let -> block
// const -> block

// function sayHello() {
//   for (let i = 0; i < 5; i++){
//     console.log(i)
//   }
  
//   console.log(i); 
// }

// sayHello();

// object
// const person = {
//   name: 'Nishant',
//   walk() {},
//   talk() {}
// };

// person.talk();
// person.walk();
// person['name'] = 'Nishu';

// this keyword

// const person = {
//   name: 'Nishant',
//   walk() {
//     console.log(this);
//   }
// }

// person.walk();

// const walk = person.walk.bind(person);
// walk();

// window object 
// arrow function 
const square = number => number * number;


const jobs = [
  {id: 1, isActive: true},
  {id: 2, isActive: true},
  {id: 3, isActive: false}
]

const activeJobs = jobs.filter(jobs => jobs.isActive);
console.log(activeJobs);


const person = {
  talk() {
    var self = this;
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  }
};

person.talk();

const colors = ['red', 'green', 'orange'];
const items = colors.map(color => `<li>${color}</li>`); // backtricks a
console.log(items);

const address = {
  street: '',
  city: '',
  country: '',
};

// destructuring 
const { street, city, country } = address;

const { street: st } = address;

// spread operator 

const first = [1,2,3];
const second = [4,5,6];

const combined = [...first, 'v', ...second, 'c'];

console.log(combined);
// default -> import ... from '';
// Named -> import {...} from '';


const teacher = new Teacher("nishant", "btech");
teacher.walk();
teacher.teach();

// named and default 
