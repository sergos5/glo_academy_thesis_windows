import {
    animate
} from './helpers.js';

const scroll = () => {

    const scrollItem = document.querySelector('.smooth-scroll')  
    const rootElement = document.documentElement
    const offer = document.querySelector('#offer')

    const heightVievScrollItem = offer.offsetTop + offer.offsetHeight

    scrollItem.style.cssText = `display: none;
                                opacity: 0;
                                cursor: pointer`   

    window.addEventListener('scroll', () => {
        const top = rootElement.scrollTop       
        if (top  >= heightVievScrollItem && scrollItem.style.opacity == 0) {    
            scrollItem.style.display = 'block'            
            animate({
                duration: 500,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    scrollItem.style.opacity = progress;
                }
            });   
        } else if (heightVievScrollItem > top && scrollItem.style.opacity == 1) {        
            animate({
                duration: 500,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    scrollItem.style.opacity = 1- progress;
                }
            });   
            setTimeout(()=> {
                scrollItem.style.display = 'none'
            }, 500)     
        }
    })  

    scrollItem.addEventListener('click', () => {        
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
};

export default scroll;