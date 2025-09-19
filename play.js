document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('song');
    const playPauseButton = document.getElementById('ctrlIcon');
    const prevButton = document.getElementById('pre');
    const nextButton = document.getElementById('next');
    const slide = document.getElementById('slide');
    const startTime = document.getElementById('start');
    const endTime = document.getElementById('end');
    const songInfo = document.querySelector('.song-info .song-name');
    const mp0 = document.getElementById('mp0');
    const mp1 = document.getElementById('mp1');
    const mp2 = document.getElementById('mp2');
    const mp3 = document.getElementById('mp3');
    const mp4 = document.getElementById('mp4');
    const mp5 = document.getElementById('mp5');
    const mp6 = document.getElementById('mp6');
    const mp7 = document.getElementById('mp7');
    const mp8 = document.getElementById('mp8');
    const mp9 = document.getElementById('mp9');
    const mp10 = document.getElementById('mp10');


    let currentTrackIndex = 0;

    // Function to play the audio
function playAudio() {
        if (audio.paused) {
            audio.play();
            playPauseButton.classList.remove('fa-play');
            playPauseButton.classList.add('fa-pause');
        }
}

    // Function to pause the audio
function pauseAudio() {
        if (!audio.paused) {
            audio.pause();
            playPauseButton.classList.remove('fa-pause');
            playPauseButton.classList.add('fa-play');
        }
}

    // Play or Pause Button Click Event
playPauseButton.addEventListener('click', function () {
        if (audio.paused) {
            playAudio();
        } else {
            pauseAudio();
        }
});
    
    // Play the music when the artist container is clicked
mp0.addEventListener('click', function () {
        // Stop any currently playing song
       
        if (audio.paused) {
             playAudio();
             currentTrackIndex = 0 ;
             changeTrack();
            //  audio.play();
        }
        // Start playing the selected song
       else{
        pauseAudio();
       }
        
       
});
    
mp1.addEventListener('click', function playMusic() {
        // Stop any currently playing song
       
        if (audio.paused) {
             playAudio();
             currentTrackIndex = 1;
             changeTrack();
            //  audio.play();
        }
        // Start playing the selected song
       else{
        pauseAudio();
       } 
       
});

mp2.addEventListener('click', function playMusic() {
        // Stop any currently playing song
       
        if (audio.paused) {
             playAudio();
             currentTrackIndex = 2;
             changeTrack();
            //  audio.play();
        }
        // Start playing the selected song
       else{
        pauseAudio();
       } 
       
});
    
mp3.addEventListener('click', function playMusic() {
        // Stop any currently playing song
       
        if (audio.paused) {
             playAudio();
             currentTrackIndex = 3;
             changeTrack();
            //  audio.play();
        }
        // Start playing the selected song
       else{
        pauseAudio();
       } 
       
});

mp4.addEventListener('click', function playMusic() {
        // Stop any currently playing song
       
        if (audio.paused) {
             playAudio();
             currentTrackIndex = 4;
             changeTrack();
            //  audio.play();
        }
        // Start playing the selected song
       else{
        pauseAudio();
       } 
       
});

mp5.addEventListener('click', function playMusic() {
        // Stop any currently playing song
       
        if (audio.paused) {
             playAudio();
             currentTrackIndex = 5;
             changeTrack();
            //  audio.play();
        }
        // Start playing the selected song
       else{
        pauseAudio();
       } 
       
});

mp6.addEventListener('click', function playMusic() {
        // Stop any currently playing song
       
        if (audio.paused) {
             playAudio();
             currentTrackIndex = 6;
             changeTrack();
            //  audio.play();
        }
        // Start playing the selected song
       else{
        pauseAudio();
       } 
       
});
    
mp7.addEventListener('click', function playMusic() {
        // Stop any currently playing song
       
        if (audio.paused) {
             playAudio();
             currentTrackIndex = 7;
             changeTrack();
            //  audio.play();
        }
        // Start playing the selected song
       else{
        pauseAudio();
       } 
       
});

mp8.addEventListener('click', function playMusic() {
        // Stop any currently playing song
       
        if (audio.paused) {
             playAudio();
             currentTrackIndex = 8;
             changeTrack();
            //  audio.play();
        }
        // Start playing the selected song
       else{
        pauseAudio();
       }  
});

mp9.addEventListener('click', function playMusic() {
        // Stop any currently playing song
       
        if (audio.paused) {
             playAudio();
             currentTrackIndex = 9;
             changeTrack();
            //  audio.play();
        }
        // Start playing the selected song
       else{
        pauseAudio();
       } 
       
});

mp10.addEventListener('click', function playMusic() {
        // Stop any currently playing song
       
        if (audio.paused) {
             playAudio();
             currentTrackIndex = 10;
             changeTrack();
            //  audio.play();
        }
        // Start playing the selected song
       else{
        pauseAudio();
       } 
       
});


    // Previous Button Click Event
    prevButton.addEventListener('click', previousSong);

    // Skip to previous track
    function previousSong() {
        currentTrackIndex = (currentTrackIndex - 1 + audio.children.length) % audio.children.length;
        changeTrack();
    }

    // Next Button Click Event
    nextButton.addEventListener('click', nextSong);

    // Skip to next track
    function nextSong() {
        currentTrackIndex = (currentTrackIndex + 1) % audio.children.length;
        changeTrack();
    }

    // Change Track Function
    function changeTrack() {
        audio.src = audio.children[currentTrackIndex].src;
        audio.play();
        playPauseButton.classList.remove('fa-play');
        playPauseButton.classList.add('fa-pause');
        updateSongInfo();
    }

    // Update Slider and Time Display
    function updateProgress() {
        if (audio.duration) {
            slide.value = (audio.currentTime / audio.duration) * 100;
            startTime.textContent = formatTime(audio.currentTime);
            endTime.textContent = formatTime(audio.duration);
        }
    }

    // Format time as MM:SS
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Update Song Information
    function updateSongInfo() {
        const currentTrack = audio.children[currentTrackIndex];
        let songName = currentTrack.src.split('/').pop().split('.').slice(0, -1).join('.');

        // Replace % with a blank space
        songName = songName.replace(/%20/g, ' ');
        songName = songName.replace(/%7C/g, ' ');
        songInfo.textContent = songName;
    }

    // Event Listener for Slider
    slide.addEventListener('input', function () {
        const value = slide.value;
        audio.currentTime = (value / 100) * audio.duration;
    });

    // Event Listener for End of Track
    audio.addEventListener('ended', nextSong);

    // Update the progress and time every second
    audio.addEventListener('timeupdate', updateProgress);

    // Set initial song info and time
    updateSongInfo();
    updateProgress();
});


// // practice of eventlistener

// document.addEventListener("contextmenu", (event) => {
//     // alert("right click not allowed");
//     // event.preventDefault();
//     // console.log('Right-click is disabled.');
//     // document.body.style.background ="blue";
// });
// document.addEventListener("dblclick", (event) => {
//     // alert("right click not allowed");
//     event.preventDefault();
//     // console.log('Right-click is disabled.');
//     // document.body.style.background ="blue";
// });



