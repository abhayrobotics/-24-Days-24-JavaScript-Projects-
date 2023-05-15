
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
    music.play()
    // console.log("play");
    play.classList.toggle('hide');
    pause.classList.toggle('hide');

    

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
        music.play()
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
}

function Volume() {
    music.volume = music.volume - 0.1;
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