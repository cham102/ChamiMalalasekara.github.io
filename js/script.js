/*=== toggle icon nav bar====*/
let menuIcon = document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href="#'+id+'"]').classList.add('active');
        }
    });
    /*=== toggle icon nav bar====*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
/*=== toggle icon nav bar====*/
ScrollReveal({ 
    reset: true ,
    distance:'80px',
    duration: 2000,
    delay:200
});
ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.services-container, .portfolio-box,.contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });

/*=== typed js====*/
const typed = new Typed('.multiple-text',{
strings:['Software Engineer','Frontend Developer','Backend Developer','UI/UX Designer'],
typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop: true
});

//ReaD More---
// Get the elements
const readMoreLink = document.getElementById('btnReadMore');
const additionalText = document.getElementById('read-more-text');
const parhidden= document.getElementById('parhidden');
const ulskill= document.getElementById('ulskill');
const hdSe= document.getElementById('hdSe');
const hdSkills= document.getElementById('hdSkills');
// Add event listener to the link
readMoreLink.addEventListener('click', function(event) {
    // Prevent the default link behavior
    event.preventDefault();
    
    // Toggle the visibility of the additional text
    additionalText.classList.toggle('hidden');
    
    // Change the link text based on the visibility of the additional text
    if (additionalText.classList.contains('hidden')) {
        readMoreLink.textContent = 'Read More';
        hdSe.classList.remove('hidden');
        parhidden.classList.remove('hidden');
        ulskill.classList.remove('hidden');
        hdSkills.classList.toggle('hidden');
    } else {
        readMoreLink.textContent = 'Read Less';
        parhidden.classList.toggle('hidden');
        ulskill.classList.toggle('hidden');
        hdSkills.classList.toggle('hidden');
        hdSe.classList.toggle('hidden');
    }
});

const btnDev = document.getElementById('btnDev');
const servicebxOne = document.getElementById('servicebxOne');
const HidservicebxOne = document.getElementById('HidservicebxOne');
const frontface = document.querySelector('#servicebxOne .frontface');
const backface = document.querySelector('#servicebxOne .backface');

btnDev.addEventListener('click', function(event) {
    event.preventDefault();
    servicebxOne.classList.toggle('card-rotate');

    if (servicebxOne.classList.contains('card-rotate')) {
        btnDev.textContent = 'Read More';
        servicebxOne.classList.add('hidden');
        HidservicebxOne.classList.remove('hidden');
    } else {
        btnDev.textContent = 'Read Less';
       /*  frontface.classList.add('hidden');
        backface.classList.remove('hidden'); */
    }
});
