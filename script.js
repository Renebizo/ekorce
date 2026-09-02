const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
const currentYear = document.getElementById('year');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

document.querySelectorAll('.team-card img').forEach((photo) => {
  const card = photo.closest('.team-card');

  const playPhotoEffect = () => {
    card.classList.remove('photo-active');
    void card.offsetWidth;
    card.classList.add('photo-active');

    window.setTimeout(() => {
      card.classList.remove('photo-active');
    }, 650);
  };

  photo.setAttribute('role', 'button');
  photo.setAttribute('tabindex', '0');
  photo.setAttribute('aria-label', `Voir l'effet sur la photo de ${photo.alt}`);
  photo.addEventListener('click', playPhotoEffect);
  photo.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      playPhotoEffect();
    }
  });
});
