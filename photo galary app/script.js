const gallery = document.querySelector('.gallery');

const photos = [
  { src: 'aurora-lights.jpg', alt: 'Photo 1' },
  { src: 'bird.jpg', alt: 'Photo 2' },
  { src: 'elephant.jpg', alt: 'Photo 3' },
  { src: 'field.jpg', alt: 'Photo 4' },
  { src: 'tree-sunset.jpg', alt: 'Photo 5' },
  { src: 'sea-tertle.jpg', alt: 'Photo 6' }
];

photos.forEach(photo => {
  const img = document.createElement('img');
  img.src = photo.src;
  img.alt = photo.alt;
  gallery.appendChild(img);
});
