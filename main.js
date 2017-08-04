// console.log('hello');
//created an array for the numbers
let nums = document.querySelectorAll(".numberButton")


let body = document.querySelector("#body");
let main = document.querySelector("#main");
let container = document.querySelector("#container");
let display = document.querySelector("#display");
// let numberButton= document.querySelector(".numberButton");
// let buttonValue = numberButton.getAttribute("value");


//if we click a number button, we want the value of that button to display in the display box

let displayStr=[];
let displayNumber= function(num)  {
            displayStr += num
            display.innerHTML = `<p>${displayStr}</p>`;
          }

// if we click a number, it will pull the button value from the string.
for (let b=0; b<nums.length; b++){
    nums[b].addEventListener('click', function () {
      displayNumber(nums[b].value);
    });
}
