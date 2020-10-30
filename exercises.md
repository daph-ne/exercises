## Exercises:
For the following exercises, `let arr = [123, 1, 2, 64, 73, 823, 624, 31, 58, 253, 626, 32, 41, 310]`
|Sl no.|Problem|Input|Output|Completed|
|-----|-----|-----|-----|-----|
|1|Print all elements in order|`arr`|||
|2|Print all elements in reverse order|`arr`|||
|3|Kebab-case: Print all elements in **a single line** separated by '-'|`arr`|(eg. format) `Values are: 9-8-7-6-5`||
|4|Print all elements that are in odd positions only, single line|`arr`|(eg. format) `Odd ones: 2, 8, 32, 128, 512`||
|5|Print the largest number|`arr`|||
|6|Print the second largest number|`arr`|||
|7|Print the second smallest number|`arr`|||
|8|Print all even numbers|`arr`|||
|9|Count and print the number of even numbers|`arr`|||
|10|Print one letter from each String: <br> First char from `str1`, first char from `str2`, second from `str1` and then `str2` and so on|`str1 = 'iatera.mse!eaa', str2 = '-mharyatrhhh'`|||


arr = [123, 1, 2, 64, 73, 823, 624, 31, 58, 253, 626, 32, 41, 310];

//printAllElements(arr);
//printReverseElements(arr);
//printKebabCase(arr);
//printOddPositions(arr);
//printLargestNumber(arr);
printSecondLargest(arr);

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
  console.log(Math.max(...arr));
}

function printSecondLargest(arr) {
  console.log(`Problem 6 - printSecondLargest`)
  

