  // EFECTO AL BAJAR PAGINA PRINCIPAL //

window.addEventListener("scroll", function() {
  var scrollPos = window.scrollY;
  var elementOffset = document.querySelector(".scroll-effect").offsetTop;
  var windowHeight = window.innerHeight;

  if (scrollPos > elementOffset - windowHeight + 200) {
    document.querySelector(".scroll-effect").classList.add("active");
  }
});



// REDIGIR PAGINA LOCALES //

function redirigir() {
    window.location.href = "https://www.google.com.ar/maps/place/Cdad.+Jardin+Lomas+de+Palomar,+Provincia+de+Buenos+Aires/@-34.6046688,-58.6045142,13.5z/data=!4m6!3m5!1s0x95bcb9ab4a5771b3:0x690cbb88f054e680!8m2!3d-34.5962102!4d-58.5913678!16s%2Fm%2F03hmlh0?entry=ttu"; 
}

function redirigir2() {
    window.location.href = "https://www.google.com.ar/maps/place/Cdad.+Jardin+Lomas+de+Palomar,+Provincia+de+Buenos+Aires/@-34.6046688,-58.6045142,13.5z/data=!4m6!3m5!1s0x95bcb9ab4a5771b3:0x690cbb88f054e680!8m2!3d-34.5962102!4d-58.5913678!16s%2Fm%2F03hmlh0?entry=ttu"; 
}




/* SISTEMA DE MENU HAMBURGESA */

document.addEventListener("DOMContentLoaded", function() {
  var menuIcon = document.querySelector(".menu-icon");
  var header = document.getElementById("main-header");

  menuIcon.addEventListener("click", function() {
      header.classList.toggle("show-nav");
  });

  window.addEventListener("resize", function() {
      if (window.innerWidth > 950) {
          header.classList.remove("show-nav");
      }
  });
});




/* DROPDOWN-CONTENT DEL MENU HAMBURGESA */

document.addEventListener('DOMContentLoaded', function () {
  var dropbtn = document.querySelector('.dropbtn');
  var dropdown = document.querySelector('.dropdown');
  var dropdownContent = document.querySelector('.dropdown-content');

  dropbtn.addEventListener('click', function () {
    dropdown.classList.toggle('active');
    dropdownContent.style.display = dropdown.classList.contains('active') ? 'block' : 'none';
  });
});




