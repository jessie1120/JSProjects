const randomNumber = generateRandomNumber()
console.log(randomNumber)

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function getSpeakWord(e) {
    const msg = e.results[0][0].transcript;
    showMessage(msg);
    checkNumber(msg);
}

function showMessage(msg) {
    $('#msg').html(`
    <div>You said: </div>
    <span class="box">${msg}</span>
    `)
}

function checkNumber(msg) {
    const number = +msg;

    if (Number.isNaN(number)) {
        $('#msg').append('<div>That is not a valid number</div>');
        return;
    }

    if (number > 100 || number < 1) {
        $('#msg').append('<div>Number must be between 1 and 100</div>');
        return;
    }

    if (number === randomNumber) {
        $('body').html(`
      <h2>Congrats! You have guessed the number! <br><br>
      It was ${number}</h2>
      <button class="play-again" id="play-again">Play Again</button>
    `);
    } else if (number > randomNumber) {
        $('#msg').append('<div>GO LOWER</div>');
    } else {
        $('#msg').append('<div>GO HIGHER</div>');
    }
}

window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

recognition.start();

// Event Listener

recognition.addEventListener('result', getSpeakWord);

recognition.addEventListener('end', function () {
    recognition.start();
});

$('body').click(function (e) {
    if (e.target.id == 'play-again') {
        window.location.reload();
    }
})