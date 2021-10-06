import Game from './Game';
import database from '@/database/db';
import listener from './listener';

const gameField = obj => {

    const gameContent = document.getElementById('game-content'),
        progressbar = body.querySelector('.js-progressbar'),
        { category, wordCount } = obj,
        game = new Game(database, category, wordCount, progressbar, gameContent);



    game.start()
    game.about();

    game.changeProgressbar()
    game.listener()

}

export default gameField
