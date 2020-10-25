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
Math.floor
Math.round
Math.pow
Math.random()

parseInt //Whole number
parseFloat //Any number
```


##### Operators
```javascript
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
sort //sorts an array
```




