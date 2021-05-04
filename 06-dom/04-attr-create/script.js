/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let source = document.getElementById("source");
    let img = document.createElement('img'); // create element named "img"

    img.src = source.getAttribute('data-image');

    let figure = document.getElementById("target");
    figure.appendChild(img);

    source.remove();

})();
