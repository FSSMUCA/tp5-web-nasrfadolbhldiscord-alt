function totalAvecRemise(total, remise) {
    return total - (total * remise / 100);
}

let totalHT = Number(prompt("Entrez le total HT : "));
let remise = Number(prompt("Entrez la remise (%) : "));

let resultat = totalAvecRemise(totalHT, remise);
console.log("Le total final après remise est : " + resultat);