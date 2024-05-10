import {
    animate
} from './helpers.js';

const sertificateModal = () => {
    
    const sertificateImg = document.querySelectorAll('.sertificate-document')
    const overlayImg = document.createElement('div')
    overlayImg.style.cssText = `display: none;
                                position: fixed;
                                top: 0;
                                bottom: 0;
                                left: 0;
                                right: 0;
                                height: 100vh;
                                width: 100%;
                                opacity: 0;
                                background-color: rgba(0, 0, 0, 0.45);`
    document.body.append(overlayImg);

    sertificateImg.forEach(doc => {
        doc.addEventListener('click', (e)=> {
            e.preventDefault();
            if (e.target.matches('.sertificate-document .document-overlay')) {   
                overlayImg.style.display = 'block'
                overlayImg.innerHTML = `<img src=${doc.getAttribute('href')} 
                                        style="margin: 0;
                                        height: 90%;               
                                        position: absolute;
                                        top: 50%;
                                        left: 50%;
                                        margin-right: -50%;
                                        transform: translate(-50%, -50%)" alt=""></img>`
                animate({
                    duration: 500,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        overlayImg.style.opacity = progress;                        
                    }
                });
            }            
        })
    })

    overlayImg.addEventListener('click', ()=> {       
        overlayImg.style.display = 'none'
        overlayImg.style.opacity = 0
        overlayImg.innerHTML = ''
    })
  
};

export default sertificateModal;