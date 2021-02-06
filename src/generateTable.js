import {countBooks, countBooksByCategories} from './countBooksAndCategories';
import { books, categories } from './data';
import deleteBook from './deleteBook';
import editBook from './editBook';

const generateTable = (filter = '', sort = localStorage.getItem('sortBy') || sort, sortDirection = sortDirection || 'asc') => {
    const booksFromLoaclStorage = JSON.parse(localStorage.getItem('booksToRead')) || books;
    const categoriesFromLoaclStorage = JSON.parse(localStorage.getItem('bookCategories')) || categories;
    const tableBody = document.querySelector('.table__body');

    tableBody.innerHTML = '';

    if(booksFromLoaclStorage.length) {
        booksFromLoaclStorage
            .filter(( book ) => {
                const {priority, author, category} = book;
                
                return priority.toLowerCase().includes(filter.toLowerCase())
                    || author.toLowerCase().includes(filter.toLowerCase())
                    || category.toLowerCase().includes(filter.toLowerCase())
            })
            .sort((bookA, bookB) => {
                if(sort) {
                    if(sort === 'addDate') {
                        if(sortDirection === 'asc') {
                            return new Date(bookA[sort]) < new Date(bookB[sort]) ? -1 : 1;
                        } else {
                            return new Date(bookA[sort]) > new Date(bookB[sort]) ? -1 : 1;
                        }
                    } else {
                        if(sortDirection === 'asc') {
                            return bookA[sort].toLowerCase() < bookB[sort].toLowerCase() ? -1 : 1;
                        } else {
                            return bookA[sort].toLowerCase() > bookB[sort].toLowerCase() ? -1 : 1;
                        }
                    }
                }
            })
            .forEach(( book, index ) => {
                const { id, title, author, category, addDate, priority } = book;
                
                const tableRowTemplate = `
                <tr>
                    <td class="id">${index + 1}</td>
                    <td class="title">${title}</td>
                    <td class="category">${category}</td>
                    <td class="addDate">${addDate}</td>
                    <td class="priority">${priority}</td>
                    <td class="options" data-html2canvas-ignore="true">
                        <button class="delete-book" data-id="${id}" title="Usuń ${title}"><i class="fas fa-trash-alt"></i></button>
                        <button class="edit-book" data-id="${id}" title="Edytuj ${title}"><i class="fas fa-edit"></i></button>
                    </td>
                </tr>
                `;
                
                tableBody.innerHTML += tableRowTemplate;
            });
    } else {
        const tableRowTemplate = `
            <tr>
                <td class="no-records-info" colspan="6"> Brak wpisów. Dodaj książkę do przeczytania. </td>
            </tr>
        `;

        tableBody.innerHTML += tableRowTemplate;
    }

    deleteBook();
    editBook();
    countBooks(booksFromLoaclStorage);
    countBooksByCategories(booksFromLoaclStorage, categoriesFromLoaclStorage);

    return tableBody;
}

export default generateTable;