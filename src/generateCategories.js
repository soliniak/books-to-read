import { categories } from './data'

const generateCategories = () => {    
    const categoriesContainer = document.querySelector('select.category');
    const categoriesFromLoaclStorage = JSON.parse(localStorage.getItem('bookCategories')) || categories;

    categoriesContainer.innerHTML = '';

    categoriesFromLoaclStorage.forEach((category) => {
        const categoryTemplate = `
            <option value=${category}>${category}</option>
        `;
        categoriesContainer.innerHTML += categoryTemplate;
    });
}

export default generateCategories;