import generateTable from './generateTable';

const filterTable = () => {
    const filterInput = document.querySelector('.filter-table');

    filterInput.addEventListener('input', (e) => {
        generateTable(e.target.value);
    });
};

export default filterTable;