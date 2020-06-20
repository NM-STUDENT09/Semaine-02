/*
      Semaine 2 - Introduction à JavaScript
      B - Les opérations
*/

console.log('EXERCICE 2 - LES OPERATIONS');

//Insérez ici les exercices 2.1 à 2.4 -------------------------------

/* Exercice 2.1 ---------------------------------------*/

// TEST 01 *******************************************
/*
    let number_1 = 2;
    let number_2 = 4;
    let number_3 = 8;
    let number_4 = 16;

    console.log(
      '2.1| ' + 'Le carré de ' + number_1 + ' est ' + number_1 * number_1 + '.'
    );
    console.log(
      '     ' + 'Le carré de ' + number_2 + ' est ' + number_2 * number_2 + '.'
    );
    console.log(
      '     ' + 'Le carré de ' + number_3 + ' est ' + number_3 * number_3 + '.'
    );
    console.log(
      '     ' + 'Le carré de ' + number_4 + ' est ' + number_4 * number_4 + '.'
    );
  */

// TEST 02 *******************************************

/*
      let a = 2;
      function carre(a, a) {
        return a * a;
      }
      let result = carre(a, a);

      // console.log('2.1| ' + 'Le carré de ' + a + ' est ' + result + '.');
      console.log('2.1| ' + 'Le carré de ' + a + ' est ' + carre(a, a) + '.');
      */

// TEST 03 *******************************************

/*
    let tab = [2, 4, 8, 16];

    function carre(tab[i]) {
      for (var i = 0; i < tab[i].length; i++) {
      console.log(tab[i] * tab[i]);
    }
*/

/* Variable : */
/*
let nombre = [2, 4, 8, 16];
let carre = function (nombre) {
  return nombre * nombre;
  console.log(carre);
};*/

/*
let num = [2, 4, 8, 16];
function carre(num[i]) {
  for (let i = 0; i < num.length; i++) {
    console.log('Le carré de ' + num + ' est ' + num[i] * num[i] + '.');
  }
}

var x = carré(4);
*/
/*
    let a = carre(2);
    let b = carre(4);
    let c = carre(8);
    let d = carre(16);
*/

let num = [2, 4, 8, 16];
console.log('2.1| ');
for (let i = 0; i < num.length; i++) {
  function carre(num) {
    return num[i] * num[i];
    console.log(
      '     ' + 'Le carré de ' + num + ' est ' + num[i] * num[i] + '.'
    );
  }
}

/* Affichage : */

/* Exercice 2.2 ---------------------------------------*/
/* Variable : */
let tab = [3, 178, 65, 98, 123];
console.log('2.2| ');

/* Affichage : */

/* Exercice 2.3 ---------------------------------------*/
/* Variable : */
let prix = 79.99;
let ristoune = 0.19;
function remise(prix) {
  return prix - prix * ristoune;
}

/* Affichage : */
console.log(
  '2.3| ' +
    'Le coût de la lampe Ikéa est de ' +
    remise(prix) +
    '€ après remise.'
);

// Insérez ici les exercices 2.4 à 2.8 en utilisant les variables déjà créées à votre disposition
/* Variable : */
let firstNumber = 9;
let secondNumber = 8;
let thirdNumber = 4;
let fourthNumber = 12;

/* Exercice 2.4 ---------------------------------------*/
/* Affichage : */
function tiers(firstNumber) {
  return firstNumber / 3;
}

// let firstNumber = tiers(firstNumber);
console.log(
  '2.4| ' + 'Le tiers de firstNumber vaut ' + tiers(firstNumber) + '.'
);
// let firstNumber = tiers(firstNumber);
console.log(
  '     ' + 'La nouvelle valeur de firstNumber est ' + tiers(firstNumber) + '.'
);

/* Exercice 2.5 ---------------------------------------*/
/* Affichage : */
function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(
  '2.5| ' +
    'Le somme des deux premiers nombres vaut ' +
    sum(firstNumber, secondNumber) +
    '.'
);
console.log(
  '     ' +
    'La nouvelle valeur de secondNumber est ' +
    sum(firstNumber, secondNumber) +
    '.'
);

/* Exercice 2.6 ---------------------------------------*/
/* Affichage : */
function produit(firstNumber, secondNumber) {
  return firstNumber * thirdNumber;
}
console.log(
  '2.6| ' +
    'Le produit des premier et troisième nombres vaut ' +
    produit(firstNumber, thirdNumber) +
    '.'
);
console.log(
  '     ' +
    'La nouvelle valeur de secondNumber est ' +
    produit(firstNumber, thirdNumber) +
    '.'
);

/* Exercice 2.7 ---------------------------------------*/
/* Affichage : */
function difference(fourthNumber, firstNumber) {
  return fourthNumber - firstNumber;
}
console.log(
  '2.7| ' +
    'Le somme des deux premiers nombres vaut ' +
    difference(fourthNumber, firstNumber) +
    '.'
);
console.log(
  '     ' +
    'La nouvelle valeur de fourthNumber est ' +
    difference(fourthNumber, firstNumber) +
    '.'
);

// Exercice incrémentation --------------------------------------------
/* Exercice 2.8 ---------------------------------------*/
console.log('2.8| ');
/*
let incrementCounter = 0;
function modifier(increment) {
  incrementCounter += increment;
  document.getElementById('text').value = incrementCounter;
}
*/

function incrementOnClick() {
  document
    .getElementById('increment')
    .addEventListener('click', function decrement() {
      // Insérez ici le bout de code nécessaire à la réalisation de l'exercice sur la décrémentation, nous verrons plus tard à quoi ces lignes pré-existantes correspondent
      let incrementCounter = 0;
      // incrementCounter += increment;

      console.log(incrementCounter++);
      console.log(incrementCounter);

      console.log('Incrémentez');
    });
}

// Exercice incrémentation --------------------------------------------
/* Exercice 2.9 ---------------------------------------*/
console.log('2.9| ');
function decrementOnClick() {
  document
    .getElementById('decrement')
    .addEventListener('click', function increment() {
      // Insérez ici le bout de code nécessaire à la réalisation de l'exercice sur la décrémentation, nous verrons plus tard à quoi ces lignes pré-existantes correspondent
      let decrementCounter = 100;
      console.log('2.9| ' + decrementCounter--);
      console.log('     ' + decrementCounter);

      console.log('Décrémentez');
    });
}
