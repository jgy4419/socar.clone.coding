const open_menu = document.querySelector('header .material-icons');
const movie_menu = document.querySelector('header .main_menu');
const opacitys = document.querySelector('video');

open_menu.addEventListener('click', function(){
    movie_menu.style.display = "block";
    movie_menu.style.zIndex = 2;
    opacitys.style.opacity = .8;
})
opacitys.addEventListener('click', function(){
    movie_menu.style.display = "none";
    opacitys.style.opacity = 1;
})