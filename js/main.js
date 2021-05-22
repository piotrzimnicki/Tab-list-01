let navWrap = document.querySelector('.nav-wrap')
let navBtns = document.querySelectorAll('.btn');
let tabsWrap = document.querySelector('.tabs-wrap');
let tabs = document.querySelectorAll('.tab');

function addEvent () {
    for (const navBtn of navBtns) {
        navBtn.addEventListener('click',changeTab);
    }
}
const changeTab = (e) => {
    let btn = e.target
    let target = btn.dataset.target;
    tabs.forEach (tab => tab.style.display ="none")
    navBtns.forEach (navBtn => navBtn.classList.remove('active'))
    document.getElementById(target).style.display = "block";
    document.querySelector(`[data-target=${target}]`).classList.add('active')
}

window.onload = addEvent();