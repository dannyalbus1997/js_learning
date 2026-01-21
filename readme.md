# JavaScript Interview Questions & Answers
if (true) {
  var y = 5;
}
console.log(y); // answer is 5 
# js questions and there answer 
## Q:1 difference b/w let var and const 
answer : var is function-scoped and hoisted, let is block-scoped and reassignable, and const is block-scoped and cannot be reassigned.

## Q2:what is event loop in one line 
Answer :The event loop is what lets JavaScript handle asynchronous code by running queued tasks when the main code finishes, without blocking execution.

## Q3:what is promise in js in one line
answer: A Promise is an object that represents the completion or failure of an asynchronous operation.

## Q4: Hoisting
answer: JavaScript is when variable and function declarations are moved to the top of their scope before code execution.

## Q5: Debounce
answer: Debounce delays a function call and runs it only after the user stops triggering the event for a given time (useful for search input, resize, scroll).

## Q6: Throttle
answer:Throttle limits a function so it runs at most once in a given time interval, no matter how many times the event fires (useful for scroll, resize, button spam).

## Q7 : Closure
answer: A closure is when a function remembers and can access variables from its outer scope even after the outer function has finished.

```bash
function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}
const inc = counter();
inc(); // 1
inc(); // 2
```



## Q8: Explain the difference between synchronous and asynchronous code in JavaScript, with an example.
ans: 
Synchronous code runs line by line, blocking further execution until the current line finishes.
console.log("First");
console.log("Second");
First
Second

Asynchronous code allows other code to run without waiting for it to finish. It often uses Promises or callbacks.
console.log("First");
setTimeout(() => console.log("Second"), 1000);
console.log("Third");

First
Third
Second

 
## Q9: What is event bubbling in JavaScript?
ans: Event bubbling in JavaScript is a type of event propagation where an event starts from the innermost element (child) and bubbles up to its parent elements in the DOM tree.

## Q10 :What is the purpose of the bind method in JavaScript?
ans: The bind method in JavaScript is used to set the this context of a function and return a new function with that context permanently attached.

## Q:11:What is currying in JavaScript, and why would you use it?
ans :Currying is transforming a function with multiple arguments into a sequence of functions, each taking a single argument. The ()=>()=> syntax is one way to implement it.

## Q:12 coercion
ans automatically converts a value from one type to another during operations.

# type of all the variable 
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

# Maths operations 
1 Addition +,
2 Subtraction -,
3 Multiplication *,
4 Division /,
5 Remainder %,
6 Exponentiation **

# objects this 

examples


let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya

1: When a function is declared, it may use this, but that this has no value until the function is called.
2: A function can be copied between objects.
3: hen a function is called in the “method” syntax: object.method(), the value of this during the call is object.


# event loop 


[parts of vent lopps]

  ![alt text](image.png)

  Call Stack ← Event Loop ← Queues


console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

Answers 

Start
End
Promise
Timeout

# scope in js

Scopes in JavaScript (simple):

1: Global Scope
Accessible everywhere.

2: Function Scope
Variables inside a function are accessible only inside it (var, let, const).
 
3: Block Scope
let and const work only inside {}.

4: Lexical Scope
Inner functions can access variables of outer functions.

example

function outer() {
  let x = 5;
  function inner() {
    console.log(x);
  }
}

# Coercion

JavaScript automatically converts a value from one type to another when needed.
```
'5' + 2      // '52'  (number → string)
'5' - 2      // 3     (string → number)
true + 1     // 2
false == 0   // true
null == undefined // true

Number('5')   // 5
String(10)    // '10'
Boolean(0)    // false

[] + []       // ''
[] + {}       // '[object Object]'
{} + []       // 0   (in browser console)
'5' == 5      // true
'5' === 5     // false
```

# This 
this is a reference to the object that is currently executing the code. Its value depends on how the function is called, not where it’s defined.

 
### 2. Global Context
```
Browser (non-strict mode)

console.log(this); // window

Node.js (global context)

console.log(this); // {} (empty object in module scope)
```

### 3. Function Context
```
function show() {
  console.log(this);
}
show(); // window (browser) or undefined (strict mode)


"use strict";
function show() {
  console.log(this);
}
show(); // undefined
```
### 4. Object Method
```
const obj = {
  name: "Talha",
  greet: function () {
    console.log(this.name);
  }
};
obj.greet(); // Talha
```

### 5. Arrow Functions
```
const obj = {
  name: "Talha",
  greet: () => {
    console.log(this.name);
  }
};
obj.greet(); // undefined (because this points to global/window)

✅ Correct usage inside object:
const obj = {
  name: "Talha",
  greet() {
    const arrow = () => console.log(this.name);
    arrow();
  }
};
obj.greet(); // Talha
```

# Truthy / Falsy

### Falsy Values

```
false
0
-0
0n
""
null
undefined
NaN

```

### Truthy Values

```
true
"0"
"false"
[]
{}
function () {}
42

```

# data types
Primitive data types store simple values, while non-primitive data types store references to complex values.
## Immutable (cannot be changed)
```
let a = 10;
a = 20;        // creates a new value, original not changed

let str = "hi";
str[0] = "H";  // no effect
console.log(str); // "hi"

```
## Mutable (can be changed)
```
let obj = { name: "Talha" };
obj.name = "Ali";   // value changed

let arr = [1, 2];
arr.push(3);       // array modified

```
## difference b/w mutable and immutable
Mutable means a value can be changed, while immutable means a value cannot be changed once created.

