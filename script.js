// 1. Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.querySelector('.loader');
        if (loader) loader.remove();
    }, 1500);
});

// 2. Modal Lógica
const modal = document.getElementById('project-modal');
const carousel = modal.querySelector('.carousel');
const descText = modal.querySelector('.description p');

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        carousel.innerHTML = '';
        carousel.scrollTo({left: 0,behavior: 'instant'});

        const images = card.dataset.images.split(',');
        images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            carousel.appendChild(img);
        });
        descText.textContent = card.dataset.description;
        modal.classList.add('active');

        requestAnimationFrame(() => {
            carousel.scrollTo({ left: 0, behavior: 'instant'});
        });
    });
});

document.querySelector('.close-btn').addEventListener('click', () => {
    modal.classList.remove('active');
});