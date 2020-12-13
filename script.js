// slider
const cards = [{h:'Discover innovative ways to decorate', p:'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love'}, 
{h:'We are available all across the globe', p:"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."}, 
{h:'Manufactured with the best materials', p:'        Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'}] 
const button = document.getElementsByClassName('slideButton');
const header = document.getElementsByClassName('header');
const paragraf = document.getElementsByClassName('text');
const image = document.getElementsByClassName('backgroundImage');
const array = [header, paragraf, image];
let actual = 0;
let fade = 1;
button[0].addEventListener('click', left, false);
button[1].addEventListener('click', right, false);
function change(actual){
    header[0].innerHTML = cards[actual].h;
    paragraf[0].innerHTML = cards[actual].p;
    image[0].src = 'images/desktop-image-hero-'+(actual+1)+'.jpg';
    fade = fade==1 ? 2 : 1;
    for(element in array){array[element][0].style.animation = 'fade'+fade+' 1s';}
}
function left(event){actual!=0 ? (actual-=1, change(actual)) : (actual=2, change(actual));}
function right(event){actual!=2 ? (actual+=1, change(actual)) : (actual=0, change(actual))}
// mobile menu
const hamburger = document.getElementsByClassName('hamburger');
const close = document.getElementsByClassName('close');
const navBar = document.getElementsByClassName('navBar');
const menu = document.getElementsByClassName('menu');
hamburger[0].addEventListener('click', menuOpen, false);
close[0].addEventListener('click', menuClose, false);
function menuOpen(event){
    navBar[0].style = 'background-color: var(--white);';
    hamburger[0].style = 'display: none;';
    close[0].style = 'display: unset;';
    menu[0].style = 'display: unset;'
}
function menuClose(event){
    navBar[0].style = 'background-color: unset;';
    hamburger[0].style = 'display: unset;';
    close[0].style = 'display: none;';
    menu[0].style = 'display: none;'
}