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
console.log( sliderOpinionList )
console.log( sliderPointList )

let sliderActive = 0

sliderNext.addEventListener( 'click' , ()=>{
    
    sliderActive++
    if( sliderActive >= 3 ){
        sliderActive = 0
    }
    
    sliderOpinionList.forEach(( each , index )=>{
        sliderOpinionList[index].classList.remove('isActive')
    })
    sliderOpinionList[sliderActive].classList.add('isActive')
    
    sliderPointList.forEach(( eachPoint, index )=>{
        sliderPointList[index].classList.remove('isActive')
    })
    sliderPointList[sliderActive].classList.add('isActive')
    
})

sliiderPrev.addEventListener('click' , ()=>{
    sliderActive--
    if( sliderActive < -1){
         sliderActive = 2
    }
       
    sliderOpinionList.forEach 
    
    
} )




