const slider = (section, block, slide, left, right, count) => {
    const slidesSection = document.querySelector(section)
    const slidesBlock = slidesSection.querySelector(block)
    let slideItems = slidesBlock.querySelectorAll(slide)
    const arrowLeft = slidesSection.querySelector(left)
    const arrowRight = slidesSection.querySelector(right)

    /* const benefitsBlock = document.querySelector('#services')
    const slidesBlock = benefitsBlock.querySelector('.row')
    let benefitsItems = slidesBlock.querySelectorAll('.col-md-12')
    const benefitsArrowLeft = benefitsBlock.querySelector('.services__arrow--left')
    const benefitsArrowRight = benefitsBlock.querySelector('.services__arrow--right') */

    
    

    //let interval;
            
    const updateSlide = () => {
        slideItems = slidesBlock.querySelectorAll(slide)
        if (screen.width >= 576) {
            slideItems.forEach((item, index) => {       
                if ( index >= 0 && index < count ) {
                    item.style.display = 'block'
                } else {
                    item.style.display = 'none'
                }
            })  

        } else {
            slideItems.forEach((item, index) => {       
                if ( index === 0) {
                    item.style.display = 'block'
                } else {
                    item.style.display = 'none'
                }
            })  
        }      
    }

    const nextSlide = () => {       
        slideItems[slideItems.length-1].after(slideItems[0])        
        updateSlide()
    }

    const prevSlide = () => {
        slideItems[0].before(slideItems[slideItems.length-1])
        updateSlide()
    }


    if (screen.width >= 576) {
        slidesBlock.style.justifyContent = "center";
    } else {
        slidesBlock.style.justifyContent = "space-between";
    }  

    /* const autoSlide = () => {
        nextSlide()
    };

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };
 */
    slideItems.forEach((item) => { 
        item.style.display = 'none'
    })  

    arrowRight.addEventListener('click', ()=> {       
        nextSlide()
    })

    arrowLeft.addEventListener('click', ()=> {
        prevSlide()
    })

    updateSlide()
    //startSlide()
};

export default slider;