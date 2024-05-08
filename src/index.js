import timer from './modules/timer';
import scroll from './modules/scroll';
import calc from './modules/calc';


const timerBlocks = document.querySelectorAll('.countdown')


timerBlocks.forEach(timerBlock => {
    timer('13 may 2024', timerBlock)
})
scroll();

if (document.getElementById('calc')){
    calc()
};
