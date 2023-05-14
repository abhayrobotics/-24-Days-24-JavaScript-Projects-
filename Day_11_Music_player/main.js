
let playlist = [
    {
        url: "./asset/audio/1.mp3",
        poster: "./asset/img/1.jpg",
        song_name: "Love You Zindagi",
        artist: "Amit Trevedi | Dear Zindagi",
    },
    {
        url: "./asset/audio/2.mp3",
        poster: "./asset/img/2.jpg",
        song_name: "Love You Zindagi",
        artist: "Amit Trevedi | Dear Zindagi",
    },

]
console.log(playlist[0])
let currentTrack =0 ;
let music = new Audio(playlist[currentTrack].url);
// let music = new Audio("./asset/audio/1.mp3");
let play = document.getElementById('play');
let pause = document.getElementById('pause');

// play function
function Play() {
    music.play()
    console.log("play");
    play.classList.toggle('hide');
    pause.classList.toggle('hide');

}
console.log(music.duration)

function Pause() {
    music.pause();
    play.classList.toggle('hide');
    pause.classList.toggle('hide');
}

// next 
function Next() {
    music.pause()
    currentTrack =+1;
    
    music = new Audio ((playlist[currentTrack].url));
    music.play()
}

function Volume() {
    music.volume = music.volume - 0.1;
    console.log(music.volume)
}