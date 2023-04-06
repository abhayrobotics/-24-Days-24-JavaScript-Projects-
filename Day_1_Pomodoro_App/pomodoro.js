let setting = document.getElementById('setting');
let minutes = document.getElementById('minutes');
let sec = document.getElementById('sec');

function ChangeTime(){
    console.log("start")
    minutes.toggleAttribute("disabled");
    sec.toggleAttribute("disabled");
}