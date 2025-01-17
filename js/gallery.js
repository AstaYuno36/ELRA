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

    // Précharger toutes les images
    const preloadImages = () => {
        const promises = images.map(imageName => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(imageName);
                img.onerror = () => reject(imageName);
                img.src = `image/${imageName}`;
            });
        });

        Promise.all(promises)
            .then(() => {
                displayImages();
            })
            .catch(error => {
                console.error('Erreur de chargement:', error);
                displayImages(); // Afficher quand même les images disponibles
            });
    };

    // Afficher les images
    const displayImages = () => {
        galleryContainer.innerHTML = '';
        
        images.forEach(imageName => {
            const wrapper = document.createElement('div');
            wrapper.className = 'image-wrapper';
            
            const img = document.createElement('img');
            img.src = `image/${imageName}`;
            img.className = 'gallery-image';
            img.alt = imageName;
            
            wrapper.appendChild(img);
            galleryContainer.appendChild(wrapper);
        });
    };

    // Démarrer le préchargement
    preloadImages();
}

// Charger les images au chargement de la page
document.addEventListener('DOMContentLoaded', loadGalleryImages);

// Recharger les images toutes les 30 secondes
setInterval(loadGalleryImages, 30000);
