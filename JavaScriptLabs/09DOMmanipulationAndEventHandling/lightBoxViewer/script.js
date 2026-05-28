const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close-btn');


galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const thumbSrc = item.getAttribute('src');

    const fullSizeSrc = thumbSrc.replace('-thumbnail', '');
    
    lightboxImage.src = fullSizeSrc;
    lightbox.style.display = 'flex'; 
  });
});

closeBtn.addEventListener('click', (event) => {
  event.stopPropagation(); 
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (event) => {

  if (event.target === lightbox) {
    lightbox.style.display = 'none';
  }
});