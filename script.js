// script.js

    function clearLists() /*Oculta todas las listas*/
        { 
        var centeredLists = document.getElementsByClassName('list');
        hideList(centeredLists);
        }

    function hideList(list) /*Agrega todas las listas que sean de la clase hidden */
        {
        for(let i=0; i < list.length; i++){
            if(!list[i].classList.contains('hidden'))
                list[i].classList.add('hidden');
        }
    }

    function closeNav() /*Deselecciona el menu hamburguesa*/
    {
        document.getElementById('menu').checked = false;
    }
  
        document.getElementById('experience-link').addEventListener('click', function(event) {
        var centeredImage = document.getElementById('centered-image');
        var centeredList = document.getElementById('experience-list');
        clearLists();
        closeNav();

        if (window.innerWidth <= 768) 
        {
            // Si esta en mobile oculta la imagen
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

    document.getElementById('skills-link').addEventListener('click', function(event) {    
        var centeredImage = document.getElementById('centered-image');
        var centeredList = document.getElementById('skills-list');
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
        var centeredImage = document.getElementById('centered-image');
        var centeredList = document.getElementById('softwares-list');
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
        var centeredImage = document.getElementById('centered-image');
        var centeredList = document.getElementById('education-list');
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


    




