"use strict";
const knopEenNaarRechts = document.getElementById("eenNaarRechts");
const knopAllesNaarRechts = document.getElementById("allesNaarRechts");
const knopEenNaarLinks = document.getElementById("eenNaarLinks");
const knopAllesNaarLinks = document.getElementById("allesNaarLinks");
const selectLinks = document.getElementById("links");
const selectRechts = document.getElementById("rechts");

document.getElementById("links").onchange = function () {
    knopEenNaarRechts.disabled = false;
}

document.getElementById("rechts").onchange = function () {
    knopEenNaarLinks.disabled = false;
}

knopEenNaarRechts.onclick = function () {
    const verwijderLinks = selectLinks.options[selectLinks.selectedIndex];
    selectRechts.appendChild(verwijderLinks);
    if (selectLinks.length === 0) {
        knopEenNaarRechts.disabled = true;
        knopAllesNaarRechts.disabled = true;
    }
    knopAllesNaarLinks.disabled = false;
    knopEenNaarRechts.disabled = true;
}

knopEenNaarLinks.onclick = function () {
    const verwijderRechts = selectRechts.options[selectRechts.selectedIndex];
    selectLinks.appendChild(verwijderRechts);
    if (selectRechts.length === 0) {
        knopEenNaarLinks.disabled = true;
        knopAllesNaarLinks.disabled = true;
    }
    knopAllesNaarRechts.disabled = false;
    knopEenNaarLinks.disabled = true;
}

knopAllesNaarRechts.onclick = function () {
    let aantalOptionsLinks = selectLinks.length;
    for (let index = 0; index < aantalOptionsLinks; index++) {
        let firstChildLinks = selectLinks.firstElementChild;
        // WERKT NIET: let firstChild = selectLinks.lastChild;
        selectRechts.appendChild(firstChildLinks);
    }
    knopEenNaarLinks.disabled = false;
    knopAllesNaarLinks.disabled = false;
    knopAllesNaarRechts.disabled = true;
    knopEenNaarRechts.disabled = true;


    // WERKT WEL:
    // Array.from(selectLinks.options).forEach(option => {
    //     selectRechts.appendChild(option);
    // });
}

knopAllesNaarLinks.onclick = function () {
    let aantalOptionsRechts = selectRechts.length;
    for (let index = 0; index < aantalOptionsRechts; index++) {
        let firstChildRechts = selectRechts.firstElementChild;
        selectLinks.appendChild(firstChildRechts);

    }
    knopEenNaarRechts.disabled = false;
    knopAllesNaarRechts.disabled = false;
    knopAllesNaarLinks.disabled = true;
    knopEenNaarLinks.disabled = true;
}