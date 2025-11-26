/* task1.js - Dynamic Product List Manager (Event Delegation) */
const pname = document.getElementById('pname');
const addProductBtn = document.getElementById('addProduct');
const productList = document.getElementById('productList');

function createProductItem(name){
  const li = document.createElement('li');
  li.innerHTML = `<span class="label">${escapeHtml(name)}</span>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>`;
  return li;
}

function escapeHtml(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

addProductBtn.addEventListener('click', ()=>{
  const name = pname.value.trim();
  if(!name) return alert('Enter product name');
  productList.appendChild(createProductItem(name));
  pname.value = '';
});

// Event delegation for edit/delete and inline editing
productList.addEventListener('click', (e)=>{
  const btn = e.target;
  const li = btn.closest('li');
  if(!li) return;
  if(btn.classList.contains('delete')){
    li.remove();
  } else if(btn.classList.contains('edit')){
    enterEditMode(li);
  }
});

// click outside to auto-save: listen to document
document.addEventListener('click', (e)=>{
  // if any li is in edit mode and click outside that li, save it
  const editing = productList.querySelector('li.editing');
  if(editing && !editing.contains(e.target)){
    exitEditMode(editing, true);
  }
});

function enterEditMode(li){
  if(li.classList.contains('editing')) return;
  li.classList.add('editing');
  const label = li.querySelector('.label');
  const text = label.textContent;
  const input = document.createElement('input');
  input.value = text;
  input.style.minWidth = '200px';
  label.replaceWith(input);
  input.focus();

  // save on enter key
  input.addEventListener('keydown', (ev)=>{
    if(ev.key === 'Enter') exitEditMode(li, true);
    if(ev.key === 'Escape') exitEditMode(li, false);
  });
}

function exitEditMode(li, save){
  if(!li.classList.contains('editing')) return;
  const input = li.querySelector('input');
  const newLabel = document.createElement('span');
  newLabel.className = 'label';
  newLabel.textContent = save ? input.value.trim() || 'Unnamed' : input.defaultValue;
  input.replaceWith(newLabel);
  li.classList.remove('editing');
}
