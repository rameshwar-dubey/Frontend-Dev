/* task7.js - Mouse path & coordinates logger */
const box = document.getElementById('trackBox');
const cx = document.getElementById('cx');
const cy = document.getElementById('cy');

box.addEventListener('mousemove', (e)=>{
  const rect = box.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  cx.textContent = e.clientX;
  cy.textContent = e.clientY;
});

box.addEventListener('dblclick', (e)=>{
  const rect = box.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const dot = document.createElement('div');
  dot.className = 'dot';
  dot.style.left = x + 'px';
  dot.style.top = y + 'px';
  box.appendChild(dot);
});
