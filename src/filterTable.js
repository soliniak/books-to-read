import generateTable from './generateTable';

const filterTable = () => {
    const filterInput = document.querySelector('.filter-table');

    filterInput.addEventListener('input', (e) => {
        localStorage.setItem('filterBy', e.target.value);
        generateTable(localStorage.getItem('filterBy') || e.target.value, localStorage.getItem('sortBy'));
    });
};

export default filterTable;