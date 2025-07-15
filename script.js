let num1 = null;
let num2 = null;
let operator = null;



function add(num1, num2){
    let sum = num1+num2;
    return sum;
}

function subtract(num1, num2){
    let diff = num1 - num2;
    return diff;
}

function multiply(num1, num2){
    let prod = num1 * num2;
    return prod;
}

function divide(num1, num2){
    let quot = num1 / num2;
    return quot;
}

function operate(operator, num1, num2){
    let output = null;
    switch (operator) {
        case "+":
            output = add(num1, num2);
            return output;
            break;
        
        case "-":
            output = subtract(num1, num2);
            return output;
            break;

        case "*":
            output = multiply(num1, num2);
            return output;
            break;

        case "/":
            output = divide(num1, num2);
            return output;
            break;

        default:
            alert("Please enter valid operator");
            break;
    }
}



addEventListener("DOMContentLoaded", () => {
    //Display screen
    const screenText = document.querySelector("#displayText");
    //Number buttons
    const zero = document.querySelector('#zero');
    const one = document.querySelector('#one');
    const two = document.querySelector('#two');
    const three = document.querySelector('#three');
    const four = document.querySelector('#four');
    const five = document.querySelector('#five');
    const six = document.querySelector('#six');
    const seven = document.querySelector('#seven');
    const eight = document.querySelector('#eight');
    const nine = document.querySelector('#nine');
    //Operator buttons
    const addButton = document.querySelector('#add');
    const subtractButton = document.querySelector('#subtract');
    const divideButton = document.querySelector('#divide');
    const multiplyButton = document.querySelector('#multiply');
    const equalsButton = document.querySelector('#equals');
    //parent element of the number buttons
    const numbers = document.querySelector('#numbers');
    //Event delegation for number buttons
    numbers.addEventListener('click', (element)=> {
        switch (element.target.id) {
            case 'zero':
                writeToScreen(screenText, '0');
                console.log('0');
                break;
            case 'one':
                writeToScreen(screenText, '1');
                console.log('1');
                break;
            case 'two':
                writeToScreen(screenText, '2');
                console.log('2');
                break;
            case 'three':
                writeToScreen(screenText, '3');
                console.log('3');
                break;
            case 'four':
                writeToScreen(screenText, '4');
                console.log('4');
                break;
            case 'five':
                writeToScreen(screenText, '5');
                console.log('5');
                break;
            case 'six':
                writeToScreen(screenText, '6');
                console.log('6');
                break;
            case 'seven':
                writeToScreen(screenText, '7');
                console.log('7');
                break;
            case 'eight':
                writeToScreen(screenText, '8');
                console.log('8');
                break;
            case 'nine':
                writeToScreen(screenText, '9');
                console.log('9');
                break;
            default:
                break;
        }
    });
    //parent element of the operator buttons
    const operators = document.querySelector('#operators');
    //Event delegation for operator buttons
    operators.addEventListener('click', (element) => {
        switch(element.target.id) {
            case 'divide':
                writeToScreen(screenText, '/');
                console.log('divide');
                break;
            case 'multiply':
                writeToScreen(screenText, 'x');
                console.log('multiply');
                break;
            case 'subtract':
                writeToScreen(screenText, '-');
                console.log('subtract');
                break;
            case 'add':
                writeToScreen(screenText, '+');
                console.log('add');
                break;
            case 'equals':
                console.log('equals');
                break;
        }
    });

    function writeToScreen(screenElement, inputText){
        currentText = screenElement.textContent;
        screenElement.textContent=currentText + inputText;
    }

});