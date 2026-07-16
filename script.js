(() => {
  const sliders = document.querySelectorAll('[data-slider]');
  sliders.forEach((slider) => {
    const slides = [...slider.querySelectorAll('.slide-card')];
    const dots = slider.nextElementSibling;
    if (!dots || !dots.classList.contains('slider-dots')) return;

    slides.forEach((_, index) => {
      const dot = document.createElement('span');
      if (index === 0) dot.classList.add('active');
      dots.appendChild(dot);
    });

    const update = () => {
      const sliderLeft = slider.getBoundingClientRect().left;
      let activeIndex = 0;
      let best = Infinity;
      slides.forEach((slide, index) => {
        const distance = Math.abs(slide.getBoundingClientRect().left - sliderLeft);
        if (distance < best) {
          best = distance;
          activeIndex = index;
        }
      });
      [...dots.children].forEach((dot, index) => dot.classList.toggle('active', index === activeIndex));
    };

    slider.addEventListener('scroll', () => window.requestAnimationFrame(update), { passive: true });
    window.addEventListener('resize', update);
  });

  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  const lightboxImage = lightbox.querySelector('img');
  const close = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.src = '';
  };

  document.querySelectorAll('.slide-card').forEach((button) => {
    button.addEventListener('click', () => {
      lightboxImage.src = button.dataset.full || button.querySelector('img')?.src || '';
      lightboxImage.alt = button.querySelector('img')?.alt || '';
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox || event.target.classList.contains('lightbox-close')) close();
  });
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
})();
