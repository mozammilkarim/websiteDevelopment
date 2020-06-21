navLinks=document.querySelector('.nav-links')
hamburgerMenu=document.querySelector('#menu')

function navToggle(){
    
    if(navLinks.style.display=='none'){
        navLinks.style.display='block';
        console.log("1");
    }
        
    else
        navLinks.style.display='none';
}