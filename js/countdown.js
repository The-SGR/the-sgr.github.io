const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const targetDate = Date.UTC(2026, 6, 8, 14, 0, 0);

const Soon = document.getElementById('id-soon');
const Now = document.getElementById('id-now');

function timer () {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;

    if (distance < 0) {
        Days.innerHTML = "0";
        Hours.innerHTML = "0";
        Minutes.innerHTML = "0";
        Seconds.innerHTML = "0";

        Soon.style.display = "none";
        Now.style.display = "block";
    }
}

setInterval(timer, 1000);