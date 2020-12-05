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
|16|Merge 2 arrays of same size sorted in descending order||||
|17|Arrange in ascending order|`arr1`|||
|18|Check palidrom(same backward and forward)|`madam, nurse`|||
|19|Alphabetical Order| |||

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
```javascript
For the following exercises,
let arr1 = [123, 58, 626, 1, 2, 64, 2, 73, 823, 624, 31, 58, 253, 626, 32, 41, 310, 58, 153];
let arr2 = [93, 23, 1 , -1, 85, 39, 62];

//printSumOfArr(arr2);
//printOddNumbers(arr1);
//printAppendedArray(arr1, arr2);
//printFrequency(arr1);
//printAscending(arr1);
//printPalidrome();
//printPalidrome();
printAlphaOrder();


function printSumOfArr(arr2) {
  console.log(`Problem 12 - printSumOfArr2`)
  sum = 0;
  for(let num of arr2) {
    sum += num;
  }
	console.log(sum)
}

function printOddNumbers(arr1) {
  console.log(`Problem 13 - printOddNumbers`)
  let result = "";
  for(let num of arr1) {
    if(num%2 === 1) {
      result += num + ", ";
    }
  }
  console.log(`let array = [${result}]`)
}

function printAppendedArray(arr1, arr2) {
  console.log(`Problem 14 - printAppendedArray`)
	 var arr3 = arr1.concat(arr2);
	console.log(`arr3 = [${arr3}]`);
}

function printFrequency(arr1) {
  console.log(`Problem 15 - printFrequency`)
    var count = {};
  for(let num of arr1) {
    count[num] = count[num] ? count[num] + 1 : 1;
    }
//console.log(count);

//Print count in a single line
//First store it in this variable
var result = '';
for (let countKey in count) {
    if(count[countKey] > 1) {
  result = countKey + " - " + count[countKey] + " times";
    result = result + "\n";
    console.log(result)
         }
    else if(count[countKey] = 1) {
    result = countKey + " - " + count[countKey] + " time";
    result = result + "\n";
    console.log(result)
        }
    }
}

arr1 = [23, 98, 54, 87, 21]
arr2 = [6, 32, 82, 02, 80]

printSortDescend(arr1, arr2)

function printSortDescend(arr1, arr2) {
    console.log(`Problem 16 - printSortDescend`)
    var arr3 = arr1.concat(arr2);
    let array = arr3
    array.sort(function(arr1, arr2){return arr2-arr1})
    console.log(array)
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

function printAscending(arr1) {
	console.log(`Problem 17 - printAscending`)
	var isDone = false;
	var isSwapped;
	while(!isDone) {
		isSwapped = 0;
		for(i = 1; i < arr1.length; i++){
			if(arr1[i - 1] > arr1[i]) {
        arr1 = swap(arr1, i, i - 1);
				isSwapped = 1;
			}
			if(isSwapped == 0) {
				isDone = true;
			}
		}
	}
	return arr1;
}

let heights = [23, 98, 54, 87, 21]
console.log(printAscending(heights))


function printPalidrome(word) {
  console.log(`Problem 18 - printPalidrome`);
  var result = '';
  for(i = word.length - 1; i >= 0; i--) {
    result = result + word[i];
  }
  if(word == result) {
    console.log(`It is a palidrome`)
  }
  else {
    console.log(`It is not a palidrome`)
  }
}
printPalidrome('madam');

function printAlphaOrder(word) {
  console.log(`Problem 19 - printAlphaOrder`)
  var result =' ';
  result = return.word split(" ").sort().join()
}
	console.log(result)
printAlphaOrder('bjbkjfjasjkmnfilsel')

