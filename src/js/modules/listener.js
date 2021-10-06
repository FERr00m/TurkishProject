import renderPages from "./renderPages";


const listener = () => {
    document.addEventListener('click', e => {
        console.log(e.target);
        if (e.target.closest('.js-categories')) {
            const attr = e.target.closest('.js-categories').getAttribute('data-category');
            renderPages('pages/choice', {'attr': attr});
        } else if (e.target.matches('.arrow-back')) {
            renderPages('pages/main');
        } else if (e.target.matches('.js-start')) {
            const category = document.getElementById('words').getAttribute('data-category'),
                wordСount = document.querySelector('.js-counter-range').value;
            renderPages('pages/gameField', {'category': category, 'wordCount': wordСount});
        } else if (e.target.matches('.js-close')) {
            renderPages('pages/main');
        }
    })
}

export default listener
