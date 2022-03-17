"use strict";
document.getElementById("toevoegen").onclick = function () {
    const voornaamToevoegen = document.getElementById("voornaam");
    const voornaam = voornaamToevoegen.value;
    const lijst = document.getElementById("lijst");
    if (lijst.children.length > 0) {
        if (voornaam === "stop") {
            let aantal = 0;
            aantal = 0;
        } else {
            nieuweNaamToevoegen(voornaam);
        }
    } else {
        nieuweNaamToevoegen(voornaam);
    }
    voornaamToevoegen.value = "";
    voornaamToevoegen.focus();
}

function nieuweNaamToevoegen(naam) {
    let aantal = 1;
    const li = document.createElement("li");
    li.dataset.naam = naam;
    li.dataset.aantal = aantal;
    li.innerText = `${naam}: ${aantal}`;
    lijst.appendChild(li);
}