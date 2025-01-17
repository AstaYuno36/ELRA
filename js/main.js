// Fonction pour gérer le défilement fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Exemple de données pour la galerie (à remplacer par vos propres images)
const galleryImages = [
    // Vous pourrez ajouter ici les chemins vers vos images
];

// Fonction pour charger la galerie
function loadGallery() {
    const gallery = document.getElementById('gallery');
    galleryImages.forEach(image => {
        const div = document.createElement('div');
        div.className = 'col-md-4 gallery-item';
        div.innerHTML = `
            <img src="${image}" alt="Photo ELRA" class="img-fluid">
        `;
        gallery.appendChild(div);
    });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser la galerie
    loadGallery();
});
