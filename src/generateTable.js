import { books } from './data';

const generateTable = (filterBy = '') => {
    const tableBody = document.querySelector('.table__body');
    tableBody.innerHTML = '';

    books
        .filter(( book ) => {
            const {title, author, category} = book;

            return title.toLowerCase().includes(filterBy.toLowerCase())
                || author.toLowerCase().includes(filterBy.toLowerCase())
                || category.toLowerCase().includes(filterBy.toLowerCase())
        })
        .forEach(( book, index ) => {
            const { id, title, author, category, addDate, priority } = book;

            const tableRowTemplate = `
                <tr>
                    <td class="id">${index + 1}</td>
                    <td class="title">${title}</td>
                    <td class="category">${category}</td>
                    <td class="addDate">${addDate}</td>
                    <td class="priority">${priority}</td>
                    <td class="options"></td>
                </tr>
            `;

            tableBody.innerHTML += tableRowTemplate;
        });

    return tableBody;
}

export default generateTable;