const handleMessage = (message) => {
    const messageContainer = document.querySelector('.modal-message');
    const messageDiv = messageContainer.querySelector('.message');

    messageDiv.textContent = message;
    messageContainer.classList.add('modal-active');

    setTimeout(() => {
        messageContainer.classList.remove('modal-active');
        // messageDiv.textContent = '';
    }, 2000);
};

export default handleMessage;