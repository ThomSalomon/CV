document.addEventListener("DOMContentLoaded", () => {
    // Inutile de re-charger dynamiquement, le SDK est déjà présent
    emailjs.init("utH-8kg1ARtVDYzAE");  // Remplacez par VOTRE public key

    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const templateParams = {
            user_nom:   form.nom.value,      // <input name="user_nom" id="nom">
            user_email: form.email.value,    // <input name="user_email" id="email">
            message:    form.message.value   // <textarea name="message" id="message">
        };

        console.log("Envoi en cours…", templateParams);

        emailjs.send("service_j0vs97j", "template_lkcpgkm", templateParams)
            .then(response => {
                console.log("Réponse EmailJS :", response);
                alert("Votre message a été envoyé avec succès.");
                form.reset();
            })
            .catch(error => {
                console.error("Erreur EmailJS :", error);
                alert("Une erreur est survenue, veuillez réessayer.");
            });
    });
});