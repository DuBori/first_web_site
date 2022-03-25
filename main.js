const toggleBtn = document.querySelector('.hbr__toogle');
const menu = document.querySelector('.menu');
const sns = document.querySelector('.sns__img');

toggleBtn.addEventListener('click',() =>{
    menu.classList.toggle('active');
    sns.classList.toggle('active');
});