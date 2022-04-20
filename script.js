'use strict';
const menuBars = document.getElementById('menu-bars');
const overLay = document.getElementById('overlay');

const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');

const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

const navList = [nav1, nav2, nav3, nav4, nav5];
const navReplace = function (dir1, dir2) {
    navList.forEach((nav, i) => nav.classList.replace(`slide-${dir1}-${i + 1}`, `slide-${dir2}-${i + 1}`));

};
const toggleNav = function (e) {

    overLay.classList.toggle('overlay-active');
    if (overLay.classList.contains('overlay-active')) {
        menuBars.classList.toggle('change');
        overLay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        navReplace('out', 'in');
    } else {
        menuBars.classList.toggle('change');
        overLay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        navReplace('in', 'out');
    };
};

menuBars.addEventListener('click', toggleNav);
navList.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
});
