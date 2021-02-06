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
        let addedFlag = false;

        for (const value of data.values()) {
            if(!categoriesFromLoaclStorage.includes(value.toString().toLowerCase())) {
                categoriesFromLoaclStorage.push(value.toString().toLowerCase());
                addedFlag = true;
            }
        };
        
        if(addedFlag) {
            e.target.reset();
            localStorage.setItem('bookCategories', JSON.stringify(categoriesFromLoaclStorage));
            generateCategories();

            console.log('dodano')
        } else {
            console.log('powtarza się');
        }
    });
};

export default addCategory;