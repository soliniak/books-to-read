import { books } from './data';
import generateTable from './generateTable';

const addBook = () => {
    const addBookForm = document.querySelector('.add-book__form');

    const booksFromLoaclStorage = JSON.parse(localStorage.getItem('booksToRead')) || books;

    addBookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        new FormData(e.target);
    });

    addBookForm.addEventListener('formdata', (e) => {
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
            console.log(key, value)
            dataHolder[key] = value.toString();
        };

        booksFromLoaclStorage.push(dataHolder);

        localStorage.setItem('booksToRead', JSON.stringify(booksFromLoaclStorage));

        console.log('ss')

        e.target.reset();
        generateTable();
    });
}

export default addBook;