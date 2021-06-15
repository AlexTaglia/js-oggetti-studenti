/*
PARTE 1
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. 
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto.
PARTE 2
Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, 
nome e cognome.  Ricordatevi, è un array, quindi? for.
PARTE 3
Dare la possibilità all’utente, attraverso 3 prompt() - uno per ciascuna proprietà - 
di aggiungere UN SOLO oggetto studente inserendo nell’ordine: nome, cognome e età.
*/


// ----------------------------------------------------------------------------------------------------------
var outputStudente = document.getElementById('parte1')
var htmlStringEs1 = '';

// Creo un oggetto studente, con: nome, cognome, età.
var student = {
    name: 'Mario',
    lastName: 'Rossi',
    age: 18
}

// stampo a schermo le proprietà
for (var key in student) {
    htmlStringEs1 += "<li>" + key + ": " + student[key] + "</li>";
}

outputStudente.innerHTML = htmlStringEs1;



// ----------------------------------------------------------------------------------------------------------
var outputStudente = document.getElementById('parte2')
var htmlStringEs2 = '';

// Creare un array di oggetti di studenti. 
var studenti = [
    { name: 'Iron', lastName: 'Man', age: 18 },
    { name: 'Capitan', lastName: 'America', age: 17 },
    { name: 'Spider', lastName: 'Man', age: 16 }
]
console.log(studenti);

// Dare la possibilità all’utente, attraverso 3 prompt() - uno per ciascuna proprietà - 
// di aggiungere UN SOLO oggetto studente inserendo nell’ordine: nome, cognome e età.
var studentName = prompt('Inserisci il nome dello studente');
var studentLastName = prompt('Inserisci il cognome dello studente');
var studentAge = parseInt(prompt('Inserisci l\'età dello studente'));
studenti.push({
    name: studentName,
    lastName: studentLastName,
    age: studentAge
})

// Ciclare su tutti gli studenti 
for (var i = 0; i < studenti.length; i++) {
    htmlStringEs2 += "<li>" + studenti[i].name + " " + studenti[i].lastName + "</li>";

}

outputStudente.innerHTML = htmlStringEs2;



