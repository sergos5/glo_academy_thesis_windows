const slider = (section, block, slide, left, right, count, widthWindow = 576) => {
    const slidesSection = document.querySelector(section)
    const slidesBlock = slidesSection.querySelector(block)
    let slideItems = slidesBlock.querySelectorAll(slide)
    const arrowLeft = slidesSection.querySelector(left)
    const arrowRight = slidesSection.querySelector(right)

   
    //let interval;
            
    const updateSlide = () => {
        slideItems = slidesBlock.querySelectorAll(slide)
        if (screen.width >= widthWindow) {
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

    window.addEventListener('resize', ()=> {
        if (screen.width >= widthWindow) {                       
            slidesBlock.style.justifyContent = "space-between";            
            updateSlide()
        } else {
            slidesBlock.style.justifyContent = "center";               
            updateSlide() 
        }  
    })

    const nextSlide = () => {       
        slideItems[slideItems.length-1].after(slideItems[0])        
        updateSlide()
    }

    const prevSlide = () => {
        slideItems[0].before(slideItems[slideItems.length-1])
        updateSlide()
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