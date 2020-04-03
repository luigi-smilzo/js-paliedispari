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

/**
 * PALINDROMIC CHECK
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

/**
 * PARITY CHECK
 */

// references
var numPar = prompt('Pari o dispari?').toLowerCase();
var num = parseInt(prompt('Inserisci un numero da 1 a 5'));
var numCpu = getRandomNumber(1, 5);
var result = sum(num, numCpu);
var parCheck = parityCheck(result);
console.log('Scelta pari o dispari: ', numPar);
console.log('Numero scelto: ', num);
console.log('Numero random CPU: ', numCpu);
console.log('Somma dei due numeri: ', result);
console.log('Controllo parità della somma: ', parCheck);

numPar = convertToBoolean(numPar);
console.log('Conversione numero del Giocatore in valore booleano: ', numPar);

if ( numPar !== parCheck) {
    console.log('Hai perso!');
} else {
    console.log('Hai vinto!');
}

// functions
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sum(num1, num2) {
    return num1 + num2;
}

function parityCheck(param) {
    if (param % 2 == 0) {
        return true;
    }
    return false;
}

function convertToBoolean(parity) {
    if ( parity === 'pari') {
        return true;
    } else if ( parity === 'dispari') {
        return false;
    } else {
        alert('Non valido, inserisci pari o dispari');
    }
} 
