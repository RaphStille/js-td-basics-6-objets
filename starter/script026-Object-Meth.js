/*****************************
 * 026 - Objets et méthodes
 */

/* Une MÉTHODE est une fonction associée à un objet */

const aurora = {
    nom: "Aurora",
    sante: 150,
    force: 25,
    décrire: function() {
        return `${this.nom} a ${this.sante} points de vie et ${this.force} en force.`;
    }
};

console.log(aurora.décrire());

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2019 - this.birthYear;
        return this.age;
    }
};

console.log(john.calcAge());
console.log(john.age);

var rectangle = {
    longueur: 5,
    largeur: 3,
    calculerSurface: function() {
        return this.longueur * this.largeur;
    }
};

console.log(rectangle.calculerSurface());
