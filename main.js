const open_menu = document.querySelector('header .material-icons');
const movie_menu = document.querySelector('header .main_menu');
const opacitys = document.querySelector('video');
const change_logo_white = document.querySelector('.logo_white img');
const change_logo_blue = document.querySelector('.logo_blue img');
const opacitys2 = document.querySelector('.main_menu ul .material-icons');

const h1_el = document.querySelector('header>h1');

// 스크롤 이벤트 변수
var currentScrollValue = document.documentElement.scrollTop;
const scrollEvent1 = document.querySelector('section .inner .scrollEvent1');
const scrollEvent2 = document.querySelector('section .inner .scrollEvent2');
const scrollEvent3 = document.querySelector('section .inner .scrollEvent3');
const scrollEvent4 = document.querySelector('section .inner .scrollEvent4');
const blue_box = document.querySelector('.player .player_text .blue_box');



open_menu.addEventListener('click', function(){
    movie_menu.classList.add('click');
    movie_menu.style.zIndex = 2;
    change_logo_white.style.display = 'none';
    change_logo_blue.style.display = 'block';
    opacitys.style.opacity = .7;
})
opacitys2.addEventListener('click', function(){
    movie_menu.classList.remove('click');
    change_logo_white.style.display = 'block';
    change_logo_blue.style.display = 'none';
    opacitys.style.opacity = 1;
})

window.onload = h1_el.classList.add('event');

// 스크롤 연습
document.addEventListener('scroll', function(){
    var currentScrollValue = document.documentElement.scrollTop;
    console.log('currentScrollValue is ' + currentScrollValue);
    if(currentScrollValue > 200){
        scrollEvent1.classList.add('event');
    }
    if(currentScrollValue > 900){
        scrollEvent2.classList.add('event');
    }
    if(currentScrollValue > 2000){
        scrollEvent3.classList.add('event');
    }
    if(currentScrollValue > 3200){
        scrollEvent4.classList.add('event');
    }
    if(currentScrollValue > 4000){
        blue_box.classList.add('event');
    }
})

