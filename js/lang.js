// Language Switcher + Burger Menu — Sochamphea Portfolio
(function () {
  const STORAGE_KEY = 'soso-lang';

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || 'en';
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function applyLang(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
      el.innerHTML = lang === 'fr' ? el.getAttribute('data-fr') : el.getAttribute('data-en');
    });
    const btn = document.getElementById('lang-switch');
    if (btn) {
      btn.querySelector('.lang-en').classList.toggle('lang-active', lang === 'en');
      btn.querySelector('.lang-fr').classList.toggle('lang-active', lang === 'fr');
    }
    // Update mobile lang buttons
    document.querySelectorAll('.mobile-lang button').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
    document.documentElement.lang = lang;
  }

  function isSubpage() {
    return window.location.pathname.includes('/pages/');
  }

  function buildBurgerMenu(nav) {
    const root = isSubpage() ? '../' : '';
    const lang = getLang();

    // Detect active page
    const path = window.location.pathname;
    const isDesign = path.includes('design');
    const isCraft = path.includes('craft');
    const isContact = path.includes('contact');
    const isProfile = !isDesign && !isCraft && !isContact;

    // Burger button
    const burger = document.createElement('button');
    burger.className = 'burger-btn';
    burger.setAttribute('aria-label', 'Menu');
    burger.innerHTML = '<span></span><span></span><span></span>';
    nav.appendChild(burger);

    // Mobile overlay menu
    const menu = document.createElement('div');
    menu.className = 'mobile-menu';
    menu.innerHTML = `
  <button class="mobile-menu-close" aria-label="Fermer le menu">✕</button>
  <a href="${root}index.html" ...
      <a href="${root}index.html" ${isProfile ? 'class="active"' : ''}>
        <span data-en="Profile" data-fr="Profil">${lang === 'fr' ? 'Profil' : 'Profile'}</span>
      </a>
      <a href="${root}design.html" ${isDesign ? 'class="active"' : ''}>Design</a>
      <a href="${root}craft.html" ${isCraft ? 'class="active"' : ''}>
        <span data-en="Craft" data-fr="Création">${lang === 'fr' ? 'Création' : 'Craft'}</span>
      </a>
      <a href="${root}contact.html" ${isContact ? 'class="active"' : ''}>Contact</a>
      <div class="mobile-lang">
        <button data-lang="en" class="${lang === 'en' ? 'active' : ''}">EN</button>
        <span style="color:var(--text-light)">|</span>
        <button data-lang="fr" class="${lang === 'fr' ? 'active' : ''}">FR</button>
      </div>
    `;
    document.body.appendChild(menu);

    menu.querySelector('.mobile-menu-close').addEventListener('click', () => {
  burger.classList.remove('open');
  menu.classList.remove('open');
  document.body.style.overflow = '';
});

    // Toggle burger
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      menu.classList.toggle('open');
      document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu on nav link click
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        menu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Lang buttons in mobile menu
    menu.querySelectorAll('.mobile-lang button').forEach(b => {
      b.addEventListener('click', () => {
        const next = b.dataset.lang;
        setLang(next);
        applyLang(next);
      });
    });
  }

  function init() {
    const lang = getLang();
    const nav = document.querySelector('nav');

    if (nav) {
      // Desktop lang switcher
      const btn = document.createElement('div');
      btn.id = 'lang-switch';
      btn.setAttribute('aria-label', 'Switch language');
      btn.innerHTML = `<span class="lang-en">EN</span><span class="lang-sep">|</span><span class="lang-fr">FR</span>`;
      btn.style.cssText = 'display:flex;align-items:center;gap:4px;cursor:pointer;font-family:"DM Sans",sans-serif;font-size:14px;color:var(--text-body);margin-left:16px;user-select:none;';
      btn.querySelectorAll('.lang-en,.lang-fr').forEach(s => {
        s.style.cssText = 'transition:color 0.2s,font-weight 0.2s;';
      });
      btn.querySelector('.lang-sep').style.cssText = 'color:var(--text-light);';
      btn.addEventListener('click', () => {
        const next = getLang() === 'en' ? 'fr' : 'en';
        setLang(next);
        applyLang(next);
      });
      nav.appendChild(btn);

      // Burger menu
      buildBurgerMenu(nav);
    }

    // Inject CSS for active state
    const style = document.createElement('style');
    style.textContent = `
      #lang-switch .lang-active { color: var(--purple-deep); font-weight: 600; }
      #lang-switch:hover .lang-en, #lang-switch:hover .lang-fr { color: var(--purple-deep); }
    `;
    document.head.appendChild(style);

    applyLang(lang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
