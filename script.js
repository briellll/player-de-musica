const audio = document.getElementById('audio-player');
const playButton = document.querySelector('.play');
const nextSong = document.querySelector('.next');
const prevSong = document.querySelector('.previous');
const currentTime = document.getElementById('current-time');
const durationMusic = document.getElementById('duration');


let isPlaying = false;


function togglePlay(){
    if(isPlaying){
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic(){
    isPlaying = true;
    audio.play()
}

function pauseMusic(){
    isPlaying = false;
    audio.pause();
}

playButton.addEventListener('click',togglePlay);


audio.addEventListener('timeupdate', ()=>{
    const progress = (audio.currentTime/ audio.duration)* 100;

    const progressBar = document.querySelector('.progress-bar');
    progressBar.value = progress;

    updateTimer();
});

function updateTimer(){
    const minutes = Math.floor(audio.currentTime/ 60);
    const seconds = Math.floor(audio.currentTime % 60);

    const formatTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    currentTime.innerText = formatTime;
}

const progressBar = document.querySelector('.progress-bar');
progressBar.addEventListener('input',()=>{
    const seekTime = (progressBar.value / 100)* audio.duration;
    audio.currentTime = seekTime;
});

audio.addEventListener('loadedmetadata', ()=>{
    const minutes = Math.floor(audio.duration / 60);
    const seconds = Math.floor(audio.duration % 60);
    durationMusic.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
})