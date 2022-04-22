const modal = function() {

    const source = document.querySelector('.modalJS');

    if (modal) {
        const modal = document.querySelector('.modal');
        const closeModal = document.querySelector('.modal__close');
    
        source.addEventListener('click', e => {
            e.preventDefault();
            let picture = source.nextElementSibling;
            console.log(picture.src);
            modal.classList.add('active');
        });
    
        closeModal.addEventListener('click', e => {
            e.preventDefault();
            modal.classList.remove('active');
        });    
    }
}

export default modal;
