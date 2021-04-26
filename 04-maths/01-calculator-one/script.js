/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value


    document.getElementById("addition").addEventListener("click", function() {
        let opOne = parseInt(document.getElementById("op-one").value);
        let opTwo = parseInt(document.getElementById("op-two").value);
        let result = opOne + opTwo;
        alert(result);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        let opOne = parseInt(document.getElementById("op-one").value);
        let opTwo = parseInt(document.getElementById("op-two").value);
        let result = opOne - opTwo;
        alert(result);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        let opOne = parseInt(document.getElementById("op-one").value);
        let opTwo = parseInt(document.getElementById("op-two").value);
        let result = opOne * opTwo;
        alert(result);
    });

    document.getElementById("division").addEventListener("click", function() {
        let opOne = parseInt(document.getElementById("op-one").value);
        let opTwo = parseInt(document.getElementById("op-two").value);
        let result = opOne / opTwo;
        alert(result);
    });
})();

// POSSIBLE CODE BELOW?
//
// ???
document.getElementById("inputId").value;
// store input numbers
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));

//add two numbers
const sum = num1 + num2;

// display the sum
console.log(`The sum of ${num1} and ${num2} is ${sum}`);

// get id's from html
document.getElementById("op-one");
document.getElementById("op-two");
