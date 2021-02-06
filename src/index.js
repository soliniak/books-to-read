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
import sortTable from './sortTable';
import editBook from './editBook';
import deleteBook from './deleteBook';
import exportToPdf from './exportToPdf';

generateTable();
generateCategories();
addBook();
addCategory();
handleModals();
filterTable();
sortTable();
editBook();
deleteBook();
exportToPdf();
