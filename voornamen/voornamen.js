"use strict";
const voornamen = [];
let aantal = 1;

document.getElementById("toevoegen").onclick = function () {
    const voornaamToevoegen = document.getElementById("voornaam");
    const voornaam = voornaamToevoegen.value;
    if (voornamen.includes(voornaam)) {
        voornamen.push(voornaam);
        aantal = voornamen.filter(naam => naam === voornaam).length;
        document.getElementById(voornaam).innerText = `${voornaam} ${aantal}`;
    } else {
        aantal = 1;
        voornamen.push(voornaam);
        const li = document.createElement("li");
        li.setAttribute("id", voornaam);
        li.innerText = `${voornaam} ${aantal}`;
        document.getElementById("lijst").appendChild(li);
    }
    voornaamToevoegen.value = "";
    voornaamToevoegen.focus();
}