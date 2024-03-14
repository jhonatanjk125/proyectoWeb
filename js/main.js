function toggleMenu() {
  const menuToggle = document.querySelector(".toggle");
  const navigation = document.querySelector(".navigation");
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  darkModeToggle.classList.toggle("active");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

function toggleDarkMode() {
  console.log('executed')
  document.documentElement.classList.toggle('dark-theme');
  if (document.documentElement.classList.contains('dark-theme')) {
    document.querySelector('.dark-mode-toggle').classList.remove('bx-moon');
    document.querySelector('.dark-mode-toggle').classList.add('bx-sun');
  } else {
    document.querySelector('.dark-mode-toggle').classList.remove('bx-sun');
    document.querySelector('.dark-mode-toggle').classList.add('bx-moon');
  }
}