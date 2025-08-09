// musicwall.js - migrated from lofiwall.js
const TRACKS = [
	{
		embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/allahlas/raspberry-jam%3Fsi%3Dfb08df52fe0740a4b820b86fa260a52a%26utm_source%3Dclipboard%26utm_medium%3Dtext%26utm_campaign=social_sharing&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
		trackUrl: "https://soundcloud.com/allahlas/raspberry-jam?si=fb08df52fe0740a4b820b86fa260a52a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
		albumCoverUrl: null
	},
	{
		embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/phdflopperguy56-music/jinsang-september-rain%3Fsi%3D158dbebc7e5e48339e5eb341b1e124f6%26utm_source%3Dclipboard%26utm_medium%3Dtext%26utm_campaign=social_sharing&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
		trackUrl: "https://soundcloud.com/phdflopperguy56-music/jinsang-september-rain?si=158dbebc7e5e48339e5eb341b1e124f6&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
		albumCoverUrl: null
	},
	{
		embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/jinsangbeats/cleaning-day%3Fsi%3D04b4e3bba8f14e43a6653a09c5695b65%26utm_source%3Dclipboard%26utm_medium%3Dtext%26utm_campaign=social_sharing&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
		trackUrl: "https://soundcloud.com/jinsangbeats/cleaning-day?si=04b4e3bba8f14e43a6653a09c5695b65&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
		albumCoverUrl: null
	},
	{
		embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/pastelghost/darkbeach%3Fsi%3Deaf38f0bd5714edc944abe9724214def%26utm_source%3Dclipboard%26utm_medium%3Dtext%26utm_campaign=social_sharing&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
		trackUrl: "https://soundcloud.com/pastelghost/darkbeach?si=eaf38f0bd5714edc944abe9724214def&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
		albumCoverUrl: null
	},
	{
		embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/potsupotsu/potsu-x-lando-breakfast%3Fsi%3D7b3f09e476ea4c11b938515c9684d5eb%26utm_source%3Dclipboard%26utm_medium%3Dtext%26utm_campaign%3Dsocial_sharing&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
		trackUrl: "https://soundcloud.com/potsupotsu/potsu-x-lando-breakfast?si=7b3f09e476ea4c11b938515c9684d5eb&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
		albumCoverUrl: null
	},
	{
		embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/stereomonomusic/boogarins-san-lorenzo%3Fsi%3D55e9f31c844f4b348bf22030c20dfd00%26utm_source%3Dclipboard%26utm_medium%3Dtext%26utm_campaign%3Dsocial_sharing&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
		trackUrl: "https://soundcloud.com/stereomonomusic/boogarins-san-lorenzo?si=55e9f31c844f4b348bf22030c20dfd00&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
		albumCoverUrl: null
	},
	{
		embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/abediq/jinsang-genesis&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
		trackUrl: "https://soundcloud.com/abediq/jinsang-genesis",
		albumCoverUrl: null
	},
	{
		embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/jinsangbeats/light-rays&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
		trackUrl: "https://soundcloud.com/jinsangbeats/light-rays",
		albumCoverUrl: null
	},
	{
		embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/jinsangbeats/far-away&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
		trackUrl: "https://soundcloud.com/jinsangbeats/far-away",
		albumCoverUrl: null
	},
	{
		embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/retroronin/jinsang-night-breeze&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
		trackUrl: "https://soundcloud.com/retroronin/jinsang-night-breeze",
		albumCoverUrl: null
	},
	{
		embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/michael-timi-ade/jinsang-morning&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
		trackUrl: "https://soundcloud.com/michael-timi-ade/jinsang-morning",
		albumCoverUrl: null
	},
	{
		embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/user-185332303/jinsang-egyptian-pools&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
		trackUrl: "https://soundcloud.com/user-185332303/jinsang-egyptian-pools?si=9fecb718a14c4d9dabb7b3617ee3b8c4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
		albumCoverUrl: null
	},
	{
		embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/user-662598674/blank-banshee-1-b-start-up%3Fsi%3D6db5ea60f4764aa4a2dc4825f105ff1e%26utm_source%3Dclipboard%26utm_medium%3Dtext%26utm_campaign%3Dsocial_sharing&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
		trackUrl: "https://soundcloud.com/user-662598674/blank-banshee-1-b-start-up?si=6db5ea60f4764aa4a2dc4825f105ff1e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
		albumCoverUrl: null
	},
	{
		embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/electronicvisions/tales-of-forgotten-biomes&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
		trackUrl: "https://soundcloud.com/electronicvisions/tales-of-forgotten-biomes?si=c5e9a510192440e98754cc360f0f1f76&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
		albumCoverUrl: null
	},
	{
		embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/russliquid/the-russ-liquid-test-pleurant-de-joine&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
		trackUrl: "https://soundcloud.com/russliquid/the-russ-liquid-test-pleurant-de-joine?si=8465eb62617f43d1a40de20f91ef1753&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
		albumCoverUrl: null
	},
	{
		embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/petecurry/sonic-in-the-holobeach&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
		trackUrl: "https://soundcloud.com/petecurry/sonic-in-the-holobeach?si=6bf9646131bc413f83faf75d15d261dd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
		albumCoverUrl: null
	}
];
async function fetchAlbumCover(trackUrl) {
	const response = await fetch(`https://soundcloud.com/oembed?format=json&url=${encodeURIComponent(trackUrl)}`);
	const data = await response.json();
	// Get the original quality image by removing -large suffix
	return data.thumbnail_url.replace('-large.jpg', '.jpg');
}

// Global state variables for music player functionality
let currentlyPlayingSquare = null;
let hiddenPlayer = null;
let isRandomButtonActive = false; // Prevent rapid clicking of random button
let isSquareClickActive = false; // Prevent rapid clicking of squares

/**
 * Creates all 16 squares in a 4x4 grid layout with randomized track placement
 * Each square can be clicked to play its associated track with visual feedback
 * Track positions are shuffled randomly on each page load for variety
 */
function createSquares() {
	const grid = document.getElementById('squareGrid');
	grid.innerHTML = '';
    
	// Create an array representing all 16 grid slots: song indices and empty slots
	const totalSlots = 16;
	const slotArray = [];
	for (let i = 0; i < TRACKS.length; i++) {
		slotArray.push({ type: 'track', trackIndex: i });
	}
	for (let i = TRACKS.length; i < totalSlots; i++) {
		slotArray.push({ type: 'empty' });
	}
	// Shuffle the slotArray to randomize placement of both tracks and emptyboxes
	for (let i = slotArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[slotArray[i], slotArray[j]] = [slotArray[j], slotArray[i]];
	}
	// Create the grid squares based on the shuffled slotArray
	for (let i = 0; i < totalSlots; i++) {
		const slot = slotArray[i];
		if (slot.type === 'track') {
			const square = document.createElement('div');
			square.className = 'square';
			square.dataset.trackIndex = slot.trackIndex;
			square.style.backgroundSize = 'cover';
			square.style.backgroundPosition = 'center';
			square.style.cursor = 'pointer';
			square.addEventListener('click', () => handleSquareClick(square));
			grid.appendChild(square);
		} else {
			const emptybox = document.createElement('div');
			emptybox.className = 'square emptybox';
			emptybox.style.backgroundSize = 'cover';
			emptybox.style.backgroundPosition = 'center';
			emptybox.style.cursor = 'default';
			grid.appendChild(emptybox);
		}
	}
}

/**
 * Handles click events on grid squares with animation and music playback
 * Toggles music: stops if same square clicked twice, plays new track if different square
 * Includes click protection to prevent rapid clicking and animation conflicts
 * Features smooth CSS animations for visual feedback
 */
function handleSquareClick(square) {
	if (isSquareClickActive) return;
    
	// If clicking the same square that's playing, stop music and reset
	if (currentlyPlayingSquare === square) {
		stopMusic();
		currentlyPlayingSquare = null;
		return;
	}
    
	isSquareClickActive = true;
	currentlyPlayingSquare = square;
	const trackIndex = parseInt(square.dataset.trackIndex);
	playMusic(TRACKS[trackIndex].embedUrl);
    
	// Animation sequence: pressed (100ms) -> clicked (150ms) -> normal
	square.classList.add('pressed');
	setTimeout(() => {
		square.classList.remove('pressed');
		square.classList.add('clicked');
		setTimeout(() => {
			square.classList.remove('clicked');
			isSquareClickActive = false;
		}, 150);
	}, 100);
}

/**
 * Creates and displays the SoundCloud music player iframe
 * Removes any existing player first to prevent multiple players
 * Positions the player below the grid with consistent styling
 * Enables autoplay and sets up proper iframe attributes
 */
function playMusic(embedUrl) {
	if (hiddenPlayer) {
		document.body.removeChild(hiddenPlayer);
	}
    
	// Create new SoundCloud iframe player with fixed positioning
	hiddenPlayer = document.createElement('iframe');
	hiddenPlayer.style.position = 'fixed';
	hiddenPlayer.style.top = '546px';
	hiddenPlayer.style.width = '400px';
	hiddenPlayer.style.height = '166px';
	hiddenPlayer.style.left = '50%';
	hiddenPlayer.style.transform = 'translateX(-50%)';
	hiddenPlayer.style.border = 'none';
	hiddenPlayer.style.zIndex = '9999';
	hiddenPlayer.style.backgroundColor = 'rgba(0,0,0,0.9)';
	hiddenPlayer.style.borderRadius = '10px';
	hiddenPlayer.setAttribute('allow', 'autoplay');
	hiddenPlayer.src = embedUrl;
    
	document.body.appendChild(hiddenPlayer);
}

/**
 * Removes the SoundCloud player from the page and cleans up references
 * Safely handles case where no player exists to prevent errors
 */
function stopMusic() {
	if (hiddenPlayer) {
		document.body.removeChild(hiddenPlayer);
		hiddenPlayer = null;
	}
}

/**
 * Plays a random track from the collection with visual feedback
 * Stops current music, selects random track, and animates the corresponding square
 * Uses the same animation sequence as manual square clicks for consistency
 * Includes protection against rapid button clicking
 */
function playRandomSong() {
	if (isRandomButtonActive) return;
	isRandomButtonActive = true;
    
	// Stop current music and reset state
	if (currentlyPlayingSquare) {
		stopMusic();
		currentlyPlayingSquare = null;
	}
    
	const randomIndex = Math.floor(Math.random() * TRACKS.length);
	const squares = document.querySelectorAll('.square');
    
	// Find the square corresponding to the random track and animate it
	for (let square of squares) {
		if (parseInt(square.dataset.trackIndex) === randomIndex) {
			currentlyPlayingSquare = square;
			playMusic(TRACKS[randomIndex].embedUrl);
            
			// Same animation sequence as manual clicks
			square.classList.add('pressed');
			setTimeout(() => {
				square.classList.remove('pressed');
				square.classList.add('clicked');
				setTimeout(() => {
					square.classList.remove('clicked');
					isRandomButtonActive = false;
				}, 150);
			}, 100);
			break;
		}
	}
}

/**
 * Initializes the music wall application when the page loads
 * Creates the 4x4 grid of squares and loads original quality album covers
 * Uses parallel loading for maximum speed - all covers fetch simultaneously
 * Each image appears immediately when loaded, no waiting for all to complete
 */
document.addEventListener('DOMContentLoaded', () => {
	createSquares();
    
	// Start fetching all album covers in parallel and apply each one as it loads
	TRACKS.forEach((track, index) => {
		fetchAlbumCover(track.trackUrl).then(coverUrl => {
			const squares = document.querySelectorAll('.square');
			squares.forEach(square => {
				if (parseInt(square.dataset.trackIndex) === index) {
					square.style.backgroundImage = `url(${coverUrl})`;
				}
			});
		});
	});
});

// Initialize random button functionality
document.getElementById('randomBtn').addEventListener('click', playRandomSong);
