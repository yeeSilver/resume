// mobile
const btn_toggle = document.querySelector('.btn-toggle-menu');
const list_toggle_menu = document.querySelector('.list-toggle-menu');
const mode_img = document.querySelector('.mobile-menu .btn-mode img');
// pc
const mode_go = document.querySelector('.mode-go');
const header = document.querySelector('.header');
// 공통
const modes = document.querySelectorAll('.btn-mode');
const body = document.body;

// click시 m-list 내려오도록
btn_toggle.addEventListener('click', function(){
    if (list_toggle_menu.style.display ==='none'){
        list_toggle_menu.style.display ='block';
    }else{
        list_toggle_menu.style.display ='none';
        }
})
console.log(mode_img)
modes.forEach(function(mode){
    mode.addEventListener('click', function(){
        if(!body.classList.contains('dark')){
            header.style.backgroundColor = 'grey';
            body.classList.add('dark');
            // modes[1].img.src='../img/light_mode.svg'
            mode_img.src=`../img/light_mode.svg`;
            modes[0].classList.add('mode_go','dark');
            modes[0].innerHTML=`LIGHT`;
        }else{
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.884)';
            // header.classList.remove('dark');
            body.classList.remove('dark');
            mode_img.src='../img/dark_mode.svg';
            modes[0].classList.remove('mode_go','dark');
            modes[0].innerHTML=`DARK`;
        }
    })
})

