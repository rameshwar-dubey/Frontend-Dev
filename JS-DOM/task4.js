/* task4.js - Theme switcher using setAttribute */
const themeBtns = document.querySelectorAll('.themeBtn');
const curThemeEl = document.getElementById('currentTheme');

function applyTheme(t){
  document.body.setAttribute('data-theme', t);
  // Also add classes (but requirement: setAttribute used to store theme)
  document.body.className = ''; // reset classes
  document.body.classList.add('theme-'+t);
  curThemeEl.textContent = t;
}

themeBtns.forEach(b=> b.addEventListener('click', ()=> applyTheme(b.dataset.theme)));

// Simple CSS via attribute - small runtime tweak for demo
const style = document.createElement('style');
style.textContent = `body[data-theme="dark"]{background:#111;color:#f5f5f5} body[data-theme="blue"]{background:#e9f1ff;color:#022c6b}`;
document.head.appendChild(style);
applyTheme('light');
