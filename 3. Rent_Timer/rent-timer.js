var clock = document.getElementById("timer");
clock.onload = startTimer();

let currentTime = new Date();

function startTimer() {
    let currentTime = new Date();
    let h = currentTime.getHours();
    let m = currentTime.getMinutes();
    let s = currentTime.getSeconds();
    clock.innerText = h + " : " + m + " : " + s;
    var t = setTimeout(startTimer, 1000);
}

var borrow = document.getElementById("borrow-button");
borrow.addEventListener("click", borrowTimer);

let timeWhileBorrowing;
let timeWhileBorrowingInSeconds;

function borrowTimer() {
    let currentTime = new Date();
    let hourAtBorrowTime = currentTime.getHours();
    let minuteAtBorrowTime = currentTime.getMinutes();
    let secondsAtBorrowTime = currentTime.getSeconds();
    timeWhileBorrowing = hourAtBorrowTime + " : " + minuteAtBorrowTime + " : " + secondsAtBorrowTime;
    timeWhileBorrowingInSeconds = (hourAtBorrowTime * 60 * 60) + (minuteAtBorrowTime * 60) + secondsAtBorrowTime;
    console.log(timeWhileBorrowingInSeconds);
    borrow.disabled = true;
    returnBtn.disabled = false;
    return timeWhileBorrowingInSeconds;
}

var returnBtn = document.getElementById("return-button");
returnBtn.disabled = true;
returnBtn.addEventListener("click", returnAction);

let timeWhileReturning;
let timeWhileReturningInSeconds;

function returnAction(){
        borrow.disabled = false;
        returnBtn.disabled = true;
        let currentTime = new Date();
        let hourAtReturnTime = currentTime.getHours();
        let minuteAtReturnTime = currentTime.getMinutes();
        let secondsAtReturnTime = currentTime.getSeconds();
        timeWhileReturning = hourAtReturnTime + " : " + minuteAtReturnTime + " : " + secondsAtReturnTime;
        timeWhileReturningInSeconds = (hourAtReturnTime * 60 * 60) + (minuteAtReturnTime * 60) + secondsAtReturnTime;
        console.log(timeWhileReturningInSeconds);
    
        let rentTimeInSeconds = timeWhileReturningInSeconds - timeWhileBorrowingInSeconds;
        console.log(rentTimeInSeconds);
        let cost = document.getElementById("cost").value;
        console.log(cost);
        let totalCharge = rentTimeInSeconds * cost;
        console.log(totalCharge);
        document.getElementById("totalCharge").innerText = "The total charge is Rs. " + totalCharge + ".";
}



