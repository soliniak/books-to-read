import { categories } from './data'

const generateCategories = () => {    
    const categoriesContainers = document.querySelectorAll('select.category');
    const categoriesFromLoaclStorage = JSON.parse(localStorage.getItem('bookCategories')) || categories;

    categoriesContainers.forEach((categoriesContainer) => {
        categoriesContainer.innerHTML = '';
        
        categoriesFromLoaclStorage.forEach((category) => {
            const categoryTemplate = `
                <option value="${category}">${category}</option>
            `;
            
            categoriesContainer.innerHTML += categoryTemplate;
        });
    });
}

export default generateCategories;