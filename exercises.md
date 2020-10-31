## Exercises:
### Arrays:
#### Questions:
For the following exercises, `let arr = [123, 1, 2, 64, 73, 823, 624, 31, 58, 253, 626, 32, 41, 310]`
|Sl no.|Problem|Input|Output|Completed|
|-----|-----|-----|-----|-----|
|1|Print all elements in order|`arr`|||
|2|Print all elements in reverse order|`arr`|||
|3|Kebab-case: Print all elements in **a single line** separated by '-'|`arr`|(eg. format) `Values are: 9-8-7-6-5`||
|4|Print all elements that are in odd positions only, single line|`arr`|(eg. format) `Odd ones: 2, 8, 32, 128, 512`||
|5|Print the largest number|`arr`|||
|6|Print the smallest number|`arr`|||
|7|Print the second largest number|`arr`|||
|8|Print the second smallest number|`arr`|||
|9|Print all even numbers|`arr`|||
|10|Count and print the number of even numbers|`arr`|||
|11|Print one letter from each String: <br> First char from `str1`, first char from `str2`, second from `str1` and then `str2` and so on|`str1 = 'iatera.mse!eaa', str2 = '-mharyatrhhh'`|||

-----
For the following exercises, 
```javascript
let arr1 = [123, 58, 626, 1, 2, 64, 2, 73, 823, 624, 31, 58, 253, 626, 32, 41, 310, 58, 153];
let arr2 = [93, 23, 1 , -1, 85, 39, 62];
```

|Sl no.|Problem|Input|Output|Completed|
|-----|-----|-----|-----|-----|
|12|Find sum of all elements|`arr2`|||
|13|Find all odd numbers, save it in a different array and print it|`arr1`|||
|14|Append values of one array with another and print it|`arr1`, `arr2`|||
|15|Find frequency of each number|`arr1`|`12 - 2 times, 1 - 5 times, ...`||

-----
#### Solutions:

```javascript
arr = [123, 1, 2, 64, 73, 823, 624, 31, 58, 253, 626, 32, 41, 310];
str1 = 'iatera.mse!eaa';
str2 = '-mharyatrhhh';

printAllElements(arr);
printReverseElements(arr);
printKebabCase(arr);
printOddPositions(arr);
printLargestNumber(arr);
printSmallestNumber(arr);
printSecondLargest(arr);
printSecondSmallest(arr);
printEvenNumbers(arr);
printEvenNumbers(arr);
printEvenCount(arr);
printAltString(str1, str2);

function printAllElements(arr) {
  console.log(`Problem 1 - printAllElements`)
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
	}
}

function printReverseElements(arr) {
	console.log(`Problem 2 - printReverseElements`)
  for (i = arr.length-1; i >=0; i--) {
  	console.log(arr[i]);
  }
}

function printKebabCase(arr) {
  console.log(`Problem 3 - printKebabCase`)
  console.log(`Values are:`)
  let result ="";
  for (let line of arr) {
  	result = result + line + "-";
  }
console.log(result);  
}

function printOddPositions(arr) {
  console.log(`Problem 4 - printOddPositions`)
  let result = ""; 
  for(i = 0; i < arr.length; i += 2) {
    result = result + arr[i] +", ";
  }
console.log(`Odd ones: ${result}`);
}

function printLargestNumber(arr) {
  console.log(`Problem 5 - printLargestNumber`)
  let max = 0;
  for(let num of arr){
    if(num > max){
      max = num;
    }
  }
	console.log(max);
}

function printSmallestNumber(arr) {
  console.log(`Problem 6 - printSmallestNumber`)
  let min = Infinity;
  for(let i = 0; i < arr.length; i++) {
    if( arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(min);
}

function printSecondLargest(arr) {
  console.log(`Problem 7 - printSecondLargest`)
	let max = 0;
  let secondMax = 0;
  for(let num of arr) {
    if(num > max){
      max = num;
    }else if(num > secondMax){
      secondMax = num;
    }
  }
console.log(secondMax)
}

function printSecondSmallest(arr) {
  console.log(`Problem 8 - printSecondSmallest`)
  let min = Infinity;
  let secondMin = Infinity;
  for(let num of arr) {
    if(num < min){
      min = num;
    }else if(num < secondMin){
      secondMin = num;
    }
  }
console.log(secondMin)
}

function printEvenNumbers(arr) {
  console.log(`Problem 9 - printEvenNumbers`)
  let result = "";
  for(let num of arr) {
    if(num%2 === 0){
      result = result + num + ", ";
    }
  }
console.log(result)
}

function printEvenCount(arr) {
  console.log(`Problem 10 - printEvenCount`)
  let count = 0;
  for(let num of arr) {
    if(num%2 === 0) {
      count = count + 1;
    }
  }
console.log(count)
}

function printAltString(str1, str2) {
  console.log(`Problem 11 - printAltString`)
  let result = "";
  var a = str1.split('');
  var b = str2.split('');
  for(let i = 0; i < str1.length && i < str2.length; i++){
    result += a[i] + b[i];
  }
console.log(result)
}
```
