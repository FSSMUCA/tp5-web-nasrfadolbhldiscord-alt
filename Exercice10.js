function sommeIterative(n) {
    let somme = 0;
    for (let i = 1; i <= n; i++) {
        somme += i;
    }
    return somme;
}

function sommeRecursive(n) {
    if (n === 0) return 0;
    return n + sommeRecursive(n - 1);
}

let n = Number(prompt("Entrez un nombre : "));
console.log("Somme itérative =", sommeIterative(n));
console.log("Somme récursive =", sommeRecursive(n));

console.log("1 - Le code itératif est plus lisible.");
console.log("2 - Le code itératif est plus performant.");
console.log("3 - La récursion peut causer un dépassement de pile (stack overflow).");
console.log("4 - On privilégie les boucles quand il y a beaucoup d'itérations.");
