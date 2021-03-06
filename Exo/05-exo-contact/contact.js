/**
 * VALIDATION DU FORMULAIRE DE CONTACT 
 * 
 * Nom          : 3 caractères minimum, 30 au maximum. Lettres et espaces uniquement.
 * Email        : format email valide
 * Téléphone    : format 10 chiffres. Le premier chiffre est obligatoirement un 0
 * Message      : au moins 20 caractères, validation complète en backend.
 * 
 * Consignes : 
 * 1) Adapter les attributs "pattern" du formulaire (contact.html)
 * 2) Ajouter les évènements nécessaires pour valider chaque champ "en temps réel" (onkeyup, onkeypress...)
 * 3) Compléter le code de l'évènement "submit" se trouvant en bas de ce fichier.
 * 4) Ajouter les règles CSS que vous jugerez utilies dans les classes .success et .error du fichier contact.css
 * 5) (Bonus) Valider le formulaire coté backend dans le fichier "contact_validation.php"
 */



/**
 * TODO : Ajouter ci-dessous les évènements pour valider individuellement les champs du formulaire (onkeyup, onkeypress...)
 */

/* votre code ici */

function validateName()
{
    return document.getElementById('contactName').value.match(/^[A-Za-z0-9]+$/) ? true : false;
}

function validateMail()
{
    return document.getElementById('contactEmail').value.match(/^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$^[A-Za-z0-9]+$/) ? true : false;
}
function validatePhone()
{
    return document.getElementById('contactPhone').value.match(/[0-9]+/) ? true : false;
}
function validateMessage()
{
    return document.getElementById('contactMessage').value.match(/[A-Za-z0-9]+/) ? true : false;
}
document.getElementById('contactName').addEventListener('keyup', validateName);
document.getElementById('contactEmail').addEventListener('keyup', validateName);
document.getElementById('contactPhone').addEventListener('keyup', validateName);
document.getElementById('contactMessage').addEventListener('keyup', validateName);


/**
 * TODO : Compléter le code de l'évènement ci-dessous pour valider tous les champs du formulaire lors de sa soumission (submit)
 */

// sélection du formulaire
const contactForm = document.getElementById('contactForm');

// évènement déclenché à la soumission du formulaire (submit)
contactForm.addEventListener('submit', (event) => {

    event.preventDefault();
    console.log(event);
    

    if(validateName()) {

    }
    
    let data = new FormData(contactForm);
    // contrôles 

    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'contact_validation.php');

    xhr.addEventListener('load', () => {

    });

    xhr.send();

    let myPromise = fetch(
        'contact_validation.php',
        {
            method: "post",
            body: data 
        }
    );

    myPromise.then((response) => {
        if(response.ok) {
            console.log(response);
            return response.text();
        }
        else {
            console.log("Erreur " + response.status);
        }
    })
    .then((text) => {
        console.log(text);
    });

    console.log(data);

     /**
      * TODO: Validation des 4 champs du formulaire. 
      * Si erreur, ajouter le message d'erreur dans l'élément #validationResult et affecter la classe .error à cet élément".
      * Si OK, ajouter le message "formulaire valide" dans l'élément #validationResult et affecter la classe .success à cet élément
      * */



      /* votre code ici */

});
