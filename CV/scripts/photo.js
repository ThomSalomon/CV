document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox_img');
    const photoLinks = document.querySelectorAll('.lien_photo');

    photoLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const img = link.querySelector('img');

            if (img) {
                lightboxImg.src = img.src;
                lightboxImg.classList.remove('hidden');
            }
            lightbox.classList.remove('hidden');
        });
    });

    lightbox.addEventListener('click', function(e) {
        // Si on ne clique pas directement sur l'image ou la vidéo → fermer
        if (e.target !== lightboxImg) {
            lightbox.classList.add('hidden');
            lightboxImg.src = '';
        }
    });
});
