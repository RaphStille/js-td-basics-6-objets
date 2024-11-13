const annuaire = {
    contacts: [],

    ajouterContact: function(nom,prenom,numero) {
        const contact = {
            nom: nom,
            prenom: prenom,
            numero: numero
        };
        this.contacts.push(contact);
    },

    supprimerContact: function(nom) {
        this.contacts = this.contacts.filter(contact => contact.nom !== nom);
    },

    afficherContacts: function() {
    if (this.contacts.length === 0) {
        console.log("Zero contact enregistré")
    } else {
        console.log("Contact dans l'annuaire :")
        this.contacts.forEach(contact => {
            console.log(`${contact.nom} ${contact.prenom} / ${contact.numero}`);
        });
    }
    }
};

annuaire.ajouterContact("Dupont", "Jean", "0123456789");
annuaire.ajouterContact("Durand", "Marie", "0987654321");
annuaire.ajouterContact("Martin", "Pierre", "0147253689");

annuaire.afficherContacts();

annuaire.supprimerContact("Durand");

annuaire.afficherContacts();