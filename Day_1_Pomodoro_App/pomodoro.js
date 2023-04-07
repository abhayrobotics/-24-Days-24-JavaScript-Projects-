let setting = document.getElementById('setting');
let minutes = document.getElementById('minutes');
let sec = document.getElementById('sec');

function ChangeTime(){
    console.log("start")
    minutes.toggleAttribute("disabled");
    sec.toggleAttribute("disabled");
}

function StartTimer(){
    let text= document.getElementById("text")
    if(  text.innerText == "START"){
        text.innerText = "Pause";
        let x=10;
        const timer = setInterval(()=>{
            console.log(x);
            if(x>0){
                x--;
            }
            else{
                alert("Times Up!");
                clearInterval(timer);
            }
        },1000)
        // console.log("start")
    }
    else if(text.innerText == "PAUSE"){
        text.innerText = "Start";
        // console.log("Pause");
    }
}