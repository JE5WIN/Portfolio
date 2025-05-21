// In your toggleDarkMode() function, also toggle navbar/card classes:
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  document.getElementById("mainNavbar").classList.toggle("navbar-dark");
  document.getElementById("mainNavbar").classList.toggle("bg-dark");
  document.querySelectorAll('.card').forEach(card => {
    card.classList.toggle('bg-dark');
    card.classList.toggle('text-white');
  });
  // ...your previous code for button and localStorage
}
