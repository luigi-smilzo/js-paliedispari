/*
Palindromo
    -Chiedere all’utente di inserire una parola
    -Creare una funzione per capire se la parola inserita è un palindromo

Pari e Dispari
    -L’utente sceglie pari o dispari e un numero da 1 a 5. 
    -Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    -Sommiamo i due numeri
    -Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    -Dichiariamo chi ha vinto.
*/

var word = prompt('Inserisci una parola');
var wordInverted = invert(word);

if ( word == wordInverted) {
    console.log('La parola che hai inserito è un palindromo');
} else {
    console.log('La parola che hai inserito NON è un palindromo');
}

function invert(insertedWord) {
    var drow = '';
    
    for (var i = insertedWord.length - 1; i>= 0; i--) {
        drow += insertedWord[i];
    }

    return drow;
}

