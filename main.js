// console.log('hello');
//created an array for the numbers
let numberArr = [{'symbol':'0', 'value':0}, {'symbol':'1', 'value':1},{'symbol':'2', 'value':2},{'symbol':'3', 'value':3},{'symbol':'4', 'value':4},{'symbol':'5', 'value':5},{'symbol':'6', 'value':6},{'symbol':'7', 'value':7}, {'symbol':'8', 'value':8}, {'symbol':'9', 'value':9}];

let nums = document.querySelectorAll(".numberButton");
let ops = document.querySelectorAll(".operator");


let body = document.querySelector("#body");
let main = document.querySelector("#main");
let container = document.querySelector("#container");
let display = document.querySelector("#display");
let clear = document.querySelector('#clear');
// let buttonValue = numberButton.getAttribute("value");


//if we click a number button, we want the value of that button to display in the display box
let displayStr='';

let displayNumber= function(num)  {
            displayStr += num
            display.innerHTML = `<p>${displayStr}</p>`;
            console.log(displayStr);
          }
// if we click a number, it will pull the button value from the string.
for (let b=0; b<nums.length; b++){
    nums[b].addEventListener('click', function () {
      displayNumber(nums[b].value);
    });
}

//now that we have numbers showing up in the display, we need to loop through and perfom the opertaion


let displayArr=[];

for (let i=0; i<displayStr.length; i++){
  displayArr.push(displayStr[i])
console.log(displayArr);
}


// for (let i=0; i<nums; i++){
//
//     for (let n=0; n<numberArr; n++){
//         if (displayStr[i] === numberArr[n].symbol) {
//          displayStr == numberArr[n].value
//
//         }
//     }
// }


//when the '=' is pressed, perform the expression



// if the Clear button is pressed, clear the display
let emptyArr = [];
clear.addEventListener("click",function(){
  display.innerHTML= ``;
});
