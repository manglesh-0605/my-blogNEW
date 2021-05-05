const menu = document.querySelector('.hamburger');
const img= document.querySelector('#menuIcon')
const nav = document.querySelector('.nav');

let clicked = false;

function openNav()
{
    menu.addEventListener('click',()=>{
        if(!clicked){
            img.setAttribute('src',"assets/close.svg")
            nav.style.display='block';
            clicked = true;
        }else{
            
            img.setAttribute('src',"assets/menu.svg")
            nav.style.display='none';
            clicked=false;
        }
    })

}

openNav();