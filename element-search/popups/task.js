const activeModal = document.getElementById("modal_main");
activeModal.className = "modal modal_active";

const closeModal = document.querySelectorAll(".modal__close");
let arrCloseModal = Array.from(closeModal);
arrCloseModal[0].onclick = function(){
    activeModal.className = "modal";
}

const modalSuccess = document.getElementById("modal_success");
const showModal = document.querySelector(".show-success")
showModal.onclick = function(){
    modalSuccess.className = "modal modal_active";
}    
arrCloseModal[2].onclick = function(){
    modalSuccess.className = "modal";
    activeModal.className = "modal";
}
