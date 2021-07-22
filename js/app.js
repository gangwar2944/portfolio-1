
const menuBtn = document.querySelector('#menu-btn-box');
const themeBtn = document.querySelector('#theme-btn');
const menuBox = document.querySelector('#menu-box');
let menuOpen = false;
let dark = false;
// menu btn
menuBtn.addEventListener('click',()=>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuBox.classList.add('active');
        menuOpen = true;
    }else{
     menuBtn.classList.remove('open');
     menuBox.classList.remove('active');
     menuOpen = false;
    }
});
// theme on off
themeBtn.addEventListener('click',()=>{
    if(!dark){
        themeBtn.classList.add('light');
        dark = true;
    }else{
        themeBtn.classList.remove('light');
        dark = false;
    }
})