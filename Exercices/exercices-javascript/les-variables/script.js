/*
  Semaine 2 - Introduction à JavaScript
  A - Les variables

*/

console.log('EXERCICE 1 - LES VARIABLES');
/* Exercice 1.1 ---------------------------------------*/
/* Variable :*/
const salut = 'Hello World';

/* Affichage : */
console.log('1.1| ' + salut + '!');

/* Exercice 1.2 ---------------------------------------
/* Variables : */
const salutCible = "Bonjour, je m'appelle";
const prenom = 'Nathalie';

/* Affichage : */
console.log('1.2| ' + salutCible + ' ' + prenom + '.');

/* Exercice 1.3 --------------------------------------- */
/* Variables :*/
let sujet = "J'ai";
let age = '5';
const annee = 'ans.';

/* Affichage : */
console.log('1.3| ' + sujet + ' ' + age + ' ' + annee);

/* Exercice 1.4 --------------------------------------- */
/* Tableau : */
let studentTeamB = [
  'Lionel',
  'Fanny',
  'Régine',
  'Marie-Solange',
  'Edouard',
  'Samantha',
  'Yana',
  'Thierry',
  'Jeremie',
  'Nathalie',
];

/* Affichage du 6e étudiant */
console.log('1.4| ' + 'Le 6e MEMBRE du groupe B est ' + studentTeamB[5] + '.');

/* Test
console.log('<BR />');
console.log(studentTeamB);
*/

/* Exercice 1.5 --------------------------------------- */
/* Affichage du 6e étudiant */
console.log(
  '1.5| ' +
    'Je suis ' +
    studentTeamB[9] +
    ' et je fais aussi partie du groupe B.'
);

/* Exercice 1.6 --------------------------------------- */
/* Objet : */
const student = {
  prenom: 'Nathalie',
  nom: 'MWAMBA',
  age: 3,
};

/* Affichage : */
console.log(
  '1.6| ' +
    "L'objet STUDENT vaut : " +
    student.prenom +
    ' ' +
    student.nom +
    ' ' +
    student.age +
    '.'
);

/* Exercice 1.7 --------------------------------------- */
console.log('1.7| ' + 'Mon prénom est ' + student.prenom + '.');
