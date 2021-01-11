$('#music-container')
$('#play')
$('#prev')
$('#next')
$('#audio')
$('#progress')
$('#progress-container')
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
function playSong(){
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

// previous song
function prevSong() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// next song
function nextSong() {
    songIndex++;
    if(songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Event listeners 
$('#play').click(function(){
    const isPlaying = $('#music-container').hasClass('play');

    if (isPlaying === true){
        pauseSong();
    } else {
        playSong();
    }
})

// change song

$('#prev').click(function() {
    prevSong();
})
$('#next').click(function() {
    nextSong();
})