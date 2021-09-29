import burgerMenu from './burgerMenu';
import renderCategories from './renderCategories';
import getData from './getData'
import database from '@/database/db';
import $ from 'jquery';
import renderChoice from './renderChoice';

const renderPages = (page, attr = null) => {

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
                renderChoice(database, attr);
            }


        }
    });
}

export default renderPages;
