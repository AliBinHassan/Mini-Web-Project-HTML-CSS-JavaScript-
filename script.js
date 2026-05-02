const coursePrices = {

"WEB DEVELOPMENT":{monthly:6000,full:42000},
"APP DEVELOPMENT":{monthly:6000,full:42000},
"GAME DEVELOPMENT":{monthly:8000,full:50000},
"GRAPHIC DESIGN":{monthly:6000,full:18000},
"UX/UI DESIGN":{monthly:6000,full:18000},
"3D-ANIMATION":{monthly:10000,full:30000},
"PYTHON DEVELOPMENT":{monthly:8000,full:24000},
"PHP DEVELOPMENT":{monthly:6000,full:18000}

};

const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", generateBill);

function generateBill(){

const clientName = document.getElementById("clientName").value.trim();
const courseSelect = document.getElementById("course");
const customPrice = document.getElementById("customPrice").value;

const selectedCourses = [...courseSelect.selectedOptions].map(o=>o.value);

if(!clientName || selectedCourses.length===0){
alert("Please fill all required fields");
return;
}

let text = `GEMS TECH BILL\nClient: ${clientName}\n\nCourses:\n`;

let totalMonthly=0;
let totalFull=0;

selectedCourses.forEach(course=>{

const price = coursePrices[course];

text += `${course}\nMonthly: Rs.${price.monthly}\nFull: Rs.${price.full}\n\n`;

totalMonthly += price.monthly;
totalFull += price.full;

});

text += `Custom Price: Rs.${customPrice || "N/A"}\n\n`;
text += `Total Monthly Fee: Rs.${totalMonthly}\n`;
text += `Total Full Fee: Rs.${totalFull}`;

document.getElementById("output").textContent = text;

downloadBill(clientName,text);

}

function downloadBill(name,data){

const blob = new Blob([data],{type:"text/plain"});
const link = document.createElement("a");

link.href = URL.createObjectURL(blob);
link.download = `${name}_bill.txt`;

link.click();

}