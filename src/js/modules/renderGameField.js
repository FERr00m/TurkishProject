import Game from './Game';
import database from '@/database/db'

const renderGameField = () => {
    let game = new Game(database, 'Животные')

    console.log(game);
    game.start()
    game.about();
}

export default renderGameField
