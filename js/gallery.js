// Liste des images à afficher
let currentImageIndex = 0;
const images = [
    'ets2_20250107_214701_00.png',
    'ets2_20250107_214717_00.png',
    'ets2_20250107_214730_00.png',
    'ets2_20250115_173755_00.png',
    'ets2_20250115_174644_00.png'
];

function loadGalleryImages() {
    const galleryContainer = document.getElementById('gallery-container');
    if (!galleryContainer) {
        console.error('Container de galerie non trouvé');
        return;
    }

    // Vider la galerie existante
    galleryContainer.innerHTML = '';

    // Créer un élément pour chaque image
    images.forEach((imageName, index) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'image-wrapper';
        
        const img = document.createElement('img');
        img.src = `image/${imageName}`;
        img.className = 'gallery-image';
        img.alt = imageName;
        
        // Ajouter le gestionnaire de clic pour ouvrir le modal
        img.onclick = () => openModal(index);
        
        wrapper.appendChild(img);
        galleryContainer.appendChild(wrapper);
    });
}

// Fonction pour ouvrir le modal
function openModal(imageIndex) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    currentImageIndex = imageIndex;
    modalImg.src = `image/${images[imageIndex]}`;
    modal.style.display = 'block';
    
    // Afficher les boutons de navigation
    updateNavigationButtons();
}

// Mettre à jour l'affichage des boutons de navigation
function updateNavigationButtons() {
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    prevButton.style.display = currentImageIndex > 0 ? 'flex' : 'none';
    nextButton.style.display = currentImageIndex < images.length - 1 ? 'flex' : 'none';
}

// Navigation vers l'image précédente
function previousImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        document.getElementById('modalImage').src = `image/${images[currentImageIndex]}`;
        updateNavigationButtons();
    }
}

// Navigation vers l'image suivante
function nextImage() {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        document.getElementById('modalImage').src = `image/${images[currentImageIndex]}`;
        updateNavigationButtons();
    }
}

// Fermer le modal
function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Initialisation des événements
document.addEventListener('DOMContentLoaded', () => {
    loadGalleryImages();
    
    // Gestionnaire pour fermer le modal
    document.querySelector('.close-modal').onclick = closeModal;
    
    // Gestionnaires pour la navigation
    document.querySelector('.prev-button').onclick = previousImage;
    document.querySelector('.next-button').onclick = nextImage;
    
    // Fermer le modal en cliquant en dehors de l'image
    document.getElementById('imageModal').onclick = (e) => {
        if (e.target === document.getElementById('imageModal')) {
            closeModal();
        }
    };
    
    // Gérer les touches du clavier
    document.addEventListener('keydown', (e) => {
        if (document.getElementById('imageModal').style.display === 'block') {
            if (e.key === 'ArrowLeft') previousImage();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'Escape') closeModal();
        }
    });
});

// Recharger les images toutes les 30 secondes
setInterval(loadGalleryImages, 30000);
