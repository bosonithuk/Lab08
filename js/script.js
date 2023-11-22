// const burger = document.querySelector("[data-burger]");
// const nav = document.querySelector("[data-nav]");

// burger.addEventListener("click", () => {
//   burger.classList.toggle("burger--active");
//   nav.classList.toggle("nav--visible");
// });

const burger = document.querySelector("[data-burger]");
const nav = document.querySelector("[data-nav]");
const navLinks = nav.querySelectorAll("a");

function closeMenu() {
  burger.classList.remove("burger--active");
  nav.classList.remove("nav--visible");
}

burger.addEventListener("click", () => {
  burger.classList.toggle("burger--active");
  nav.classList.toggle("nav--visible");
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
      closeMenu();
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});



document.getElementById("myText").addEventListener("click", function() {
  // Перевірка наявності класу
  if (this.classList.contains("freeze-hover")) {
      // Якщо клас є, видаляємо його
      this.classList.remove("freeze-hover");
  } else {
      // Якщо класу немає, додаємо його
      this.classList.add("freeze-hover");
  }
});

document.getElementById("myTextSecond").addEventListener("click", function() {
  // Перевірка наявності класу
  if (this.classList.contains("freeze-hover")) {
      // Якщо клас є, видаляємо його
      this.classList.remove("freeze-hover");
  } else {
      // Якщо класу немає, додаємо його
      this.classList.add("freeze-hover");
  }
});


document.getElementById("myTextPro").addEventListener("click", function() {
  // Перевірка наявності класу
  if (this.classList.contains("freeze-hover")) {
      // Якщо клас є, видаляємо його
      this.classList.remove("freeze-hover");
  } else {
      // Якщо класу немає, додаємо його
      this.classList.add("freeze-hover");
  }
});


// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 5,
//       spaceBetween: 50,
//     },
//   },
// });

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   var visibleSlides = 3; // Кількість видимих слайдів

//   if (n > slides.length) {
//     slideIndex = visibleSlides;
//   }
//   if (n < 1) {
//     slideIndex = slides.length - (visibleSlides - 1);
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }

//   for (i = slideIndex; i < slideIndex + visibleSlides; i++) {
//     slides[i - 1].style.display = "block";
//   }
//   for (i = slideIndex; i < slideIndex + visibleSlides; i++) {
//     dots[i - 1].className += " active";
//   }
// }
