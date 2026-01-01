# JavaScript Interview Questions & Answers
if (true) {
  var y = 5;
}
console.log(y); // answer is 5 
# js questions and there answer 
Q:1 difference b/w let var and const 
answer : var is function-scoped and hoisted, let is block-scoped and reassignable, and const is block-scoped and cannot be reassigned.

Q2:what is event loop in one line 
Answer :The event loop is what lets JavaScript handle asynchronous code by running queued tasks when the main code finishes, without blocking execution.

Q3:what is promise in js in one line
answer: A Promise is an object that represents the completion or failure of an asynchronous operation.

Q4: Hoisting
answer: JavaScript is when variable and function declarations are moved to the top of their scope before code execution.

Q5: Debounce
answer: Debounce delays a function call and runs it only after the user stops triggering the event for a given time (useful for search input, resize, scroll).

Q6: Throttle
answer:Throttle limits a function so it runs at most once in a given time interval, no matter how many times the event fires (useful for scroll, resize, button spam).

Q7 : Closure
answer: A closure is when a function remembers and can access variables from its outer scope even after the outer function has finished.

example :

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
