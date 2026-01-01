document.addEventListener('DOMContentLoaded', function () {
    const row = document.querySelector('.trending-row');
    const prev = document.querySelector('.slider-control.prev');
    const next = document.querySelector('.slider-control.next');

    // One scroll step: approx width of one card + gap
    const cardWidth = 180;   // from .movie-poster flex-basis
    const gap = 32;          // 2rem ≈ 32px at 16px base font
    const step = cardWidth + gap; // 212px scroll each click

    prev.addEventListener('click', () => {
        row.scrollBy({
            left: -step*4,
            behavior: 'smooth'
        });
    });

    next.addEventListener('click', () => {
        row.scrollBy({
            left: step*4,
            behavior: 'smooth'
        });
    });
});


const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');

    btn.addEventListener('click',() => {
        //close others (Netflix style - one open at a time)
        faqItems.forEach(i => {
            if(i != item) i.classList.remove('active');
        });

        // toggle current
        item.classList.toggle('active');
    });
});