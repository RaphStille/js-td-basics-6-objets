/*****************************
 * 027 - OBJETS - CODING CHALLENGE 4
 */

/*
Souvenons-nous du premier challenge de code où Mark et John comparaient leurs BMIs.
Implémentons à présent la même fonctionnalité avec des objets, des propriétés et des méthodes.
1. Pour chacun, crée un objet avec
    - les propriétés pour leur nom complet, leur poids et leur taille
    - une méthode qui calcule le BMI
        (enregistre le BMI dans l'objet et, en plus, le retourne à partir de la méthode)
2. Affiche dans la console qui a le BMI le plus élevé avec le nom complet et le BMI.
    N'oublie pas qu'il pourrait y avoir un ex æquo.

Rappel: BMI = poids / taille^2 = poids / (taille * taille). (poids en kg and taille en mètres).

BONNE CHANCE 😀
*/

const mark = {
    nom: "Mark",
    poids: 95,
    taille: 1.88,
    calculerBMI: function() {
        this.BMI = this.poids / (this.taille * this.taille);
        return Math.round(this.BMI);
    }
};

const john = {
    nom: "John",
    poids: 85,
    taille: 1.75,
    calculerBMI: function() {
        this.BMI = this.poids / (this.taille * this.taille);
        return Math.round(this.BMI);
    }
};

mark.calculerBMI();
john.calculerBMI();

if (mark.BMI > john.BMI) {
    console.log(`${mark.nom} a le BMI le plus élevé: ${mark.BMI}`);
} else if (john.BMI > mark.BMI) {
    console.log(`${john.nom} a le BMI le plus élevé: ${john.BMI}`);
} else {
    console.log(`Ex æquo: ${mark.nom} et ${john.nom} ont le même BMI: ${mark.BMI}`);
}
