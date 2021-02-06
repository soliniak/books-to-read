import { categories } from './data';
import generateCategories from './generateCategories';
import handleMessage from './handleMessage';

const addCategory = () => {
    const addCategoryForm = document.querySelector('.add-category__form');
    const categoriesFromLoaclStorage = JSON.parse(localStorage.getItem('bookCategories')) || categories;

    addCategoryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        new FormData(e.target);
    });
    
    addCategoryForm.addEventListener('formdata', (e) => {
        let data = e.formData;
        let addedFlag = false;

        for (const value of data.values()) {
            if(!categoriesFromLoaclStorage.includes(value.toString().toLowerCase())) {
                categoriesFromLoaclStorage.push(value.toString().toLowerCase());
                addedFlag = true;
                localStorage.setItem('bookCategories', JSON.stringify(categoriesFromLoaclStorage));
                generateCategories(value.toString().toLowerCase());
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
    });
};

export default addCategory;