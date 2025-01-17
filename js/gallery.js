// Liste des images à afficher
function loadGalleryImages() {
    const galleryContainer = document.getElementById('gallery-container');
    if (!galleryContainer) {
        console.error('Container de galerie non trouvé');
        return;
    }

    // Liste des images existantes
    const images = [
        'ets2_20250107_214701_00.png',
        'ets2_20250107_214717_00.png',
        'ets2_20250107_214730_00.png',
        'ets2_20250115_173755_00.png',
        'ets2_20250115_174644_00.png'
    ];

    // Vider la galerie existante
    galleryContainer.innerHTML = '';

    // Créer un élément pour chaque image
    images.forEach(imageName => {
        const wrapper = document.createElement('div');
        wrapper.className = 'image-wrapper';
        
        // Créer un conteneur de chargement
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'loading-placeholder';
        wrapper.appendChild(loadingDiv);
        
        const img = document.createElement('img');
        img.src = `image/${imageName}`;
        img.className = 'gallery-image';
        img.alt = imageName;
        img.loading = 'lazy'; // Activer le chargement progressif
        
        // Cacher l'image jusqu'à ce qu'elle soit chargée
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        // Quand l'image est chargée
        img.onload = () => {
            loadingDiv.style.opacity = '0';
            img.style.opacity = '1';
            setTimeout(() => {
                loadingDiv.remove();
            }, 300);
        };
        
        wrapper.appendChild(img);
        galleryContainer.appendChild(wrapper);
    });
}

// Charger les images au chargement de la page
document.addEventListener('DOMContentLoaded', loadGalleryImages);

// Recharger les images toutes les 30 secondes
setInterval(loadGalleryImages, 30000);
