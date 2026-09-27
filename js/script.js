/* =========================================================
   หาดทอง เฮอริเทจ โฮเทล — Custom JavaScript
   1) Highlight the current page's nav link automatically
   2) Validate + fake-submit the contact/booking form
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  // ---- 1) Active navbar link based on current page ----
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar-hthh .nav-link").forEach(function (link) {
    var linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // ---- 2) Contact form validation (Bootstrap custom validation) ----
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (form.checkValidity() === false) {
        form.classList.add("was-validated");
        return;
      }

      // Simulate a successful submission (no backend in this exercise)
      form.classList.add("was-validated");
      document.getElementById("successAlert").classList.remove("d-none");
      form.reset();
      form.classList.remove("was-validated");
    });
  }

});
