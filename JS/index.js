let currentValue = '';

function numericButtonClick(button) {
    let numericElement = document.querySelector(`.numeric-${button}`);
    numericElement.addEventListener("click", ()=>{
        currentValue+=`${button}`
        document.querySelector('input').value = `${currentValue}`
    })
}
let divide = document.querySelector(".operation-divide");
divide.addEventListener("click", ()=>{
    currentValue += '/' ;
    document.querySelector('input').value = `${currentValue}`;
})
let multiply = document.querySelector(".operation-multiply");
multiply.addEventListener("click", ()=>{
    currentValue += '*' ;
    document.querySelector('input').value = `${currentValue}`;
})
let addition = document.querySelector(".operation-addition");
addition.addEventListener("click", ()=>{
    currentValue += '+' ;
    document.querySelector('input').value = `${currentValue}`;
})
let subtraction = document.querySelector(".operation-subtraction");
subtraction.addEventListener("click", ()=>{
    currentValue += '-' ;
    document.querySelector('input').value = `${currentValue}`;
})
let clear = document.querySelector(".clear-last-one");
clear.addEventListener("click",()=>{
    currentValue=currentValue.slice(0,currentValue.length-1);
    document.querySelector('input').value = `${currentValue}`;
})
let clearAll = document.querySelector(".operation-clear");
clearAll.addEventListener("click", ()=>{
    currentValue='';
    document.querySelector('input').value = `${currentValue}`;
})
let dot = document.querySelector(".dot");
dot.addEventListener("click", ()=>{
    currentValue+='.';
    document.querySelector('input').value = `${currentValue}`;
})
let equal = document.querySelector(".equal");
equal.addEventListener("click",()=>{
    currentValue = eval(currentValue);
    document.querySelector('input').value = `${currentValue}`;
})
numericButtonClick(0);
numericButtonClick(1);
numericButtonClick(2);
numericButtonClick(3);
numericButtonClick(4);
numericButtonClick(5);
numericButtonClick(6);
numericButtonClick(7);
numericButtonClick(8);
numericButtonClick(9);