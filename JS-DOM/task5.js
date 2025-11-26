/* task5.js - Image gallery with modal preview */
const gallery = document.getElementById('gallery');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalContent = document.getElementById('modalContent');

// create 6 placeholder images using picsum
for(let i=1;i<=6;i++){
  const img = document.createElement('img');
  img.src = `https://picsum.photos/seed/${i}/120/80`;
  img.style.cursor = 'pointer';
  img.dataset.full = `https://picsum.photos/seed/${i}/800/600`;
  img.addEventListener('click', ()=> openModal(img.dataset.full));
  gallery.appendChild(img);
}

function openModal(src){
  modalContent.innerHTML = `<img src="${src}" style="max-width:100%;height:auto;display:block">`;
  modalBackdrop.classList.remove('hidden');
}

// click outside modal closes it
modalBackdrop.addEventListener('click', ()=> modalBackdrop.classList.add('hidden'));
// clicking inside the modal should not close it
modalContent.addEventListener('click', (e)=> e.stopPropagation());
