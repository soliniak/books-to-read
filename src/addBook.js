import { books } from './data';
import generateTable from './generateTable';
import editBook from './editBook';
import handleMessage from './handleMessage';

const addBook = () => {
    const addBookForm = document.querySelector('.add-book__form');
    const addBookContainer = document.querySelector('.add-book__container');

    addBookForm.addEventListener('submit', (e) => {
        e.preventDefault();

        new FormData(e.target);
        
        e.target.reset();
        generateTable();
        addBook();
    }, {once: true});
    
    addBookForm.addEventListener('formdata', (e) => {
        const booksFromLoaclStorage = JSON.parse(localStorage.getItem('booksToRead')) || books;
        let data = e.formData;

        let dataHolder = {
            id: Date.now(),
            title: '',
            author: '',
            category: '',
            priority: '',
            addDate: new Date().toLocaleDateString(),
        };

        for (const [key, value] of data.entries()) {
            dataHolder[key] = value.toString();
        };

        booksFromLoaclStorage.push(dataHolder);
        localStorage.setItem('booksToRead', JSON.stringify(booksFromLoaclStorage));
        addBookContainer.classList.remove('modal-active');

        handleMessage('Pomyślnie dodano książkę do listy.')
    }, {once: true});
};

export default addBook;