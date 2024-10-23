// Abrir el modal
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

// Cerrar el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Seleccionamos el contenedor de las slides
const slideContainer = document.querySelector('.slides');

// Función para desplazar las imágenes
function autoSlide() {
    // Obtenemos el scroll actual y el ancho del contenedor
    const scrollPosition = slideContainer.scrollLeft;
    const slideWidth = slideContainer.clientWidth;

    // Movemos el scroll a la siguiente posición
    slideContainer.scrollLeft = scrollPosition + slideWidth;

    // Si llegamos al final del contenedor, volvemos al inicio
    if (slideContainer.scrollLeft + slideWidth >= slideContainer.scrollWidth) {
        slideContainer.scrollLeft = 0;
    }
}

// Establecemos un intervalo para cambiar de slide cada 3 segundos
setInterval(autoSlide, 3000);
