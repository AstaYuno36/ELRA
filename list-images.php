<?php
header('Content-Type: application/json');

$imageDirectory = 'Image/';  // Changé de 'images/' à 'Image/'
$allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

// Récupérer tous les fichiers du dossier images
$images = [];
if (is_dir($imageDirectory)) {
    $files = scandir($imageDirectory);
    foreach ($files as $file) {
        $extension = strtolower(pathinfo($file, PATHINFO_EXTENSION));
        if (in_array($extension, $allowedExtensions)) {
            $images[] = $file;
        }
    }
}

echo json_encode($images);
