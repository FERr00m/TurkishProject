class Game {
    constructor(database, category) {
        this.database = database[0][category];
        this.category = category;
      }

    start() {
        console.log('The game is start!');
        this.renderField();
    }

    about() {
        console.log('База данных', this.database);
        console.log('Категория', this.category);
    }

    renderField() {
        return

    }
}

export default Game
