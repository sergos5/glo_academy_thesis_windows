import timer from './modules/timer';



const timerBlocks = document.querySelectorAll('.countdown')


timerBlocks.forEach(timerBlock => {
    timer('13 may 2024', timerBlock)
})

