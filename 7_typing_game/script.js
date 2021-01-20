let score = 0
let time = 10 
let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';
$('#difficulty').val(difficulty);

$('#text').focus();

getRandomWord();
countDown ();

function getRandomWord() {
    $.ajax({
        url: 'https://random-word-api.herokuapp.com/word?number=1',
        method: 'get',
        dataType: 'json',
        success: function (data) {
          $('h1').text(data);
        }  
    })
}

function countDown () {
   timeInterval = setInterval(function () {
       time--;
       $('#time').text(`${time}s`)
       if (time === 0) {
        clearInterval(timeInterval);
        gameOver();
    }
   },1000)   
}

function gameOver () {
    $('#end-game-container').html(`
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `).css('display', 'flex')
}
// Event Listener
$('#text').on('input', function() {
    const typeWord = $(this).val()
    const randomWord = $('h1').text()
    if (typeWord === randomWord) {
        getRandomWord();
        $(this).val('');
        score++
        $('#score').text(score);  
        if (difficulty === 'hard') {
            time += 2;
          } else if (difficulty === 'medium') {
            time += 3;
          } else {
            time += 5;
          }
    }
})
$('#settings-btn').click(function() {
    $('#settings').toggleClass('hide');
})

$('#settings-form').change(function() {
    difficulty = $('#difficulty').val();
    localStorage.setItem('difficulty', difficulty)
})