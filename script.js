'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')

const closeModal = function() {
    modal.classList.add("hidden")
    overlay.classList.add('hidden')
}

for(let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", function() {
        modal.classList.remove("hidden")
        //document.querySelector('.hidden').style.display = "initial";
        overlay.classList.remove('hidden')
    })
}
btnCloseModal.addEventListener("click", closeModal)
overlay.addEventListener("click", closeModal)
//document.addEventListener('keydown', closeModal) -> generic

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
})