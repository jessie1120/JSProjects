const randomNumber = generateRandomNumber()
console.log(randomNumber)

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function getSpeakWord(e) {
    const msg = e.results[0][0].transcript;
    showMessage(msg);
}

function showMessage(msg) {
    $('#msg').html(`
    <div>You said: </div>
    <span class="box">${msg}</span>
    `)
}

window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

recognition.start();

// Event Listener

recognition.addEventListener('result', getSpeakWord);