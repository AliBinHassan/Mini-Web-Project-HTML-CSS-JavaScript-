const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");

let value = "";

buttons.forEach(btn => {

btn.addEventListener("click", () => {

let text = btn.innerText;

if(text === "C"){

value = "";
screen.value = "";

}
else if(text === "="){

try{
screen.value = eval(value);
value = screen.value;
}
catch{
screen.value = "Error";
value = "";
}

}
else{

value += text;
screen.value = value;

}

});

});