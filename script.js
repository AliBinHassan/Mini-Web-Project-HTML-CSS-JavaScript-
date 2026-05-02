const button = document.querySelector(".ripple-btn");

button.addEventListener("click", function(e){

const rect = button.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const ripple = document.createElement("span");

ripple.classList.add("ripple");

ripple.style.left = x + "px";
ripple.style.top = y + "px";

button.appendChild(ripple);

setTimeout(()=>{
ripple.remove();
},600);

});