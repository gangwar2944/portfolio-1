
const menuBtn = document.querySelector('#menu-btn-box');
const themeBox = document.querySelector('#theme-box');
const darkBtn = document.querySelector('#dark');
const lightBtn = document.querySelector('#light');
const menuBox = document.querySelector('#menu-box');
const loader = document.querySelector('#loading');
const body = document.querySelector('body');
const allShadow = document.querySelectorAll('.shadow');
const allShadow2 = document.querySelectorAll('.shadow2');
const allMenu = document.querySelectorAll('.menu-item');
const allText = document.querySelectorAll('.text');
const title = document.querySelector('#title');
const intro = document.querySelector('#intro');
const landingBtnBox = document.querySelector('#landing-btn-box');
const alert = document.querySelector('.alert');
const allSlider = document.querySelectorAll('.mycard');
const leftSlide = document.querySelector('#left-slider');
const rightSlide = document.querySelector("#right-slider");
const allFadeElement = document.querySelectorAll('.fade');
let sliderNumberBox = document.querySelector('.slider-number');
let currentSlideNumber = document.querySelector('.current-slide');
let totalSlideNumber = document.querySelector('.total-slide');
let colorCode = getComputedStyle(document.body);
let currentSlide = 0;
let menuOpen = false;
totalSlideNumber.textContent = allSlider.length;

//============= ALL FUNCTIONS ================
// under developement function
function myalert(){
    setTimeout(()=>{
      alert.style.display = "none";
    },5000);
}

// theme dark mode function
function darkMode(){
    document.documentElement.style.setProperty('--light', '#121212');
    document.documentElement.style.setProperty('--dark', '#f2f2f2');
    document.documentElement.style.setProperty('--grey-color', '#696969');
    allShadow.forEach(item =>{
        item.classList.add("box-shadow-dark");
        item.classList.remove("box-shadow-light");
    });
    allShadow2.forEach(item =>{
        item.classList.add("box-shadow-dark-in");
        item.classList.remove("box-shadow-light-in");
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

// theme light mode function
function lightMode(){
    document.documentElement.style.setProperty('--light', '#f2f2f2');
    document.documentElement.style.setProperty('--dark', '#121212');
    document.documentElement.style.setProperty('--grey-color', '#a9a9a9');
    allShadow.forEach(item =>{
        item.classList.remove("box-shadow-dark");
        item.classList.add("box-shadow-light");
    });
    allShadow2.forEach(item =>{
        item.classList.remove("box-shadow-dark-in");
        item.classList.add("box-shadow-light-in");
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

// hide slider function
function removeaALLSlide(){
    allSlider.forEach(slide =>{
        slide.classList.remove('active');
    })
}
// show slider function
function showSlider(current){
    allSlider[current].classList.add('active');
}

// animating all slider

setInterval(function(){
    removeaALLSlide();
    currentSlide++;
    if(currentSlide >= allSlider.length){
        currentSlide = 0;
    }
    currentSlideNumber.textContent = currentSlide + 1;
    showSlider(currentSlide);
  },20000);


// init functions
function init(){
    loader.style.display = "none";
    title.classList.add('active');
    intro.classList.add('active');
    landingBtnBox.classList.add('active');
   // allSlider[0].classList.add('active');
   currentSlide = 0;
   currentSlideNumber.textContent = currentSlide + 1;
     myalert();
     
}

// ================== ALL EVENT LISTENER =================
// load event listener
addEventListener('load',()=>{
    init();
    
    if(!document.cookie){ 
        // dark mode code
        lightBtn.classList.add("d-none");
        darkBtn.classList.remove("d-none");
       
        lightMode();
    }else{
        // light mode code
        lightBtn.classList.remove('d-none');
        darkBtn.classList.add("d-none");
        
        darkMode();
    }
});

// side menu event listener
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
allMenu.forEach(menu =>{
    menu.addEventListener('click',()=>{
        menuBtn.classList.remove('open');
        menuBox.classList.remove('active');
        menuOpen = false;
    });
});

// light mode event listener
lightBtn.addEventListener('click',()=>{

    document.cookie = "theme=; expires=Thu, 25 Dec 1975 12:00:00 UTC; path=/";
    lightBtn.classList.add("d-none");
    darkBtn.classList.remove("d-none");
    lightMode();

});
// dark mode event listener
darkBtn.addEventListener('click',()=>{
    document.cookie = "theme=1; expires=Thu, 25 Dec 2030 12:00:00 UTC; path=/";
    lightBtn.classList.remove('d-none');
    darkBtn.classList.add("d-none"); 
    darkMode();

});


// slider right btn event listener
rightSlide.addEventListener('click',function(e){
    e.preventDefault();
    removeaALLSlide();
    currentSlide++;
    if(currentSlide >= allSlider.length){
        currentSlide = 0;
    }
    currentSlideNumber.textContent = currentSlide + 1;
    showSlider(currentSlide);
});

// slider left btn event listener
leftSlide.addEventListener('click',function(e){
    e.preventDefault();
    removeaALLSlide();
    
    if(currentSlide <= 0){
        currentSlide = allSlider.length;
    }
    currentSlide--;
    currentSlideNumber.textContent = currentSlide + 1;
    showSlider(currentSlide);
});
addEventListener('scroll',()=>{
  
let distanceFromTop = window.pageYOffset;
// animate about heading
if(distanceFromTop < 50){
//    removeaALLSlide();
    allFadeElement.forEach(el =>{
        
        el.classList.add('fade-in');
    });
}
if(distanceFromTop > allFadeElement[0].getBoundingClientRect().top - 100){
    allFadeElement[0].classList.remove('fade-in');
    
}
// animate about content
if(distanceFromTop > allFadeElement[1].getBoundingClientRect().top + 100){
    allFadeElement[1].classList.remove('fade-in');
}
// animate services heading
if(distanceFromTop > allFadeElement[2].getBoundingClientRect().top + 100){
    allFadeElement[2].classList.remove('fade-in');
}
// animate sevices content
if(distanceFromTop > allFadeElement[3].getBoundingClientRect().top + 220){
   allFadeElement[3].classList.remove('fade-in');
    if(currentSlide === 0){
       showSlider(0);
    }
}
    
});

