// Sidequest Landing Page

// ===== i18n Translations =====
var currentLang = 'en';

var translations = {
  en: {
    // Nav
    'nav.offers': 'What we offer',
    'nav.benefits': 'Benefits',
    'nav.testimonials': 'Testimonials',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.cta': 'Get in touch',

    // Hero
    'hero.title': 'Games built for',
    'hero.cube1': 'learning',
    'hero.cube2': 'engagement',
    'hero.cube3': 'fun',
    'hero.cube4': 'impact',
    'hero.tryMe': 'try me!',
    'hero.subtitle': 'Playful by design, serious in impact',
    'hero.ctaText': 'Schedule a 15-minute call',
    'hero.schedule': 'Schedule',

    // Offers
    'offers.tag': 'What we offer',
    'offers.title': 'The way<br class="mobile-br"> we <em>should</em> learn<br class="mobile-br"> in the first place',
    'offers.card1.title': 'Gamified workshops',
    'offers.card1.desc': 'We turn business frameworks into interactive sessions that people actually remember.',
    'offers.card1.sessionName': 'Strategy Game Session',
    'offers.card1.sessionTime': '2:00 – 4:00 PM',
    'offers.card1.sessionLabel': 'Innovation Workshop',
    'offers.card1.tooltip': 'See our Scrum workshop',
    'offers.card2.title': 'Tailor-made games',
    'offers.card2.desc': 'Your challenges, turned into play. Custom-designed for your team and goals.',
    'offers.card2.briefName': 'Your Brief',
    'offers.card3.title': 'Games for at home',
    'offers.card3.desc': 'Games with a purpose, designed for playful learning at home.',

    // Origin
    'origin.p1': 'Sidequest has its origins in 2019, when founder Jeroen used games during his master\'s studies to make complex sustainability challenges easier to understand.',
    'origin.p2': 'What started as a passion for creating fun games then evolved into a new approach to learning.',

    // Benefits
    'benefits.tag': 'Benefits',
    'benefits.title': 'You\'ll never want to <em>go back</em>',
    'benefits.subtitle': 'Sidequest replaces passive training with interactive experiences. So engaging, you won\'t want it any other way.',
    'benefits.b1.tag': 'Hands-on',
    'benefits.b1.title': 'Learning by doing',
    'benefits.b1.desc': 'No boring slides, just hands-on experiences. It\'s how we\'re naturally wired to learn.',
    'benefits.b2.tag': 'Collaboration',
    'benefits.b2.title': 'Team bonding',
    'benefits.b2.desc': 'Most of our games are played in teams, bringing people together.',
    'benefits.b3.tag': 'Made for all',
    'benefits.b3.title': 'Fun',
    'benefits.b3.desc': 'Designed to be enjoyable for everyone, from gamers to non-gamers.',
    'benefits.b4.tag': 'Experiment',
    'benefits.b4.title': 'Safe space to fail',
    'benefits.b4.desc': 'Fail fast. Learn faster.',
    'benefits.b5.tag': 'Aha moments',
    'benefits.b5.title': 'Insights that stick',
    'benefits.b5.desc': 'True insight comes from experience.',
    'benefits.b6.tag': 'Walk in their shoes',
    'benefits.b6.title': 'Empathy',
    'benefits.b6.desc': 'By role-playing different characters, players learn to see the world through someone else\'s eyes.',

    // Testimonials
    'testimonials.tag': 'Testimonials',
    'testimonials.title': '<span class="mobile-block">What our</span> <em>clients</em> say',
    'testimonials.subtitle': 'Don\'t just take our word for it. Here\'s what people have to say after playing our games.',
    'testimonials.t1.quote': '\u201CPlaying their game was fun and insightful. I would recommend it to any team.\u201D',
    'testimonials.t1.role': 'Data Analyst',
    'testimonials.t2.quote': '\u201CSidequest their Scrum workshop was really memorable. It brought real-life examples to life in a playful and engaging way.\u201D',
    'testimonials.t2.role': 'Product Owner',
    'testimonials.t3.quote': '\u201CWe were still talking about the Scrum workshop hours later. It was not only fun, but genuinely insightful. The whole team was engaged from start to finish.\u201D',
    'testimonials.t3.role': 'Marketing Manager',
    'testimonials.t4.company': 'You?',

    // FAQ
    'faq.title': 'Your questions <em>answered</em>',
    'faq.q1': 'What kind of games does Sidequest make?',
    'faq.a1': 'We create board games, card games, digital games, hybrids (with both physical and digital components), and interactive workshop formats. Everything is designed around a specific learning goal, from sustainability and strategy to team collaboration and onboarding.',
    'faq.q2': 'How long does a typical workshop take?',
    'faq.a2': 'Most workshops run between 2 and 4 hours, depending on the topic and group size. We also offer shorter 90-minute formats for team energizers or conference sessions.',
    'faq.q3': 'Can you create a custom game for our organization?',
    'faq.a3': 'Absolutely. Tailor-made games are one of our specialties. We work closely with you to understand your challenges, then design a game that fits your content, audience, and goals.',
    'faq.q4': 'Do participants need to be \u201Cgamers\u201D to enjoy this?',
    'faq.a4': 'Not at all. Our games are designed to be accessible and fun for everyone, from complete non-gamers to seasoned board game enthusiasts. The rules are simple, the experience is intuitive.',
    'faq.q5': 'How do I get started?',
    'faq.a5': 'Schedule a free 15-minute call with founder Jeroen. We\'ll discuss your goals, explore which format fits best, and outline next steps. No commitment required.',
    'faq.cta': 'Can\'t find what you\'re looking for? <a href="#contact" class="faq-cta__link">Get in touch</a>',

    // Contact
    'contact.title': 'Let\'s create something <em>playful</em> together',
    'contact.emailLabel': 'Mail us at',
    'contact.or': 'OR',
    'contact.formTitle': 'Let\'s talk!',
    'contact.formSub': 'Leave us a brief message',
    'contact.nameLabel': 'Your name',
    'contact.namePlaceholder': 'Your name',
    'contact.emailFieldLabel': 'Email',
    'contact.emailPlaceholder': 'Email',
    'contact.messageLabel': 'Your message',
    'contact.messagePlaceholder': 'Tell us about your project or idea...',
    'contact.checkTitle': 'I\'m interested in...',
    'contact.check1': 'Gamified workshop',
    'contact.check2': 'Custom game',
    'contact.check3': 'Home game',
    'contact.check4': 'Team building',
    'contact.check5': 'Keynote / Talk',
    'contact.check6': 'Something else',
    'contact.submit': 'Send a message',
    'contact.sending': 'Sending...',
    'contact.confirmation': 'Your message has been sent!'
  },
  nl: {
    // Nav
    'nav.offers': 'Wat we bieden',
    'nav.benefits': 'Voordelen',
    'nav.testimonials': 'Referenties',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.cta': 'Contact',

    // Hero
    'hero.title': 'Games gemaakt voor',
    'hero.cube1': 'leren',
    'hero.cube2': 'betrokkenheid',
    'hero.cube3': 'plezier',
    'hero.cube4': 'impact',
    'hero.tryMe': 'probeer!',
    'hero.subtitle': 'Speels ontworpen, serieus in impact',
    'hero.ctaText': 'Plan een gesprek van 15 minuten',
    'hero.schedule': 'Plannen',

    // Offers
    'offers.tag': 'Wat we bieden',
    'offers.title': 'De manier<br class="mobile-br"> waarop we <em>zouden moeten</em> leren',
    'offers.card1.title': 'Gegamificeerde workshops',
    'offers.card1.desc': 'Wij maken van zakelijke frameworks interactieve sessies die mensen echt onthouden.',
    'offers.card1.sessionName': 'Strategie Game Sessie',
    'offers.card1.sessionTime': '14:00 – 16:00',
    'offers.card1.sessionLabel': 'Innovatie Workshop',
    'offers.card1.tooltip': 'Bekijk onze Scrum workshop',
    'offers.card2.title': 'Maatwerkgames',
    'offers.card2.desc': 'Jouw uitdagingen, omgezet in spel. Op maat ontworpen voor jouw team en doelen.',
    'offers.card2.briefName': 'Jouw Briefing',
    'offers.card3.title': 'Games voor thuis',
    'offers.card3.desc': 'Games met een doel, ontworpen voor speels leren thuis.',

    // Origin
    'origin.p1': 'Sidequest vindt zijn oorsprong in 2019, toen oprichter Jeroen tijdens zijn masterstudie games gebruikte om complexe duurzaamheidsvraagstukken makkelijker te begrijpen.',
    'origin.p2': 'Wat begon als een passie voor het maken van leuke games, groeide uit tot een nieuwe manier van leren.',

    // Benefits
    'benefits.tag': 'Voordelen',
    'benefits.title': 'Je wilt nooit meer <em>terug</em>',
    'benefits.subtitle': 'Sidequest vervangt passieve trainingen door interactieve ervaringen. Zo boeiend dat je het niet anders meer wilt.',
    'benefits.b1.tag': 'Hands-on',
    'benefits.b1.title': 'Leren door te doen',
    'benefits.b1.desc': 'Geen saaie slides, gewoon hands-on ervaringen. Zo zijn we van nature bedraad om te leren.',
    'benefits.b2.tag': 'Samenwerking',
    'benefits.b2.title': 'Teamversterking',
    'benefits.b2.desc': 'De meeste van onze games worden in teams gespeeld en brengen mensen samen.',
    'benefits.b3.tag': 'Voor iedereen',
    'benefits.b3.title': 'Plezier',
    'benefits.b3.desc': 'Ontworpen om leuk te zijn voor iedereen, van gamers tot niet-gamers.',
    'benefits.b4.tag': 'Experimenteer',
    'benefits.b4.title': 'Veilig falen',
    'benefits.b4.desc': 'Faal snel. Leer sneller.',
    'benefits.b5.tag': 'Aha-momenten',
    'benefits.b5.title': 'Inzichten die beklijven',
    'benefits.b5.desc': 'Echt inzicht komt van ervaring.',
    'benefits.b6.tag': 'In hun schoenen',
    'benefits.b6.title': 'Empathie',
    'benefits.b6.desc': 'Door verschillende personages te spelen leren spelers de wereld door de ogen van een ander te zien.',

    // Testimonials
    'testimonials.tag': 'Referenties',
    'testimonials.title': '<span class="mobile-block">Wat onze</span> <em>klanten</em> zeggen',
    'testimonials.subtitle': 'Geloof ons niet zomaar op ons woord. Dit is wat mensen zeggen na het spelen van onze games.',
    'testimonials.t1.quote': '\u201CHun game spelen was leuk en leerzaam. Ik zou het elk team aanraden.\u201D',
    'testimonials.t1.role': 'Data Analist',
    'testimonials.t2.quote': '\u201CDe Scrum-workshop van Sidequest was echt memorabel. Het bracht praktijkvoorbeelden tot leven op een speelse en boeiende manier.\u201D',
    'testimonials.t2.role': 'Product Owner',
    'testimonials.t3.quote': '\u201CWe hadden het uren later nog steeds over de Scrum-workshop. Het was niet alleen leuk, maar echt inzichtelijk. Het hele team was van begin tot eind betrokken.\u201D',
    'testimonials.t3.role': 'Marketing Manager',
    'testimonials.t4.company': 'Jij?',

    // FAQ
    'faq.title': 'Jouw vragen <em>beantwoord</em>',
    'faq.q1': 'Wat voor soort games maakt Sidequest?',
    'faq.a1': 'We maken bordspellen, kaartspellen, digitale games, hybride spellen (met zowel fysieke als digitale onderdelen) en interactieve workshopformats. Alles is ontworpen rond een specifiek leerdoel, van duurzaamheid en strategie tot teamwork en onboarding.',
    'faq.q2': 'Hoe lang duurt een typische workshop?',
    'faq.a2': 'De meeste workshops duren tussen de 2 en 4 uur, afhankelijk van het onderwerp en de groepsgrootte. We bieden ook kortere formats van 90 minuten aan voor team-energizers of conferentiesessies.',
    'faq.q3': 'Kunnen jullie een game op maat maken voor onze organisatie?',
    'faq.a3': 'Absoluut. Maatwerkgames zijn een van onze specialiteiten. We werken nauw met je samen om je uitdagingen te begrijpen en ontwerpen vervolgens een game die past bij je inhoud, publiek en doelen.',
    'faq.q4': 'Moeten deelnemers \u201Cgamers\u201D zijn om hiervan te genieten?',
    'faq.a4': 'Helemaal niet. Onze games zijn ontworpen om toegankelijk en leuk te zijn voor iedereen, van complete niet-gamers tot doorgewinterde bordspelfanaten. De regels zijn simpel, de ervaring is intu\u00EFtief.',
    'faq.q5': 'Hoe begin ik?',
    'faq.a5': 'Plan een gratis gesprek van 15 minuten met oprichter Jeroen. We bespreken je doelen, verkennen welk format het beste past en schetsen de volgende stappen. Geen verplichting.',
    'faq.cta': 'Niet gevonden wat je zocht? <a href="#contact" class="faq-cta__link">Neem contact op</a>',

    // Contact
    'contact.title': 'Laten we samen iets <em>speels</em> cre\u00EBren',
    'contact.emailLabel': 'Mail ons op',
    'contact.or': 'OF',
    'contact.formTitle': 'Laten we praten!',
    'contact.formSub': 'Laat een kort bericht achter',
    'contact.nameLabel': 'Je naam',
    'contact.namePlaceholder': 'Je naam',
    'contact.emailFieldLabel': 'E-mail',
    'contact.emailPlaceholder': 'E-mail',
    'contact.messageLabel': 'Je bericht',
    'contact.messagePlaceholder': 'Vertel ons over je project of idee...',
    'contact.checkTitle': 'Ik ben ge\u00EFnteresseerd in...',
    'contact.check1': 'Gegamificeerde workshop',
    'contact.check2': 'Maatwerkgame',
    'contact.check3': 'Thuisgame',
    'contact.check4': 'Teambuilding',
    'contact.check5': 'Keynote / Talk',
    'contact.check6': 'Iets anders',
    'contact.submit': 'Verstuur bericht',
    'contact.sending': 'Versturen...',
    'contact.confirmation': 'Je bericht is verstuurd!'
  }
};

function setLanguage(lang) {
  currentLang = lang;
  var dict = translations[lang];
  if (!dict) return;

  // Persist choice across pages
  try { localStorage.setItem('sq-lang', lang); } catch(e) {}

  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (!dict[key]) return;
    if (el.getAttribute('data-i18n-html') === 'true') {
      el.innerHTML = dict[key];
    } else {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.placeholder = dict[key];
  });

  // Update toggle UI
  document.querySelectorAll('.lang-toggle').forEach(function(t) {
    t.querySelectorAll('.lang-toggle__opt').forEach(function(o) {
      o.classList.toggle('lang-toggle__opt--active', o.getAttribute('data-lang') === lang);
    });
    t.classList.toggle('is-nl', lang === 'nl');
  });

  document.documentElement.lang = lang;

  // Update URL to reflect language
  try {
    if (lang === 'nl') {
      history.replaceState(null, '', '/NL/');
    } else {
      var path = window.location.pathname;
      if (path.toLowerCase().indexOf('/nl') === 0) {
        history.replaceState(null, '', '/');
      }
    }
  } catch(e) {}

  // Update cross-page links
  var prefix = lang === 'nl' ? '/NL/' : '/';
  document.querySelectorAll('a[href*="scrum-workshop"]').forEach(function(a) {
    a.href = prefix + 'scrum-workshop.html';
  });
  document.querySelectorAll('a[href*="blog"]').forEach(function(a) {
    a.href = prefix + 'blog.html';
  });
}

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
  const nav = document.getElementById('floating-header');
  const hero = document.querySelector('.hero');

  if (nav && hero) {
    window.addEventListener('scroll', () => {
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      if (window.scrollY > heroBottom - 100) {
        nav.classList.add('floating-header--hidden');
      } else {
        nav.classList.remove('floating-header--hidden');
      }
    });
  }

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));
    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.remove('open'));
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
      submitBtn.querySelector('.blob-btn__text').textContent = translations[currentLang]['contact.sending'];

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
        submitBtn.querySelector('.blob-btn__text').textContent = translations[currentLang]['contact.submit'];
      });
    });
  }

  // Mobile scroll-triggered hover animations
  const mobileQuery = window.matchMedia('(max-width: 1024px)');
  let mobileObserver = null;

  function setupMobileAnimations() {
    if (mobileQuery.matches && !mobileObserver) {
      const animatedCards = document.querySelectorAll('.offer-card, .testimonial-card');
      mobileObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-hovered');
          } else {
            entry.target.classList.remove('is-hovered');
          }
        });
      }, { threshold: 0.4, rootMargin: '-35% 0px -35% 0px' });
      animatedCards.forEach(card => mobileObserver.observe(card));
    } else if (!mobileQuery.matches && mobileObserver) {
      mobileObserver.disconnect();
      mobileObserver = null;
      document.querySelectorAll('.is-hovered').forEach(el => el.classList.remove('is-hovered'));
    }
  }

  setupMobileAnimations();
  mobileQuery.addEventListener('change', setupMobileAnimations);

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

  // Language toggle
  document.querySelectorAll('.lang-toggle').forEach(function(toggle) {
    toggle.querySelectorAll('.lang-toggle__opt').forEach(function(opt) {
      opt.addEventListener('click', function() {
        var lang = opt.getAttribute('data-lang');
        if (opt.classList.contains('lang-toggle__opt--active')) return;
        setLanguage(lang);
      });
    });
  });

  // Restore language from URL path or localStorage
  var urlHasNL = window.location.pathname.toLowerCase().indexOf('/nl') === 0;
  if (urlHasNL) {
    setLanguage('nl');
  } else {
    try {
      var savedLang = localStorage.getItem('sq-lang');
      if (savedLang && savedLang !== 'en' && translations[savedLang]) {
        setLanguage(savedLang);
      }
    } catch(e) {}
  }

  // Auto-rotate cube once after 1s delay
  var cube = document.querySelector('.cube-btn');
  if (cube) {
    setTimeout(function() {
      cube.classList.add('is-spinning');
      setTimeout(function() {
        cube.classList.remove('is-spinning');
      }, 4000);
    }, 1000);
  }
});
