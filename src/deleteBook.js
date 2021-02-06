import generateTable from './generateTable';
import handleMessage from './handleMessage';

const deleteBook = (index) => {
    const booksFromLoaclStorage = JSON.parse(localStorage.getItem('booksToRead'));

    const deleteBtns = document.querySelectorAll('.delete-book');


    if(index) {
        booksFromLoaclStorage.splice(index, 1);
        localStorage.setItem('booksToRead', JSON.stringify(booksFromLoaclStorage));
        generateTable();          
    } else {
        deleteBtns.forEach(( btn ) => {
            btn.addEventListener('click', (e) => {
                booksFromLoaclStorage.forEach((book, index) => {
                    if(book.id === Number(e.target.dataset.id)) {
                        if(handleMessage(`Czy na pewno chcesz usunąć ${book.title}?`, index)) {
                            booksFromLoaclStorage.splice(index, 1);
                            localStorage.setItem('booksToRead', JSON.stringify(booksFromLoaclStorage));
                            generateTable();   
                        }
                    }
                });        
            }, {once: true});
        });
    }
};

export default deleteBook;