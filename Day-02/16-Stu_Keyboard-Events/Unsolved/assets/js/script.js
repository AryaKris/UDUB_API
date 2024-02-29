function keydownAction(event) {
  // TODO: Complete keydown function
console.log (event);
  document.querySelector("#key").innerHTML = "KEYUP Event";
  
function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event

