function toggleMenu() {
  const menuToggle = document.querySelector(".toggle");
  const navigation = document.querySelector(".navigation");
  const darkModeToggle = document.querySelector(".dark-mode-toggle");
  darkModeToggle.classList.toggle("active");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
  if (menuToggle.classList.contains("active")) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}

function toggleDarkMode(element) {
  const htmlElement = document.documentElement;
  htmlElement.classList.toggle("dark-theme");
  const darkModeToggles = document.querySelectorAll(".dark-mode-toggle");
  if (htmlElement.classList.contains("dark-theme")) {
    darkModeToggles.forEach(function (darkModeToggle) {
      darkModeToggle.classList.replace("bx-moon", "bx-sun");
    });
  } else {
    darkModeToggles.forEach(function (darkModeToggle) {
      darkModeToggle.classList.replace("bx-sun", "bx-moon");
    });
  }
  // Store the user preference in localStorage
  const darkModeEnabled = htmlElement.classList.contains("dark-theme");
  localStorage.setItem("darkMode", darkModeEnabled);
}
// Function to check and apply user preference on page load
function applyUserPreference() {
  const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
  const htmlElement = document.documentElement;
  const darkModeToggles = document.querySelectorAll(".dark-mode-toggle");
  if (darkModeEnabled) {
      htmlElement.classList.add('dark-theme');
      darkModeToggles.forEach(function (darkModeToggle) {
        darkModeToggle.classList.replace("bx-moon", "bx-sun");
      });

  } else {
      htmlElement.classList.remove('dark-theme');
  }
}

// Call applyUserPreference function on page load
document.addEventListener('DOMContentLoaded', function() {
  applyUserPreference();
});