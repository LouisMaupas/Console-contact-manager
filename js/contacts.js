const menu = "1 : Lister les contacts \n2 : Ajouter un contact \n3 : Supprimer un contact \n0 : Quitter"
let input

console.log("Bonjour et bienvenu dans le gestionnaire de contacts !");
console.log(menu);
//directory
let contacts = [
    {
        fName: "Carole",
        lName: "Lévisse"
    },
    {
        fName: "Mélodie",
        lName: "Nelsonne"
    },
];
// Function to add contacts
function addContact(contactList, fName, lName) {
    contactList.push({
        lName: lName,
        fName: fName,
    })
}
// Function to delete contacts
function removeContact(contactList) {
    for (let i = 0; i < contactList.length; i++) {
        let contact = contactList[i];
        console.log(i + " Nom : " + contact.lName + " prénom : " + contact.fName);
    }
    let del = Number(prompt("Choisissez le numéro du contact a supprimer :"));
    contacts.splice(del, 1);
}
//A loop to choose from the menu
while (input !== "0") {
    input = Number(prompt("Choisissez une option"));
    if (input === 1) { // look the table
        for (let contact of contacts) {
            console.log("Nom : " + contact.lName + ", prénom : " + contact.fName);
        }
        console.log(menu);
    } else if (input === 2) { // Add a contact
        let inputFName = prompt("Entrez son prénom"),
            inputLName = prompt("Entrez son nom");
        addContact(contacts, inputFName, inputLName);
        console.log("Votre contact a bien été ajouté !")
        console.log(menu);
    } else if (input === 3) { //Delete a contact
        removeContact(contacts);
        console.log("Votre contact a bien été supprimé !");
        console.log(menu);
    } else if (input === 0) { // leave
        console.log("Au revoir ;) ");
        break;
    } else {
        console.log('Désolé je n\'ai pas compris. Veuillez entrer un chiffre compris entre 0 et 3 inclus')
    }
}