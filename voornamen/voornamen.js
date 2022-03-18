"use strict";
const lijst = document.getElementById("lijstje");
const voornaamToevoegen = document.getElementById("voornaam");
document.getElementById("toevoegen").onclick = function () {
    const voornaam = voornaamToevoegen.value;
    let gevondenListItem = zoekListItem(voornaam);
    if (gevondenListItem === null) {
        nieuweNaamToevoegen(voornaam);
    } else {
        updateListItem(gevondenListItem);
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

function zoekListItem(naam) {
    const listItems = document.getElementsByTagName("li");
    for (const listItem of listItems) {
        if (listItem.dataset.naam === naam) {
            return listItem;
        }
    }
    return null;
}

function updateListItem(gevondenListItem) {
    gevondenListItem.dataset.aantal++;
    gevondenListItem.innerText = `${gevondenListItem.dataset.naam}: ${gevondenListItem.dataset.aantal}`;
}