const about = document.querySelector('[about]')
const work = document.querySelector('[work]')
const contact = document.querySelector('[contact]')


function hover(event){
    if (event.target == about){
        about.textContent="About"
    }
    if (event.target == work){
        work.textContent="Work"
    }
    if (event.target == contact){
        contact.textContent="Contact"
    }
    
}
function out(event){
    if (event.target == about){
        about.textContent="Hello."
    }
    if (event.target == work){
        work.textContent="I'm"
    }
    if (event.target == contact){
        contact.textContent="Leon"
    }
}

about.addEventListener('mouseover', hover)
work.addEventListener('mouseover', hover)
contact.addEventListener('mouseover', hover)
about.addEventListener('mouseout', out)
work.addEventListener('mouseout', out)
contact.addEventListener('mouseout', out)