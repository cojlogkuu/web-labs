const introduction = document.querySelector('.introduction');
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    const screenPosition = window.innerHeight;

    if ( screenPosition > introduction.getBoundingClientRect().top + 150 ) {
        introduction.classList.add('show');
    }

    cards.forEach((card) => {
        if ( screenPosition > card.getBoundingClientRect().bottom ) {
            card.classList.add('show');
        }
    });

})