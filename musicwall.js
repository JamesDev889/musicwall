// Musicwall js

const squares = document.querySelectorAll('.music-square');
const tracks = [
    'https://soundcloud.com/allahlas/raspberry-jam',
    'https://soundcloud.com/phdflopperguy56-music/jinsang-september-rain',
    'https://soundcloud.com/jinsangbeats/cleaning-day',
    'https://soundcloud.com/pastelghost/darkbeach',
    'https://soundcloud.com/potsupotsu/potsu-x-lando-breakfast',
    'https://soundcloud.com/stereomonomusic/boogarins-san-lorenzo',
    'https://soundcloud.com/abediq/jinsang-genesis',
    'https://soundcloud.com/jinsangbeats/light-rays',
    'https://soundcloud.com/jinsangbeats/far-away',
    'https://soundcloud.com/retroronin/jinsang-night-breeze',
    'https://soundcloud.com/michael-timi-ade/jinsang-morning',
    'https://soundcloud.com/user-185332303/jinsang-egyptian-pools',
    'https://soundcloud.com/user-662598674/blank-banshee-1-b-start-up',
    'https://soundcloud.com/electronicvisions/tales-of-forgotten-biomes',
    'https://soundcloud.com/russliquid/the-russ-liquid-test-pleurant-de-joine',
    'https://soundcloud.com/petecurry/sonic-in-the-holobeach'
];

// Function to play a song
function playSong(trackUrl) {
    document.querySelector('#soundcloud-player iframe').src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true`;
    document.getElementById('soundcloud-player').style.visibility = 'visible';
}

// Fill all squares with album covers in random order (Fisher-Yates shuffle)
const shuffledTracks = [...tracks];
for (let i = shuffledTracks.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledTracks[i], shuffledTracks[j]] = [shuffledTracks[j], shuffledTracks[i]];
}

for (let i = 0; i < squares.length; i++) {
    fetch(`https://soundcloud.com/oembed?format=json&url=${encodeURIComponent(shuffledTracks[i])}`)
        .then(response => response.json())
        .then(data => {
            squares[i].innerHTML = `<img src="${data.thumbnail_url}" style="width: 100%; height: 100%; object-fit: cover;">`;
            
            // Add click event for each square
            squares[i].addEventListener('click', () => {
                playSong(shuffledTracks[i]);
            });
        });
}

// Add click event for random song button
document.getElementById('random-btn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * tracks.length);
    const randomTrack = tracks[randomIndex];
    
    // Find which square contains this track and animate it
    const trackIndex = shuffledTracks.indexOf(randomTrack);
    // Trigger the hover animation (scale 1.06)
    squares[trackIndex].style.transform = 'scale(1.06)';
    // Remove inline transform after animation so hover works again
    setTimeout(() => {
        squares[trackIndex].style.transform = '';
    }, 160);
    
    playSong(randomTrack);
});