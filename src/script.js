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
// hamburger script
document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('mobileMenu').classList.toggle('hidden');

    var menuLinks = document.querySelector('.menu-links');
      menuLinks.classList.toggle('active');
      //target hamburger icon 
    var hamburgerIcon = document.getElementById('hamburgerIcon');
    var isOpen = menuLinks.classList.contains('active');

     // Change the icon based on the menu state
     hamburgerIcon.src = isOpen ? "/images/icon-close.svg" : '/images/icon-hamburger.svg';
});