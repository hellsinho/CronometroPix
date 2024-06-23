function startTimer(endTime, display) {
    let timerInterval = setInterval(function () {
        let now = new Date().getTime();
        let distance = endTime - now;

        if (distance < 0) {
            clearInterval(timerInterval);
            display.textContent = "00:00:00";
            return;
        }

        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;
    }, 1000);
}

window.onload = function () {
    let countdownDuration = 3600 * 3 * 1000; // 3 hours in milliseconds
    let display = document.querySelector('#timer');

    let endTime = localStorage.getItem('pixEndTime');

    if (!endTime) {
        endTime = new Date().getTime() + countdownDuration;
        localStorage.setItem('pixEndTime', endTime);
    }

    startTimer(parseInt(endTime), display);
};
