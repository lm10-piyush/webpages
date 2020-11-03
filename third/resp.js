burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.right-nav')

burger.addEventListener('click', ()=> {
    navbar.classList.toggle('height-res');
    navList.classList.toggle('hide-res');
    rightNav.classList.toggle('hide-res');
    console.log("hello")
})