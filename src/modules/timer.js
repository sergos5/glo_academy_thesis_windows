const timer = (deadline, timerBlock) => {
    
    const timerDay = timerBlock.querySelector('.count_1 span')
    const timerHours = timerBlock.querySelector('.count_2 span')
    const timerMinutes = timerBlock.querySelector('.count_3 span')
    const timerSeconds = timerBlock.querySelector('.count_4 span')

    let clockInterval;

    const getTimeRemaining = () => {
        const dateStop = new Date(deadline).getTime();
        const dateNow = new Date().getTime();
        const timeRemaining = (dateStop - dateNow) / 1000;
        const day = Math.floor(timeRemaining / 60 / 60 / 24)        
        const hours = Math.floor((timeRemaining / 60 / 60) % 24);
        const minutes = Math.floor((timeRemaining / 60) % 60);
        const seconds = Math.floor(timeRemaining % 60);
        return {
            timeRemaining,
            day,
            hours,
            minutes,
            seconds
        };
    };

    const updateClock = () => {
        const getTime = getTimeRemaining();

        const addZero = (num) => {
            if (num <= 9) {
                return '0' + num;
            } else {
                return num;
            }
        };

        if (getTime.timeRemaining <= 0) {
            timerDay.textContent = '00'
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
            clearInterval(clockInterval);
        } else {
            timerDay.textContent = addZero(getTime.day)
            timerHours.textContent = addZero(getTime.hours);
            timerMinutes.textContent = addZero(getTime.minutes);
            timerSeconds.textContent = addZero(getTime.seconds);
            clockInterval = setInterval(updateClock, 1000);
        }
    };
    updateClock();

};

export default timer;