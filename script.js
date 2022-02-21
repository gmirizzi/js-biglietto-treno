let s = 0;
let km = prompt ("Inserire il numero di km");
let age = prompt ("Inserire l'età");
let p = km * 0.21;

if (age < 18) {
    s = p * 20 /100;
} else if (age > 65) {
    s = p * 40/100;
}

let prezzoFinale = p - s;
prezzoFinale = prezzoFinale.toFixed(2);

document.getElementById("prezzofinale").innerHTML = "Il prezzo del tuo biglietto è " + prezzoFinale + "€";