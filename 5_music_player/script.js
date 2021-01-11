$('#music-container')
$('#play')
$('#prev')
$('#next')
$('#audio')
$('#progress')
$('#progress_container')
$('#title')
$('#cover')

// titles array
const songs = ['hey', 'summer', 'ukulele'];

// track songs
let songIndex = 2;

// load song details into DOM
loadSong(songs[songIndex]);

// update song details 
function loadSong(song){
    $('#title').text(song);
    $('#audio').attr('src', `music/${song}.mp3`);
    $('#cover').attr('src', `images/${song}.jpg`);
}

// play song
function playsong(){
    $('#music-container').addClass('play');
    $('#play').find('i').attr('class', 'fas fa-pause');
    $('#audio')[0].play();
}

// pause song
function pauseSong(){
    $('#music-container').removeClass('play');
    $('#play').find('i').attr('class', 'fas fa-play');
    $('#audio')[0].pause();
}

// Event listeners 
$('#play').click(function(){
    const isPlaying = $('#music-container').hasClass('play');

    if (isPlaying === true){
        pauseSong();
    } else {
        playsong();
    }
})