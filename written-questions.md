Written questions
The following questions are intended to be answered with written answers (no coding required) and should re-enforce some of the learning you have completed.

Which part is the file extension of the package.json file?

  - the part that comes after the '.' in the file name, (.json).

What does JSON stand for?

  - Javascript Object Notation.

What is the purpose of JSON?

  - managing the installation of Software Dependencies (other code our program depends on such as Jest or ESlint)

What does the package.json file do?

  - the package.json file tells Node how to manage the projects dependencies (so if our .json file states a depency as jest version 23.6.0 our packagae manager knows which version of jest to install/what code our program depends on).

How do you install dependencies in a project after first cloning it from Github?
  - npm install

What does "forking" mean in the context of Github?
  - forking means taking a copy of someone elses code and storing it in your own account.

What data types do you know?
  - string, number, boolean, null, undefined, symbol, BigInt

What is the difference between primitive and complex data types, and can you give examples of each?

  - A primitive data type is a data type that is not an object and has no methods (string, number, boolean, null, undefined, symbol, BigInt). Primitives are immutable i.e. they cannot be altered in the way that objects, functions or arrays (which are all types of objects) can be altered.

What would be the best data type for representing whether a user is logged into the system or not?

- boolean (true or false).

How would you create a variable whose value could not be changed?

   let immutable = "string"
   immutable.toUpperCase()
   console.log(immutable) // string


What would be the outcome of running this code?

const firstName = "Sandra";

function sayHello(name) {
  console.log("Hello, " + firstName);
}

sayHello("Sally"); // Hello, Sandra


What would be the outcome of running this code?

function getFullName(firstName, lastName) {
  const fullName = firstName + " " + lastName;
  return fullName;
}

const result = getFullname("Sally", "Jennings"); <---- getFullName?

console.log(fullName); // fullName is not defined

If you wanted to see what dependencies were required in this project, where would you to to look for a list?
  - package.json

When you install dependencies, what directory is created?
  - node_modules

How can you write comments in your code?

// This is a single line comment

/* this
is
a
multi
line
comment */
