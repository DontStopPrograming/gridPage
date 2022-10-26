let abouts = document.querySelectorAll('.sabout')

function mostrarAbout(){
    let scrollLear = document.documentElement.scrollTop
    for(let i = 0; i < abouts.length; i++){
        let alturaPixel = abouts[i].offsetTop
    if(alturaPixel - 500 < scrollLear){
       return abouts[i].style.opacity = 1
        
        } 
    }
}

window.addEventListener('scroll', mostrarAbout)