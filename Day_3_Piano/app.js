

function Press(key){
    // console.log("running");
    let audio = new Audio(`./audio/${key}.mp3`);
    audio.play();

}

Main()
// adding id and onclick function
function Main(){
    let arr = document.querySelectorAll('a');
    // console.log(arr)
    for (let keyNo =1; keyNo<24 ; keyNo++){

        console.log(arr[keyNo-1])
        arr[keyNo-1].setAttribute("id",`key-${keyNo}`)
        arr[keyNo-1].setAttribute("onclick",`Press('key-${keyNo}')`)

    }
}

