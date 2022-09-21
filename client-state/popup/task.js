const activeModal = document.getElementById("subscribe-modal");

if(document.cookie !== 'modal=close'){
    activeModal.classList.add('modal_active');
}
const closeModal = document.querySelector('.modal__close');

closeModal.addEventListener('click', () => {
    activeModal.classList.remove('modal_active');
    document.cookie = 'modal=close';

})






