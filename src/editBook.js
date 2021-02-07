import generateCategories from './generateCategories';
import generateTable from './generateTable';
import handleMessage from './handleMessage';
import { books } from './data';

const editBook = (editIndex) => {
    const editBookContainer = document.querySelector('.edit-book__container');
    const editBookBtns = document.querySelectorAll('button.edit-book');
    const saveBookBtn = document.querySelector('.btn__save-book');
    const titleInput = editBookContainer.querySelector('.edit-title');
    const authorInput = editBookContainer.querySelector('.edit-author');
    const categoryInput = editBookContainer.querySelector('.edit-category');
    const priorityInput = editBookContainer.querySelector('.edit-priority');
    
    let bookToEdit = '';
    let bookIndex = editIndex || '';

    editBookBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const booksFromLoaclStorage = JSON.parse(localStorage.getItem('booksToRead')) || books;

            generateCategories();
            editBookContainer.classList.add('modal-active');

            booksFromLoaclStorage.forEach((book, index) => {
                if(book.id === Number(e.target.dataset.id)) {
                    bookToEdit = booksFromLoaclStorage[index];
                    bookIndex = Number(index);

                    localStorage.setItem('bookEditIndex', bookIndex);
                }
            });

            let { title, author, category, priority } = bookToEdit;

            titleInput.value = title;
            authorInput.value = author;
            categoryInput.value = category;
            priorityInput.value = priority;

        });
    });

    saveBookBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const booksFromLoaclStorage = JSON.parse(localStorage.getItem('booksToRead')) || books;

        let { id, addDate } = booksFromLoaclStorage[bookIndex || localStorage.getItem('bookEditIndex')];

        booksFromLoaclStorage[bookIndex || localStorage.getItem('bookEditIndex')] = { 
            id,
            addDate,
            title: titleInput.value,
            author: authorInput.value,
            category: categoryInput.value,
            priority: priorityInput.value
        };

        localStorage.setItem('booksToRead', JSON.stringify(booksFromLoaclStorage));
        generateTable();
        
        handleMessage('Zmiany zostały zapisane.');
        editBookContainer.classList.remove('modal-active');
    }, {once: true});

};

export default editBook;