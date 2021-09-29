class Game {
    constructor(
        database,
        category
      ) {
        this.database = database;
        this.category = category;
      }

      start() {
console.log('The game is start!');
      }

      about() {
          console.log('База данных', this.database);
          console.log('Категория', this.category);
      }
}

export default Game
