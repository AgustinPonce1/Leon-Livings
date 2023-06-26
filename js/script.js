window.addEventListener("scroll", function() {
  var scrollPos = window.scrollY;
  var elementOffset = document.querySelector(".scroll-effect").offsetTop;
  var windowHeight = window.innerHeight;

  if (scrollPos > elementOffset - windowHeight + 200) {
    document.querySelector(".scroll-effect").classList.add("active");
  }
});

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