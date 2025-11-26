/* task8.js - Custom dropdown using capturing phase */
const dd = document.getElementById('customDropdown');
const ddButton = document.getElementById('ddButton');
const ddOptions = document.getElementById('ddOptions');

ddButton.addEventListener('click', (e)=>{
  ddOptions.classList.toggle('hidden');
});

// clicking options updates button text
ddOptions.addEventListener('click', (e)=>{
  if(e.target.classList.contains('option')){
    ddButton.textContent = e.target.textContent;
    ddOptions.classList.add('hidden');
  }
});

// close on outside click using capturing phase
document.addEventListener('click', (e)=>{
  if(!dd.contains(e.target)){
    ddOptions.classList.add('hidden');
  }
}, true); // capture = true
