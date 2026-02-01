// We import the 'Person' class from the './person' file.
// Since 'Person' is a named export (not default), we use curly braces { }.
import { Person } from './person';

// 'export default' means this is the main thing this file exports.
// We can import it in other files without using curly braces.
// 'extends' keyword is used for inheritance. Teacher inherits properties and methods from Person.
export default class Teacher extends Person {
  constructor(name, degree) {
    // 'super()' calls the constructor of the parent class (Person).
    // We must call it before accessing 'this' in a derived class.
    super(name); // Sets 'this.name' using the Person's logic.
    
    // We can also add new properties specific to Teacher.
    this.degree = degree;
  }

  // We can add new methods specific to Teacher.
  teach() {
    console.log('teach');
  }
}