
let playlist = [
    {
        url: "./asset/audio/1.mp3",
        poster: "./asset/img/1.jpg",
        song_name: "Love You Zindagi",
        artist: "Amit Trevedi | Dear Zindagi",
        currentTrack: true,
    },
    {
        url: "./asset/audio/2.mp3",
        poster: "./asset/img/2.jpg",
        song_name: "Kho gaye hum kaha",
        artist: "Jasleen Kaur Royal",
        currentTrack: false
    },
    {
        url: "./asset/audio/3.mp3",
        poster: "./asset/img/3.jpg",
        song_name: "Samjhawahan",
        artist: "Arijit Singh | Shreya Ghosal ",
        currentTrack: false
    },
    {
        url: "./asset/audio/4.mp3",
        poster: "./asset/img/4.jpg",
        song_name: "Yun hi ",
        artist: "Mohit Chouhan ",
        currentTrack: false
    },

]
// global valriable current trrack
let track ;
let poster= document.getElementsByClassName('music__poster');

// console.log(poster,song_title,artist)


for(item in playlist){
    if (playlist[item].currentTrack == true){
        
        track =item;

    }
}
// console.log(track)

// let music = new Audio("./asset/audio/1.mp3");
let music = new Audio(playlist[track].url);
let play = document.getElementById('play');
let pause = document.getElementById('pause');

// play function
function Play() {
    music.play();
    console.log(music.duration)
    // console.log("play");
    play.classList.toggle('hide');
    pause.classList.toggle('hide');

    time();
    

}
// console.log(music.duration)

function Pause() {
    // console.log("pause");
    music.pause();
    play.classList.toggle('hide');
    pause.classList.toggle('hide');
}

// next 
function Next() {
    music.pause()
    // console.log("next");
    if(track == playlist.length - 1 ){
        track =0;
    }
    else{
        track +=1;
    }
        update();
        // changing current track
        music = new Audio ((playlist[track].url));
        music.play();
        time();
        
}
function Previous() {
    music.pause()
    // console.log("next");
    if(track == 0 ){
        track = playlist.length-1;
    }
    else{
        track -=1;
    }
    update();
    // changing current track
    music = new Audio ((playlist[track].url));
    music.play()
    time();
}

function Volume(i) {
    music.volume = music.volume + 0.1*i ;
    // console.log(music.volume)
}

function update(){
    // console.log("update");
    track =parseInt(track);
    // console.log(playlist[track].poster)
    
    document.getElementById("song_name").innerText = playlist[track].song_name;
    document.getElementById('artist').innerText =  playlist[track].artist;

    let poster = document.getElementById('music__poster');
    poster.style.backgroundImage =`url('${playlist[track].poster}')`
    
}
function time(){
    setInterval(() => {
        let min0 =  Math.round(music.currentTime / 60);
        let sec0 =  Math.round(music.currentTime  % 60);
        let min1 =  Math.round(music.duration / 60);
        let sec1 =  Math.round(music.duration  % 60);

        document.getElementById('initial').innerText = min0.toString().padStart(2,"0") +":" +  sec0.toString().padStart(2,"0");
        document.getElementById('total').innerText = min1.toString().padStart(2,"0") +":" + sec1.toString().padStart(2,"0");

        document.getElementById('input_scroll').value = (music.currentTime /music.duration)*100;
    },1000)
}