const about = document.querySelector('#about')
const work = document.querySelector('#work')
const contact = document.querySelector('#contact')
const menuarray = [about, work, contact]
const sidescrolling = document.getElementById("sidescrolling")

/* Menu Hover Effect */
function hover(event){
    if (event.target == about){
        gsap.fromTo(about, {opacity:0},{x:10, opacity:1, duration:0.8})
        about.textContent ="Sobre"
    }
    if (event.target == work){
        gsap.fromTo(work, {opacity:0},{x:10, opacity:1, duration:0.8})
        work.textContent ="Trabalhos"
    }
    if (event.target == contact){
        gsap.fromTo(contact, {opacity:0},{x:10, opacity:1, duration:0.8})
        contact.textContent ="Contato"
    }    
}
function out(event){
    if (event.target == about){
        gsap.fromTo(about, {opacity:0},{x:0, opacity:1, duration:0.8})
        about.textContent ="Hello."
    }
    if (event.target == work){
        gsap.fromTo(work, {opacity:0},{x:0, opacity:1, duration:0.8})
        work.textContent ="I'm"
    }
    if (event.target == contact){
        gsap.fromTo(contact, {opacity:0},{x:0, opacity:1, duration:0.8})
        contact.textContent ="Leon"
    }
}

about.addEventListener('mouseover', hover)
work.addEventListener('mouseover', hover)
contact.addEventListener('mouseover', hover)
about.addEventListener('mouseout', out)
work.addEventListener('mouseout', out)
contact.addEventListener('mouseout', out)
/* ----------------------*/

/* Tap Screen Bounce and Fading*/
const tapscreen = document.getElementById("tapscreen")
const textbounce = gsap.fromTo(tapscreen, {opacity:0.7}, {y:-10, opacity:1, yoyo: true, repeat:-1, duration: 0.7})
function bounce(){
    textbounce.play()
}

function allin(){
    gsap.fromTo(about, {opacity:0, x:-10},{x:0, opacity:1, duration:1.5})
    about.textContent ="Sobre"
    gsap.fromTo(work, {opacity:0, x:-10},{x:0, opacity:1, duration:1.5})
    work.textContent ="Trabalhos"
    gsap.fromTo(contact, {opacity:0, x:-10},{x:0, opacity:1, duration:1.5})
    contact.textContent ="Contato"
    window.removeEventListener("touchstart", allin)
    textbounce.pause()
    gsap.to(tapscreen, {y:200, opacity:0, ease: Power2.easeIn, duration: 0.7})
}

function imgbounce(){
    gsap.to(".picture", {y:-5, yoyo: true, repeat:-1, duration: 4})
}
window.addEventListener("load", bounce)
window.addEventListener("load", imgbounce)
window.addEventListener("touchstart", allin)
/* ---------------------- */

/* Language Options */ 
const portuguese = document.querySelector("#portuguese")
const english = document.querySelector("#english")

function langhover(event){
    console.log("executou")
    if(event.target == portuguese){
        gsap.to(portuguese, {y:-1 ,opacity:0.7, duration:0.3})
    }
    if(event.target == english){
        gsap.to(english, {y:-1, opacity:0.7, duration:0.3})
    }
}

function langout(event){
    console.log("executou")
    if(event.target == portuguese){
        gsap.to(portuguese, {y:0, opacity:1, duration:0.3})
    }
    if(event.target == english){
        gsap.to(english, {y:0, opacity:1, duration:0.3})
    }
}
portuguese.addEventListener("mouseover", langhover)
english.addEventListener("mouseover", langhover)
portuguese.addEventListener("mouseout", langout)
english.addEventListener("mouseout", langout)
/* ------------------------------------------- */

/* MENU CLICK */ 
const waves = document.querySelectorAll(".wave")
const section2 = document.querySelector("#section2")
const aboutpage = document.querySelector(".about")
const workpage = document.querySelector(".work")
const contactpage = document.querySelector(".contact")
const col1 = document.querySelector("#col1")
const col2 = document.querySelector("#col2")
const picture = col2.querySelector(".picture")

function menuclick(event){
    about.classList.add("halfed")
    work.classList.add("halfed")
    contact.classList.add("halfed")
    picture.classList.add("halfed")
    gsap.to(col2,{y:-40, duration:2})
    if (window.visualViewport.height > 900){
        gsap.to(section2, {bottom:"-52vh"})
        gsap.to(waves, {bottom:"30vh"})
        gsap.to(col1, {height: "50%"})
        gsap.to(col2, {height: "50%"})
        gsap.to(menuarray, {y:-40, duration:2})
    }
    if (window.visualViewport.height <= 900){
        col1.querySelector(".menu").style = "flex-direction: row; width: 100vh;"
        console.log(window.screen.height)
        gsap.to(section2, {bottom:"-30vh"})
        gsap.to(waves, {bottom:"55vh"})
        gsap.to(col1, {height: "20%"})  
    }
    
    
    
    
    
    
    if(event.target == about){
        workpage.style = "display: none;"
        contactpage.style = "display: none;"
        gsap.fromTo(aboutpage,{display: "block", opacity: 0, y:100}, {opacity: 1, y:0, duration:1.5})
    }
    if(event.target == work){
        aboutpage.style = "display: none;"
        contactpage.style = "display: none;"
        gsap.fromTo(workpage,{display: "block", opacity: 0, y:100}, {opacity: 1, y:0, duration:1.5})
    }
    if(event.target == contact){
        aboutpage.style = "display: none;"
        workpage.style = "display: none;"
        gsap.fromTo(contactpage,{display: "block", opacity: 0, y:100}, {opacity: 1, y:0, duration:1.5})
    }
}
window.addEventListener("scroll",menuclick)
about.addEventListener("click", menuclick)
work.addEventListener("click", menuclick)
contact.addEventListener("click", menuclick)

/* WORK tab Sidescrolling */

/*----------------------*/

/* ABOUT MENU HOVER */
const icons = document.querySelectorAll("#icons img")
const iconText = document.querySelectorAll("#icons h5")

function iconsHover(event){
    for (let i=0; i<icons.length; i++){
        if (event.target == icons[i]){
            console.log(i)
            gsap.to(icons[i], {height: "7vw"})
            gsap.to(iconText[i], {opacity: 1})
        }
    }
    
}
function iconsOut(event){
    for (let i=0; i<icons.length; i++){
        if (event.target == icons[i]){
            gsap.to(icons[i], {height: "6vw"})
            gsap.to(iconText[i], {opacity: 0})
        }
    }
}

function iconsTouch(event){
    for (let i=0; i<icons.length; i++){
        gsap.to(iconText[i], {opacity: 0})
        gsap.to(icons[i], {height: "6vw"})
        if (event.target == icons[i]){
            gsap.to(icons[i], {height: "7vw"})
            gsap.to(iconText[i], {opacity: 1})
        }
    }
}

for (let i=0; i<icons.length; i++){
    icons[i].addEventListener("touchstart", iconsTouch)
    icons[i].addEventListener("mouseover", iconsHover)
    icons[i].addEventListener("mouseout", iconsOut)
}
/*--------------------*/
/* WORK MENU HOVER*/
const modules = document.querySelectorAll('.module a')
const moduleImg = document.querySelectorAll('.module img')

for (let i=0; i<modules.length; i++){
    modules[i].addEventListener("mouseover", moduleHover)
    modules[i].addEventListener("mouseout", moduleOut)
}
function moduleHover(event){
    for (let i=0; i<modules.length; i++){
        if (event.target == modules[i] || event.target == moduleImg[i]){
            gsap.to(moduleImg[i], {width: "135%", opacity:1})
        }
    }  
}
function moduleOut(event){
    for (let i=0; i<modules.length; i++){
        if (event.target == modules[i] || event.target == moduleImg[i]){
            gsap.to(moduleImg[i], {width: "100%", opacity:0.7})
        }
    }  
}
/*-------------------*/
/* CONTACT MENU HOVER */
const socialIcons = document.querySelectorAll("#social a")
const socialImg = document.querySelectorAll("#social img")
const socialText = document.querySelectorAll("#social p")

function socialHover(event){
    for (let i=0; i<socialIcons.length; i++){
        if (event.target == socialIcons[i] || event.target == socialImg[i]){
            if (window.visualViewport.width > 935){
                gsap.to(socialImg[i], {height: "8vh", opacity:1})
                gsap.to(socialText[i], {display: "block", opacity:1})
            }
            else{
                gsap.to(socialImg[i], {height: "7.5vh", opacity:1})
            }
        }
    }  
}

function socialOut(event){
    for (let i=0; i<socialIcons.length; i++){
        if (event.target == socialIcons[i] || event.target == socialImg[i]){
            gsap.to(socialImg[i], {height: "7vh", opacity:0.8})
            gsap.to(socialText[i], {opacity:0, display: "none"})
                      
        }
    }  
}

for (let i=0; i<socialIcons.length; i++){
    socialIcons[i].addEventListener("mouseover", socialHover)
    socialIcons[i].addEventListener("mouseout", socialOut)
}

