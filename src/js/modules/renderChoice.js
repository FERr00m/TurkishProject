const renderChoice = (database, attr) => {
    const picturesBody = document.getElementById('words'),
        jsChoiceTitle = document.querySelector('.js-choice-title'),
        jsCounter = document.querySelector('.js-counter'),
        words = database[0][attr].words,
        jsCounterRange = document.querySelector('.js-counter-range'),
        jsCounterRangeValue = document.querySelector('.js-counter-range-value');

    jsCounterRange.addEventListener('input', () => {
        jsCounterRangeValue.textContent = jsCounterRange.value;
    });

    jsCounterRange.setAttribute('max', words.length)
    jsChoiceTitle.textContent = database[0][attr].categoryName;
    jsCounter.textContent = words.length;

    picturesBody.innerHTML = '';
    picturesBody.setAttribute('data-category', attr);

    words.forEach(word => {
        picturesBody.insertAdjacentHTML('beforeend', `
        <div class="word-wrap">
            <div class="container">
                <div class="word-body">
                    <img src="${word.img}" width="120" height="70" alt="${word.rus}" data-name="${word.eng}">

                    <div class="word-body__descr">
                        <div class="word-rus">${word.rus}</div>
                        <div class="word-another">${word.turk}</div>
                    </div>

                    <img src="./img/favorite.svg" width="40" height="40" alt="favorite">
                </div>
            </div>
        </div>
        `);
    });



}

export default renderChoice
