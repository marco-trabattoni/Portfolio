/*var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var yyyy = today.getFullYear();

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let mm = month[today.getMonth()];

today = dd + ' ' + mm + ' ' + yyyy;
document.getElementById("data").innerHTML = today;*/


var speed = 64;
var i = 0;
var txt = 'Hello, I am Marco';
var text = '';


function firstTimeHere() {
    var alreadyhere = sessionStorage.getItem("firstTime");
    if(alreadyhere == 1) {
        document.getElementById("first").style.dispaly = "none";
        document.getElementById("first").style.visibility = "hidden";
        document.getElementById("sentence").style.dispaly = "none";
        document.getElementById("one").style.dispaly = "none";
        document.getElementById("first").style.zIndex = 0;
    }
}

const myTimeout = setTimeout(typeWriter, 3000);
var myTimeout2;

    function typeWriter() {

    if (i < txt.length) {
        text += txt.charAt(i);
        document.getElementById("sentence").innerHTML = text + '<span class="input-cursor"></span>';
        i++;
        myTimeout2 = setTimeout(typeWriter, 96);
    } else {
        setTimeout(home, 2000);
    }
    }

function home() {
    document.getElementsByTagName("body")[0].style.overflow = 'scroll';
    document.getElementById("first").style.opacity = 0;
    sessionStorage.setItem("firstTime", 1);
    setTimeout(() => {
        document.getElementById("first").style.dispaly = "none";
        document.getElementById("first").style.zIndex = 0;
    }, 2000);

}


function showtitle(x) {
    x.getElementsByClassName("infos")[0].style.opacity = 1;
}

function hidetitle(x) {
    x.getElementsByClassName("infos")[0].style.opacity = 0;
}