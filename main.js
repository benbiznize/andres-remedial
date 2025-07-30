// Auto-update footer year
document.addEventListener('DOMContentLoaded', () => {
  // Existing hamburger menu logic
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
});
