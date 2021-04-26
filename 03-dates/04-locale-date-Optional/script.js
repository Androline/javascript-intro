/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    const dayOnly = {weekday: 'long'};
    const monthOnly = {month: 'long'};
    let currentDate = new Date();
    let dateString = currentDate.toUTCString();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    };
    let dayDate = currentDate.getDate();
    let dayName = currentDate.toLocaleDateString(undefined, dayOnly);
    let month = currentDate.toLocaleDateString(undefined, monthOnly);
    let year = currentDate.getFullYear();
    let todaysDate = `${dayName} ${dayDate.toString()} ${month.toString()} ${year.toString()}, ${hours}h${minutes}`;
    // Sunday 28 October 2018, 23h32


    document.getElementById("target").innerHTML = todaysDate;


    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

})();
`hello ${username}`

let date = new Date();
let dateString = date.toUTCString();
let hours = date.getHours();
let minutes = date.getMinutes();
let dayDate = date.getDate();
let dayName = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();



