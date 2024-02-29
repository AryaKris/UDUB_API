var clock= documnet.getElementByTagname("h3")
var start = document.getElementsByClassName("start-button")


start[0].addEventListener("click",function()
function countdown() {
    var timeLeft = 10;
    var timeInterval = setInterval(function (){
        timeLeft--;
        timeE1.textContent = timeLeft+" seconds left";

        if (timeLeft===0)
        clearInterval(timeInterval);
        displayMessage();
    },1000);

    }
    function displayMessage (){
        timerE1.textContent= "We're done";
    

    }
    countdown();























