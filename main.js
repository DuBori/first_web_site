const toggleBtn = document.querySelector('.hbr__toogle');
const menu = document.querySelector('.menu');
const sns = document.querySelector('.sns__img');

const swapbtn = document.querySelector('.nxt_btn');
const swapimg = document.getElementById('main_i');

var img_list =["./img/ante-samarzija-lsmu0rUhUOk-unsplash.jpg","./img/AKR20150416051900848_01_i_P4.jpg",
"./img/nathan-dumlao-nBJHO6wmRWw-unsplash.jpg","./img/jeremy-yap-jn-HaGWe4yw-unsplash.jpg"];

var cnt = 1;

toggleBtn.addEventListener('click',() =>{
    menu.classList.toggle('active');
    sns.classList.toggle('active');
});


swapbtn.addEventListener('click',() =>{
    if(cnt < img_list.length){
        swapimg.src = img_list[cnt];
        cnt= cnt + 1;
    }else{
        cnt = 0;
        alert('처음');
        swapimg.src = img_list[cnt];
    }
});

