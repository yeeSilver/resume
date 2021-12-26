const btn_toggle = document.querySelector('.btn-toggle-menu');
const list_toggle_menu = document.querySelector('.list-toggle-menu');

btn_toggle.addEventListener('click', function(){
    console.log(list_toggle_menu.style.display);
    if (list_toggle_menu.style.display ==='none'){
        list_toggle_menu.style.display ='flex';
    }else{
        list_toggle_menu.style.display ='none';
        }
})

//클래스로 토글
const mode = document.querySelectorAll('#mode');
const modeImg = document.querySelector('.btn-menu-mode img');
const body = document.body;
mode.addEventListener('click', function(){
    if(!body.classList.contains('dark')){
        console.log('light')
        body.classList.add('dark');
        // mode[1].img.src='../img/light_mode.svg'
        modeImg.src='../img/light_mode.svg'
        mode[0].innerHTML=`LIGHT`;
    }else{
        body.classList.remove('dark');
        modeImg.src='../img/dark_mode.svg';
        mode[0].innerHTML=`DARK`;
        console.log('dark')
    }
})
