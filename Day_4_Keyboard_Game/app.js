
function RandomGen() {
    console.log("random func call");
    status1 = false;
    let arr = document.querySelectorAll(".key");
    // generating random inter no.
    const random = Math.floor(Math.random() * arr.length);

    // highlighting
    arr[random].classList.toggle("jiggle");


}


// UNDERSTANING THE KEY PRESSSED
document.addEventListener('keyup', function (event) {
    const key2 = (event.key).toUpperCase();
    // console.log(key2)

    // Score
    // let scoreElement = document.getElementById('score').innerText;
    let score;
    if (sessionStorage.getItem("Score") == undefined) {
        sessionStorage.setItem("Score", 0);
       score =0;
    } 

    // check the prsesed key
    const jiggle = document.querySelector(".jiggle");
    if (jiggle.getAttribute("data-key") === key2) {
        score = score + 1;
        console.log("correct", score);
        sessionStorage.setItem("Score", score);

        document.getElementById('score').innerText = score;
        jiggle.classList.toggle("jiggle");
        RandomGen();
        // setTimeout(RandomGen(),2000)

    } else {
        score = score - 1;
        console.log("wrong", score);
        sessionStorage.setItem("Score", score);

        document.getElementById('score').innerText = score

    }

    
})

// }

RandomGen();

