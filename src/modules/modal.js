import {
    animate
} from './helpers.js';

const modal = (buttonClass, modalClass, closeClass) => {
    const buttons = document.querySelectorAll(buttonClass)
    const modal = document.querySelector(modalClass)
    const close = document.querySelector(closeClass) 
    const overlay = document.querySelector('.overlay')   

    buttons.forEach( button => {
        button.addEventListener('click', (e) => {          
            overlay.style.cssText = `display: block;
                                    opacity: 0` 
            modal.style.cssText = `display: block;
                                    opacity: 0`    
            animate({
                duration: 300,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    overlay.style.opacity = progress;
                    modal.style.opacity = progress;
                }
            });

        })
    })                
     
    document.body.addEventListener('click', (e) => {               
        if (e.target === close || e.target === overlay){
            overlay.style.cssText = `display: none;
                                    opacity: 0` 
            modal.style.cssText = `display: none;
                                    opacity: 0` 
        }         
    })
};

export default modal;