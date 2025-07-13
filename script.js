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
            break;
        
        case "-":
            output = subtract(num1, num2);
            break;

        case "*":
            output = multiply(num1, num2);
            break;

        case "/":
            output = divide(num1, num2);
            break;

        default:
            alert("Please enter valid operator");
            break;
    }
}

