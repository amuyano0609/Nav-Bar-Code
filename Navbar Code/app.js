const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

// Show/hide dropdown menus on hover for smaller screens
document.querySelectorAll('.links > li').forEach(item => {
  item.addEventListener('mouseover', function (e) {
    if (window.innerWidth <= 800 && e.target.nextElementSibling && e.target.nextElementSibling.classList.contains('dropdown')) {
      // Toggle the dropdown visibility
      e.target.nextElementSibling.classList.toggle('show-dropdown');
    }
  });

  // Close dropdown when not hovering
  item.addEventListener('mouseout', function (e) {
    if (window.innerWidth <= 800 && e.target.nextElementSibling && e.target.nextElementSibling.classList.contains('dropdown')) {
      e.target.nextElementSibling.classList.remove('show-dropdown');
    }
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', function (e) {
  if (!e.target.closest('.links') && window.innerWidth <= 800) {
    document.querySelectorAll('.links .dropdown').forEach(dropdown => {
      dropdown.classList.remove('show-dropdown');
    });
  }
});

// Close dropdowns when resizing
window.addEventListener('resize', function () {
  if (window.innerWidth > 800) {
    document.querySelectorAll('.links .dropdown').forEach(dropdown => {
      dropdown.classList.remove('show-dropdown');
    });
  }
});
