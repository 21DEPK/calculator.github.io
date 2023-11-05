let currentValue = '';
let key;
function numericButtonClick(button) {
    let numericElement = document.querySelector(`.numeric-${button}`);
    numericElement.addEventListener("click", ()=>{
        currentValue+=`${button}`
        document.querySelector('input').value = `${currentValue}`
    })
}
function updateValue(currentValue){
    document.querySelector('input').value = `${currentValue}`;
}

window.addEventListener('keypress',(e)=>{
    key = e.key;
    switch(key){
        case '0': currentValue += '0'; updateValue(currentValue);break;
        case '1': currentValue += '1'; updateValue(currentValue);break;
        case '2': currentValue += '2'; updateValue(currentValue);break;
        case '3': currentValue += '3'; updateValue(currentValue);break;
        case '4': currentValue += '4'; updateValue(currentValue);break;
        case '5': currentValue += '5'; updateValue(currentValue);break;
        case '6': currentValue += '6'; updateValue(currentValue);break;
        case '7': currentValue += '7'; updateValue(currentValue);break;
        case '8': currentValue += '8'; updateValue(currentValue);break;
        case '9': currentValue += '9'; updateValue(currentValue);break;
        case '+': currentValue += '+'; updateValue(currentValue);break;
        case '-': currentValue += '-'; updateValue(currentValue);break;
        case '/': currentValue += '/'; updateValue(currentValue);break;
        case '.': currentValue += '.'; updateValue(currentValue);break;
        case '*': currentValue += '*'; updateValue(currentValue);break;
        case '(': currentValue += '('; updateValue(currentValue);break;
        case ')': currentValue += ')'; updateValue(currentValue);break;
        case 'Enter': currentValue = eval(currentValue);updateValue(currentValue);break;
        default: currentValue += '';
    }
});

let divide = document.querySelector(".operation-divide");
divide.addEventListener("click", ()=>{
    currentValue += '/' ;
    updateValue(currentValue);
})
let multiply = document.querySelector(".operation-multiply");
multiply.addEventListener("click", ()=>{
    currentValue += '*' ;
    updateValue(currentValue);
})
let addition = document.querySelector(".operation-addition");
addition.addEventListener("click", ()=>{
    currentValue += '+' ;
    updateValue(currentValue);
})
let subtraction = document.querySelector(".operation-subtraction");
subtraction.addEventListener("click", ()=>{
    currentValue += '-' ;
    updateValue(currentValue);
})
let clear = document.querySelector(".clear-last-one");
clear.addEventListener("click",()=>{
    currentValue=currentValue.slice(0,currentValue.length-1);
    updateValue(currentValue);
})
let clearAll = document.querySelector(".operation-clear");
clearAll.addEventListener("click", ()=>{
    currentValue='';
    updateValue(currentValue);
})
let dot = document.querySelector(".dot");
dot.addEventListener("click", ()=>{
    currentValue+='.';
    updateValue(currentValue);
})
let equal = document.querySelector(".equal");
equal.addEventListener("click",()=>{
    currentValue = eval(currentValue);
    updateValue(currentValue);
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
