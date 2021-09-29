import renderPages from "./renderPages";

const listener = () => {
    document.addEventListener('click', e => {
        console.log(e.target);
        if (e.target.closest('.js-categories')) {
            let attr = e.target.closest('.js-categories').getAttribute('data-category');
            renderPages('pages/choice', attr);
        } else if (e.target.matches('.arrow-back')) {
            renderPages('pages/main')
        }
    })
}

export default listener
