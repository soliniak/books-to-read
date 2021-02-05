import { categories } from './data'

const generateCategories = () => {    
    const categoriesContainer = document.querySelector('select.category');

    categories.forEach((category) => {
        const categoryTemplate = `
            <option value=${category}>${category}</option>
        `;
        categoriesContainer.innerHTML += categoryTemplate;
    });
}

export default generateCategories;