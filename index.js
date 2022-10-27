let abouts = document.querySelectorAll('.sabout')
let projects = document.querySelectorAll('.sproject')

function mostrarAbout(){
    let scrollLear = document.documentElement.scrollTop
    for(let i = 0; i < abouts.length; i++){
        let alturaPixel = abouts[i].offsetTop
    if(alturaPixel  < scrollLear){
        abouts[i].style.opacity = 1
        } else if(alturaPixel -1000 < scrollLear){
        abouts[i].style.opacity = 0
        abouts[i].classList.add('movedescription')
        }
    }
}


window.addEventListener('scroll', mostrarAbout)
