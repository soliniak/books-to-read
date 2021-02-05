import { categories } from './data';
import generateCategories from './generateCategories';

const addCategory = () => {
    const addCategoryForm = document.querySelector('.add-category__form');
    const addCategoryBtn = document.querySelector('.btn__add-category');
    
    addCategoryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        new FormData(e.target);
    });
    
    addCategoryForm.addEventListener('formdata', (e) => {
        let data = e.formData;
        
        for (const value of data.values()) {
            categories.push(value.toString().toLowerCase());
        };
        
        e.target.reset();
        generateCategories();
    });
};

export default addCategory;