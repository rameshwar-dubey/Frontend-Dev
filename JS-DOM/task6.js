/* task6.js - Real-time table filter */
const searchBox = document.getElementById('searchBox');
const table = document.getElementById('studentsTable');
const noResults = document.getElementById('noResults');

searchBox.addEventListener('input', ()=>{
  const q = searchBox.value.trim().toLowerCase();
  const rows = Array.from(table.tBodies[0].rows);
  let visible = 0;
  rows.forEach(r=>{
    const text = r.textContent.toLowerCase();
    const match = text.includes(q);
    r.style.display = match ? '' : 'none';
    if(match) visible++;
  });
  noResults.classList.toggle('hidden', visible>0);
});
