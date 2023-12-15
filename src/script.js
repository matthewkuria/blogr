// JavaScript to toggle the visibility of dropdown content
document.addEventListener("DOMContentLoaded", function() {
  var dropdownBtns = document.querySelectorAll(".dropdown-btn");

  dropdownBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  });
  //   Close the dropdown menu
document.documentElement.addEventListener("click", function () {
    if (dropdownMenu.classList.contains("show")) {
      toggleDropdown();
    }
  });
});




document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('mobileMenu').classList.toggle('hidden');
});