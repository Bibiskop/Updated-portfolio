let stars = document.getElementById('stars');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.2 + 'px';
    stars.style.top = value * 0.5 + 'px';
    header.style.top = value * 0.5 + 'px';
})