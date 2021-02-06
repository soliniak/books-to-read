import generateTable from './generateTable';
import editBook from './editBook';

const deleteBook = () => {
    const booksFromLoaclStorage = JSON.parse(localStorage.getItem('booksToRead'));

    const deleteBtns = document.querySelectorAll('.delete-book');

    deleteBtns.forEach(( btn ) => {
        btn.addEventListener('click', (e) => {
            booksFromLoaclStorage.forEach((book, index) => {
                if(book.id === Number(e.target.dataset.id)) {
                    booksFromLoaclStorage.splice(index, 1);
                    localStorage.setItem('booksToRead', JSON.stringify(booksFromLoaclStorage));
                    generateTable();   
                    editBook();
                }
            });        
        });
    });
};

export default deleteBook;