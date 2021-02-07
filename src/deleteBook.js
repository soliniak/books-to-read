import generateTable from './generateTable';
import handleMessage from './handleMessage';

const deleteBook = (index) => {
    const booksFromLoaclStorage = JSON.parse(localStorage.getItem('booksToRead'));

    if(index !== undefined) {
        booksFromLoaclStorage.splice(index, 1);
        localStorage.setItem('booksToRead', JSON.stringify(booksFromLoaclStorage));
<<<<<<< HEAD
        generateTable(localStorage.getItem('filterBy') || '', localStorage.getItem('sortBy') || '');
=======
        generateTable(localStorage.getItem('filterBy'), localStorage.getItem('sortBy'));
>>>>>>> 785812e9c13a64a9ae8fb801fc238fba0a3ee0ed
    } else {
        const deleteBtns = document.querySelectorAll('.delete-book');
        
        deleteBtns.forEach(( btn ) => {
            btn.addEventListener('click', (e) => {
                booksFromLoaclStorage.forEach((book, index) => {
                    if(book.id === Number(e.target.dataset.id)) {
                        handleMessage(`Czy na pewno chcesz usunąć "${book.title}"?`, index);
<<<<<<< HEAD
                        generateTable(localStorage.getItem('filterBy') || '', localStorage.getItem('sortBy') || '');
=======
                        generateTable(localStorage.getItem('filterBy'), localStorage.getItem('sortBy'));
>>>>>>> 785812e9c13a64a9ae8fb801fc238fba0a3ee0ed
                    }
                });        
            }, {once: true});
        });
    }
};

export default deleteBook;