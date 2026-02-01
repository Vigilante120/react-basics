// We use the 'export' keyword to make this class available to other files using 'import'.
export class Person {
  // The 'constructor' is a special method used to initialize objects created with this class.
  // It runs automatically when we use the 'new' keyword.
  constructor(name) {
    // 'this' refers to the current instance of the class (the object being created).
    // We are setting the 'name' property of the object to the value passed in.
    this.name = name;
  }

  // This is a method (function) that belongs to the Person class.
  // All objects created from this class can use this method.
  walk() {
    console.log('walking');
  }
}