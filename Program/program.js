let submit = document.getElementById("submit-button");
submit.addEventListener("click",runTheSelectedProgram);

function runTheSelectedProgram(){
    let selectedOption = document.getElementById("selected-program").value;
    let inputText = document.getElementById("inputText");
    let input = inputText.value;
    let result;

    if(selectedOption == "checkIfPalindrome"){
        result = Palindrome(input);
    } else if(selectedOption == "changeToCelsius"){
        result = changeToCelsius(input);
    } else if(selectedOption == "changeToFahrenheit"){
        result = changeToFahrenheit(input);
    }

    let output = document.getElementById("outputText");
    output.value = result;
}

function Palindrome(input) {
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