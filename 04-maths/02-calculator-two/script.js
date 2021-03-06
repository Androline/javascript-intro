/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    let performOperation = function(operation) {
        let opOne = parseInt(document.getElementById("op-one").value);
        let opTwo = parseInt(document.getElementById("op-two").value);
        let result;
        switch(operation){
            case "addition":
                result = opOne + opTwo;
                break;
            case "substraction":
                result = opOne - opTwo;
                break;
            case "multiplication":
                result = opOne * opTwo;
                break;
            case "division":
                result = opOne / opTwo;
                break;
           /* default:
                console.error("How did you get here??"); */

        }
        alert(result);
        // perform the operation
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
