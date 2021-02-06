import generateTable from './generateTable';

const sortTable = () => {
    const sortBtns = document.querySelectorAll('.btn-sort');

    sortBtns.forEach((btn) => {
        let sortDirection = true;
        btn.addEventListener('click', (e) => {

            sortDirection = !sortDirection;

            localStorage.setItem('sortBy', e.target.dataset.sort)
            generateTable('', localStorage.getItem('sortBy') || e.target.dataset.sort, sortDirection ? 'asc' : 'desc');
        });
    });
};

export default sortTable;


