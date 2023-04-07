let setting = document.getElementById('setting');
let minutes = document.getElementById('minutes');
let sec = document.getElementById('sec');

console.log(VarSec);
function ChangeTime(){
    console.log("start")
    minutes.toggleAttribute("disabled");
    sec.toggleAttribute("disabled");
}

function StartTimer(){
    let text= document.getElementById("text")
    if(  text.innerText == "START"){

        let varsec = document.getElementById('sec').value;
        let varmin  = document.getElementById('minutes').value;

        let x= parseInt(varmin)*60 +parseInt(varsec);

        console.log(varsec);

        text.innerText = "Pause";
        const timer = setInterval(()=>{
            varsec= x;
            if(x>1){
                console.log(x);
                x--;
                document.getElementById('sec').value--;
            }
            else{
                alert("Times Up!");
                clearInterval(timer);
                document.getElementById('sec').value =x;
            }
        },1000)
        // console.log("start")
    }
    else if(text.innerText == "PAUSE"){
        text.innerText = "Start";
        // console.log("Pause");
    }
}