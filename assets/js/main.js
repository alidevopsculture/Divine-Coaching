
(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.hero-slider img');
    const heading = document.getElementById('hero-heading');
    const subtext = document.getElementById('hero-subtext');

    const slideContent = [
  {
    heading: "Learning Today,<br>Leading Tomorrow",
    subtext: "We are team of talented designers making websites with Bootstrap"
  },
  {
    heading: "Your Future Begins Here",
    subtext: "Join our expert-led courses and grow with confidence"
  },
  {
    heading: "Success is One Step Away",
    subtext: "Explore practical learning designed for achievers"
  },
  {
    heading: "Guidance That Transforms",
    subtext: "Get mentored by top educators with real-world experience"
  },
  {
    heading: "From Basics to Brilliance",
    subtext: "Structured curriculum for every stage of your learning journey"
  },
  {
    heading: "Crack Exams with Confidence",
    subtext: "Regular tests, performance tracking, and doubt sessions"
  },
  {
    heading: "Your Success, Our Commitment",
    subtext: "Join 1000+ students already excelling with Divine Coaching"
  }
];


    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });

      // Update heading and subtext
      heading.innerHTML = slideContent[index].heading;
      subtext.textContent = slideContent[index].subtext;
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    // Initial
    showSlide(currentSlide);
    setInterval(nextSlide, 2500);
  });


  document.addEventListener("DOMContentLoaded", function () {
    GLightbox({
      selector: '.glightbox',
      width: '90%',
      height: 'auto'
    });
  });


  document.getElementById("whatsapp-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop form from redirecting

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const formattedMessage =
      "* Admission Query*%0A%0A" +
      `*Name:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Email:* ${email}%0A` +
      `*Message:* ${message}`;

    const whatsappNumber = "919236581919"; // Include country code!
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${formattedMessage}`;

    window.open(whatsappURL, "_blank");
  });

  document.getElementById("my-action-form").addEventListener("submit", function(e) {
  e.preventDefault();
  // Do your WhatsApp redirect here
});

    document.getElementById("whatsappBtn").addEventListener("click", function (e) {
    e.preventDefault();

    const whatsappNumber = "919236581919";
    const message = "Hi, I’m interested in your courses at Divine Coaching Center!";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  });


  function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = src;
    lightbox.style.display = "flex";
  }

  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }



  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  const closeBtn = document.getElementById("popup-close");

  // Open Popup
  document.querySelectorAll(".popup-img").forEach(img => {
    img.addEventListener("click", () => {
      popupImg.src = img.src;
      popup.style.display = "flex";
    });
  });

  // Close Popup
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
    popupImg.src = "";
  });

  // Close on outside click
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
      popupImg.src = "";
    }
  });





  window.addEventListener("load", initSwiper);

})();