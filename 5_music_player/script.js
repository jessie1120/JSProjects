$('#music_container')
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
