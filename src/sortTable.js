import generateTable from './generateTable';

const sortTable = () => {
    const sortBtns = document.querySelectorAll('.btn-sort');

    sortBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            generateTable('', e.target.dataset.sort);
        });
    });
};

export default sortTable;


