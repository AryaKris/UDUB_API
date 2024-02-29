var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
function increase(){
  count++;
  setCounterText()  
}
incrementEl.addEventListener ("click", increase);

// TODO: Add event listener to decrement button 
function decrease() {
  count--;
  if (count < 0) {
    count = 0;
  }
  setCounterText()

  
}
decrementEl.addEventListener("click", decrease);