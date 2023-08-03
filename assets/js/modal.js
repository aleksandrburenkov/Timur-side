'use strict';
const modalBtns = document.querySelectorAll('.btn-contacts');
const modals = document.querySelectorAll('.modal-uslugi');
const body = document.body;
function openModal(elem) {
    elem.classList.add('_modal-active');
    body.classList.add('no-scroll');
}
modalBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let data = e.target.dataset.modalOpen;
        // console.log(data);

        modals.forEach((modal) => {
            let data = e.target.dataset.modalOpen;

            if (modal.dataset.modal === data) {
                openModal(modal);
            }
        });
    });
});
// ======================================================================
function closeModal(e) {
    if (
        e.target.classList.contains('modal-close-wrapper') ||
        e.target.closest('.modal-close-wrapper') ||
        e.target.classList.contains('modal-bg') // закрытие по клику на фон
    ) {
        e.target.closest('.modal-uslugi').classList.remove('_modal-active');
        body.classList.remove('no-scroll');
        document.querySelector('.dropdown-button').innerHTML = 'Тип системы';
        document.querySelector('.main-contacts-phone').value = '';
        document
            .querySelector('.dropdown-button')
            .classList.remove('technical-class');
    }
}
// ======================================================================================
modals.forEach((modal) => {
    modal.addEventListener('click', (e) => closeModal(e));
});

window.addEventListener('keydown', (e) => {
    modals.forEach((modal) => {
        if (e.key === 'Escape' && modal.classList.contains('_modal-active')) {
            modal.classList.remove('_modal-active');
            body.classList.remove('no-scroll');
            document.querySelector('.dropdown-button').innerHTML =
                'Тип системы';
            document
                .querySelector('.dropdown-button')
                .classList.remove('technical-class');
        }
    });
});

// ==========================================================================================

document
    .querySelector('.dropdown-button')

    .addEventListener('click', function () {
        document
            .querySelector('.dropdown-list')
            .classList.toggle('dropdown-list--wisible');

        // this.classList.add('dropdown-button--active');
    });
document.querySelectorAll('.dropdown-list-item').forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
        e.stopPropagation();

        document.querySelector('.dropdown-button').innerHTML = this.innerHTML;
        document
            .querySelector('.dropdown-button')
            .classList.add('technical-class');

        document.querySelector('.dropdown-button').focus();

        document
            .querySelector('.dropdown-list')
            .classList.remove('dropdown-list--wisible');
    });
});

// ===============================================================================
document.addEventListener('click', function (e) {
    if (e.target !== document.querySelector('.dropdown-button')) {
        document
            .querySelector('.dropdown-list')
            .classList.remove('dropdown-list--wisible');
        document
            .querySelector('.dropdown-button')
            .classList.remove('dropdown-button--active');
    }
});
