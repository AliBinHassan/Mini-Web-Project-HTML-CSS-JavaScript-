const loadingText = document.querySelector(".loading-text");
const background = document.querySelector(".background");

let progress = 0;

const timer = setInterval(updateLoading, 30);

function updateLoading(){

progress++;

if(progress > 99){
clearInterval(timer);
}

loadingText.innerText = progress + "%";

loadingText.style.opacity = map(progress,0,100,1,0);

background.style.filter = `blur(${map(progress,0,100,30,0)}px)`;

}

function map(num,inMin,inMax,outMin,outMax){

return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

}