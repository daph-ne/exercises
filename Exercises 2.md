QUESTIONS:
1. Display the current day and time.
2. Find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
3. Binary search
4. Leap year
5. Find 1st January is being a Sunday between 2014 and 2050
6. The program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
7. Calculate days left until next Christmas.
8. Convert temperatures to and from Celsius, Fahrenheit.
9. Get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.


1.  Write a JavaScript program to display the current day and time.
```javascript
var today = new Date(),
    day = today.getDay(),
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
console.log(`Today is : ${days[day]}.`);

var hour = today.getHours(),
    minute = today.getMinutes(),
    second = today.getSeconds(),
    amOrPm = (hour >= 12) ? "PM": "AM";
if(hour === 0 && amOrPm === "PM"){
  if(minute === 0 && second === 0){
    hour = 12;
    amOrPm = "Noon";
  } else {
    hour = 12;
    amOrPm = "PM";
  }
}
if(hour === 0 && amOrPm === "AM"){
  if(minute === 0 && second === 0){
    hour = 12;
    amOrPm = "Midnight";
  } else {
    hour = 12;
    amOrPm = "AM";
  }
}
console.log(`Current time is : ${hour} ${amOrPm} : ${minute} : ${second}`)
```

2. Find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
```javascript
function areaOfTriangle(x, y, z){
  var side1 = x,
      side2 = y,
      side3 = z,
      s = (x + y + z)/2,
      area = Math.sqrt(s*((s - x) * (s - y) * (s - z)));
  console.log(area);
}
areaOfTriangle(5, 6, 7);
```

3. Binary search
```javascript
function binarySearch(arr, num) {
  var firstIndex = 0, 
      lastIndex = arr.length - 1,
      middleIndex = Math.floor((firstIndex + lastIndex) / 2);
  while(arr[middleIndex] != num && firstIndex < lastIndex) {
    if(num < arr[middleIndex]) {
      lastIndex = middleIndex - 1;
    } else if(num > arr[middleIndex]) {
      firstIndex = middleIndex + 1;
    }
    middleIndex = Math.floor((firstIndex + lastIndex) / 2);
  } 
  return (arr[middleIndex] = num) ? middleIndex : "Not found"
}
binarySearch([1, 3, 6, 9, 12, 15, 18, 19, 28, 35, 48, 59, 60], 18);
```

4. Leap year
```javascript
function leapYear(year) {
  return (year % 4 === 0) ? "Leap year" : "Not leap year";
}
leapYear(2000)
```

5. Find 1st January is being a Sunday between 2014 and 2050
```javascript
function januarySunday(year1, year2) {
  for(let i = year1; i <= year2; i++) {
    var d = new Date(i, 0, 1)
    if(d.getDay() === 0){
      console.log(`January 1st is a Sunday in ${i}`)
    }
  }
}
januarySunday(2014, 2050)
```

6. The program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
```javascript
function guessNumber() {
  var num = Math.floor((Math.random()) * 10);
  var gNum = prompt(`Guess any number from 1 to 10.`);
  if(gNum == num){
    console.log("Good work!");
  } else {
    console.log("Not matched! The number was " + num);
  }
}
guessNumber();
```

7. Calculate days left until next Christmas.
```javascript
function countDays(event, month, date) {
  var today = new Date();
  var requiredDate = new Date(today.getFullYear(), today.getMonth(), today.getDay());
  if(today.getMonth() == month && today.getDay() > date) {
    requiredDate.setFullYear((today.getFullYear()) + 1);
  }
  var oneDay = 1000 * 60 * 60 * 24;
  console.log(Math.floor(requiredDate.getTime() - today.getTime()) / oneDay) + " days left until " + event;
}
countDays("Christmas", "12", "25");
```

8. Convert temperatures to and from Celsius, Fahrenheit.
    Formula : c/5 = (f-32)/9
```javascript
function changeToCelsius(fahrenheit) {
  var celsius;
  celsius = ((fahrenheit - 32) / 9 ) * 5;
  console.log(fahrenheit + "\xB0F is " + celsius + "\xB0C")
}
function changeToFahrenheit(celsius) {
  var fahrenheit;
  fahrenheit = ((celsius * 9) / 5 ) + 32;
  console.log(celsius + "\xB0C is " + fahrenheit + "\xB0F")
}
changeToCelsius(45)
changeToFahrenheit(60)
```
9. Get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.
```javascript
function difference13(num) {
  var difference = 13 - num;
  if(num > 13){
    return (2 * Math.abs(difference));
  }
  console.log(difference);
}
difference13(32) //38
difference13(11) //2
```


