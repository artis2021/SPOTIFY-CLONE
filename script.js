console.log("welcome to Spotify");

// Initialise the Variable
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName')
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "Gimme your...", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    { songName: "One night in Dubai", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Nobody one...", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Kon tujhe yu pyar..", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Sugar and brownies", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Mere Rashke qamar", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Made in India", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Tere jane ka gam", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Twining...", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Shiv Tandav", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" }
]

songItems.forEach((element,i)=>{
  console.log(element,i);
  element.getElementsByTagName("img")[0].src=songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused  || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //Update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
      makeAllPlays();
        gif.style.opacity = 1;
      songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=11){
        songIndex=1
    }else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


document.getElementById('next').addEventListener('click', () => {
    if (songIndex <=1) {
        songIndex = 1
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})