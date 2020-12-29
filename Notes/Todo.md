Concepts:
- [ ] Scope
- [ ] CallStack
- [ ] Asynchronous nature
- [ ] Async/Await
- [ ] Closure
- [ ] Callback
- [ ] Hoisting

Eg. Resources:
* [Top 5 Javascript Things You Should Know!](https://www.youtube.com/watch?v=v0QTqHXiVNw) - Hoisting, Callstack, IIFE, Scope, Callbacks, Async/await
* [YDKJS](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/README.md)

Problems:
Leetcode Arrays
| Problem | Link | Key steps for solution| 
|----|----|----|
| Max consecutive ones | https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3238/ | [1] Create variable currentMax = 0 and finalMax = 0<br>  [2] Run through the array <br>  [3] If num is 1, add it to currentMax <br>  [4] finalMax is the greater one (currentMax or finalMax) <br> [5] If num is not 1,currentMax becomes 0 again|
| Numbers with Even Number of Digits | https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3237/ | [1] Create variable result = 0 <br> [2] Run through the array <br> [3] Convert each element of array into a separate string <br> [4] Add count to result if string length is even | 
| Squares of a Sorted Array | https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3240/ | [1] Create new array <br> [2] Push squares of each element into new array <br> [3] Sort the new array |
| Duplicate Zeros | https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3245/ | [1] Run through the array <br> [2] If element is zero,add another 0 beside it(splice) <br> [3] Pop last element|
| Merge Sorted Array | https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3253/ |[1] Create variables for length of each array <br> [2] Sort in reverse order |
| Remove Element | https://leetcode.com/explore/learn/card/fun-with-arrays/526/deleting-items-from-an-array/3247/ |[1] Create stablePointer = 0 <br> [2] Run through the array <br> [3] When != val, move stable pointer to that position and add 1 to it <br> [4] Return stablePointer |
| Remove Duplicates from Sorted Array | https://leetcode.com/explore/learn/card/fun-with-arrays/526/deleting-items-from-an-array/3248/ | |
| Check If N and Its Double Exist | https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/ | |
| Valid Mountain Array | https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3251/ | |
| Replace Elements with Greatest Element on Right Side | https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3259/ | |
| Remove Duplicates from Sorted Array | https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3258/ | |
| Move Zeroes | https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3157/ | |
| Sort Array By Parity | https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3260/ | |
| Height Checker | https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3228/ | |
| Third Maximum Number | https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3231/ | |
| Find All Numbers Disappeared in an Array | https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3270/ | |



| Problem | Link | Key steps for solution |
|-----|-----|-----|
| Richest Customer Wealth | https://leetcode.com/problems/richest-customer-wealth/ | |
| Create Target Array in the Given Order | https://leetcode.com/problems/create-target-array-in-the-given-order/| |
| Shuffle the Array | https://leetcode.com/problems/shuffle-the-array/ | |       
| Number of Good Pairs | https://leetcode.com/problems/number-of-good-pairs/ | |          
| Binary Search | https://leetcode.com/problems/binary-search/ | |
| How Many Numbers Are Smaller Than the Current Number | https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/ | |
| Matrix Diagonal Sum | https://leetcode.com/problems/matrix-diagonal-sum/ | |         
| Kids With the Greatest Number of Candies | https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/ | |  
| Day of the Week | https://leetcode.com/problems/day-of-the-week/ | |   
| Best Time to Buy and Sell Stock II | https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/ | |
| Find Peak Element | https://leetcode.com/problems/find-peak-element/ | [1] Find max <br> [2] Return indexOf[max]|
| Minimum Size Subarray Sum | https://leetcode.com/problems/minimum-size-subarray-sum/ | [1] Iterate through the array <br> [2] Find length when s is reached <br> [3] Return min length |
| Longest Substring Without Repeating Characters | https://leetcode.com/problems/longest-substring-without-repeating-characters/ | [1] Create a new set <br> [2] Two variables, right and left <br> [3] If the right one is not in set, add it to the set. <br> [3] If the set has it, delete the left one <br> return maxSubstringArray. |