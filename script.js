const slides = document.querySelectorAll(".slide");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let index = 0;

function showSlide(i){

slides.forEach(slide=>{
slide.classList.remove("active");
});

slides[i].classList.add("active");

}

next.addEventListener("click",()=>{

index++;

if(index >= slides.length){
index = 0;
}

showSlide(index);

});

prev.addEventListener("click",()=>{

index--;

if(index < 0){
index = slides.length - 1;
}

showSlide(index);

});