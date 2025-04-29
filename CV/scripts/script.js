/**
 * Cette fonction construit et affiche l'email. 
 * @param {string} nom : nom
 * @param {string} email : email
 * @param {string} texte : texte
 */
/* function afficherEmail(nom, email, texte) {
    let mailto = `mailto:${email}?subject=Contact : CV Thomas Salomon &body=Bonjour ${nom}, Ce mail n'est present qu'a titre d'exemple et ne fonctionnera pas si vous voulez l'envoyer. \n
    Je vous remercie d'avoir pris le temps de consulter ce CV digital que j'ai realise avec mes competences de codage actuelle. 
    Si mon profil vous interesse, n'hesitez pas a prendre contact avec moi.
    Bonne journee a vous. 
    Vous trouverez ci-dessous le texte renseigne dans l'onglet associe : 
    ${texte}`
    location.href = mailto
}

function envoyerEmail(){
let form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let baliseNom = document.getElementById("nom")
    let nom = baliseNom.value

    let baliseEmail = document.getElementById("email")
    let email = baliseEmail.value

    let baliseTexte = document.getElementById("message")
    let texte = baliseTexte.value

afficherEmail(nom, email, texte)

})
}
envoyerEmail()
*/



// Initialiser EmailJS avec ta clé publique
emailjs.init("utH-8kg1ARtVDYzAE"); // Remplace par ton ID public d'EmailJS

// Fonction qui s'exécute lors de la soumission du formulaire
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le rechargement de la page lors de l'envoi du formulaire

    // Récupérer les valeurs des champs du formulaire
    const nom = document.getElementById("nom").value;  // "user_name" dans le HTML
    const email = document.getElementById("email").value;  // "user_email" dans le HTML
    const message = document.getElementById("message").value;  // "message" dans le HTML

    // Créer un objet contenant les paramètres à envoyer dans l'email
    const templateParams = {
        user_name: nom,
        user_email: email,
        message: message
    };

    // Envoi de l'email via EmailJS
    emailjs.send('service_j0vs97j', 'template_lkcpgkm', templateParams)
        .then(function (response) {
            console.log('Success', response);
            alert('Votre message a été envoyé avec succès.');
        }, function (error) {
            console.log('Error', error);
            alert('Une erreur est survenue, veuillez réessayer.');
        });
});