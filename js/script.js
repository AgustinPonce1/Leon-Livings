  // EFECTO AL BAJAR PAGINA PRINCIPAL //

window.addEventListener("scroll", function() {
  var scrollPos = window.scrollY;
  var elementOffset = document.querySelector(".scroll-effect").offsetTop;
  var windowHeight = window.innerHeight;

  if (scrollPos > elementOffset - windowHeight + 200) {
    document.querySelector(".scroll-effect").classList.add("active");
  }
});


// CARRUSEL PAGINA PRINCIPAL //

const slideItems = document.querySelectorAll('.slide-item');
const slideControls = document.querySelectorAll('.slide-control');
let currentIndex = 0;
const intervalTime = 3000; // Cambiar la imagen cada 3 segundos (3000 milisegundos)
let slideInterval;

function iniciarCarrusel() {
  slideInterval = setInterval(siguienteSlide, intervalTime);
}

function siguienteSlide() {
  currentIndex = (currentIndex + 1) % slideItems.length;
  mostrarSlide();
}

function mostrarSlide() {
  slideItems.forEach((item, index) => {
    if (index === currentIndex) {
      item.style.opacity = 1;
    } else {
      item.style.opacity = 0;
    }
  });
}

slideControls.forEach(control => {
  control.addEventListener('click', () => {
    clearInterval(slideInterval); // Detener el intervalo cuando se hace clic en un control
    setTimeout(iniciarCarrusel, intervalTime); // Reiniciar el intervalo después de 3 segundos
  });
});

mostrarSlide(); // Mostrar el primer slide al cargar la página
iniciarCarrusel(); // Iniciar el carrusel automáticamente


// REDIGIR PAGINA LOCALES //

function redirigir() {
    window.location.href = "https://www.google.com.ar/maps/place/Cdad.+Jardin+Lomas+de+Palomar,+Provincia+de+Buenos+Aires/@-34.6046688,-58.6045142,13.5z/data=!4m6!3m5!1s0x95bcb9ab4a5771b3:0x690cbb88f054e680!8m2!3d-34.5962102!4d-58.5913678!16s%2Fm%2F03hmlh0?entry=ttu"; 
}

function redirigir2() {
    window.location.href = "https://www.google.com.ar/maps/place/Cdad.+Jardin+Lomas+de+Palomar,+Provincia+de+Buenos+Aires/@-34.6046688,-58.6045142,13.5z/data=!4m6!3m5!1s0x95bcb9ab4a5771b3:0x690cbb88f054e680!8m2!3d-34.5962102!4d-58.5913678!16s%2Fm%2F03hmlh0?entry=ttu"; 
}
