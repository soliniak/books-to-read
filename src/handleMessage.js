import deleteBook from './deleteBook';

const handleMessage = (message, index) => {
    const messageContainer = document.querySelector('.modal-message');
    const messageDiv = messageContainer.querySelector('.message');
    const messageConfirm = messageContainer.querySelector('.message-confirm');

    messageConfirm.innerHTML = '';
    messageDiv.textContent = message;
    messageContainer.classList.add('modal-active');

    if(!Number(index)) {
        setTimeout(() => {
            messageContainer.classList.remove('modal-active');
            // messageDiv.textContent = '';
        }, 2000);
    } else {
        messageConfirm.innerHTML = `
            <button class="btn-primary confirm">Tak</button>
            <button class="btn-primary decline">Nie</button>
        `;

        const confirmBtn = document.querySelector('.confirm');
        const declineBtn = document.querySelector('.decline');

        confirmBtn.addEventListener('click', () => {
            deleteBook(index);
            index = '';
            messageContainer.classList.remove('modal-active');
        });

        declineBtn.addEventListener('click', () => {
            messageContainer.classList.remove('modal-active');
        });
    }
};

export default handleMessage;