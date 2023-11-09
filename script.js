/*navbar*/
const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x'); 
  navlist.classList.remove('active');
};

/* typed js*/
const SecondText=document.querySelector('.second-text');
const TextFunction=()=> {
    setTimeout(()=> {
        SecondText.innerHTML=" A Photographer"
    },0);
    setTimeout(()=> {
        SecondText.innerHTML="A Freelancer"
    },4000);
    setTimeout(()=> {
        SecondText.innerHTML="A Desaigner"
    },8000);
}
TextFunction()
setInterval(TextFunction,12000)

/*cursor*/ 
const cursor = document.querySelector('.cursor');
var timeout;
/*follow cursor on mousemove */ 
document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  /*cursor effects on mouse stopped*/
  function mouseStopped () {
    cursor.style.display = "non";
  }
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);
});
/*cursor effects on mouseout */
document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});
/*music */ 
var player = document.getElementById("player");
let progress = document.getElementById("progress");
let playbtn = document.getElementById("playbtn");

var playpause = function () {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
}

playbtn.addEventListener("click", playpause);

player.onplay = function () {
  playbtn.classList.remove("fa-play");
  playbtn.classList.add("fa-pause");
}

player.onpause = function () {
  playbtn.classList.add("fa-play");
  playbtn.classList.remove("fa-pause");
}

player.ontimeupdate = function () {
  let ct = player.currentTime;
  current.innerHTML = timeFormat(ct);
  //progress
  let duration = player.duration;
  prog = Math.floor((ct * 100) / duration);
  progress.style.setProperty("--progress", prog + "%");
}

function timeFormat(ct) {
  minutes = Math.floor(ct / 60);
  seconds = Math.floor(ct % 60);

  if (seconds < 10) {
    seconds = "0"+seconds;
  }

  return minutes + ":" + seconds;
}