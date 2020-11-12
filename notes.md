## Syntax

##### Declaring variables:
```javascript
let someName = value;
const someName = value; //value can't be changed
```

##### Datatypes:
`boolean`: true/false  
`typeof`: Find datatype

##### Escape characters:
`\n` newline  
`\'` single quote  
`\"` double quote  
`\\` backslash

##### Common results:
`1 + NaN //NaN`

##### Assignment:
```javascript 
let score = 10;
score = score + 1 (or) score += 1
```

##### String operations:
Length: `"any string".length`  
Uppercase: `varname.toUpperCase() //Every letter in that variabe name becomes capital`  
Lowercase: `varname.toLowerCase() //Every letter in that variable name becomes small`  

```javascript
let color = "   purple     "
color.trim() //removes spaces 
color.trim().toUpperCase //Can chain commands
```

IndexOf:
```javascript
"baseball".indexOf("ball") //'4' because b is the 4th alphabet
"baseball".indexOf("entertainment") // '-1' if not found
```

Slice:
```javascript
"baseball".slice(4) //"ball"
"baseball".slice(1,2) //starting number and ending number

'baseball is good'.replace('good','ok')//baseball is ok
```

Templating:
```javascript
\`I counted ${3 + 4} sheep\`; // I counted 7 sheep
```

##### Numbers

Math:
```javascript
Math.PI
Math.floor //integer less than or equal to the given number
Math.round //floating number between 0 and 1
Math.pow
Math.random()

parseInt //Whole number
function convertToInteger(str) {
 return parseInt(str);
}
convertToInteger("56");


parseFloat //Any number
```


##### Operators
```javascript
comparison operators
> //greater than
< // less than
>= //greater than or equal to
<= //less than or equal to
== //equality
!= //not equal 
=== //strict equality
!== //strict non equality
# < $ //true
```
```
push //add to end
pop //removes from end 
unshift //adds to start 
shift // removes from start
concat //merge arrays
includes //looks for values
indexOf //just like str.indexOf
join //creates a string from arrays
reverse //reverses an array
slice //copy portion of an array
splice //remove/replace elements
      //splice(startIndex, deletecount, itemsToInsert)
sort //sorts an array
```
#### Object
```javascript
let obj = {
    num = 1;
}
obj.letter = "abcd" //Object { num: 1, letter: "abcd" }
obj['my name'] = "Daphne" //adds space between key name

object.prototype.hasOwnProperty() //returns a boolean indicating whether the object has the specified property as its own property
```

#### Loops
```
for loop:
for (
      [initialExpression];
      [condition];
      [incrementExpression];
)
```
```
for loops + array:
const word = 'stressed';
for (let i = 0; i = word.length-1; i++){
      console.log(word[i]); 
}

for (let letter of word){
      console.log(letter); 
}

output: 
s
t
r
e
s 2
e
d
        
```
```
const word = 'stressed';
let reversedWord = '';
for (let i = word.length-1; i>=0; i--) {
      reversedWord += word[i];
}
console.log(`Reversed word of ${word} is ${reversedWord}.`); 
output: Reversed word of stressed is desserts.
       
const word = 'stressed';
let reversedWord = '';
for (let i = word.length-1; i>=0; i--) {
      reversedWord += word[i];
      console.log(reversedWord);
}
Output:
        d 
        de 
        des 
        dess 
        desse 
        desser 
        dessert 
        desserts
```
```
nested for loops:
for (let i= 1; i <=2; i++) {
      console.log('Outer Loop:', i)
      for (let j = 4; j >=0; j-=2) {
            console.log('     Inner loop:', j)
      }…
Output:
Outer Loop: 1 
     Inner loop: 4 
     Inner loop: 2 
     Inner loop: 0 
Outer Loop: 2 
     Inner loop: 4 
     Inner loop: 2 
     Inner loop: 0
```
```
while loop:
while(condition) {

}
```
```
for..of:
for(variable of iterable) {
      statement
}
```
```
for..of with objects:
object.keys()
```
```
ternary operator
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}

#### Functions
```javascript
function fruits() {
    console.log('apple');
    console.log('mango');
    console.log('grape');
} //code doesn't run
fruits() //code runs

function rollDie() {
	let roll = Math.floor(Math.random() * 6) + 1;
	console.log(`Rolled: ${roll}`);
}
rollDie()
```
#### Function Challenges
```javascript
Problem 1: 
Write a isValidPassword function
It accepts 2 arguments password and username
Password must:
      be atleast 8 characters
      cannot contain spaces
      cannot contain the username
if all requirements are met, return true
otherwise false.

function isValidPassword(username, password) {
    if(password.length < 8) {
        return false;
    }
    if(password.indexOf(' ') !== -1) { //-1 if space found
        return false;
    }
    if(password.indexOf(username) !== -1) {
        return false;
    }
    return true;
}

function isValidPassword(username,password) {
      if(
            password.length < 8 ||
            password.indexOf(' ') !== -1 ||
            password.indexOf(username) !== -1
      ) 
         {
        return false;
    }
    return true;
}
```
```javascript
Problem 2:
Write a function to find the averaage value in an array of numbers

function avgValue(arr) {
	let result = 0;
      //loop for each num
	for(let num of arr) {
            //add them together
		result = result + num;
	}
      //divide them by number of nums
	console.log(result/arr.length);
}
```
```javascript
Problem 3:
Pangram

function isPangram(sentence) {
	for(let char of 'abcdefghijklmnopqrstuvwxyz') {
		if(sentence.indexOf(char) === -1) {
			return false;
		}
	}
	return true;
}
```
```javascript
Problem 4:
Cards
getCard() function 
returns a random playing card object like
      {
      value: 'K'
      suit: 'clubs'
      }
pick a random value from:
 -------1, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
pick a random suit from
 clubs, spades, hearts, diamonds
return both in an object

function getCard() {
	const values = [1,2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
	const cardValue = Math.floor(Math.random() * values.length); //gives i
	const value = values[cardValue]; //values[i]

	var suits = ['clubs','hearts','spades','diamond'];
	const cardSuit = Math.floor(Math.random() * suits.length);
	const suit = suits[cardSuit];
	
	console.log(value, suit)
}

function getCard() {
	const values = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
	const suits = ['clubs','hearts','spades','diamond'];
	return {value: pick[values], suit: pick[suits]}
}
```
#### Functions as arguments
```javascript
function cry() {
      console.log("I am sad");
}

function rage() {
      console.log("I hate everything");
}

function repeatNTimes(action, num) {
      for(let i = 0; i < num; i++) {
            action();
      }
}
repeatNTimes(rage, 13) //repeats the rage function 13 times

function pickOne(f1,f2) {
      let rand = Math.random();
      console.log(rand);
      if(rand < 0.5) {
            f1() 
      }
      else
      {
            f2()
      }
}
pickOne(cry, rage) 
```
#### Functions as return values
```javascript
function multiplyBy(num) {
      return function() { //returning a function
            console.log("HI..!!")
      }
}

var mystery = multiplyBy() //undefined-stores the value of multiply
mystery //contains a function
mystery() //HI..!!

//also written as
function multiplyBy(num) {
  const f = function() {
    console.log("Blah");
  }
      return f;
}

var mysteryy = multiplyBy()
mysteryy() //Blah

//to return at the same time
function multiplyBy(num) {
  return function() {
    console.log("Blah");
  }
}

var mysteryy = multiplyBy()
mysteryy() //Blah

//returning function
function multiplyBy(num) {
      return function(x) {
            return x * num;
      }
}
 const triple = multiplyBy(3); 
 triple(6) //18


 //between two numbers 
 function betweenNumbers(x,y) {
  return function(num) {
    if(num >= x && num <= y) {
      return true;
    } else {
      return false;
    }
  }
}

const isChild = betweenNumbers(0, 18)
isChild(12) //true
isChild(22) //false
```
#### Callbacks
```javascript
//setting time for alert
setTimeOut(function()) {
      alert("WELCOME..!!")
}, 5000);

//button
const btn = document.querySelector('button');
btn.addEventListener(click, functionName) //function will be called when the button is clicked

//function itself can be added
const btn = document.querySelector('button');
btn.addEventListener(click, function() {
      alert("Why did you click me...??")
)}
```
#### Recursion
```javascript
function factorial(n)
{
      //base case
      if(n == 1 || n == 0)
            return 1;
      //recursive case
      else
            return n * factorial(n-1);
}
console.log(factorial(4)) //24
//how?
factorial(4)
      4 * factorial(3) //24
            3 * factorial(2) //6
                  2 * factorial(1) //2
                        //multiplied in reverse
```
```javascript
  function multiply(arr, n) {
    if (n <= 0) { //base case
      return 1;
    } else { //recursiv case
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
```
```javascript
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]



#### Array and functions
```javascript
FOR_EACH:

const numbers = [21, 22, 23, 24, 25]

numbers.forEach(function(num) {
  console.log(num)
})
//21
//22
//23
//24
//25
```
```javascript
function printTriple(n) {
  console.log(n * 3);
}

numbers.forEach(printTriple) 
//63 
//66 
//69 
//72 
//75
```
```javascript
MAP:
//creates new array from existing array
var number = [21, 22, 23, 24, 25]
var words = ['hi', 'bye', 'good', 'bad']

var double = number.map(function(num) { //num represents each element in number
  return  num * 2; //if num * 2 is given without return, it gives undefined as output
});
