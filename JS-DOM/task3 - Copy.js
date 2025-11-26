/* task3.js - Multi-step form with validation */
const steps = [document.getElementById('step1'), document.getElementById('step2'), document.getElementById('step3')];
let current = 0;
const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');
const summary = document.getElementById('summary');

function showStep(i){
  steps.forEach((s,idx)=> s.classList.toggle('hidden', idx!==i));
  backBtn.classList.toggle('hidden', i===0);
  nextBtn.textContent = i === steps.length-1 ? 'Finish' : 'Next';
}

function validateStep(i){
  const inputs = steps[i].querySelectorAll('input');
  for(const inp of inputs){
    if(inp.required && !inp.value.trim()) return false;
    if(inp.type === 'email' && inp.value && !/^[^@]+@[^@]+\.[^@]+$/.test(inp.value)) return false;
    if(inp.type === 'password' && inp.value && inp.value.length < 1) return false;
  }
  return true;
}

nextBtn.addEventListener('click', ()=>{
  if(!validateStep(current)){ alert('Please enter valid input for this step.'); return; }
  if(current === steps.length-1){
    // show summary
    summary.innerHTML = '<strong>Summary</strong><br>' +
      'Name: ' + document.getElementById('name').value + '<br>' +
      'Email: ' + document.getElementById('email').value + '<br>' +
      'Password: ' + '*'.repeat(document.getElementById('password').value.length);
    summary.classList.remove('hidden');
  } else {
    current++; showStep(current);
  }
});

backBtn.addEventListener('click', ()=>{ if(current>0){ current--; showStep(current);} });

showStep(0);
