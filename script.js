// Efecto de aparición suave (fade-in) al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
        // Efecto fade-in
        setTimeout(() => {
            mainContent.classList.add('visible');
        }, 200); // Retraso para que el efecto sea más notorio
    }

    // Efecto de scroll suave para los enlaces de navegación
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Evita el comportamiento por defecto del enlace
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Añadir animación de clic a los botones de llamada a la acción (CTA)
    const buttons = document.querySelectorAll('.cta button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('clicked');
            setTimeout(() => {
                button.classList.remove('clicked');
            }, 200); // Retorna el botón a su estado original después de 200ms
        });
    });

    // Movimiento en los iconos sociales al hacer hover
    const socialIcons = document.querySelectorAll('.social-icons a');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.classList.add('animated');
        });
        icon.addEventListener('mouseleave', () => {
            icon.classList.remove('animated');
        });
    });

    // Mostrar el menú desplegable al hacer clic en el botón de Gmail
    const gmailButton = document.getElementById('gmailButton');
    const gmailDropdown = document.getElementById('gmailDropdown');
    if (gmailButton && gmailDropdown) {
        gmailButton.addEventListener('click', () => {
            gmailDropdown.style.display = gmailDropdown.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Función para copiar el email al portapapeles
    const copyEmailButton = document.getElementById('copyEmailButton');
    const copyMessage = document.getElementById('copyMessage');
    if (copyEmailButton && copyMessage) {
        const emailText = document.getElementById('emailText').textContent;
        copyEmailButton.addEventListener('click', () => {
            navigator.clipboard.writeText(emailText).then(() => {
                // Muestra el mensaje de copia
                copyMessage.style.display = 'block';
                copyMessage.style.opacity = '1'; // Aumenta la opacidad
                setTimeout(() => {
                    copyMessage.style.opacity = '0'; // Disminuye la opacidad
                    copyMessage.style.display = 'none'; // Oculta después de disminuir opacidad
                }, 2000); // Mantiene el mensaje visible por 2 segundos

                // Oculta el menú después de copiar
                gmailDropdown.style.display = 'none';
            }).catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
        });
    }

    // Mostrar currículum al hacer clic en el botón
    const curriculumButton = document.getElementById('curriculumButton');
    const curriculumPreview = document.getElementById('curriculumPreview');
    const overlay = document.getElementById('overlay');

    if (curriculumButton && curriculumPreview && overlay) {
        curriculumButton.onclick = function () {
            overlay.style.display = 'block';
            curriculumPreview.style.display = 'block';
        };

        // Cerrar currículum al hacer clic en el overlay
        overlay.onclick = function () {
            overlay.style.display = 'none'; // Ocultar overlay
            curriculumPreview.style.display = 'none'; // Ocultar vista previa del currículum
        };
    }

    // Función para abrir la previsualización de la imagen seleccionada
    function openImagePreview(image) {
        const preview = document.getElementById("imagePreview");
        const previewImg = document.getElementById("previewImage");
        if (preview && previewImg) {
            previewImg.src = image.src; // Asignar la imagen seleccionada al contenedor de previsualización
            preview.style.display = "block"; // Mostrar la previsualización
        }
    }

    // Asignar la función de previsualización a las imágenes
    const thumbnails = document.querySelectorAll('.image-gallery .thumbnail');
    thumbnails.forEach(image => {
        image.onclick = function () {
            openImagePreview(image);
        };
    });

    // Función para cerrar la previsualización de la imagen
    const closeImageButton = document.getElementById("closeImageButton");
    if (closeImageButton) {
        closeImageButton.onclick = function () {
            const preview = document.getElementById("imagePreview");
            if (preview) {
                preview.style.display = "none"; // Ocultar la previsualización
            }
        };
    }
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) { // Si el scroll es mayor a 50 píxeles
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
});

