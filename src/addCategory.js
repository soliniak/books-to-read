import { categories } from './data';
import generateCategories from './generateCategories';
import handleMessage from './handleMessage';

const addCategory = () => {
    const addCategoryForm = document.querySelector('.add-category__form');
    const categoriesFromLoaclStorage = JSON.parse(localStorage.getItem('bookCategories')) || categories;

    addCategoryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let data = new FormData(e.target);
        let addedFlag = false;

        for (const value of data.values()) {
            const newCategory = value.toString().toLowerCase();
            
            if(!categoriesFromLoaclStorage.includes(newCategory)) {
                categoriesFromLoaclStorage.push(newCategory);

                addedFlag = true;
                localStorage.setItem('bookCategories', JSON.stringify(categoriesFromLoaclStorage));

                generateCategories(newCategory);
            }
        };
        
        if(addedFlag) {
            e.target.reset();

            const addCategoryContainer = document.querySelector('.add-category__container');
            addCategoryContainer.classList.remove('modal-active');

            handleMessage('Pomyślnie dodano kategorię.');
        } else {
            handleMessage('Wybrana kategoria już istnieje.');
        }

        addCategory();
    }, {once: true});
};

export default addCategory;