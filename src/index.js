import timer from './modules/timer';
import scroll from './modules/scroll';
import modal from './modules/modal';
import sertificateModal from './modules/sertificate_modal'
import sliderBenefits from './modules/slider_benefits';


const timerBlocks = document.querySelectorAll('.countdown')


timerBlocks.forEach(timerBlock => {
    timer('13 may 2024', timerBlock)
})

scroll();
     
modal('.call-button','.header-modal', '.header-modal__close');
modal('.service-button','.services-modal', '.services-modal__close');

sertificateModal()
sliderBenefits()



