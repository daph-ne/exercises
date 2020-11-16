QUESTIONS:
1.  Write a JavaScript program to display the current day and time.
2. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
3. Binary search

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

