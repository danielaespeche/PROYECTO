'use strict';

//Slider

//cuando hago click en sliderNext, hace una Function
    //sliderActive++
    //si.. sliderActive es = o > 3
    // todas las sliderOpinionsList le remove la clase isActive
    //a sliderOpinionList con la posicion sliderActive le add la clase isActive
    //todos los sliderPointList le remove la clase isActive
    // a sliderPointList con la posicion sliderActive, le add la clase is Active

const sliderNext        =   document.querySelector('.Slider-next')
const sliderPrev        = document.querySelector('.Slider-prev')
const sliderOpinionList =   document.querySelectorAll('.Slider-opinion')
const sliderPointList   =   document.querySelectorAll('.Slider-point')

 
console.log( sliderNext )
console.log( sliderPrev )
console.log( sliderOpinionList )
console.log( sliderPointList )

let sliderActive = 0

sliderNext.addEventListener( 'click' , ()=>{
    
    sliderActive++
    if( sliderActive >= 3 ){
        sliderActive = 0
    }
    
    sliderOpinionList.forEach(( eachOpinion , index )=>{
        sliderOpinionList[index].classList.remove('isActive')
    })
    
    sliderOpinionList[sliderActive].classList.add('isActive')
    
    
    
})

sliderPrev.addEventListener('click' , ()=>{
    sliderActive--
    if( sliderActive < -1){
         sliderActive = 2
    }
       
    sliderOpinionList.forEach(( eachOpinion , index) => {
        sliderOpinionList[index].classList.remove('isActive')
    })
    
    sliderOpinionList[sliderActive].classList.add('isActive')
    
})

sliderPointList.forEach(( each , index) => {
    sliderPointList[index].addEventListener('click' , () => {
        sliderActive = index

        sliderPointList.forEach(( each , index) => {
            sliderPointList[index].classList.remove('isActive')
        })
        
        sliderPointList[sliderActive].classList.add('isActive')

        sliderOpinionList.forEach(( each , index ) => {
            sliderOpinionList[index].classList.remove('isActive')
        })
    
        sliderOpinionList[slider].classList.add('isActive')
    })


})



//formulario

// Cuando  le hago un click a .Formulario-button, hace una Function
    // el .Formulario-inicio is active, aparece

//Cuando le hago click a Close-svg, ejecuta una FUNCTION   
    //el .Formulario-inicio hace display none

const formularioButton = document.querySelector('.Formulario-button')
const formularioInicio = document.querySelector('.Formulario-inicio')
const closeSvg         = document.querySelector('.Close-svg')

console.log(formularioButton)
console.log(formularioInicio)
console.log(closeSvg)


formularioButton.addEventListener( 'click' , function(){
    formularioInicio.classList.add('isActive')
}
);

closeSvg.addEventListener('click' , function(){
    formularioInicio.classList.remove('isActive')
}
);

//Slider-menu


//headerButton cuando le hago click hace una function
    // headerNav le hago le toggle la clase isActive
const headerButton = document.querySelector('.Header-button')
const headerNav = document.querySelector('.Header-nav')

console.log(headerButton)
console.log(headerNav)


headerButton.addEventListener( 'click' , ()=>{
    headerNav.classList.toggle('isActive')
})


// scroll-mision

    //HOME
document.addEventListener('DOMContentLoaded', () => {
    const headerLink = document.querySelector('a[href="#Home');
    const homeHeader = document.getElementById('.Header-h1');

    if (headerLink && homeHeader) {
        headerLink.addEventListener('click', (event) => {
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

            // Hacer scroll suave hasta la etiqueta .Mision-wrapper
          homeHeader.scrollIntoView({ behavior: 'smooth' });

        });
    }
});


    //Mision-wrapper

document.addEventListener('DOMContentLoaded', () => {
    const misionLink = document.querySelector('a[href="#Mision"]');
    const misionWrapper = document.getElementById('.Mision-wrapper');

    if (misionLink && misionWrapper) {
        misionLink.addEventListener('click', (event) => {
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

            // Hacer scroll suave hasta la etiqueta .Mision-wrapper
            misionWrapper.scrollIntoView({ behavior: 'smooth' });

        });
    }
});


// Nosotros-wrapper
document.addEventListener('DOMContentLoaded', () => {
    const nosotrosLink = document.querySelector('a[href="#Nosotros"]');
    const nosotrosWrapper = document.getElementById('.Nosotros-wrapper');

    if (nosotrosLink && nosotrosWrapper) {
        nosotrosLink.addEventListener('click', (event) => {
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

            // Hacer scroll suave hasta la etiqueta .Mision-wrapper
            nosotrosWrapper.scrollIntoView({ behavior: 'smooth' });

        });
    }
});

    //Servicios-wrapper
document.addEventListener('DOMContentLoaded', () => {
    const serviciosLink = document.querySelector('a[href="#Servicios]');
    const serviciosWrapper = document.getElementById('.Servicios-wrapper');

    if (serviciosLink && serviciosWrapper) {
        serviciosLink.addEventListener('click', (event) => {
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

            // Hacer scroll suave hasta la etiqueta .Mision-wrapper
            serviciosWrapper.scrollIntoView({ behavior: 'smooth' });

        });
    }
});


    //Contacto
document.addEventListener('DOMContentLoaded', () => {
    const contactoLink = document.querySelector('a[href="#Contacto');
    const inicioIntro = document.getElementById('.Inicio-intro');

    if (contactoLink && inicioIntro) {
        contactoLink.addEventListener('click', (event) => {
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

            // Hacer scroll suave hasta la etiqueta .Mision-wrapper
          inicioIntro.scrollIntoView({ behavior: 'smooth' });

        });
    }
});




