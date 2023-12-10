// Navbar Fixed
// window.onscroll = function (){
//     const navbar = document.querySelector('header');
//     const fixednav = navbar.offsetTop;

//     if(window.pageYOffset > fixednav){
//         navbar.classList.add('navbar-fixed');
//     }else{
//         navbar.classList.remove('navbar-fixed');
//     }
// }

// Hamburger
const Hamburger = document.querySelector('#hamburger'); //cari elemen id hamburger
const NavMenu = document.querySelector('#nav-menu'); //cari elemen id nav-menu


Hamburger.addEventListener('click', function() {
    Hamburger.classList.toggle('hamburger-active');
    NavMenu.classList.toggle('hidden');
});


// Click Outside Hamburger
window.addEventListener('click', function(e){
    if(e.target != Hamburger && e.target != NavMenu){
         Hamburger.classList.remove('hamburger-active');
         NavMenu.classList.add('hidden');
    }

});

// Darkmode
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');


// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
     
  
      
    
} else {
    themeToggleDarkIcon.classList.remove('hidden');
   

    
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
              

           
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
           
            
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});