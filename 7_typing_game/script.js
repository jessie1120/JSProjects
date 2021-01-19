function getRandomWord() {
    $.ajax({
        url: 'https://random-word-api.herokuapp.com/word?number=100',
        method: 'get',
        dataType: 'json',
        success: function (data) {
          let randomWord = data[Math.floor(Math.random() * data.length)]
          $('h1').text(randomWord);
        }  
    })
}
getRandomWord();
