const burgerMenu = () => {
    try {
        const menu = document.querySelector('.js-navigation');

        document.addEventListener('click', (e) => {
            if (e.target.closest('.js-burger-menu')) {
                menu.classList.add('active-menu');
            } else if (e.target === menu) {
                return;
            } else {
                menu.classList.remove('active-menu');
            }
        });
    } catch (error) {
        console.error(error)
    }

}

export default burgerMenu
