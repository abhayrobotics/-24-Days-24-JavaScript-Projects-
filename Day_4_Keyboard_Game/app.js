let score = 0;
function RandomGen() {
    console.log("random func call");
    status1 = false;
    let arr = document.querySelectorAll(".key");
    // generating random inter no.
    const random = Math.floor(Math.random() * arr.length);

    // highlighting
    arr[random].classList.toggle("jiggle");

    // InputFunc()
    // return random;
}
// let random = RandomGen()
// function InputFunc(){
    console.log("input func call");
    // UNDERSTANING THE KEY PRESSSED
    document.addEventListener('keyup', function (event) {
        const key2 = (event.key).toUpperCase();
        console.log(key2)
        // check the prsesed key
        const jiggle = document.querySelector(".jiggle") ;
        if (jiggle.getAttribute("data-key") === key2) {
            score=+1;
            console.log("correct",score);
            jiggle.classList.toggle("jiggle");
            RandomGen();
            // setTimeout(RandomGen(),2000)

        } else {
            score=-1;
            console.log("wrong",score);
        }
    })

// }

RandomGen();

