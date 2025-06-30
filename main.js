// Toggle nav on mobile
const menuToggle = document.getElementById("menu-toggle");
if (menuToggle) {
  menuToggle.addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("show");
  });
}

// Highlight active page
document.querySelectorAll(".nav-link").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// Handle form submission
const growvyForm = document.getElementById("growvyForm");
if (growvyForm) {
  growvyForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append("companyname", document.getElementById("companyname").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("city", document.getElementById("city").value);
    formData.append("comment", document.getElementById("comment").value);

    fetch("https://script.google.com/macros/s/AKfycbzeztRDhiLwShwPTRIdtf8aMnUfAd0t2fL7v6Klsx2EdKSQzPl2lxTYYKd2Zl-EC0Ho/exec", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString()
    })
      .then(res => res.text())
      .then(response => {
        document.getElementById("growvyForm").style.display = "none";
        document.getElementById("success-section").style.display = "block";
      })
      .catch(error => {
        alert("Error! Please try again.");
        console.error(error);
      });
  });
}

// Slider functionality
document.addEventListener('DOMContentLoaded', function () {
  function initializeSlider() {
    const sliderContainer = document.querySelector('.slider-container');
    if (!sliderContainer) {
      console.log('No slider-container found on this page, skipping slider initialization');
      return;
    }

    const slides = document.querySelector('.slider');
    const dots = document.querySelectorAll('.dot');
    let slideIndex = 0;

    if (!slides || dots.length === 0) {
      console.error('Slider initialization failed: .slider or .dot elements not found');
      console.log('Retrying in 500ms...');
      setTimeout(initializeSlider, 500);
      return;
    }

    console.log(`Found ${dots.length} dots and slider element`);

    function currentSlide(n) {
      if (n >= 0 && n < dots.length) {
        slideIndex = n;
        updateSlider();
      }
    }

    function updateSlider() {
      slides.style.transform = `translateX(-${slideIndex * 100}%)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === slideIndex);
      });
    }

    // Initialize the slider
    updateSlider();

    // Add click event listeners to dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        console.log(`Dot ${index} clicked, moving to slide ${index}`);
        currentSlide(index);
      });
    });
  }

  // Initial attempt to initialize slider
  initializeSlider();
});