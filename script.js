document.addEventListener('DOMContentLoaded', function () {
    // All songs
    let Allsong = [
        { name: "U hai toh dil dhadakta hai", path: "songs/U hai toh dil dhadakta hai.mp3", img: "songimg/U hai toh dil dhadakta hai.jpeg", singer: "Honey, Bunny, Sagar" },
        { name: "Khoobsurat", path: "songs/Khoobsurat.m4a", img: "songimg/Khoobsurat.jpeg", singer: "Sachin-Jigar & Vishal Mishra" },
        { name: "Nadaaniyan", path: "songs/Nadaaniyan.mp3", img: "songimg/nadaaniyan.jpeg", singer: "Akshath & Aisha Ahmed" },
        { name: "Gulabi Sadi", path: "songs/Gulabi Sadi.mp3", img: "songimg/Gulabi-Sadi.jpeg", singer: "Sanju Rathore & Bam Marathi" },
        { name: "Bye Bye Bye", path: "songs/Bye Bye Bye.mp3", img: "songimg/Bye_Bye.jpeg", singer: "NSYNC" },
        { name: "Perfect", path: "songs/Perfect.mp3", img: "songimg/Perfect.jpeg", singer: "Jasleen Royal" },
        { name: "Assi Sajna", path: "songs/Assi Sajna.mp3", img: "songimg/Assi-Sajan.jpeg", singer: "Ed Sheeran" },
        { name: "Summertime Sadness", path: "songs/Summertime Sadness.mp3", img: "songimg/Summer.jpeg", singer: "Lana Del Rey" },
        { name: "Heeriye", path: "songs/Heeriye.mp3", img: "songimg/Heeriye.jpeg", singer: "Jasleen Royal, Arijit Singh" },
        { name: "O Meri Laila", path: "songs/O Meri Laila.mp3", img: "songimg/O Meri Lalia.jpeg", singer: "Atif Aslam & Jyotica Tangri" },
        { name: "Sadqay", path: "songs/SADQAY.mp3", img: "songimg/Sadqay.jpeg", singer: "Aashir Wajahat, Nehaal Naseem" },
        { name: "Until I Found You", path: "songs/Until I Found You.mp3", img: "songimg/Until.jpeg", singer: "Stephen Sanchez, Em Beihold" },
        { name: "Aankhon Mein Doob Jaane Ko", path: "songs/Aankhon Mein Doob Jaane Ko | THE 9TEEN | K3G | Deewani Hai Dekho.mp3", img: "songimg/Ankho mein dub jane ko.jpeg", singer: "Sandesh Shandilya and THE 9TEEN" },
        { name: "Tum Kya Mile", path: "songs/Tum Kya Mile.mp3", img: "songimg/Tum kya mile.jpeg", singer: "Pritim, Arjit Singh, Shreya Ghoshal, Amitabh Bhattacharya" },
        { name: "Memories", path: "songs/Memories.mp3", img: "songimg/Memories.jpeg", singer: "Adam Levine, Stefan Johnson, Jordan Johnson and Vincent Ford" },
        { name: "Millionarie", path: "songs/Millionarie.mp3", img: "songimg/Millionarie.jpeg", singer: "Honey Singh, Bhushan Kumar" },
        // add more + update in the library 
    ];

    // Variables
    let currentTrackIndex = 0;
    let isShuffling = false;
    let isLooping = false; // Track loop state
    const audio = new Audio(Allsong[currentTrackIndex].path);
    const playPauseButton = document.getElementById('ctrlIcon');
    const progressBar = document.getElementById('slide');
    const previousSong = document.getElementById('pre');
    const nextButton = document.getElementById('next');
    const startTime = document.getElementById('start');
    const endTime = document.getElementById('end');
    const songArtist = document.getElementById('song-artist');
    const songTitle = document.getElementById('song-title');
    const songImage = document.getElementById('song-image');
    const volumeControl = document.getElementById('volume');
    const volumeIcon = document.getElementById('volume-icon');
    const shuffleButton = document.getElementById('shuffle');
    const downloadButton = document.getElementById('download');
    const loopButton = document.getElementById('loop');
    const playlist = document.getElementById('playlist');
    // const footer = document.getElementById('footer')

    // Play/Pause Function
    function togglePlayPause() {
        if (audio.paused || audio.currentTime <= 0) {
            audio.play();
            playPauseButton.classList.remove('fa-play');
            playPauseButton.classList.add('fa-pause');
        } else {
            audio.pause();
            playPauseButton.classList.remove('fa-pause');
            playPauseButton.classList.add('fa-play');
        }
        updateSongInfo(); // Update song info when play/pause is clicked
    }
    updateSongInfo();




    playPauseButton.addEventListener('click', togglePlayPause);

    // Update progress bar and time
    function updateProgress() {
        if (audio.duration) {
            progressBar.value = (audio.currentTime / audio.duration) * 100;
            startTime.textContent = formatTime(audio.currentTime);
            endTime.textContent = formatTime(audio.duration);
        }
    }
    updateProgress();




    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };




    progressBar.addEventListener('input', function () {
        const value = progressBar.value;
        audio.currentTime = (value / 100) * audio.duration;
        updateProgress();
    });





    audio.addEventListener('timeupdate', updateProgress);

    function highlightCurrentTrack() {
        const tracks = playlist.querySelectorAll('li.mp3');
        tracks.forEach((track, index) => {
            if (index === currentTrackIndex) {
                track.classList.add('active');
            } else {
                track.classList.remove('active');
            }
        });
    }

    highlightCurrentTrack();




    function changeTrack() {
        audio.src = Allsong[currentTrackIndex].path;
        audio.play();
        playPauseButton.classList.remove('fa-play');
        playPauseButton.classList.add('fa-pause');
        updateSongInfo(); // Update song info after changing track
        highlightCurrentTrack();
    }




    previousSong.addEventListener('click', function () {
        currentTrackIndex = (currentTrackIndex - 1 + Allsong.length) % Allsong.length;
        changeTrack();
    });




    nextButton.addEventListener('click', function () {
        currentTrackIndex = (currentTrackIndex + 1) % Allsong.length;
        changeTrack();
    });




    function shuffleSongs() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * Allsong.length);
        }
        while (randomIndex === currentTrackIndex);
        currentTrackIndex = randomIndex;
        changeTrack();
    }





    shuffleButton.addEventListener('click', function () {
        isShuffling = !isShuffling;
        shuffleButton.classList.toggle('active', isShuffling);
        if (isShuffling) {
            shuffleButton.style.color = 'white';
            shuffleSongs();
        }
    });


    
    loopButton.addEventListener('click', function () {
        isLooping = !isLooping; // Toggle looping state
    
        if (isLooping) {
            loopButton.classList.add("clicked"); // Add the class when looping
        } else {
            loopButton.classList.remove("clicked"); // Remove the class when not looping
        }
    });
    

    function updateDownloadLink() {
        downloadButton.href = Allsong[currentTrackIndex].path;
        downloadButton.download = Allsong[currentTrackIndex].name + ".mp3";
    }




    audio.addEventListener('ended', function () {
        if (isLooping) {
            audio.currentTime = 0;
            audio.play();
        } else if (isShuffling) {
            shuffleSongs();
        } else {
            currentTrackIndex = (currentTrackIndex + 1) % Allsong.length;
            changeTrack();
        }

    });



    function updateSongInfo() {
        const currentTrack = Allsong[currentTrackIndex];
        songArtist.textContent = currentTrack.singer;
        songTitle.textContent = currentTrack.name;
        songImage.src = currentTrack.img;
        updateDownloadLink();
    };
updateSongInfo();


    volumeControl.addEventListener('input', function () {
        audio.volume = volumeControl.value / 100;
        updateVolumeIcon();
    });



    function updateVolumeIcon() {
        if (audio.volume === 0) {
            volumeIcon.classList.remove('fa-volume-high', 'fa-volume-low');
            volumeIcon.classList.add('fa-volume-off');
        } else if (audio.volume <= 0.5) {
            volumeIcon.classList.remove('fa-volume-off', 'fa-volume-high');
            volumeIcon.classList.add('fa-volume-low');
        } else {
            volumeIcon.classList.remove('fa-volume-off', 'fa-volume-low');
            volumeIcon.classList.add('fa-volume-high');
        }
    }
    updateVolumeIcon();


    

    playlist.addEventListener('click', function (event) {
        const li = event.target.closest('li.mp3');
        if (li) {
            const index = li.dataset.index;
            if (index !== undefined) {
                currentTrackIndex = parseInt(index);
                changeTrack();
            }
        }
        
    });


    document.addEventListener("contextmenu", (event) => {
        // alert("right click not allowed");
        // event.preventDefault();
        console.log('Right-click is disabled.');
    });



    // whole body select off 
    // document.body.style.userSelect = 'none';
    // document.body.style.webkitUserSelect = 'none';
    // document.body.style.mozUserSelect = 'none';
    // document.body.style.msUserSelect = 'none';


//   document.querySelectorAll('#playlist li').forEach(function(songItem) {
//     songItem.addEventListener('click', function() {
//       // Show the footer
//       document.getElementById('music-player-footer').style.display = 'block';
//     });
//   });

});




// let Prom = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a > 0.5) {
//         reject("no number generated.")
//     }

//     else {
//         setTimeout(() => {
//             resolve("done")
//         }, 1000);
//     }

// });
// Prom.then((a) => {
//     console.log("Sonu");
// }).catch((err) => {
//     console.log("site in Maintenance")
// })

// document.addEventListener("contextmenu", (event) => {
//     alert("right click not allowed");
//     event.preventDefault();
//     // console.log('Right-click is disabled.');
//     // document.body.style.background ="blue";
// });