const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function showCountdown() {
    const currentTime = new Date();
    const countdownTime = newYearTime - currentTime;

    const seconds = Math.floor(countdownTime / 1000) % 60;
    const minutes = Math.floor(countdownTime / 1000 / 60) % 60;
    const hours = Math.floor(countdownTime / 1000 / 60 / 60) % 24;
    const days = Math.floor(countdownTime / 1000 / 60 / 60 / 24);
    
    console.log(days)
}

showCountdown();