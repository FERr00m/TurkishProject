class Game {
    constructor(database, category, wordСount, progressbar, gameContent) {
        this.database = database[0][category];
        this.category = category;
        this.wordСount = +wordСount;
        this.progressbar = progressbar;
        this.gameContent = gameContent;
        this.stepProgress = 100 / +wordСount;
    }

    start() {
        console.log('The game is start!');
        let wordsOrder = this.getWordsRandom();
console.log(wordsOrder);
        for (let x = 0; x < wordsOrder.length; x++) {
            console.log(wordsOrder[x]);
            this.database.words.forEach(word => {
                if (word.eng === wordsOrder[x]) {
                    console.log('YEs', word.eng);
                }

            })
        }
        return
    }

    about() {
        console.log('База данных', this.database);
        console.log('Категория', this.category);
        console.log('Количество слов для игры', this.wordСount);
        console.log('step', this.stepProgress);
        return
    }

    getWordsRandom() {

        /**
         * Функция генерация случайного числа от min до max включительно
         *
         * @param {number} min
         * @param {number} max
         * @returns {number}
         */
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * ((max + 1) - min)) + min;
        }

        const dataWords = this.database.words,  // Исходный массив слов
            arrWords = [];  // Будущий массив случайных слов

        let counter = 0,
            randomNumber = getRandomInt(1, dataWords.length),
            word = dataWords[randomNumber - 1]; // минус один для работы с массивами

        arrWords.push(word.eng);
        counter++

        while (counter < this.wordСount) {
            randomNumber = getRandomInt(1, dataWords.length);
            word = dataWords[randomNumber - 1];
            if (arrWords.includes(word.eng)) {
                continue;
            }

            arrWords.push(word.eng);  // минус один для работы с массивами
            counter++
        }

        console.log('Итоговый массив слов', arrWords);
        return arrWords;


    }

    renderField() {
        return
    }

    renderWord() {
        return
    }

    changeProgressbar() {
        let progress = this.progressbar.style.width.trim('%');
            progress = +progress.replace('%', '');
        let int = setInterval(() => {

            progress += this.stepProgress;
            if (progress >= 100) {
                clearInterval(int)
            }
            this.progressbar.style.width = `${progress}%`;
        }, 1000)
        return

    }

    listener() {
        this.gameContent.addEventListener('click', e => {
            console.log('contentGame', e.target);
        })
        return
    }
}

export default Game
