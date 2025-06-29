
// Toggle nav on mobile
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("show");
});

// Highlight active page
document.querySelectorAll(".nav-link").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

document.getElementById("growvyForm").addEventListener("submit", function (e) {
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
    // Hide the form
    document.getElementById("growvyForm").style.display = "none";

    // Show success section
    document.getElementById("success-section").style.display = "block";
  })
  .catch(error => {
    alert("Error! Please try again.");
    console.error(error);
  });
});








