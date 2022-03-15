"use strict";
// Keuze blad
function blad () {
    let keuzeSpeler = "blad";
    let keuzeComputer = Math.floor((Math.random() * 3) + 1);
    if (keuzeComputer === 1) {
        const img = document.getElementById("bladsteenschaar");
        img.title = "blad";
        img.src = `blad.png`;
        let keuzeComputer = "blad";
        console.log("Speler", keuzeSpeler);
        console.log("Computer", keuzeComputer);
    } else if (keuzeComputer === 2) {
        const img = document.getElementById("bladsteenschaar");
        img.title = "steen";
        img.src = `steen.png`;
        let keuzeComputer = "steen";
        console.log("Speler", keuzeSpeler);
        console.log("Computer", keuzeComputer);
    } else {
        const img = document.getElementById("bladsteenschaar");
        img.title = "schaar";
        img.src = `schaar.png`;
        let keuzeComputer = "schaar";
        console.log("Speler", keuzeSpeler);
        console.log("Computer", keuzeComputer);
    }
}

// Keuze steen
function steen() {
    let keuzeSpeler = "steen";
    let keuzeComputer = Math.floor((Math.random() * 3) + 1);
    if (keuzeComputer === 1) {
        const img = document.getElementById("bladsteenschaar");
        img.title = "blad";
        img.src = `blad.png`;
        let keuzeComputer = "blad";
        console.log("Speler", keuzeSpeler);
        console.log("Computer", keuzeComputer);
    } else if (keuzeComputer === 2) {
        const img = document.getElementById("bladsteenschaar");
        img.title = "steen";
        img.src = `steen.png`;
        let keuzeComputer = "steen";
        console.log("Speler", keuzeSpeler);
        console.log("Computer", keuzeComputer);
    } else {
        const img = document.getElementById("bladsteenschaar");
        img.title = "schaar";
        img.src = `schaar.png`;
        let keuzeComputer = "schaar";
        console.log("Speler", keuzeSpeler);
        console.log("Computer", keuzeComputer);
    }
}

// Keuze schaar
function schaar() {
    let keuzeSpeler = "schaar";
    let keuzeComputer = Math.floor((Math.random() * 3) + 1);
    if (keuzeComputer === 1) {
        const img = document.getElementById("bladsteenschaar");
        img.title = "blad";
        img.src = `blad.png`;
        let keuzeComputer = "blad";
        console.log("Speler", keuzeSpeler);
        console.log("Computer", keuzeComputer);
    } else if (keuzeComputer === 2) {
        const img = document.getElementById("bladsteenschaar");
        img.title = "steen";
        img.src = `steen.png`;
        let keuzeComputer = "steen";
        console.log("Speler", keuzeSpeler);
        console.log("Computer", keuzeComputer);
    } else {
        const img = document.getElementById("bladsteenschaar");
        img.title = "schaar";
        img.src = `schaar.png`;
        let keuzeComputer = "schaar";
        console.log("Speler", keuzeSpeler);
        console.log("Computer", keuzeComputer);
    }
}

// Resultaat
function resultaat () {
    if (keuzeSpeler === keuzeComputer) {
        return "Gelijkspel";
    } else if (keuzeSpeler === "blad" && keuzeComputer === "steen") {
        return "Winnaar";
    } else if (keuzeSpeler === "blad" && keuzeComputer === "schaar") {
        return "Verliezer";
    } else if (keuzeSpeler === "steen" && keuzeComputer === "blad") {
        return "Verliezer";
    } else if (keuzeSpeler === "steen" && keuzeComputer === "schaar") {
        return "Winnaar";
    } else if (keuzeSpeler === "schaar" && keuzeComputer === "blad") {
        return "Winnaar";
    } else if (keuzeSpeler === "schaar" && keuzeComputer === "steen") {
        return "Verliezer";
    }
}

document.getElementById("blad").onclick = blad;
document.getElementById("steen").onclick = steen;
document.getElementById("schaar").onclick = schaar;
document.getElementById("resultaat").innerText = resultaat();
