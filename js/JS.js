var pop_sound;
var soundplayed = false;
var bubble1;
var bubble2;

function init(){
pop_sound = document.getElementById("pop");
bubble1 = document.getElementById("bubblewrap1");
bubble2 = document.getElementById("bubblewrap2");

bubble1.onclick = function(){popFunction()};
bubble2.onclick = function(){popFunction()};
}


function popFunction(){
  pop_sound.play();
  soundplayed = true;
}


window.onload = init;
