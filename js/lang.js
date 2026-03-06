// Language Switcher — Sochamphea Portfolio
(function () {
  const STORAGE_KEY = 'soso-lang';

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || 'en';
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function applyLang(lang) {
    // Update all translatable elements
    document.querySelectorAll('[data-en]').forEach(el => {
      el.innerHTML = lang === 'fr' ? el.getAttribute('data-fr') : el.getAttribute('data-en');
    });

    // Update switch button appearance
    const btn = document.getElementById('lang-switch');
    if (btn) {
      btn.querySelector('.lang-en').classList.toggle('lang-active', lang === 'en');
      btn.querySelector('.lang-fr').classList.toggle('lang-active', lang === 'fr');
    }

    // Update html lang attribute
    document.documentElement.lang = lang;
  }

  function init() {
    const lang = getLang();

    // Build switch button and insert into nav
    const nav = document.querySelector('nav');
    if (nav) {
      const btn = document.createElement('div');
      btn.id = 'lang-switch';
      btn.setAttribute('aria-label', 'Switch language');
      btn.innerHTML = `<span class="lang-en">EN</span><span class="lang-sep">|</span><span class="lang-fr">FR</span>`;
      btn.style.cssText = 'display:flex;align-items:center;gap:4px;cursor:pointer;font-family:"DM Sans",sans-serif;font-size:14px;color:var(--text-body);margin-left:16px;user-select:none;';

      btn.querySelectorAll('.lang-en, .lang-fr').forEach(span => {
        span.style.cssText = 'transition:color 0.2s,font-weight 0.2s;';
      });
      btn.querySelector('.lang-sep').style.cssText = 'color:var(--text-light);';

      btn.addEventListener('click', () => {
        const current = getLang();
        const next = current === 'en' ? 'fr' : 'en';
        setLang(next);
        applyLang(next);
      });

      nav.appendChild(btn);
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
