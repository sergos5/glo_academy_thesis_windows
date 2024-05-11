import timer from './modules/timer';
import scroll from './modules/scroll';
import calc from './modules/calc';
import modal from './modules/modal';
import sertificateModal from './modules/sertificateModal'
import slider from './modules/slider';
import sendForm from './modules/sendForm';

const timerBlocks = document.querySelectorAll('.countdown')
const orderForm = document.querySelectorAll('.order-form')

timerBlocks.forEach(timerBlock => {
    timer('13 may 2024', timerBlock)
})
orderForm.forEach((form) => {
    sendForm(form)
})

scroll();
calc(1000);
    
modal('.call-button','.header-modal', '.header-modal__close');
modal('.service-button','.services-modal', '.services-modal__close');

sertificateModal()
slider('#benefits', '.benefits-wrap', '.benefits__item','.benefits__arrow--left','.benefits__arrow--right', 3, 573)

slider('#services', '.services-wrap', '.services__item','.services__arrow--left','.services__arrow--right', 2, 1200)



