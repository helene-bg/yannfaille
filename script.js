// Tout dans un seul DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {

  // ----- MORE ABOUT ME -----
  const aboutBar = document.getElementById('about-bar');
  const toggleBtn = document.getElementById('about-toggle');
  if (aboutBar && toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const expanded = aboutBar.classList.toggle('expanded');
      toggleBtn.textContent = expanded ? 'LESS ABOUT ME' : 'MORE ABOUT ME';
    });
  }

  // ----- MENU BURGER -----
  const burger = document.getElementById('burger');
  const navList = document.querySelector('#main-nav ul');
  if (burger && navList) {
    burger.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
  }

  // ----- GALERIE -----
  const galleryImgs = document.querySelectorAll('.gallery img');
  if (galleryImgs.length) {
    const viewer = document.createElement('div');
    viewer.id = 'viewer';

    const img = document.createElement('img');
    const caption = document.createElement('p');
    viewer.append(img, caption);
    document.body.appendChild(viewer);

    galleryImgs.forEach(el => {
      el.addEventListener('click', () => {
        img.src = el.src;
        caption.textContent = el.alt || '';
        viewer.style.display = 'flex';
      });
    });

    viewer.addEventListener('click', () => {
      viewer.style.display = 'none';
    });
  }

});
