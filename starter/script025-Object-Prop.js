/*****************************

 OBJETS - PRÉPA 4 : Manipulation d'objets

 */

/* 1. Initialisation d'un nouvel objet */
// 1°) Première méthode d'initialisation : déclaration littérale
// Crée un objet 'moi' qui te présente et contient les propriétés suivantes :
// nom, prenom, age, profession, nationalite
const moi = {
    nom: 'Stille',
    prenom: 'Raphaël',
    age: 20,
    profession: 'Étudiant',
    nationalite: 'Belge'
};

// Affiche l'objet que tu viens de créer dans la console
console.log(moi);

/* 2. Accès aux propriétés de l'objet */
// 1°) Première méthode : l'opérateur [] avec une chaîne de caractères
// Affiche dans la console : "Je m'appelle … …, j'ai … ans, je suis … et je suis …"
// en allant à chaque fois rechercher les propriétés dans l'objet 'moi' que tu viens de créer

console.log("Je m'appelle " + moi['prenom'] + " " + moi['nom'] + ", j'ai " + moi['age'] + " ans, je suis " + moi['profession'] + " et je suis " + moi['nationalite']);

// 2°) Deuxième méthode : l'opérateur . (point)
// Affiche dans la console : "Je m'appelle … …, j'ai … ans, je suis … et je suis …"
// en allant à chaque fois rechercher les propriétés dans l'objet 'moi' que tu viens de créer

console.log("Je m'appelle " + moi.prenom + " " + moi.nom + ", j'ai " + moi.age + " ans, je suis " + moi.profession + " et je suis " + moi.nationalite);

/* 3. Modification des propriétés de l'objet */
// Trois années se sont écoulées, tu es sorti(e) de l'école, tu es à présent 'Web Developer'
// et tu t'es marié(e). Mets à jour tes propriétés pour refléter ces changements.
// Affiche l'objet 'moi' mis à jour dans la console.
// Affiche à nouveau ta description dans la console :
// "Je m'appelle … …, j'ai  … ans, je suis à présent un … (métier) … (nationalité) et je suis … (état civil)"
// en allant à chaque fois rechercher les propriétés dans l'objet 'moi' que tu viens de créer

moi.age = moi.age+3
moi.profession = "Web Developer"
moi.etatCivil = 'marié';
console.log(moi);

console.log("Je m'appelle " + moi.prenom + " " + moi.nom + ", j'ai " + moi.age + " ans, je suis à présent un " + moi.profession + " " + moi.nationalite + " et je suis " + moi.etatCivil);

/*
EXERCICE 4 :
- Crée un objet stylo qui possède trois priorétés :
	type (bille), couleur (bleu) et marque (bic)
- Affiche chacune de ses propriétés dans la console
- Affiche "J'écris avec un stylo …(type) …(couleur) de marque …"
	en accédant à ses propriétés
- Modifie sa propriété "couleur" pour qu'il écrive en rouge
- Affiche "J'écris avec un stylo … … de marque …"
	en accédant à ses nouvelles propriétés
- Ajoute une propriété "prix" avec la valeur 2.5
- Affiche "Mon stylo coûte … euros"
*/

const stylo = {
    type: 'bille',
    couleur: 'bleu',
    marque: 'bic'
};

console.log(stylo.type);
console.log(stylo.couleur);
console.log(stylo.marque);

console.log("J'écris avec un stylo " + stylo.type + " " + stylo.couleur + " de marque " + stylo.marque);
stylo.couleur = 'rouge';
console.log("J'écris avec un stylo " + stylo.type + " " + stylo.couleur + " de marque " + stylo.marque);
stylo.prix = 2.5;
console.log("Mon stylo coûte " + stylo.prix + " euros");