const activeModal = document.getElementById("modal_main");
activeModal.className = "modal modal_active";


const closeModal = document.querySelectorAll(".modal__close");
let arrCloseModal = Array.from(closeModal);

for (let i = 0; i < arrCloseModal.length; i++){
    arrCloseModal[i].onclick = function() {
        let element = arrCloseModal[i].closest(".modal_active");
        element.className = "modal";  
    }
}

const modalSuccess = document.getElementById("modal_success");
const showModal = document.querySelector(".show-success")

showModal.onclick = function(){
    modalSuccess.className = "modal modal_active";
    activeModal.className = "modal";
}    


