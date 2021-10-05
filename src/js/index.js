//import styles
import '@/sass/main';
import '@/css/style';

//import database
import database from '@/database/db';

//import main images
import more from '@/img/more';
import burger from '@/img/burger';
import item from '@/img/item';
import favorite from '@/img/favorite'
import arrow from '@/img/arrow';
import close from '@/img/close';
import sound from '@/img/sound';

//import category images
//animals
import plants_and_animals from '@/img/plants_and_animals/plants_and_animals';
import animals from '@/img/plants_and_animals/animals';
import cat from '@/img/plants_and_animals/cat';
import dog from '@/img/plants_and_animals/dog';

//food
import food from '@/img/food/food';
import banan from '@/img/food/banan';

//import js
// import burgerMenu from "./modules/burgerMenu";
// import renderCategories from './modules/renderCategories';
// import getData from './modules/getData'
import renderPages from './modules/renderPages';
import listener from './modules/listener';



//launch js modules
renderPages('pages/main');
listener();
//burgerMenu();
//renderCategories(database);
// getData(database);

// document.addEventListener('click', () => {
//     renderPages()
// })
