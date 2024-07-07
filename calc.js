const display = document.getElementById("display");
//const keys = document.querySelectorAll(".keys");
const percentagebtn= document.getElementById("percentage");
const deleteBtn =  document.getElementById("delete-btn");

 function appendToDisplay(input){
    display.value += input;
 }
 
 function clearDisplay(){
    display.value ="";
 }

 function calculate(){
    display.value = eval( display.value);
 }

 percentagebtn.addEventListener('click',(Percentage)=>{
   Percentage();
   
 });

 
 function Percentage(){
    const curentValue = parseFloat(display.value);
    const percentage = (curentValue/100);
    display.value = percentage.toString();
 }

 deleteBtn.addEventListener('click',()=>{
  
 });

 function deletevalue(){
   const curentValue = display.value;
   const newValue = curentValue.slice(0,-1);
   display.value = newValue;

 }
  

