const renderCategories = (database) => {
    const picturesBody = document.querySelector('.pictures-body');

    picturesBody.innerHTML = '';
    for (let category in database[0]) {

        picturesBody.insertAdjacentHTML('beforeend', `
        <div class="pictures-body__item js-categories" data-category="${category}">
            <img class="pictures-body__item-img" src="${database[0][category].categoryImg}" width="120" height="70" alt="${database[0][category].categoryName}">

            <div class="pictures-body__item-name">${database[0][category].categoryName}</div>
        </div>
        `)
    }
}

export default renderCategories
