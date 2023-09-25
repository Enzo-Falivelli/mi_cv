// script.js

    function clearLists(){
        var centeredLists = document.getElementsByClassName('list');
        hideList(centeredLists);
    }

    function hideList(list){
        for(let i=0; i < list.length; i++){
            if(!list[i].classList.contains('hidden'))
                list[i].classList.add('hidden');
        }
    }

    function closeNav(){
        document.getElementById('menu').checked = false;
    }
  

    document.getElementById('experience-link').addEventListener('click', function(event) {
        event.preventDefault();
    
        var imageContainer = document.querySelector('.image-container');
        var centeredImage = document.getElementById('centered-image');
        var centeredList = document.getElementById('experience-list');
    
        var centeredImage = document.getElementById('centered-image');
        clearLists();
        closeNav();
        // Mueve la imagen al margen izquierdo
        if (window.innerWidth <= 768) 
        {
            centeredImage.style.display = 'none';
        }
        else
        {
        centeredImage.style.marginLeft = '-70%';
        }
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
        closeNav();
        if (window.innerWidth <= 768) 
        {
            centeredImage.style.display = 'none';
            

        }
        else
        {
        // Mueve la imagen al margen izquierdo
        centeredImage.style.marginLeft = '-70%';
        }
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
        closeNav();
        if (window.innerWidth <= 768) 
        {
            centeredImage.style.display = 'none';
            

        }
        else
        {
        // Mueve la imagen al margen izquierdo
        centeredImage.style.marginLeft = '-70%';
        }
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
        closeNav();
        if (window.innerWidth <= 768) 
        {
            centeredImage.style.display = 'none';
            

        }
        else
        {
        // Mueve la imagen al margen izquierdo
        centeredImage.style.marginLeft = '-70%';
        }
    
        // Muestra la lista centrada
        centeredList.classList.remove('hidden');
    });


    




