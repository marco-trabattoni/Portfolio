let vid = document.getElementById("video"); 
let vidbox =document.getElementById("raivideo");
let cross = document.getElementById("closing");
let player = document.getElementById("play"); 
var played = 0;




function color() {
    document.getElementById('Livello_1').classList.toggle('hover');
}

function fullscreenvideo() {
    if (played == 0) {
        vid.play();
        vid.classList.add('fullscreen');
        cross.style.display = 'block';
        if (vidbox.requestFullscreen) {
            vidbox.requestFullscreen();
          } else if (vidbox.webkitRequestFullscreen) { /* Safari */
            vidbox.webkitRequestFullscreen();
          } else if (vidbox.msRequestFullscreen) { /* IE11 */
            vidbox.msRequestFullscreen();
          }
        played = 1;
        player.style.opacity = 0;
    } else {
        vid.pause();
        played = 0;
    }
    }

function closevideo() {
    vid.classList.remove('fullscreen');
    cross.style.display = 'none';
    if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { 
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { 
        document.msExitFullscreen();
      }
    player.style.opacity = 1; 
    vid.pause();
    played = 1;
}



function controlvideo() {
if (played == 0) {
    vid.play(); 
    played = 1;
    player.style.opacity = 0;
} else {
    vid.pause(); 
    played = 0;
    player.style.opacity = 1;
}
}


function tellplay() {
    player.style.backgroundColor = 'var(--color)';
    player.style.color = 'white';
}

function tellstop() {
    player.style.backgroundColor = 'white';
    player.style.color = 'black';
}

vid.onended = function() {
    player.style.opacity = 1;
};





let vid2 = document.getElementById("video2"); 
let player2 = document.getElementById("play2"); 
var played2 = 0;

function controlvideo2() {
if (played2 == 0) {
    vid2.play(); 
    played2 = 1;
    player2.style.opacity = 0;
} else {
    vid2.pause(); 
    played2 = 0;
    player2.style.opacity = 1;
}
}


function tellplay2(color) {
    player2.style.backgroundColor = 'var(--color)';
    player2.style.color = 'white';
}

function tellstop2() {
    player2.style.backgroundColor = 'white';
    player2.style.color = 'black';
}

vid2.onended = function() {
    player2.style.opacity = 1;
};