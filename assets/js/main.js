'use strict';

const navBtn = document.querySelector('.header__toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.header');
// const add = document.getElementsByClassName('_active');
// console.log(add);
// ================PROGECT CARD================================================================
const circleTab = document.querySelectorAll('.project-circle');
const contentInfo = document.querySelectorAll('.project-info');
const circleBefore = document.querySelectorAll('.project-circle::before');
const progectContentItems = document.querySelectorAll(
    '.project-content-row-item'
);
function clearActiveItemMenu() {
    circleTab.forEach(function (item) {
        if (item.classList.contains('circle-before')) {
            item.classList.remove('circle-before');
        }
    });
}
circleTab.forEach(function (items) {
    items.addEventListener('click', function () {
        clearActiveItemMenu();

        items.classList.add('circle-before');
    });
});

circleTab.forEach((circleTabs) => {
    circleTabs.addEventListener('click', (e) => {
        let data = e.target.dataset.tabName;

        // console.log(circleTabs);
        // console.log(e.target);

        contentInfo.forEach((contentInfos) => {
            if (contentInfos.dataset.infoName == data) {
                contentInfos.classList.toggle('is-active');

                // console.log(contentInfos);
                // console.log(e.target);
            } else contentInfos.classList.remove('is-active');
        });
        progectContentItems.forEach((progectContent) => {
            if (progectContent.dataset.rowName == data) {
                progectContent.classList.toggle('padding');
            } else progectContent.classList.remove('padding');
        });
    });
});

// ================PROGECT CARD================================================================
navBtn.onclick = function () {
    nav.classList.toggle('header__mobile');
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('no-scroll');
};
// ======================================================================

// =======================================================================================
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true, //Зацикливаем слайдер
        margin: 30, //Отступ от картино если выводите больше 1
        nav: false, //Отключил навигацию
        autoplay: true, //Автозапуск слайдера
        center: true,
        startPosition: 1,
        dots: true,
        dotsEach: true,
        smartSpeed: 3000, //Время движения слайда
        autoplayTimeout: 5000, //Время смены слайда
        autoHeight: true,
        responsive: {
            //Адаптация в зависимости от разрешения экрана
            320: {
                items: 1,
                center: false,
                dots: false,
            },
            768: {
                items: 2,
                center: false,
                margin: 15,
            },
            1024: {
                items: 3,
            },
            1440: {
                items: 3,
            },
        },
    });
});
// ==========================================================================================
//=================================TAB SERVISES============================================
let tab = function () {
    const tabNav = document.querySelectorAll('.tabs-nav__item');
    const tabContent = document.querySelectorAll('.tabs-content__item');
    let tabName;

    tabNav.forEach((item) => {
        item.addEventListener('click', selectTabNav);
    });
    function selectTabNav() {
        tabNav.forEach((item) => {
            item.classList.remove('is-active');
        });

        this.classList.add('is-active');

        tabName = this.getAttribute('data-tab-name');

        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach((item) => {
            item.classList.contains(tabName)
                ? item.classList.add('is-active')
                : item.classList.remove('is-active');
        });
    }
};
tab();
//=================================TAB SERVISES============================================

// ======================PRELOADER========================================================

let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    mask.classList.add('hide');

    setInterval(() => {
        mask.remove();
    }, 600);
});
