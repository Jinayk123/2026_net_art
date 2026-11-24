
const message = document.querySelector("#message");
const button = document.querySelector("#colorbutton");
let clickCount = 0;
function changeStyle() {
  clickCount = clickCount + 1;
  message.innerHTML = "You clicked " + clickCount + " time(s)!";
  message.style.cssText = "color: green; font-size: 30px; font-style: italic; background-color: yellow;";
}
button.addEventListener("click", changeStyle);