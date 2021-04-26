/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

document.getElementById("run").addEventListener("click", getAge);
function getAge(){
    // get element with the id "run" (from the html) and "collect" age on click

    let today = new Date();
    // create variable "today" and assign the value of today's date to it

    let daySelect = document.getElementById("dob-day");
    // (1) create variable "daySelect" and assign the contents of id "dob-day" to it
    let dobDay = daySelect.options[daySelect.selectedIndex].value;
    /* (2) create variable dobDay and assign the information from daySelect = dob-day to it;
    looks through the options in the list, selects whatever the user selected and returns its value */

    // create variables for each piece of info u need, assign their value the corresponding id (in the html)
    let monthSelect = document.getElementById("dob-month");
    // see (1)
    let dobMonth = monthSelect.options[monthSelect.selectedIndex].value;
    // see (2)

    let yearSelect = document.getElementById("dob-year");
    // see (1)
    let dobYear = yearSelect.options[yearSelect.selectedIndex].value;
    // see (2)


    let birthDate = new Date(dobYear,dobMonth,dobDay);
    // create variable birthDate, assign the values of [...] to it
    let age = today - birthDate;
    // create variable age, which equals today's date (from variable "date") minus your bday (from variable "birthDate")
    let ageInYears = Math.floor(age/(1000*60*60*24*365));
    // creative variable ageInYears; JS displays in milliseconds by default
    // Math.floor = rond getal af, in this case the value of "age"
    // convert milliseconds to years
    alert(ageInYears);
    // display a box showing the result/value of "ageinYears"

}

})();

