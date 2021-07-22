
const menuBtn = document.querySelector('#menu-btn-box');
const themeBox = document.querySelector('#theme-box');
const darkBtn = document.querySelector('#dark');
const lightBtn = document.querySelector('#light');
const menuBox = document.querySelector('#menu-box');
const body = document.querySelector('body');
const allShadow = document.querySelectorAll('.shadow');
let colorCode = getComputedStyle(document.body);
const allMenu = document.querySelectorAll('.menu-item');
const allText = document.querySelectorAll('.text');
let menuOpen = false;
// on load method
addEventListener('load',()=>{

    if(!document.cookie){ 
        // dark mode code
        lightBtn.classList.remove("d-none");
        darkBtn.classList.add("d-none");
        darkMode();
    }else{
        // light mode code
        lightBtn.classList.add('d-none');
        darkBtn.classList.remove("d-none");
        lightMode();
        
        
    }
})

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
function darkMode(){
    document.documentElement.style.setProperty('--light', '#121212');
    document.documentElement.style.setProperty('--dark', '#f2f2f2');
    allShadow.forEach(item =>{
        item.classList.add("box-shadow-dark");
        item.classList.remove("box-shadow-light");
    });
    allMenu.forEach(menu =>{
        menu.classList.remove("box-shadow-light");
        menu.classList.add("box-shadow-dark");
    });
    allText.forEach(text =>{
        text.classList.add("text-dark");
        text.classList.remove("text-light");
    });
}
function lightMode(){
    document.documentElement.style.setProperty('--light', '#f2f2f2');
    document.documentElement.style.setProperty('--dark', '#121212');
    allShadow.forEach(item =>{
        item.classList.remove("box-shadow-dark");
        item.classList.add("box-shadow-light");
    });
    allMenu.forEach(menu =>{
        menu.classList.add("box-shadow-light");
        menu.classList.remove("box-shadow-dark");
    });
    allText.forEach(text =>{
        text.classList.remove("text-dark");
        text.classList.add("text-light");
    });
}
// sun
lightBtn.addEventListener('click',()=>{

    document.cookie = "theme=; expires=Thu, 25 Dec 2030 12:00:00 UTC; path=/";
    lightBtn.classList.add("d-none");
    darkBtn.classList.remove("d-none");
    lightMode();

});
// moon
darkBtn.addEventListener('click',()=>{
    document.cookie = "theme=1; expires=Thu, 25 Dec 1975 12:00:00 UTC; path=/";
    lightBtn.classList.remove('d-none');
    darkBtn.classList.add("d-none"); 
    darkMode();
});
