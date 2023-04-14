let setting = document.getElementById('setting');
let minutes = document.getElementById('minutes');
let sec = document.getElementById('sec');

// global running status
let running_flag = true;
// 
function ChangeTime() {
    // console.log("start")

    minutes.toggleAttribute("disabled");
    sec.toggleAttribute("disabled");
}


function StartTimer() {
    // disable editing
    ChangeTime();

    // changing text 
    document.getElementById('start').classList.toggle('hidden');
    document.getElementById('pause').classList.toggle('hidden');

    // disable chaning time
    // setting.style.pointerEvents = "none";
    // changing running flag back to normal for restarting operataion
    running_flag = true;

    // change color to defaults
    let r = document.querySelector(":root");
    r.style.setProperty('--clock-color', '#46e646');


    let varsec = parseInt(document.getElementById('sec').value);
    let varmin = parseInt(document.getElementById('minutes').value);

    // Counter ;
    const timer = setInterval(() => {

        // running flaf =true
        if (running_flag) {

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
                else if (varsec > 0) {
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

                // changing text 
                document.getElementById('start').classList.toggle('hidden');
                document.getElementById('pause').classList.toggle('hidden');
            }
        }
        else {
            clearInterval(timer);
            console.log("stopped", document.getElementById('sec').value);

            // changing running flag back to normal for restarting operataion
            running_flag = true;
            // changing text 
            document.getElementById('start').classList.toggle('hidden');
            document.getElementById('pause').classList.toggle('hidden');

            // changing color 
            let r = document.querySelector(":root");
            r.style.setProperty('--clock-color', '#dfdb12');
        }
    }, 1000)

}
function PauseTimer() {
    running_flag = false;
}