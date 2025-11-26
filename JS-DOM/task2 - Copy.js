/* task2.js - Live Character Counter with warning behavior */
const ta = document.getElementById('chInput');
const rem = document.getElementById('remaining');
const resetBtn = document.getElementById('resetChar');
const MAX = 100;

function updateCounter(e){
  const val = ta.value || '';
  const left = MAX - val.length;
  rem.textContent = left;
  rem.classList.remove('warning','danger');
  if(left <= 20 && left > 0) rem.classList.add('warning');
  if(left <= 0){ rem.textContent = 0; rem.classList.add('danger'); }
  // prevent further typing when 0 left: handled in keydown
}

ta.addEventListener('input', updateCounter);
ta.addEventListener('keydown', (e)=>{
  if(ta.value.length >= MAX && e.key.length === 1 && !e.ctrlKey && !e.metaKey){
    // block additional character input
    e.preventDefault();
  }
});

resetBtn.addEventListener('click', ()=>{ ta.value = ''; updateCounter(); ta.focus(); });

// initialize
ta.setAttribute('maxlength', MAX);
updateCounter();
