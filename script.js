const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const allClearEl = document.querySelector('.all-clear');
const deleteEl = document.querySelector('.delete-data');
const operationButtons = document.querySelectorAll('.operation-data');
const numberButtons = document.querySelectorAll('.number-data');
const equalEl = document.querySelector('.equal-data');
const displayResultEl = document.querySelector('.display-result');

let displayNum1 = '';
let displayNum2 = '';
let result = null;
let lastOperation = '';
let displayDot = false;

numberButtons.forEach(number => {
    number.addEventListener('click', (e)=> {
         if(e.target.innerText === '.' && !displayDot){
            displayDot = true;
         } else if(e.target.innerText === '.' && displayDot){
            return;
         }
         displayNum2 += e.target.innerText;
         display2El.innerText = displayNum2;
    })
});

operationButtons.forEach(operation => {
    operation.addEventListener('click', (e) =>{
        if (!displayNum2) return;
        displayDot = false;
        const operationName = e.target.innerText;
        if (displayNum1 && displayNum2 && lastOperation){
            mathOperation();
        }else{
             result = parseFloat(displayNum2);
        }
        clear(operationName); 
        lastOperation = operationName;
         console.log(result);  

    })
})
function clear(name = ''){
    displayNum1 += displayNum2 + ' ' + name + ' ';
display1El.innerText = displayNum1;
display2El.innerText = ''; 
displayNum2 = '';
displayResultEl.innerText = result;
}

function mathOperation(){
if(lastOperation === 'X'){
    result = parseFloat(result) * parseFloat(displayNum2);
} else if(lastOperation === '+'){
    result = parseFloat(result) + parseFloat(displayNum2)
} else if(lastOperation === '\u00f7'){
    result = parseFloat(result) / parseFloat(displayNum2)
} else if(lastOperation === '-'){
    result = parseFloat(result) - parseFloat(displayNum2)
} else if(lastOperation === '%'){
    result = parseFloat(result) % parseFloat(displayNum2)
}}

equalEl.addEventListener('click', (e)=> {
    if(!display2El || !display1El ) return
    displayDot = false;
    mathOperation()
    clear()
    display2El.innerText = result
    displayResultEl.innerText = ''
    displayNum2 = result
    displayNum1 = ''
})

allClearEl.addEventListener('click',(e) =>{
    displayNum1 =''
    displayNum2 =''
    display1El.innerText =''
    display2El.innerText =''
    result =''
    displayResultEl.innerText =''
})

deleteEl.addEventListener('click', (e) =>{
    display2El.innerText =''
    displayNum2 =''
})
