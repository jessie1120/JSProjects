let score = 0
let time = 30 

$('#text').focus();

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
getRandomWord();

function countDown () {
   timeInterval = setInterval(function () {
       time--;
       $('#time').text(`${time}s`)
   },1000) 
}
countDown ();
// Event Listener

$('#text').on('input', function() {
    const typeWord = $(this).val()
    const randomWord = $('h1').text()
    if (typeWord === randomWord) {
        getRandomWord();
        $(this).val('');
        score++
        $('#score').text(score);  
    }
})