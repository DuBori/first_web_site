const toggleBtn = document.querySelector('.hbr__toogle');
const menu_sns = document.querySelectorAll('ul');

const swapbtn = document.querySelector('.nxt_btn');
const swapimg = document.getElementById('main_i');

const swapback = document.querySelector('.nxt_btn2');
const swapcolor = document.querySelectorAll('.main_txt');

var img_list =["./img/ante-samarzija-lsmu0rUhUOk-unsplash.jpg","./img/AKR20150416051900848_01_i_P4.jpg",
"./img/nathan-dumlao-nBJHO6wmRWw-unsplash.jpg","./img/jeremy-yap-jn-HaGWe4yw-unsplash.jpg"];

var cnt = 1;
var act_var = 'active';
var my_event ={
    // SetToggle funcion on/off
    SetToggle :function(self,x){
        self.addEventListener('click',()=>{
            for (var i in x){
                x[i].classList.toggle(act_var); 
            }   
    })}
};

my_event.SetToggle(toggleBtn,menu_sns);
my_event.SetToggle(swapback,swapcolor);

// main img list function
swapbtn.addEventListener('click',() =>{
    swapimg.src = img_list[cnt];
    if(cnt < img_list.length){
        cnt+=1;
    }else{
        swapimg.src = img_list[0];
        cnt =1;
    }
});


