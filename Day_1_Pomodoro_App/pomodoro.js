let setting = document.getElementById('setting');
let minutes = document.getElementById('minutes');
let sec = document.getElementById('sec');

// 
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

            // if time left to count then run
            if (varsec > 0 || varmin > 0) {
                
                // decrease min if sec =0
                if (varmin > 0 && varsec == 0) {
                    varsec = 59;
                    varmin--;
                    document.getElementById('sec').value = 59;
                    document.getElementById('minutes').value--;

                }
                // decrease sec if >0
                else if ( varsec > 0) {
                    varsec--;
                    document.getElementById('sec').value--;

                }
             
                //   adding zero Pad before the number
                document.getElementById('sec').value = document.getElementById('sec').value.padStart(2, "0");
                document.getElementById('minutes').value = document.getElementById('minutes').value.padStart(2, "0");
            }
            // when no time left display alert
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