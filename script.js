document.addEventListener('DOMContentLoaded', function () {
  // =========================
  // Trending slider
  // =========================
  const row = document.querySelector('.trending-row');
  const prev = document.querySelector('.slider-control.prev');
  const next = document.querySelector('.slider-control.next');

  if (row && prev && next) {
    const cardWidth = 180;
    const gap = 32;
    const step = cardWidth + gap;

    prev.addEventListener('click', () => {
      row.scrollBy({ left: -step * 4, behavior: 'smooth' });
    });

    next.addEventListener('click', () => {
      row.scrollBy({ left: step * 4, behavior: 'smooth' });
    });
  }

  // =========================
  // FAQ accordion
  // =========================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;

    btn.addEventListener('click', () => {
      faqItems.forEach(i => {
        if (i !== item) i.classList.remove('active');
      });
      item.classList.toggle('active');
    });
  });

  // =========================
  // Language dropdown
  // =========================
  const langBtn = document.querySelector('.lang-btn');
  const langDropdown = document.querySelector('.lang-dropdown');
  const langLabel = document.querySelector('.lang-label');
  const langOptions = document.querySelectorAll('.lang-option');

  if (langBtn && langDropdown) {
    // Toggle dropdown on button click
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = langDropdown.classList.toggle('open');
      langBtn.setAttribute('aria-expanded', String(isOpen));
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!langDropdown.contains(e.target) && !langBtn.contains(e.target)) {
        langDropdown.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Handle option click
    langOptions.forEach((opt) => {
      opt.addEventListener('click', () => {
        langOptions.forEach(o => o.setAttribute('aria-selected', 'false'));
        opt.setAttribute('aria-selected', 'true');

        if (langLabel) {
          langLabel.textContent = opt.textContent.trim();
        }

        langDropdown.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Escape key closes dropdown
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        langDropdown.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
