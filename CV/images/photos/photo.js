document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox_img');
    const lightboxVideo = document.getElementById('lightbox_video');
    const photoLinks = document.querySelectorAll('.lien_photo');

    photoLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const img = link.querySelector('img');
            const video = link.querySelector('video');

            if (img) {
                lightboxImg.src = img.src;
                lightboxImg.classList.remove('hidden');
                lightboxVideo.classList.add('hidden');
                lightboxVideo.pause();
            }

            if (video) {
                lightboxVideo.src = video.src;
                lightboxVideo.classList.remove('hidden');
                lightboxImg.classList.add('hidden');
                lightboxVideo.pause(); // important : ne pas démarrer automatiquement
            }

            lightbox.classList.remove('hidden');
        });
    });

    lightbox.addEventListener('click', function(e) {
        // Si on ne clique pas directement sur l'image ou la vidéo → fermer
        if (e.target !== lightboxImg && e.target !== lightboxVideo) {
            lightbox.classList.add('hidden');
            lightboxImg.src = '';
            lightboxVideo.pause();
            lightboxVideo.src = '';
        }
    });
});