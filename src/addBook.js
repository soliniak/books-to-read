import { books } from './data';
import generateTable from './generateTable';

const addBook = () => {
    const addBookForm = document.querySelector('.add-book__form');

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

        books.push(dataHolder);
        localStorage.setItem('booksToRead', JSON.stringify(books));
        e.target.reset();
        generateTable();
    });
}

export default addBook;