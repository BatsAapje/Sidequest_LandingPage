// Sidequest Scrum Workshop Landing Page

// ===== i18n translations =====
const translations = {
  en: {
    // Nav
    'nav.how': 'How it works',
    'nav.why': 'Why this',
    'nav.signup': 'Sign up',
    'nav.cta': 'Sign up',
    // Hero
    'hero.title': 'A Scrum escape room teams will actually <em>learn</em> from',
    'hero.subtitle': 'Just half a day. Fully immersive. Zero slides.',
    'hero.cta': 'Join as a pilot team',
    'hero.note': 'Limited spots available &middot; Discounted pilot rate',
    // Hero decorative cards
    'hero.folder.title': 'Sprint',
    'hero.folder.item1': 'Define user stories',
    'hero.folder.item2': 'Assign Scrum roles',
    'hero.folder.item3': 'Run first sprint',
    'hero.folder.item4': 'Sprint retrospective',
    'hero.folder.progress': '2 of 4 completed',
    'hero.standup.title': 'Daily Standup',
    'hero.standup.participants': 'Participants',
    'hero.standup.time': 'Time',
    'hero.standup.sprint': 'Sprint',
    'hero.standup.challenges': 'Challenges',
    'hero.retro.title': 'Retro',
    'hero.retro.item1': 'Roles made decisions faster',
    'hero.retro.item2': 'Time pressure was intense',
    'hero.retro.item3': 'Try shorter sprint cycles',
    'hero.retro.scoreLabel': 'Team score',
    // How
    'how.tag': 'How it works',
    'how.title': 'How a session <em>works</em>',
    'how.tryMe': 'drag and drop!',
    // Thread tags
    'how.tag.a': 'Role Switching',
    'how.tag.b': 'The Challenge',
    'how.tag.c': 'Reflection',
    // Column labels
    'how.col1': 'Planned',
    'how.col2': 'In Progress',
    'how.col3': 'Done',
    // Thread A: Role Switching
    'how.planned.a.title': 'Role assignment',
    'how.planned.a.desc': 'Your team takes on different Scrum roles. Each player becomes either a Scrum Master, Product Owner, or Developer.',
    'how.progress.a.title': 'New perspective',
    'how.progress.a.desc': 'By stepping into a role different from their real-life position, players unlock new insights.',
    'how.done.a.title': 'Empathy unlocked',
    'how.done.a.desc': 'Everyone truly understands what each role demands. Empathy clicks into place.',
    // Thread B: The Challenge
    'how.planned.b.title': 'The mission',
    'how.planned.b.desc': 'A Scrum escape room challenge is set. Build the best possible app before time runs out.',
    'how.progress.b.title': 'Under pressure',
    'how.progress.b.desc': 'Players run sprints while balancing stakeholder requirements and keeping bugs under control.',
    'how.done.b.title': 'Patterns revealed',
    'how.done.b.desc': 'Your team sees where communication broke down, and where it worked brilliantly.',
    // Thread C: Reflection & Growth
    'how.planned.c.title': 'Observation setup',
    'how.planned.c.desc': 'The facilitator prepares the debrief structure and key observation points.',
    'how.progress.c.title': 'Honest conversations',
    'how.progress.c.desc': 'The session opens up real discussion about how the team actually collaborates.',
    'how.done.c.title': 'Measurable growth',
    'how.done.c.desc': 'Your team earns a score you can compare with other teams in your company and beyond. Replay in a few months to track your improvement.',
    'how.detail1': 'Half day (3-4 hours)',
    'how.detail2': '4-25 people per workshop',
    'how.detail3': 'On-site at your office',
    'how.detail4': 'No preparation needed',
    // Leaderboard
    'leaderboard.tag': 'Leaderboard',
    'leaderboard.title': "Track your team's <em>performance</em>",
    'leaderboard.subtitle': 'Every team earns a score. See how you compare against other teams across companies.',
    'leaderboard.th.rank': 'Rank',
    'leaderboard.th.team': 'Team',
    'leaderboard.th.company': 'Company',
    'leaderboard.th.teamSize': 'Team Size',
    'leaderboard.th.score': 'Score',
    'leaderboard.th.badge': 'Badge',
    'leaderboard.yourTeam': '⭐ Your Team',
    'leaderboard.yourCompany': 'Your Company',
    // Why
    'why.tag': 'What makes this different',
    'why.title': 'Why coaches <em>love</em> this',
    'why.card1.tag': 'Customizable',
    'why.card1.title': 'Tailored to your team',
    'why.card1.desc': "Every team is different, and so is every workshop. We adapt the challenges, scenarios, and focus areas to match your team's goals.",
    'why.card2.tag': 'Measurable',
    'why.card2.title': 'Actionable steps',
    'why.card2.desc': "Every session produces a score and a clear set of takeaways. Teams see exactly where they excelled and where they got stuck.",
    'why.card3.tag': 'Inclusive',
    'why.card3.title': 'No gamers required',
    'why.card3.desc': "This isn't about being good at games. The workshop is designed so that everyone, from the most competitive team member to the quietest, is naturally involved and having fun.",
    // Who
    'who.tag': "Who it's for",
    'who.title': 'Built for Scrum teams and the people who <em>guide</em> them',
    'who.item1': 'Scrum Masters looking for a fresh way to energize their team',
    'who.item2': 'Agile coaches who want a hands-on tool instead of another training deck',
    'who.item3': 'Teams going through change, new members, new ways of working, or stuck in old patterns',
    'who.item4': 'Organizations that want to make Scrum adoption actually stick',
    // Testimonials
    'testimonials.tag': 'Testimonials',
    'testimonials.title': '<span class="mobile-block">What our</span> <em>clients</em> say',
    'testimonials.subtitle': "Don't just take our word for it. Here's what people have to say after playing our games.",
    'testimonials.card1.quote': '\u201CWe were still talking about the Scrum workshop hours later. It was not only fun, but genuinely insightful. The whole team was engaged from start to finish.\u201D',
    'testimonials.card1.role': 'Marketing Manager',
    'testimonials.card2.quote': '\u201CSidequest their Scrum workshop was really memorable. It brought real-life examples to life in a playful and engaging way.\u201D',
    'testimonials.card2.role': 'Product Owner',
    'testimonials.card3.company': 'You?',
    'testimonials.card3.cta': 'Get in touch',
    // Pilot
    'pilot.title': 'Be one of the first teams to <em>play</em>',
    'pilot.body': "We're in the final stage of development and looking for a small number of teams to pilot the workshop. As a pilot team, you get early access at a discounted rate, and your feedback helps shape the final version.",
    'pilot.get.title': 'What pilot teams get',
    'pilot.get.item1': 'Early access to the full workshop experience',
    'pilot.get.item2': 'Discounted pilot pricing',
    'pilot.get.item3': 'Direct input into the final version of the game',
    'pilot.get.item4': 'A fresh, memorable team experience your people will talk about for weeks',
    'pilot.ask.title': 'What we ask in return',
    'pilot.ask.item1': 'Honest feedback after the session',
    'pilot.ask.item2': 'Permission to use anonymized results for benchmarking (optional)',
    'pilot.cta': 'Sign up as a pilot team',
    'pilot.form.title': 'Sign up as a pilot team',
    // Form
    'form.tag': 'Get started',
    'form.title': 'Interested? Leave your <em>details</em>',
    'form.name.label': 'Your name',
    'form.name.placeholder': 'Your name',
    'form.email.label': 'Email address',
    'form.email.placeholder': 'you@company.com',
    'form.company.label': 'Company / organization',
    'form.company.placeholder': 'Company name',
    'form.role.label': 'Your role',
    'form.role.options': ['Select your role', 'Scrum Master', 'Agile Coach', 'Product Owner', 'Developer', 'Other'],
    'form.teamsize.label': 'Team size',
    'form.teamsize.options': ['Select team size', '4 - 6 people', '7 - 12 people', '12+ people'],
    'form.message.label': 'Anything you\'d like us to know? <span class="sw-form-optional">(optional)</span>',
    'form.message.placeholder': 'Tell us about your team, goals, or questions...',
    'form.submit': 'Send my details',
    'form.confirmation': 'Your details have been sent!',
    'form.note': "We'll get back to you within 2 working days. No spam, no sales pressure, just a conversation to see if it's a good fit.",
  },
  nl: {
    // Nav
    'nav.how': 'Hoe het werkt',
    'nav.why': 'Waarom dit',
    'nav.signup': 'Aanmelden',
    'nav.cta': 'Aanmelden',
    // Hero
    'hero.title': 'De Scrum escape room waar je team echt van <em>leert</em>',
    'hero.subtitle': 'Een halve dag. Samen bouwen. Geen slides.',
    'hero.cta': 'Doe mee als pilotteam',
    'hero.note': 'Beperkt aantal plekken &middot; Korting voor pilotteams',
    // Hero decorative cards
    'hero.folder.title': 'Sprint',
    'hero.folder.item1': 'User stories defini\u00EBren',
    'hero.folder.item2': 'Scrum-rollen toewijzen',
    'hero.folder.item3': 'Eerste sprint draaien',
    'hero.folder.item4': 'Sprint retrospective',
    'hero.folder.progress': '2 van 4 afgerond',
    'hero.standup.title': 'Dagelijkse Standup',
    'hero.standup.participants': 'Deelnemers',
    'hero.standup.time': 'Tijd',
    'hero.standup.sprint': 'Sprint',
    'hero.standup.challenges': 'Uitdagingen',
    'hero.retro.title': 'Retro',
    'hero.retro.item1': 'Rollen versnelden beslissingen',
    'hero.retro.item2': 'Tijdsdruk was intens',
    'hero.retro.item3': 'Kortere sprintcycli proberen',
    'hero.retro.scoreLabel': 'Teamscore',
    // How
    'how.tag': 'Hoe het werkt',
    'how.title': 'Hoe een sessie <em>werkt</em>',
    'how.tryMe': 'drag and drop!',
    // Thread tags
    'how.tag.a': 'Rolwisseling',
    'how.tag.b': 'De Uitdaging',
    'how.tag.c': 'Reflectie',
    // Column labels
    'how.col1': 'Gepland',
    'how.col2': 'In uitvoering',
    'how.col3': 'Afgerond',
    // Thread A: Rolwisseling
    'how.planned.a.title': 'Rolverdeling',
    'how.planned.a.desc': 'Je team neemt verschillende Scrum-rollen aan. Elke speler wordt Scrum Master, Product Owner of Developer.',
    'how.progress.a.title': 'Nieuw perspectief',
    'how.progress.a.desc': 'Elke deelnemer neemt een andere rol aan dan in het dagelijks werk, wat nieuwe inzichten oplevert.',
    'how.done.a.title': 'Empathie ontgrendeld',
    'how.done.a.desc': 'Iedereen begrijpt wat elke rol echt vraagt. Empathie valt op z\'n plek.',
    // Thread B: De uitdaging
    'how.planned.b.title': 'De missie',
    'how.planned.b.desc': 'Een Scrum escape room uitdaging. Bouw de beste app voordat de tijd op is.',
    'how.progress.b.title': 'Onder druk',
    'how.progress.b.desc': 'Spelers draaien sprints terwijl ze stakeholderwensen balanceren en bugs onder controle houden.',
    'how.done.b.title': 'Patronen onthuld',
    'how.done.b.desc': 'Je team ziet waar communicatie vastliep, en waar het briljant werkte.',
    // Thread C: Reflectie & Groei
    'how.planned.c.title': 'Observatie-opzet',
    'how.planned.c.desc': 'De facilitator bereidt de debrief-structuur en observatiepunten voor.',
    'how.progress.c.title': 'Eerlijke gesprekken',
    'how.progress.c.desc': 'De sessie opent echte discussie over hoe het team daadwerkelijk samenwerkt.',
    'how.done.c.title': 'Meetbare groei',
    'how.done.c.desc': 'Concrete inzichten om mee aan de slag te gaan. Speel over een paar maanden opnieuw.',
    'how.detail1': 'Halve dag (3-4 uur)',
    'how.detail2': '4-25 personen per workshop',
    'how.detail3': 'Op locatie bij jullie',
    'how.detail4': 'Geen voorbereiding nodig',
    // Leaderboard
    'leaderboard.tag': 'Scorebord',
    'leaderboard.title': 'Volg de <em>prestaties</em> van je team',
    'leaderboard.subtitle': 'Elk team verdient een score. Vergelijk je resultaat met andere teams binnen en buiten je bedrijf.',
    'leaderboard.th.rank': 'Rang',
    'leaderboard.th.team': 'Team',
    'leaderboard.th.company': 'Bedrijf',
    'leaderboard.th.teamSize': 'Teamgrootte',
    'leaderboard.th.score': 'Score',
    'leaderboard.th.badge': 'Badge',
    'leaderboard.yourTeam': '⭐ Jouw Team',
    'leaderboard.yourCompany': 'Jouw Bedrijf',
    // Why
    'why.tag': 'Wat dit anders maakt',
    'why.title': 'Waarom coaches hier <em>fan</em> van zijn',
    'why.card1.tag': 'Aanpasbaar',
    'why.card1.title': 'Op maat voor jouw team',
    'why.card1.desc': 'Elk team is anders, en elke workshop ook. We passen de uitdagingen, scenario\'s en focuspunten aan op de doelen van jullie team.',
    'why.card2.tag': 'Meetbaar',
    'why.card2.title': 'Concrete stappen',
    'why.card2.desc': 'Elke sessie levert een score en een duidelijke set takeaways op. Teams zien precies waar ze uitblonken en waar ze vastliepen.',
    'why.card3.tag': 'Inclusief',
    'why.card3.title': 'Geen gamers nodig',
    'why.card3.desc': 'Dit gaat niet over goed zijn in games. De workshop is zo ontworpen dat iedereen, van het meest competitieve teamlid tot de stilste, er vanzelf bij betrokken is en plezier heeft.',
    // Who
    'who.tag': 'Voor wie',
    'who.title': 'Gemaakt voor Scrum-teams en de mensen die ze <em>begeleiden</em>',
    'who.item1': 'Scrum Masters die hun team op een frisse manier willen activeren',
    'who.item2': 'Agile coaches die een hands-on tool willen in plaats van weer een training',
    'who.item3': 'Teams in verandering, nieuwe leden, nieuwe werkwijzen, of vastgelopen patronen',
    'who.item4': 'Organisaties die willen dat Scrum-adoptie echt beklijft',
    // Testimonials
    'testimonials.tag': 'Referenties',
    'testimonials.title': '<span class="mobile-block">Wat onze</span> <em>klanten</em> zeggen',
    'testimonials.subtitle': 'Neem niet alleen ons woord ervoor. Dit zeggen anderen na het spelen van onze games.',
    'testimonials.card1.quote': '\u201CWe hadden het uren later nog over de Scrum-workshop. Het was niet alleen leuk, maar ook echt leerzaam. Het hele team was van begin tot eind betrokken.\u201D',
    'testimonials.card1.role': 'Marketing Manager',
    'testimonials.card2.quote': '\u201CDe Scrum-workshop van Sidequest was echt memorabel. Het bracht voorbeelden uit de praktijk tot leven op een speelse en boeiende manier.\u201D',
    'testimonials.card2.role': 'Product Owner',
    'testimonials.card3.company': 'Jij?',
    'testimonials.card3.cta': 'Neem contact op',
    // Pilot
    'pilot.title': 'Wees een van de eerste teams die <em>speelt</em>',
    'pilot.body': 'We zitten in de laatste fase van ontwikkeling en zoeken een klein aantal teams om de workshop te piloten. Als pilotteam krijg je vroege toegang tegen een gereduceerd tarief, en je feedback helpt de definitieve versie vormen.',
    'pilot.get.title': 'Wat pilotteams krijgen',
    'pilot.get.item1': 'Vroege toegang tot de volledige workshop-ervaring',
    'pilot.get.item2': 'Gereduceerd pilottarief',
    'pilot.get.item3': 'Directe invloed op de definitieve versie van het spel',
    'pilot.get.item4': 'Een frisse, onvergetelijke teamervaring waar je mensen nog weken over praten',
    'pilot.ask.title': 'Wat wij in ruil vragen',
    'pilot.ask.item1': 'Eerlijke feedback na de sessie',
    'pilot.ask.item2': 'Toestemming om geanonimiseerde resultaten te gebruiken voor benchmarking (optioneel)',
    'pilot.cta': 'Aanmelden als pilotteam',
    'pilot.form.title': 'Aanmelden als pilotteam',
    // Form
    'form.tag': 'Aan de slag',
    'form.title': 'Interesse? Laat je <em>gegevens</em> achter',
    'form.name.label': 'Je naam',
    'form.name.placeholder': 'Je naam',
    'form.email.label': 'E-mailadres',
    'form.email.placeholder': 'jij@bedrijf.nl',
    'form.company.label': 'Bedrijf / organisatie',
    'form.company.placeholder': 'Bedrijfsnaam',
    'form.role.label': 'Je rol',
    'form.role.options': ['Selecteer je rol', 'Scrum Master', 'Agile Coach', 'Product Owner', 'Developer', 'Anders'],
    'form.teamsize.label': 'Teamgrootte',
    'form.teamsize.options': ['Selecteer teamgrootte', '4 - 6 personen', '7 - 12 personen', '12+ personen'],
    'form.message.label': 'Wil je ons nog iets laten weten? <span class="sw-form-optional">(optioneel)</span>',
    'form.message.placeholder': 'Vertel ons over je team, doelen of vragen...',
    'form.submit': 'Verstuur mijn gegevens',
    'form.confirmation': 'Je gegevens zijn verzonden!',
    'form.note': 'We nemen binnen 2 werkdagen contact op. Geen spam, geen verkoopdruk, gewoon een gesprek om te kijken of het past.',
  }
};

// ===== i18n engine =====
let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];
  if (!dict) return;

  // Persist choice across pages
  try { localStorage.setItem('sq-lang', lang); } catch(e) {}

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!dict[key]) return;

    if (el.getAttribute('data-i18n-html') === 'true') {
      el.innerHTML = dict[key];
    } else {
      el.innerHTML = dict[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.placeholder = dict[key];
  });

  // Update select options
  document.querySelectorAll('[data-i18n-options]').forEach(select => {
    const key = select.getAttribute('data-i18n-options');
    const opts = dict[key];
    if (!opts || !Array.isArray(opts)) return;
    const options = select.querySelectorAll('option');
    options.forEach((opt, i) => {
      if (opts[i]) opt.textContent = opts[i];
    });
  });

  // Sync all toggle UI states
  document.querySelectorAll('.lang-toggle').forEach(t => {
    t.querySelectorAll('.lang-toggle__opt').forEach(o => {
      o.classList.toggle('lang-toggle__opt--active', o.getAttribute('data-lang') === lang);
    });
    t.classList.toggle('is-nl', lang === 'nl');
  });

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Update URL to reflect language
  try {
    if (lang === 'nl') {
      history.replaceState(null, '', '/NL/scrum-workshop.html');
    } else {
      var path = window.location.pathname;
      if (path.toLowerCase().indexOf('/nl') === 0) {
        history.replaceState(null, '', '/scrum-workshop.html');
      }
    }
  } catch(e) {}

  // Update cross-page links
  var prefix = lang === 'nl' ? '/NL/' : '/';
  document.querySelectorAll('a.nav-logo').forEach(function(a) {
    a.href = prefix;
  });
}

// ===== Game card constants =====
const CARD_VALUES = { planned: '+10 value', progress: '+20 value', done: '+30 value' };
// Points per column for progress bar: 3 cards × 2 max each = 6 total
const COLUMN_POINTS = { planned: 0, progress: 1, done: 2 };
const MAX_POINTS = 6; // 3 cards × 2 points each

var _currentValuePct = 0;
var _valueAnimId = null;

function updateValueBar() {
  var total = 0;
  document.querySelectorAll('.sw-kanban__card[data-thread]').forEach(function(card) {
    var col = card.closest('.sw-kanban__col');
    if (col) {
      total += (COLUMN_POINTS[col.dataset.column] || 0);
    }
  });
  var targetPct = Math.round((total / MAX_POINTS) * 100);
  animateValueBar(targetPct);
}

function animateValueBar(targetPct) {
  var fill = document.querySelector('.sw-kanban__value-fill');
  var label = document.querySelector('.sw-kanban__value-pct');
  if (!fill || !label) return;

  if (_valueAnimId) cancelAnimationFrame(_valueAnimId);

  var startPct = _currentValuePct;
  var diff = targetPct - startPct;
  if (diff === 0) return;

  var duration = Math.abs(diff) * 25;
  duration = Math.max(500, Math.min(duration, 1400));
  var startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    var elapsed = timestamp - startTime;
    var progress = Math.min(elapsed / duration, 1);
    // Ease-in-out quintic: long ramp up, fast middle, long settle
    var eased = progress < 0.5
      ? 16 * Math.pow(progress, 5)
      : 1 - Math.pow(-2 * progress + 2, 5) / 2;
    var current = Math.round(startPct + diff * eased);

    fill.style.width = current + '%';
    label.textContent = current + '%';
    _currentValuePct = current;

    if (progress < 1) {
      _valueAnimId = requestAnimationFrame(step);
    } else {
      _valueAnimId = null;
      _currentValuePct = targetPct;
      fill.style.width = targetPct + '%';
      label.textContent = targetPct + '%';
    }
  }

  _valueAnimId = requestAnimationFrame(step);
}

// ===== Kanban Drag & Drop (Pointer Events) =====
function updateCardContent(card, thread, newColumn) {
  const titleEl = card.querySelector('.sw-kanban__card-title');
  const descEl = card.querySelector('.sw-kanban__card-desc');
  if (!titleEl || !descEl) return;

  // Build new i18n keys based on target column + thread
  const titleKey = 'how.' + newColumn + '.' + thread + '.title';
  const descKey = 'how.' + newColumn + '.' + thread + '.desc';

  // Update data-i18n attributes (so language switch picks them up)
  titleEl.setAttribute('data-i18n', titleKey);
  descEl.setAttribute('data-i18n', descKey);

  // Set visible text from current language
  const dict = translations[currentLang];
  if (dict[titleKey]) titleEl.textContent = dict[titleKey];
  if (dict[descKey]) descEl.textContent = dict[descKey];

  // Update value badge
  const xpEl = card.querySelector('.sw-kanban__card-xp');
  if (xpEl && CARD_VALUES[newColumn]) {
    xpEl.textContent = CARD_VALUES[newColumn];
  }
}

// ===== Confetti burst =====
function spawnConfetti(card) {
  const rect = card.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;

  const colors = ['#7171d3', '#77bccc', '#8f8fe0', '#F59E0B', '#10B981', '#a3d5e0'];
  const particleCount = 25;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    const el = document.createElement('span');
    el.className = 'sw-confetti-particle';

    const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.5;
    const velocity = 60 + Math.random() * 100;
    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity - 30;
    const rotation = (Math.random() - 0.5) * 720;
    const size = 5 + Math.random() * 6;
    const duration = 0.6 + Math.random() * 0.5;
    const delay = Math.random() * 0.15;

    el.style.left = originX + 'px';
    el.style.top = originY + 'px';
    el.style.width = size + 'px';
    el.style.height = (size * (0.4 + Math.random() * 0.6)) + 'px';
    el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    el.style.setProperty('--tx', tx + 'px');
    el.style.setProperty('--ty', ty + 'px');
    el.style.setProperty('--rot', rotation + 'deg');
    el.style.animation = 'confettiFall ' + duration + 's ' + delay + 's ease-out forwards';
    el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';

    document.body.appendChild(el);
    particles.push(el);
  }

  setTimeout(function() {
    particles.forEach(function(p) {
      if (p.parentNode) p.parentNode.removeChild(p);
    });
  }, 1200);
}

function updateColumnCounts() {
  document.querySelectorAll('.sw-kanban__col').forEach(function(col) {
    var count = col.querySelectorAll('.sw-kanban__card').length;
    var badge = col.querySelector('.sw-kanban__col-count');
    if (badge) badge.textContent = count;
  });
}

function initKanbanDragDrop() {
  var board = document.querySelector('.sw-kanban__board');
  if (!board) return;

  var dragState = null;
  var DRAG_THRESHOLD = 5;
  var SCROLL_ZONE = 60;

  // Use board-level pointerdown, then document-level move/up
  // Document-level listeners are reliable because they always fire
  // regardless of DOM reparenting or pointer capture issues.
  // Column order for adjacency check (cards can only move one step)
  var COLUMN_ORDER = ['planned', 'progress', 'done'];

  // Get the effective drop column: if adjacent, return target as-is;
  // if skipping a column, return the next adjacent column in that direction.
  function getAdjacentTarget(source, target) {
    var si = COLUMN_ORDER.indexOf(source);
    var ti = COLUMN_ORDER.indexOf(target);
    if (si === -1 || ti === -1 || si === ti) return null;
    if (Math.abs(si - ti) === 1) return target; // already adjacent
    // Non-adjacent: snap to the next column toward the target
    var step = ti > si ? 1 : -1;
    return COLUMN_ORDER[si + step];
  }

  board.addEventListener('pointerdown', onPointerDown);

  function onPointerDown(e) {
    if (dragState) return;                          // already dragging
    if (e.button !== 0) return;                     // left button only
    var card = e.target.closest('.sw-kanban__card[data-thread]');
    if (!card) return;

    e.preventDefault();

    var rect = card.getBoundingClientRect();

    dragState = {
      card: card,
      thread: card.dataset.thread,
      sourceColumn: card.closest('.sw-kanban__col').dataset.column,
      startX: e.clientX,
      startY: e.clientY,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
      cardWidth: rect.width,
      isDragging: false,
      clone: null,
      currentDropCol: null
    };

    // Attach to document — these always fire, even after DOM moves
    document.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerup', onPointerUp);
    document.addEventListener('pointercancel', onPointerUp);

    // Prevent context-menu on long-press (Android)
    document.addEventListener('contextmenu', preventContextMenu, true);
  }

  function preventContextMenu(e) { e.preventDefault(); }

  function onPointerMove(e) {
    if (!dragState) return;

    if (!dragState.isDragging) {
      var dx = e.clientX - dragState.startX;
      var dy = e.clientY - dragState.startY;
      if (Math.abs(dx) < DRAG_THRESHOLD && Math.abs(dy) < DRAG_THRESHOLD) return;
      startDrag(e);
    }

    moveClone(e);
    updateDropTarget(e);
    autoScroll(e);
  }

  function startDrag(e) {
    var card = dragState.card;
    dragState.isDragging = true;

    // Prevent scrolling on touch — set on body so it persists
    document.body.style.touchAction = 'none';
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';

    // Create floating clone
    var clone = card.cloneNode(true);
    clone.className = card.className.replace('is-visible', '').trim();
    clone.classList.add('sw-kanban__card--drag-clone');
    clone.classList.remove('is-dragging');
    clone.style.width = dragState.cardWidth + 'px';
    clone.style.left = (e.clientX - dragState.offsetX) + 'px';
    clone.style.top = (e.clientY - dragState.offsetY) + 'px';
    document.body.appendChild(clone);
    dragState.clone = clone;

    // Dim the original
    card.classList.add('is-dragging');
  }

  function moveClone(e) {
    if (!dragState || !dragState.clone) return;
    dragState.clone.style.left = (e.clientX - dragState.offsetX) + 'px';
    dragState.clone.style.top = (e.clientY - dragState.offsetY) + 'px';
    dragState.lastClientY = e.clientY;
  }

  function updateDropTarget(e) {
    if (!dragState) return;

    // Temporarily hide clone to hit-test what's underneath
    if (dragState.clone) dragState.clone.style.display = 'none';
    var elementUnder = document.elementFromPoint(e.clientX, e.clientY);
    if (dragState.clone) dragState.clone.style.display = '';

    var col = elementUnder ? elementUnder.closest('.sw-kanban__col') : null;
    var effectiveCol = null;

    if (col && col.dataset.column) {
      if (col.dataset.column === dragState.sourceColumn) {
        // Same column — allow reorder
        effectiveCol = col;
      } else {
        var effectiveTarget = getAdjacentTarget(dragState.sourceColumn, col.dataset.column);
        if (effectiveTarget) {
          effectiveCol = board.querySelector('.sw-kanban__col[data-column="' + effectiveTarget + '"]');
        }
      }
    }

    // Remove highlight from previous target if it changed
    if (dragState.currentDropCol && dragState.currentDropCol !== effectiveCol) {
      dragState.currentDropCol.classList.remove('is-drop-target');
    }

    if (effectiveCol) {
      effectiveCol.classList.add('is-drop-target');
      dragState.currentDropCol = effectiveCol;
    } else {
      dragState.currentDropCol = null;
    }
  }

  function autoScroll(e) {
    if (e.clientY < SCROLL_ZONE) {
      window.scrollBy(0, -8);
    } else if (e.clientY > window.innerHeight - SCROLL_ZONE) {
      window.scrollBy(0, 8);
    }
  }

  function onPointerUp(e) {
    if (!dragState) return;
    if (dragState.isDragging) {
      finishDrag();
    }
    cleanup();
  }

  function finishDrag() {
    var card = dragState.card;
    var thread = dragState.thread;
    var sourceColumn = dragState.sourceColumn;
    var targetColumnEl = dragState.currentDropCol;

    if (targetColumnEl) {
      var targetColumn = targetColumnEl.dataset.column;
      var targetCards = targetColumnEl.querySelector('.sw-kanban__cards');
      var siblings = Array.from(targetCards.querySelectorAll('.sw-kanban__card:not(.is-dragging)'));
      var insertBefore = null;
      var dropY = dragState.lastClientY || 0;
      for (var i = 0; i < siblings.length; i++) {
        var rect = siblings[i].getBoundingClientRect();
        if (dropY < rect.top + rect.height / 2) {
          insertBefore = siblings[i];
          break;
        }
      }
      if (insertBefore) {
        targetCards.insertBefore(card, insertBefore);
      } else {
        targetCards.appendChild(card);
      }

      if (targetColumn !== sourceColumn) {
        // Update card content to show story for this column
        updateCardContent(card, thread, targetColumn);

        // Update column counts and value bar
        updateColumnCounts();
        updateValueBar();

        // Keep the "drag and drop" hint visible (no longer hidden after drag)
      }

      // Play drop animation
      card.classList.add('is-dropped');
      card.addEventListener('animationend', function handler() {
        card.classList.remove('is-dropped');
        card.removeEventListener('animationend', handler);
      });

      // Confetti burst for Done column (only on cross-column move)
      if (targetColumn !== sourceColumn && targetColumn === 'done') {
        requestAnimationFrame(function() {
          spawnConfetti(card);
        });
      }
    }
  }

  function cleanup() {
    if (!dragState) return;
    var card = dragState.card;
    var clone = dragState.clone;

    // Remove clone
    if (clone && clone.parentNode) clone.parentNode.removeChild(clone);

    // Restore card
    card.classList.remove('is-dragging');

    // Restore body styles
    document.body.style.touchAction = '';
    document.body.style.userSelect = '';
    document.body.style.webkitUserSelect = '';

    // Remove all column highlights
    board.querySelectorAll('.sw-kanban__col.is-drop-target').forEach(function(col) {
      col.classList.remove('is-drop-target');
    });

    // Remove document-level listeners
    document.removeEventListener('pointermove', onPointerMove);
    document.removeEventListener('pointerup', onPointerUp);
    document.removeEventListener('pointercancel', onPointerUp);
    document.removeEventListener('contextmenu', preventContextMenu, true);

    dragState = null;
  }
}

// ===== Main =====
document.addEventListener('DOMContentLoaded', () => {

  // Fluid scale for hero decoration cards: 0.75 at 769px → 1.0 at ~1200px → 1.33 at 1800px
  function updateHeroCardScale() {
    const vw = window.innerWidth;
    const scale = Math.min(1.33, Math.max(0.75, 0.317 + 0.000563 * vw));
    document.querySelector('.sw-hero').style.setProperty('--hero-card-scale', scale);
  }
  updateHeroCardScale();
  window.addEventListener('resize', updateHeroCardScale);

  // Pause hero animations when scrolled out of view to save GPU
  const heroEl = document.querySelector('.sw-hero');
  if (heroEl && 'IntersectionObserver' in window) {
    const heroAnimEls = heroEl.querySelectorAll(
      '.sw-hero__grad, .sw-hero__bubble, .sw-hero-folder-stack, .sw-hero-timer-group, .sw-hero-retro, .sw-hero-dice'
    );
    new IntersectionObserver(([entry]) => {
      const state = entry.isIntersecting ? 'running' : 'paused';
      heroAnimEls.forEach(el => { el.style.animationPlayState = state; });
    }, { threshold: 0 }).observe(heroEl);
  }

  // Why cards carousel navigation (mobile only)
  const whyTrack = document.querySelector('.sw-why-grid');
  const whyPrev = document.querySelector('.sw-why-nav__prev');
  const whyNext = document.querySelector('.sw-why-nav__next');
  if (whyTrack && whyPrev && whyNext) {
    const whyCards = whyTrack.querySelectorAll('.sw-why-card');
    const whyCardCount = whyCards.length;
    let whyIndex = 0;
    let whyAnimId = null;

    function whyEase(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function getWhyCardOffset(index) {
      if (index < 0 || index >= whyCardCount) return 0;
      return whyCards[index].offsetLeft - whyTrack.offsetLeft;
    }

    // Initialize scroll to card 0
    whyTrack.scrollLeft = getWhyCardOffset(0);

    function whyAnimateScroll(to, duration) {
      if (whyAnimId) cancelAnimationFrame(whyAnimId);
      var from = whyTrack.scrollLeft;
      var start = performance.now();
      var distance = to - from;

      function step(now) {
        var elapsed = now - start;
        var progress = Math.min(elapsed / duration, 1);
        var eased = whyEase(progress);
        whyTrack.scrollLeft = from + distance * eased;

        if (progress < 1) {
          whyAnimId = requestAnimationFrame(step);
        } else {
          whyTrack.scrollLeft = to;
          whyAnimId = null;
        }
      }

      whyAnimId = requestAnimationFrame(step);
    }

    function whyGoTo(index) {
      whyIndex = index;
      whyAnimateScroll(getWhyCardOffset(whyIndex), 500);
    }

    whyNext.addEventListener('click', () => {
      var next = whyIndex + 1;
      whyGoTo(next >= whyCardCount ? 0 : next);
    });
    whyPrev.addEventListener('click', () => {
      var prev = whyIndex - 1;
      whyGoTo(prev < 0 ? whyCardCount - 1 : prev);
    });
  }

  // Mobile scroll-triggered hover animations for testimonial cards
  const mobileQuery = window.matchMedia('(max-width: 1024px)');
  let mobileObserver = null;

  function setupMobileAnimations() {
    if (mobileQuery.matches && !mobileObserver) {
      const animatedCards = document.querySelectorAll('.testimonial-card');
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
      document.querySelectorAll('.testimonial-card.is-hovered').forEach(el => el.classList.remove('is-hovered'));
    }
  }

  setupMobileAnimations();
  mobileQuery.addEventListener('change', setupMobileAnimations);

  // Kanban cards scroll-in animation (staggered) + repeating wiggle hint
  const kanbanCards = document.querySelectorAll('.sw-kanban__card');
  if (kanbanCards.length && 'IntersectionObserver' in window) {
    let wiggleStarted = false;
    let wiggleInterval = null;
    let userHasDragged = false;

    // Stop wiggle permanently once any card is dragged
    document.addEventListener('pointerdown', function checkDrag(e) {
      if (e.target.closest('.sw-kanban__card[data-thread]')) {
        userHasDragged = true;
        if (wiggleInterval) { clearInterval(wiggleInterval); wiggleInterval = null; }
        document.removeEventListener('pointerdown', checkDrag);
      }
    });

    function runWiggle() {
      if (userHasDragged) return;
      const plannedCards = document.querySelectorAll('.sw-kanban__col[data-column="planned"] .sw-kanban__card');
      plannedCards.forEach((card, i) => {
        setTimeout(() => {
          if (userHasDragged) return;
          card.classList.add('wiggle-hint');
          card.addEventListener('animationend', () => {
            card.classList.remove('wiggle-hint');
          }, { once: true });
        }, i * 150);
      });
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = Array.from(kanbanCards);
          const idx = cards.indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, idx * 100);
          observer.unobserve(entry.target);

          // Start repeating wiggle after cards appear
          if (!wiggleStarted) {
            wiggleStarted = true;
            // First wiggle after cards finish appearing
            setTimeout(() => {
              runWiggle();
              // Repeat every 3 seconds
              wiggleInterval = setInterval(runWiggle, 3000);
            }, (cards.length * 100) + 400);
          }
        }
      });
    }, { threshold: 0.2 });
    kanbanCards.forEach(card => observer.observe(card));
  }

  // ===== Kanban swipe dots (phone) =====
  const kanbanBoard = document.querySelector('.sw-kanban__board');
  const kanbanDots = document.querySelectorAll('.sw-kanban__dot-ind');
  if (kanbanBoard && kanbanDots.length) {
    const kanbanCols = kanbanBoard.querySelectorAll('.sw-kanban__col');
    function updateKanbanDots() {
      if (window.innerWidth > 520) return;
      var scrollLeft = kanbanBoard.scrollLeft;
      var boardWidth = kanbanBoard.scrollWidth - kanbanBoard.clientWidth;
      if (boardWidth <= 0) return;
      var ratio = scrollLeft / boardWidth;
      var activeIdx = Math.round(ratio * (kanbanCols.length - 1));
      kanbanDots.forEach(function(dot, i) {
        dot.classList.toggle('active', i === activeIdx);
      });
    }
    kanbanBoard.addEventListener('scroll', function() {
      requestAnimationFrame(updateKanbanDots);
    }, { passive: true });

    // Also allow tapping dots to scroll to column
    kanbanDots.forEach(function(dot, i) {
      dot.addEventListener('click', function() {
        if (window.innerWidth > 520) return;
        var col = kanbanCols[i];
        if (col) {
          kanbanBoard.scrollTo({
            left: col.offsetLeft - kanbanBoard.offsetLeft - 12,
            behavior: 'smooth'
          });
        }
      });
      dot.style.cursor = 'pointer';
    });
  }

  // ===== Kanban Drag & Drop =====
  initKanbanDragDrop();

  // Navbar: hide on scroll down, show on scroll up
  const nav = document.getElementById('floating-header');
  const hero = document.querySelector('.sw-hero');
  let lastScrollY = 0;

  if (nav) {
    let navTicking = false;
    let cachedHeroBottom = hero ? hero.offsetTop + hero.offsetHeight : 600;
    window.addEventListener('resize', () => {
      cachedHeroBottom = hero ? hero.offsetTop + hero.offsetHeight : 600;
    });
    window.addEventListener('scroll', () => {
      if (!navTicking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY > cachedHeroBottom - 100) {
            nav.classList.add('floating-header--hidden');
          } else {
            nav.classList.remove('floating-header--hidden');
          }
          lastScrollY = currentScrollY;
          navTicking = false;
        });
        navTicking = true;
      }
    }, { passive: true });
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

  // Language toggle (pill switch EN/NL)
  document.querySelectorAll('.lang-toggle').forEach(toggle => {
    toggle.querySelectorAll('.lang-toggle__opt').forEach(opt => {
      opt.addEventListener('click', () => {
        const lang = opt.getAttribute('data-lang');
        if (opt.classList.contains('lang-toggle__opt--active')) return;

        // Update ALL toggles on the page
        document.querySelectorAll('.lang-toggle').forEach(t => {
          t.querySelectorAll('.lang-toggle__opt').forEach(o => {
            o.classList.toggle('lang-toggle__opt--active', o.getAttribute('data-lang') === lang);
          });
          t.classList.toggle('is-nl', lang === 'nl');
        });

        setLanguage(lang);
      });
    });
  });

  // Sign-up form AJAX submission
  const signupForm = document.querySelector('.sw-signup-form');
  const confirmation = document.getElementById('swPilotFormConfirmation');

  if (signupForm && confirmation) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(signupForm);
      const submitBtn = signupForm.querySelector('.sw-pilot__submit');
      const btnText = submitBtn.querySelector('.blob-btn__text');

      submitBtn.disabled = true;
      const sendingText = currentLang === 'nl' ? 'Verzenden...' : 'Sending...';
      btnText.textContent = sendingText;

      fetch(signupForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      .then(response => {
        if (response.ok) {
          signupForm.reset();
          confirmation.classList.add('is-visible');
          requestAnimationFrame(() => {
            confirmation.style.opacity = '1';
            confirmation.style.transform = 'translateY(0)';
          });
        } else {
          const errorMsg = currentLang === 'nl'
            ? 'Er ging iets mis. Probeer het opnieuw.'
            : 'Something went wrong. Please try again.';
          alert(errorMsg);
        }
      })
      .catch(() => {
        const errorMsg = currentLang === 'nl'
          ? 'Er ging iets mis. Probeer het opnieuw.'
          : 'Something went wrong. Please try again.';
        alert(errorMsg);
      })
      .finally(() => {
        submitBtn.disabled = false;
        btnText.textContent = translations[currentLang]['form.submit'];
      });
    });
  }

  // iPad scroll animation for leaderboard
  var ipadContainer = document.querySelector('[data-ipad-container]');
  var ipadCard = document.querySelector('[data-ipad-card]');
  var ipadHeader = document.querySelector('[data-ipad-header]');

  if (ipadContainer && ipadCard && ipadHeader) {
    var ipadTicking = false;

    function getIpadMobile() {
      return window.innerWidth <= 768;
    }

    function updateIpadTransform() {
      var rect = ipadContainer.getBoundingClientRect();
      var windowH = window.innerHeight;
      // progress: 0 when section top enters viewport bottom, 1 when section bottom leaves viewport top
      var total = rect.height + windowH;
      var scrolled = windowH - rect.top;
      var progress = Math.max(0, Math.min(1, scrolled / total));

      var mobile = getIpadMobile();
      // Map progress to values
      var rotateX = 20 * (1 - progress);
      var scaleFrom = mobile ? 0.75 : 1.05;
      var scaleTo = mobile ? 0.95 : 1;
      var scale = scaleFrom + (scaleTo - scaleFrom) * progress;
      var translateY = -100 * progress;

      ipadCard.style.transform = 'rotateX(' + rotateX + 'deg) scale(' + scale + ')';
      ipadHeader.style.transform = 'translateY(' + translateY + 'px)';
      ipadTicking = false;
    }

    function onIpadScroll() {
      if (!ipadTicking) {
        requestAnimationFrame(updateIpadTransform);
        ipadTicking = true;
      }
    }

    window.addEventListener('scroll', onIpadScroll, { passive: true });
    updateIpadTransform();
  }

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
});
