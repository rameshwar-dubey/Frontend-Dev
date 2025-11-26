/* task9.js - Form submit blocker with live errors */
const blockForm = document.getElementById('blockForm');
const fName = document.getElementById('fName');
const fEmail = document.getElementById('fEmail');
const fPass = document.getElementById('fPass');
const errName = document.getElementById('errName');
const errEmail = document.getElementById('errEmail');
const errPass = document.getElementById('errPass');
const formMessage = document.getElementById('formMessage');

function validateAll(){
  let ok = true;
  errName.textContent = ''; errEmail.textContent = ''; errPass.textContent = '';
  if(!fName.value.trim()){ errName.textContent = 'Name required'; ok=false; }
  if(!fEmail.value.includes('@')){ errEmail.textContent = 'Enter valid email with @'; ok=false; }
  if(fPass.value.length < 6){ errPass.textContent = 'Password min 6 chars'; ok=false; }
  return ok;
}

blockForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  if(validateAll()){
    formMessage.textContent = 'Form Submitted Successfully';
    formMessage.classList.remove('hidden');
  } else {
    formMessage.classList.add('hidden');
  }
});

// live error removal on input
[fName, fEmail, fPass].forEach(inp=> inp.addEventListener('input', ()=>{
  validateAll();
}));
