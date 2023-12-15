// target the dropdown buttons, dropdown and arrow
const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
  };

//   add an eventlistener for the button
dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
  });

document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('mobileMenu').classList.toggle('hidden');
});