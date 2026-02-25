// Sidequest Landing Page

// Benefits carousel navigation
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.benefits-track');
  const prevBtn = document.querySelector('.benefits-nav__prev');
  const nextBtn = document.querySelector('.benefits-nav__next');

  if (track && prevBtn && nextBtn) {
    const cards = track.querySelectorAll('.benefit-card');
    const cardCount = cards.length;
    let currentIndex = 0;
    let animationId = null;

    // Ease-in-out cubic for satisfying acceleration/deceleration
    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function getCardOffset(index) {
      if (index < 0 || index >= cardCount) return 0;
      return cards[index].offsetLeft - track.offsetLeft;
    }

    // Initialize scroll to card 0
    track.scrollLeft = getCardOffset(0);

    function animateScroll(to, duration) {
      if (animationId) cancelAnimationFrame(animationId);
      var from = track.scrollLeft;
      var start = performance.now();
      var distance = to - from;

      function step(now) {
        var elapsed = now - start;
        var progress = Math.min(elapsed / duration, 1);
        var eased = easeInOutCubic(progress);
        track.scrollLeft = from + distance * eased;

        if (progress < 1) {
          animationId = requestAnimationFrame(step);
        } else {
          track.scrollLeft = to;
          animationId = null;
        }
      }

      animationId = requestAnimationFrame(step);
    }

    function goTo(index) {
      currentIndex = index;
      animateScroll(getCardOffset(currentIndex), 500);
    }

    nextBtn.addEventListener('click', () => {
      var next = currentIndex + 1;
      goTo(next >= cardCount ? 0 : next);
    });

    prevBtn.addEventListener('click', () => {
      var prev = currentIndex - 1;
      goTo(prev < 0 ? cardCount - 1 : prev);
    });
  }

  // Navbar: hide after scrolling past hero
  const nav = document.querySelector('.nav');
  const hero = document.querySelector('.hero');

  if (nav && hero) {
    window.addEventListener('scroll', () => {
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      if (window.scrollY > heroBottom - 100) {
        nav.classList.add('nav--hidden');
      } else {
        nav.classList.remove('nav--hidden');
      }
    });
  }

  // Contact form AJAX submission
  const contactForm = document.querySelector('.contact__form');
  const confirmation = document.getElementById('formConfirmation');

  if (contactForm && confirmation) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const submitBtn = contactForm.querySelector('.contact__submit');

      submitBtn.disabled = true;
      submitBtn.querySelector('.blob-btn__text').textContent = 'Sending...';

      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      .then(response => {
        if (response.ok) {
          contactForm.reset();
          confirmation.classList.add('is-visible');
          // Force reflow for animation
          requestAnimationFrame(() => {
            confirmation.style.opacity = '1';
            confirmation.style.transform = 'translateY(0)';
          });
        } else {
          alert('Something went wrong. Please try again.');
        }
      })
      .catch(() => {
        alert('Something went wrong. Please try again.');
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.querySelector('.blob-btn__text').textContent = 'Send a message';
      });
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item__trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq-item');
      const isOpen = item.classList.contains('is-open');

      // Close all items first (single-open accordion)
      document.querySelectorAll('.faq-item.is-open').forEach(openItem => {
        openItem.classList.remove('is-open');
        openItem.querySelector('.faq-item__trigger').setAttribute('aria-expanded', 'false');
      });

      // Toggle clicked item
      if (!isOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
