import { books } from './data';
import generateTable from './generateTable';
import handleMessage from './handleMessage';
import generateCategories from './generateCategories';

const addBook = () => {
    const addBookForm = document.querySelector('.add-book__form');
    const addBookContainer = document.querySelector('.add-book__container');

    addBookForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const booksFromLoaclStorage = JSON.parse(localStorage.getItem('booksToRead')) || books;
        let data = new FormData(e.target);

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

        e.target.reset();
        generateTable();
        generateCategories();
        addBook();

    }, {once: true});
};

export default addBook;