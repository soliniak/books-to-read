const booksQuantityContainer = document.querySelector('.books__quantity');
const countBooks = (books) => {
    if(books) {
        booksQuantityContainer.innerHTML = `
            Ilość książek do przeczytania w bazie: <span class="quantity-number">${books.length || 0}</span>
        `;
    }
};

const categoriesQuantityContainer = document.querySelector('.categories__quantity');
const countBooksByCategories = (books, categories) => {
    categoriesQuantityContainer.innerHTML = '';

    if(categories.length && books.length) {

        categories.forEach((category) => {
            let categoryCount = 0;
            
            books.forEach((book) => {
                if(book.category === category) {
                    categoryCount++;
                }
            });
            
            categoriesQuantityContainer.innerHTML += `
            ${categoryCount ? `<li> Książki z kategorii ${category}: ${categoryCount} </li>` : ''}
            `;
        });
    }
};

export {countBooks, countBooksByCategories};