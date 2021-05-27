//aniamting text sonu yadav
let text = document.getElementById("text");
let descBox = document.querySelector('#desc-box');
let description  = document.querySelector('#desc');
let navLinks =document.querySelectorAll('.side-nav a');

//animating introduction

window.onload = () =>{
setTimeout(() => {
let shadow = "";
  for (var i = 0; i < 15; i++) {
    shadow += (shadow ? "," : "") + -i * 1 + "px " + i * 1 + "px 0 #d9d9d9";
  }
  text.style.textShadow = shadow;
},500);
let id = setTimeout(() => {
  if(window.screen.width < 992){
    text.style.transform='scale(.4) rotate(-30deg) skew(25deg) translateX(20px)';
  }else{
    text.style.transform='scale(.6) rotate(-30deg) skew(25deg) translateX(20px)';
  }
},2000);
if(id){
  setTimeout(() => {
    descBox.style.transform = 'translateX(0px)';
    navLinks[0].classList.add('active');
},2000);
}
}