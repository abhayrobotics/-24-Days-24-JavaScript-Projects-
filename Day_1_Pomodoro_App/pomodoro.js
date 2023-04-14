let setting = document.getElementById('setting');
let minutes = document.getElementById('minutes');
let sec = document.getElementById('sec');

// console.log(VarSec);
function ChangeTime() {
    // console.log("start")
    minutes.toggleAttribute("disabled");
    sec.toggleAttribute("disabled");
}

function StartTimer() {
    // disable editing
    ChangeTime();
    // change color to default 
    let r = document.querySelector(":root");
    r.style.setProperty('--clock-color', '#46e646');

    let text = document.getElementById("text")
    if (text.innerText == "START") {

        let varsec = parseInt(document.getElementById('sec').value);
        let varmin = parseInt(document.getElementById('minutes').value);

        

        text.innerText = "Pause";
        const timer = setInterval(() => {

            if (varsec > 0 || varmin > 0) {
                // console.log(varmin,varsec,document.getElementById('sec').value);
                // document.getElementById('sec').value.padStart(2,"0");

                if (varmin > 0 && varsec == 0) {

                    varsec = 59;
                    varmin--;
                    document.getElementById('sec').value = 59;
                    document.getElementById('minutes').value--;

                }
                else if (varmin == 0 && varsec > 0) {
                    varsec--;
                    document.getElementById('sec').value--;

                }
                else {
                    varsec--;
                    document.getElementById('sec').value--;

                }
                // console.log(document.getElementById('sec').value.padStart(2,"0"));
                // document.getElementById('sec').value.padStart(2,"0");
            }
            else {
                // changing color 
                let r = document.querySelector(":root");
                r.style.setProperty('--clock-color', '#9c0f17');
                // enable editing
                ChangeTime();
                alert("Times Up!");
                clearInterval(timer);
                text.innerText = "Start"
            }
        }, 1000)
        // console.log("start")
    }
    else if (text.innerText == "PAUSE") {
        text.innerText = "Start";
        // console.log("Pause");
    }
}