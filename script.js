const audio = document.getElementById('audio-player');
const playButton = document.querySelector('.play');
const nextSong = document.querySelector('.next');
const prevSong = document.querySelector('.previous');
const currentTime = document.getElementById('current-time');
const durationMusic = document.getElementById('duration');

const songs = [
    {
        title: 'Forest Lullaby',
        author: 'Lesfim',
        cover: 'assets/images/cover-1.jpg',
        file: 'assets/sound/forest-lullaby-110624.mp3'
    },
    {
        title: 'Lost in City Lights',
        author: 'Cosmo Sheldrake',
        cover: 'assets/images/cover-2.jpg',
        file: 'assets/sound/lost-in-city-lights-145038.mp3'
    }
];

let songIndex = 0;

function loadSong(song){

    const titleDisplay = document.querySelector('.title');
    const authorDisplay = document.querySelector('.author');
    const coverDisplay = document.querySelector('.cover');

    titleDisplay.textContent = song.title;
    authorDisplay.textContent = song.author;
    coverDisplay.src = song.cover;
    audio.src = song.file;

}

nextSong.addEventListener('click', ()=>{
    songIndex++;

    if(songIndex > songs.length - 1){
        songIndex = 0;
    }

    loadSong(songs[songIndex]);
    playMusic();

})

prevSong.addEventListener('click',()=>{
    songIndex--;

    if(songIndex<0){
        songIndex = songs.length -1;
    }

    loadSong(songs[songIndex]);
    playMusic();

})



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


loadSong(songs[songIndex]);