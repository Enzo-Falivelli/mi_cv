// script.js

function clearLists(){
    var centeredLists = document.getElementsByClassName('list');
        for(let i=0; i < centeredLists.length; i++){
            if(!centeredLists[i].classList.contains('hidden'))
                centeredLists[i].classList.add('hidden');
        }
}

document.getElementById('experience-link').addEventListener('click', function(event) {
    event.preventDefault();

    var imageContainer = document.querySelector('.image-container');
    var centeredImage = document.getElementById('centered-image');
    var centeredList = document.getElementById('experience-list');

    var centeredImage = document.getElementById('centered-image');
    clearLists();
    // Mueve la imagen al margen izquierdo
   centeredImage.style.marginLeft = '-70%';

    // Muestra la lista centrada
    centeredList.classList.remove('hidden');
});

// script.js
document.getElementById('skills-link').addEventListener('click', function(event) {
    event.preventDefault();

    var imageContainer = document.querySelector('.image-container');
    var centeredImage = document.getElementById('centered-image');
    var centeredList = document.getElementById('skills-list');

    var centeredImage = document.getElementById('centered-image');
    clearLists();
    // Mueve la imagen al margen izquierdo
   centeredImage.style.marginLeft = '-70%';

    // Muestra la lista centrada
    centeredList.classList.remove('hidden');
});

document.getElementById('softwares-link').addEventListener('click', function(event) {
    event.preventDefault();

    var imageContainer = document.querySelector('.image-container');
    var centeredImage = document.getElementById('centered-image');
    var centeredList = document.getElementById('softwares-list');

    var centeredImage = document.getElementById('centered-image');
    clearLists();
    // Mueve la imagen al margen izquierdo
   centeredImage.style.marginLeft = '-70%';

    // Muestra la lista centrada
    centeredList.classList.remove('hidden');
});

document.getElementById('education-link').addEventListener('click', function(event) {
    event.preventDefault();

    var imageContainer = document.querySelector('.image-container');
    var centeredImage = document.getElementById('centered-image');
    var centeredList = document.getElementById('education-list');

    var centeredImage = document.getElementById('centered-image');
    clearLists();
    // Mueve la imagen al margen izquierdo
   centeredImage.style.marginLeft = '-70%';

    // Muestra la lista centrada
    centeredList.classList.remove('hidden');
});