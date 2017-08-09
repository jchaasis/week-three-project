// create global variables
    //arrays from the html buttons
let button = document.querySelectorAll("button");
let nums = document.querySelectorAll(".numberButton");
let ops = document.querySelectorAll(".operator");

    // variables from htmnl elements
let body = document.querySelector("#body");
let main = document.querySelector("#main");
let container = document.querySelector("#container");
let display = document.querySelector("#display");
let clear = document.querySelector('#clear');


//if we click a number button, we want the value of that button to display in the display box
// let displayStr='';
let operand1='';
let operand2='';
let operator='';

let displayNumber= function(num)  {

            display.innerHTML = `<p>${operand1+operator+operand2}</p>`;
          }

// if we click a button, it will pull the button value from the button array.
for (let b=0; b<button.length; b++){
    button[b].addEventListener('click', function () {
  //create operand1
  // if (operator === ''){
  //   operand1 += button[b].value;
  // }
  if (operand1 === ''){
    operand1 = Number(button[b].value, 10);
  }
  //create operator
  else if (button[b].value === "+" || button[b].value === "-" || button[b].value === "*" || button[b].value === "/"){
    operator = button[b].value;
  }
  //create operand2

  // else if (operator === "+" || operator === "-" ||operator === "*" ||operator === "/"){
  //   operand2 += button[b].value;}
  // });

  else if (operand2 === ''){
    operand2 = Number(button[b].value, 10);
  }
    displayNumber(button[b].value);
    });
}

//now that we have numbers values for both operands and the operator, perform the expression when the = button is clicked.

let equals = document.querySelector("#equals");

equals.addEventListener("click", function(){

// perform the designated operation
  let perform = null;


  if (operator === '+') {
    perform = operand1 + operand2;
  } else if (operator === '-') {
      perform = operand1 - operand2;
  } else if (operator === '*') {
      perform = operand1 * operand2;
  } else if (operator === '/') {
      perform = operand1 / operand2;
  }

  display.innerHTML=`${perform}`;
  console.log(perform);
});



// if the Clear button is pressed, clear the display
clear.addEventListener("click",function(){
  displayStr= '';
  operand1= '';
  operand2= '';
  operator= '';
  display.innerHTML = '';
});
