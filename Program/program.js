let submit = document.getElementById("submit");
submit.addEventListener("click", runAnyOne);

function runAnyOne() {
    var selectedValue = document.getElementById("selected").value;
    var inputValue = document.getElementById("enterValue");
    var input = inputValue.value;
    console.log(input)
    var result;

    if(selectedValue == "checkPalindromeNum"){
        result = checkPalindrome(input);
    } else if(selectedValue == "changeToCelsiusTemp"){
        result = changeToCelsius(input);
    } else if(selectedValue == "changeToFahrenheitTemp"){
        result = changeToFahrenheit(input);
    }
    var output = document.getElementById("outputValue");
    output.value = result;
} 

function checkPalindrome(input) {
    var reversedInput = "";
    for(i = input.length - 1; i >= 0; i--) {
        reversedInput += input[i];
    }
    if(reversedInput === input) {
        return "It is a palindrome.";
    } else {
        return "It is not a palindrome.";
    }
}

function changeToCelsius(input) {
    var celsius;
    celsius = ((input - 32) / 9 ) * 5;
    return input + "\xB0F is " + celsius + "\xB0C";
}

function changeToFahrenheit(input) {
    var fahrenheit;
    fahrenheit = ((input * 9) / 5 ) + 32;
    return input + "\xB0C is " + fahrenheit + "\xB0F";
}
