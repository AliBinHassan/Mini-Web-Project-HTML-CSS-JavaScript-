const typingText = document.querySelector(".typing-text");
const speedControl = document.getElementById("speedControl");

const message = "We Love Programming!";
let position = 0;
let speed = 200;

function typingEffect() {

typingText.textContent = message.substring(0, position);

position++;

if(position > message.length){
position = 0;
}

setTimeout(typingEffect, speed);

}

typingEffect();

speedControl.addEventListener("input", function(){
speed = 400 / this.value;
});