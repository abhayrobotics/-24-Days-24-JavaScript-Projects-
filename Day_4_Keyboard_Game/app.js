
let status1= true;
if(status1){
RandomGen()
}
function RandomGen() {
    status1= false;
    let arr = document.querySelectorAll(".key");
    // generating random inter no.
    let random = Math.floor(Math.random() * arr.length);
    
    // console.log(arr[random].innerText);
    // highlighting
    arr[random].classList.toggle("jiggle");

    // UNDERSTANING THE KEY PRESSSED
    window.addEventListener('keydown', function (event) {
        const key2 = event.key;

        // check the prsesed key 
        if (arr[random].getAttribute("data-key") == key2.toUpperCase()) {
            console.log("correct");
            arr[random].classList.toggle("jiggle");
            
            setTimeout(RandomGen(),2000)
            
        }else{
            console.log("wrong", key2.toUpperCase());
        }
    })

}


