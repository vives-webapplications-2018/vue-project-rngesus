var backgroundmusic = document.getElementById('my_audio');

window.onload = function() {
    backgroundmusic.play();
}

document.getElementById('mute').addEventListener('click', function(e) {
    e = e || window.event;
    audio.muted = !audio.muted;
    e.preventDefault();
}, false);