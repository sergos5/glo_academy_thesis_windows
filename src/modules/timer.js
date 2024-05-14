const timer = (deadline) => {

    const timerDay = document.querySelectorAll('.count_1 span')
    const timerHours = document.querySelectorAll('.count_2 span')
    const timerMinutes = document.querySelectorAll('.count_3 span')
    const timerSeconds = document.querySelectorAll('.count_4 span')

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
            timerDay.forEach(elem => {
                elem.textContent = '00'
            })
            timerHours.forEach(elem => {
                elem.textContent = '00'
            })
            timerMinutes.forEach(elem => {
                elem.textContent = '00'
            })
            timerSeconds.forEach(elem => {
                elem.textContent = '00'
            })

            clearInterval(clockInterval);
        } else {
            timerDay.forEach(elem => {
                elem.textContent = addZero(getTime.day)
            })
            timerHours.forEach(elem => {
                elem.textContent = addZero(getTime.hours)
            })
            timerMinutes.forEach(elem => {
                elem.textContent = addZero(getTime.minutes)
            })
            timerSeconds.forEach(elem => {
                elem.textContent = addZero(getTime.seconds)
            })
            clockInterval = setInterval(updateClock, 1000);            
        }
    };

    updateClock();

};

export default timer;