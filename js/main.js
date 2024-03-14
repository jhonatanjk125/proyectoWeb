function toggleMenu() {
  const menuToggle = document.querySelector(".toggle");
  const navigation = document.querySelector(".navigation");
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  darkModeToggle.classList.toggle("active");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

document.getElementById('dark-mode-toggle').addEventListener('click', function() {
  document.documentElement.classList.toggle('dark-theme');
  if (document.documentElement.classList.contains('dark-theme')) {
    document.getElementById('dark-mode-toggle').classList.remove('bx-moon');
    document.getElementById('dark-mode-toggle').classList.add('bx-sun');
  } else {
    document.getElementById('dark-mode-toggle').classList.remove('bx-sun');
    document.getElementById('dark-mode-toggle').classList.add('bx-moon');
  }
});