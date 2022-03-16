"use strict";
const keuzes = ["blad", "steen", "schaar"]

// Keuzes
function verwerkKeuzeSpeler() {
    verwijderselecties();
    this.classList.add("gekozen");
    let keuzeSpeler = this.dataset.keuze;
    let keuzeComputer = Math.floor((Math.random() * 3));
    keuzeComputer = keuzes[keuzeComputer];
    const img = document.getElementById("bladsteenschaar");
    img.title = keuzeComputer;
    img.src = `${keuzeComputer}.png`;
    document.getElementById("resultaat").innerText = resultaat(keuzeSpeler, keuzeComputer);
}

// Resultaat
function resultaat(keuzeSpeler, keuzeComputer) {
    if (keuzeSpeler === keuzeComputer) {
        return "Gelijkspel";
    } else if (keuzeSpeler === "blad" && keuzeComputer === "steen") {
        return "Speler";
    } else if (keuzeSpeler === "blad" && keuzeComputer === "schaar") {
        return "Computer";
    } else if (keuzeSpeler === "steen" && keuzeComputer === "blad") {
        return "Computer";
    } else if (keuzeSpeler === "steen" && keuzeComputer === "schaar") {
        return "Speler";
    } else if (keuzeSpeler === "schaar" && keuzeComputer === "blad") {
        return "Speler";
    } else if (keuzeSpeler === "schaar" && keuzeComputer === "steen") {
        return "Computer";
    }
}

function verwijderselecties() {
    for (const element of document.querySelectorAll("a.gekozen")) {
        element.classList.remove("gekozen");
    }
}

for (const link of document.querySelectorAll("#keuzeSpeler a")) {
    link.onclick = verwerkKeuzeSpeler;
}
