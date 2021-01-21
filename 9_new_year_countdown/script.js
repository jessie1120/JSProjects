const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
$('h1').html(`New Year Countdown To <span>${currentYear +1}</span>`);

function showCountdown() {
    const currentTime = new Date();
    const countdownTime = newYearTime - currentTime;

    const seconds = Math.floor(countdownTime / 1000) % 60;
    const minutes = Math.floor(countdownTime / 1000 / 60) % 60;
    const hours = Math.floor(countdownTime / 1000 / 60 / 60) % 24;
    const days = Math.floor(countdownTime / 1000 / 60 / 60 / 24);
    
    $('#seconds').text(addStandardTime(seconds));
    $('#minutes').text(addStandardTime(minutes));
    $('#hours').text(addStandardTime(hours));
    $('#days').text(addStandardTime(days));
}
function addStandardTime(time) {
    if (time < 10) {
        return '0' + time;
    }else {
        return time;
    }
}

showCountdown();
setInterval(showCountdown, 1000);