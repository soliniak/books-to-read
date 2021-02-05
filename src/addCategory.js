import { categories } from './data';
import generateCategories from './generateCategories';

const addCategory = () => {
    const addCategoryForm = document.querySelector('.add-category__form');
    const categoriesFromLoaclStorage = JSON.parse(localStorage.getItem('bookCategories')) || categories;

    addCategoryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        new FormData(e.target);
    });
    
    addCategoryForm.addEventListener('formdata', (e) => {
        let data = e.formData;
        
        for (const value of data.values()) {
            categoriesFromLoaclStorage.push(value.toString().toLowerCase());
        };
        
        e.target.reset();
        localStorage.setItem('bookCategories', JSON.stringify(categoriesFromLoaclStorage));

        generateCategories();
    });
};

export default addCategory;