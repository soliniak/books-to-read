import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import './style.sass';
import generateTable from './generateTable';
import generateCategories from './generateCategories';
import addBook from './addBook';
import addCategory from './addCategory';
import handleModals from './handleModals';
import filterTable from './filterTable';

generateTable();
generateCategories();
addBook();
addCategory();
handleModals();
filterTable();