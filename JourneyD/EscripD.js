function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
function scrollCarousel(id, direction) {
  const carousel = document.getElementById(id);
  const scrollAmount = 220;
  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}
