import renderGameField from "./renderGameField";
import renderPages from "./renderPages";


const listener = () => {
    document.addEventListener('click', e => {
        console.log(e.target);
        if (e.target.closest('.js-categories')) {
            let attr = e.target.closest('.js-categories').getAttribute('data-category');
            renderPages('pages/choice', attr);
        } else if (e.target.matches('.arrow-back')) {
            renderPages('pages/main')
        } else if (e.target.matches('.js-start')) {
            renderGameField()
        }
    })
}

export default listener
