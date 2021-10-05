import Game from './Game';
import database from '@/database/db'

const renderGameField = () => {
    const category = document.getElementById('words').getAttribute('data-category'),
        body = document.getElementById('body'),
        game = new Game(database, category);

        body.innerHTML = `
            <!-- Header -->
            <header class="game-header">
                <div class="container game-container">
                    <img class="js-close" src="./img/close.svg" width="30" height="30">

                    <div class="counter-table">
                        <div class="counter-table__win js-counter-win">0</div>
                        <div class="counter-table__loose js-counter-loose">0</div>
                    </div>

                    <img class="js-sound" src="./img/sound.svg" width="35" height="30">
                </div>
            </header>
            <!-- End Header -->
            <!-- Main -->
            <main class="main">
                <div class="container">
                    <!-- Section Main-content -->
                    <section class="content">

                    </section>
                    <!-- End Section Main-content -->
                </div>
            </main>
            <!-- End Main -->
        `;
    console.log(game);
    game.start()
    game.about();
}

export default renderGameField
