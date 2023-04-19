

function RandomGen() {
    // console.log("random func call");
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
   

    // check the prsesed key
    const jiggle = document.querySelector(".jiggle");
    if (jiggle.getAttribute("data-key") === key2) {
        
        let correct = new Audio('./1.mp3');
        correct.play();
        jiggle.classList.toggle("jiggle");
        RandomGen();
    }
     else {
        let wrong = new Audio('./2.mp3');
        wrong.play();
        // score = score - 1;
        // console.log("wrong", score, typeof score);
        // sessionStorage.setItem("Score", score);

        // document.getElementById('score').innerText = score

    }
})

RandomGen();

