import burgerMenu from './burgerMenu';
import renderCategories from './renderCategories';
import database from '@/database/db';
import $ from 'jquery';
import renderChoice from './renderChoice';
import gameField from './gameField';

const renderPages = (page, obj = null) => {

    $.ajax({
        type: "get",
        url: `./${page}.html`,
        data: "data",
        dataType: "html",
        success: function (response) {
            $('#body').html(response)

            if(page === 'pages/main') {
                renderCategories(database);
                burgerMenu();
            } else if (page === 'pages/choice') {
                renderChoice(database, obj.attr);
            } else if (page === 'pages/gameField') {
                gameField(obj)
            }


        }
    });
}

export default renderPages;
