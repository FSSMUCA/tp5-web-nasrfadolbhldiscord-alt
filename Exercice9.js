function factorielle(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorielle(n - 1);
}

let nombre = Number(prompt("Entrez un nombre : "));
console.log("La factorielle de " + nombre + " est : " + factorielle(nombre));