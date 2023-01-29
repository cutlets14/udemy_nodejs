# NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)
## UDemy - Maximilian Schwarzmüller
> Notes and code captured as part of Udemy's NodeJS course.

* Node.JS basically takes Javascript (JS) from the browser and allows one to run JS anywhere else as if it were like any other programming language.
* Node.JS uses V8 which is the name of the Javascript engine built by Google to run JS in browsers.
    * V8 compiles your JS code and compiles it to machine code for execution by your machine.
    * V8 itself is run in C++.
    * Node.JS adds certain features on top of V8, e.g., working with the local filesystem etc., which allow using JS on top of servers without browsers.
* Node.JS is not limited to running things on a server. It is important to realize that Node is a JS runtime.
  * You can use it for more than just server-side code: utility scripts, build tools (e.g., React, Angular relies on Node for building code and assets).
* Most popular usage is Node.JS' role in web development - running the server, listening to requests, executing business logic (handle requests, validate input, connect to DB etc.), responses (return responses, rendered HTML or JSON or files etc.)

Alternatives to Node.JS include Python (Flask, Django), php (Laravel), Ruby (Rails), ASP.NET etc.

How to get the most out of this course?
* Watch the videos - at your speed; pause and rewind as needed.
* Code along and do the exercises
* Use the course resources - compare against source code (last lecture of each module), links

Two ways of executing your Node.JS source code:
1. REPL - Read-Evaluate-Print-Loop
2. Execute files - how it is done for real-world apps

JavaScript
* Weakly-typed programming language - JS knows types but it doesn't force you to define what type one is using; data types can be switched dynamically
* Object-oriented language - Data can be organized in logical objects; need to be aware of Primitive and reference types
* Verstaile language - runs in browser, machine, or server; can perform a broad variety of tasks
* bind() can be used to tell JS to make a function that, no matter how it is called, is called with a particular `this` value. The paradigm works because `this` always refers to whoever calls `this`.
* Objects allow us to group functionality together:
  * We can have regular key/value pairs in there
  * We can also have functions in there. Calling a function which uses an attribute defined in the object should either use "<function_name>() {}" or the traditional "<function_name> function() {}" conventions. In other words, arrow functions do not work!
* Arrays can store items with mixed types: strings, numbers, even objects can be stored at the same time.
  * ".map()" -> transform the array and return a new one after the transformation. Map always takes in a function which defines how each element of the array should be modified.
  * There are tons of methods for arrays
  * Objects and Arrays are reference types - when stored in a "const", the array or object can still be edited without violating the restriction that they cannot change.
  * More info here - https://academind.com/tutorials/reference-vs-primitive-values
* Spread operator - "..." - take the array or object after the operator, pull out all elements/properties from the object/array, and put those elements/properties to whatever is around the spread operator
* Rest operator - also "..." - essentially the opposite of the spread operator; depends on the context in which "..." is used, the rest operator is used to merge elements/properties into an array
  * From MDN - The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
* Destructuring - 