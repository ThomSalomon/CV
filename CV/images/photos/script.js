/**
 * Cette fonction construit et affiche l'email. 
 * @param {string} nom : nom
 * @param {string} email : email
 * @param {string} texte : texte
 */
function afficherEmail(nom, email, texte) {
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
