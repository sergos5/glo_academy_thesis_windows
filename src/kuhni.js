import timer from './modules/timer';
import scroll from './modules/scroll';


const timerBlocks = document.querySelectorAll('.countdown')





timerBlocks.forEach(timerBlock => {
    timer('13 may 2024', timerBlock)
})
scroll();
