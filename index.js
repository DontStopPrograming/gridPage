let abouts = document.querySelectorAll('.sabout')
let projects = document.querySelectorAll('.sproject')


function mostrarAbout(){
    let scrollLear = document.documentElement.scrollTop
    for(let i = 0; i < abouts.length; i++){
        let alturaPixel = abouts[i].offsetTop
    if(alturaPixel - 300 < scrollLear){
        abouts[i].style.opacity = 1
        abouts[i].classList.add('movedescription')
        } else if(alturaPixel - 500 < scrollLear) {
            abouts[i].style.opacity = 0
        } else if(alturaPixel < scrollLear) {
            abouts[i].style.opacity = 0
        }
          }
          
        } 
            
let ab = document.querySelector('.card')
    function efecto(valor){
        let xPos = (valor.pageX - window.innerWidth / 2 ) /25
        let yPos = (window.innerHeight / 2- valor.pageY) /25
            ab.style.transform = `rotateY(${xPos}deg) rotateX(${yPos}deg)`
        }

let ti = document.querySelector('.titulo')
    function efectoSalir(valor){
        ti.style.transition = 'tranform 0.5s ease'
        ti.style.transform = 'rotateY(0deg)rotateX(0deg)'
    }

    window.addEventListener('scroll', mostrarAbout)

    ab.addEventListener('mouseleave',efectoSalir)
    ab.addEventListener('mousemove', efecto)

let postagua = document.querySelection('')

     