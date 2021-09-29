const burgerMenu = () => {
    try {
        const menu = document.querySelector('.js-navigation'),
            jsBurgerMenu = document.querySelector('.js-burger-menu'),
            closeBtn = document.querySelector('.close-btn');

            closeBtn.addEventListener('click', () => {
                menu.classList.remove('active-menu');
            })

            jsBurgerMenu.addEventListener('click', (e) => {
            if (e.target.closest('.js-burger-menu')) {
                menu.classList.add('active-menu');
            }
        });
    } catch (error) {
        console.error(error)
    }

}

export default burgerMenu
