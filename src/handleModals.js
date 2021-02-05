const handleModals = () => {
    const closeModalBtns = document.querySelectorAll('.close__modal');

    closeModalBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.target.parentNode.classList.remove('modal-active');
        });
    });

    const openModalBtns = document.querySelectorAll('.open__modal');

    openModalBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            document.querySelector('.'+e.target.dataset.openModal).classList.add('modal-active');
        });
    });

};

export default handleModals;