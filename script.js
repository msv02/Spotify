const songs = [
    {
        title: "SHERIYA",
        artist: "ARJN X KDS X RONN",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153085/ARJN_X_KDS_X_RONN_-_SHERIYA_Official_Music_Video___Def_Jam_India___Latest_Malayalam_Rap_Song_MP3_160K_bblede.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159368/ab67616d0000b273dc54baf911bfff7715c66481_dchxzb.jpg"
    },
    {
        title: "Fa9la",
        artist: "Flipperachi",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153083/Fa9la_-_Flipperachi_Prod._by_DJ_Outlaw_Official_Audio___%D9%81%D8%B5%D9%84%D8%A9_-_%D9%81%D9%84%D9%8A%D8%A8%D8%B1%D8%A7%D8%AA%D8%B4%D9%8A_MP3_160K_m99eot.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159370/ab67616d0000b2733d8df7193d625455be369fc3_hlldot.jpg"
    },
    {
        title: "Alappuzha Sandhayil",
        artist: "Ken Karunaas, GV Prakash",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153081/Alappuzha_Sandhayil_Video_Song___Youth___Ken_Karunaas___GV_Prakash___Paarvathaa_Entertainments_MP3_320K_xt99yr.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159374/Alappuzha_sandhayil_v0awgg.jpg"
    },
    {
        title: "Mutta Kalakki",
        artist: "Ken Karunaas, GV Prakash",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153077/Mutta_Kalakki_Music_Video___Youth___Ken_Karunaas___Suraj_Venjaramoodu___GV_Prakash_Kumar_MP3_320K_iq87wc.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159379/mutta_kalakki_dflfdz.jpg"
    },
    {
        title: "Paranthene Penne",
        artist: "Ken Karunaas, GV Prakash",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153076/Paranthene_Penne_Music_Video___Youth___Ken_Karunaas___Anishma___GV_Prakash_Kumar_MP3_320K_t63i4p.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159381/Paranthene-Penne-From-Youth-Tamil-2026-20260219193543-500x500_kedjvn.jpg"
    },
    {
        title: "KALYANI",
        artist: "ARJN x KDS x FIFTY4 x RONN",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153074/ARJN_x_KDS_x_FIFTY4_x_RONN_-_KALYANI_Official_Lyrical_Video_MP3_160K_yb9r2q.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159372/ab67616d0000b2738c681e9dd49d13f7d223f8bf_fb5bnw.jpg"
    },
    {
        title: "Loveah Sollitalea",
        artist: "Ken Karunaas, GV Prakash",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153071/Loveah_Sollitalea_Official_Video_Song___Ken_Karunaas___GV_Prakash___Youth_MP3_320K_ayzhdx.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159377/loveah_sollitalea_tbjmpy.jpg"
    },
    {
        title: "Aasa Pulla",
        artist: "GV Prakash, Ken Karunaas",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153067/Aasa_Pulla_Music_Video___GV_Prakash_Kumar___Ken_Karunaas___Youth_MP3_320K_magmh9.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159367/Aasa-Pulla-From-Youth-Tamil-2026-20260227185734-500x500-2_raabww.jpg"
    },
    {
        title: "Jilpanso",
        artist: "Ken Karunaas, GV Prakash",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153065/Jilpanso_Music_Video___Youth___Ken_Karunaas___GV_Prakash_MP3_320K_xsdf2c.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159375/jilpanso_xjphkh.jpg"
    },
    {
        title: "AA 23 THEME",
        artist: "Allu Arjun, Anirudh",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153060/AA_23_THEME_Full_Audio___Icon_Star_Allu_Arjun___Lokesh_Kanagaraj___Anirudh___Mythri_Movie_Makers_MP3_160K_tfwiyi.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159370/ab67616d0000b273f8aa25d7dd200235302ffc28_pn9qsc.jpg"
    },
    {
        title: "Enakena",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163119/Enakena_Music_Video__Love_Insurance_Kompany_Pradeep_Ranganathan_Anirudh_Vignesh_Shivan_Lalit_Kumar_MP3_320K_pnaizr.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163163/ab67616d00001e0233c6ec99236141977db9f410_lyoegd.jpg"
    },
    {
        title: "Adaavadi",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163105/Adaavadi_Music_Video___LIK___Pradeep_Ranganathan___Anirudh_l_Vignesh_Shivan___Krithi_Shetty_MP3_320K_e5r9be.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163163/ab67616d00001e0215ddf097f78e749a9eda365c_y2jhml.jpg"
    },
    {
        title: "Oorum Blood",
        artist: "SaiAbhyankkar, Paal Dabba",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163104/Oorum_Blood_Movie_Version___Dude___Pradeep_R__Mamitha____SaiAbhyankkar__Keerthiswaran___Paal_Dabba_MP3_320K_w5e7to.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163161/ab67616d0000b2737b5fd77735d2fa9cc7e982df_gacog7.jpg"
    },
    {
        title: "Singari",
        artist: "SaiAbhyankkar",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163115/Singari_Video_Song___Dude___Pradeep_Ranganathan__Mamitha_Baiju____SaiAbhyankkar___Keerthiswaran_MP3_320K_b0jg51.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163160/ab67616d0000b273c97794bc5f05f822f0be7ac9_o1wodb.jpg"
    },
    {
        title: "Pavazha Malli",
        artist: "SaiAbhyankkar, Shruti Haasan",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163100/_SaiAbhyankkar_-_Pavazha_Malli_Music_Video___Kayadu___Shruti_Haasan___Vivek___Thejo___Think_Indie_MP3_320K_ikpkim.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163161/ab67616d0000b273f5f2a6705dfe3c2fe11028c8_lsaiem.jpg"
    },
    {
        title: "Jana Nayagan - Oru Pere",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163114/Jana_Nayagan_Oru_Pere_Varalaaru_Lyrical___Thalapathy_Vijay___H_Vinoth__Anirudh__KVN__Vishal_Mishra_MP3_320K_uno1ni.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163161/ab67616d0000b273e941e71a3b4c4cb761097dc5_ylsrxs.jpg"
    },
    {
        title: "Jana Nayagan - Raavana Mavandaa",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163105/Jana_Nayagan_-_Raavana_Mavandaa_Lyrical___Thalapathy_Vijay___Pooja_Hegde___H_Vinoth___Anirudh___KVN_MP3_320K_g7hdza.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163162/ab67616d00001e02e0807b4138d187c74233853b_yj3s3r.jpg"
    },
    {
        title: "Thalapathy Kacheri",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163100/Jana_Nayagan_Thalapathy_Kacheri_Lyric_Video__Thalapathy_Vijay__H_Vinoth__Anirudh__Pooja_Hegde__KVN_MP3_320K_zc9fij.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163161/ab67616d00001e02e2b41d0e6e8205e913701a42_umkkme.jpg"
    },
    {
        title: "Aura 10/10",
        artist: "Hiphop Tamizha",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163113/Aura_10_10_-_Music_Video___Meesaya_Murukku_2___Hiphop_Tamizha___Ketika_Sharma_MP3_320K_wvoddi.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163162/ab67616d0000b273452dc35c269e2be9de5c2a85_luywpo.jpg"
    },
    {
        title: "Whistle",
        artist: "TVK Election Song",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778174721/TVK_ELECTION_CAMPAIGN_SONG_-_%E0%AE%89%E0%AE%99%E0%AF%8D%E0%AE%95_%E0%AE%B5%E0%AE%BF%E0%AE%9C%E0%AE%AF%E0%AF%8D_%E0%AE%A8%E0%AE%BE_%E0%AE%B5%E0%AE%B0%E0%AF%87%E0%AE%A9%E0%AF%8D__Whistle_%E0%AE%85%E0%AE%9F%E0%AE%BF%E0%AE%95%E0%AF%8D%E0%AE%95_%E0%AE%B0%E0%AF%86%E0%AE%9F%E0%AE%BF%E0%AE%AF%E0%AE%BE__MP3_320K_orrvx2.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778174737/ab67616d0000b2731e2527b140ee8253064033fa_muhop6.jpg"
    }
];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;

const audio = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const songGrid = document.getElementById('song-grid');

const playerSongTitle = document.getElementById('player-song-title');
const playerSongArtist = document.getElementById('player-song-artist');
const playerAlbumArt = document.getElementById('player-album-art');

const shuffleBtn = document.getElementById('shuffle');
const repeatBtn = document.getElementById('repeat');
const myAlbumBtn = document.getElementById('my-album-link');
const homeBtn = document.getElementById('home-link');

// Mobile Nav Buttons
const mobileHome = document.getElementById('mobile-home');
const mobileSearch = document.getElementById('mobile-search');
const mobileLibrary = document.getElementById('mobile-library');
const mobileMyAlbum = document.getElementById('mobile-my-album');

const mobileNavItems = [mobileHome, mobileSearch, mobileLibrary, mobileMyAlbum];
const desktopNavItems = [homeBtn, document.getElementById('search-link'), myAlbumBtn];

// Initialize
function init() {
    renderSongs(songs);
    loadSong(songs[currentSongIndex]);
}

function renderSongs(songList) {
    songGrid.innerHTML = '';
    songList.forEach((song, index) => {
        const card = document.createElement('div');
        card.className = 'song-card';
        card.innerHTML = `
            <img src="${song.cover}" alt="${song.title}">
            <div class="song-details-wrapper">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
            <div class="play-hover-btn">
                <i class="fa-solid fa-play"></i>
            </div>
        `;
        card.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(song);
            playSong();
        });
        songGrid.appendChild(card);
    });
}

function loadSong(song) {
    playerSongTitle.innerText = song.title;
    playerSongArtist.innerText = song.artist;
    playerAlbumArt.src = song.cover;
    audio.src = song.url;
}

function playSong() {
    audio.play().catch(error => {
        console.log("Playback was prevented. Please interact with the page first.", error);
    });
}

function pauseSong() {
    audio.pause();
}

function togglePlay() {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
}

// Update UI based on audio state
audio.onplay = () => {
    isPlaying = true;
    playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
};

audio.onpause = () => {
    isPlaying = false;
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
};

function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    loadSong(songs[currentSongIndex]);
    playSong();
}

function nextSong() {
    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * songs.length);
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            currentSongIndex = 0;
        }
    }
    loadSong(songs[currentSongIndex]);
    playSong();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.value = progressPercent;

    // Update time displays
    currentTimeEl.innerText = formatTime(currentTime);
    durationEl.innerText = isNaN(duration) ? "0:00" : formatTime(duration);
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (progress.value / 100) * duration;
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Event Listeners
playPauseBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
progress.addEventListener('input', () => {
    const duration = audio.duration;
    audio.currentTime = (progress.value / 100) * duration;
});

volume.addEventListener('input', (e) => {
    audio.volume = e.target.value / 100;
});

audio.addEventListener('ended', () => {
    if (isRepeat) {
        playSong();
    } else {
        nextSong();
    }
});

shuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    shuffleBtn.style.color = isShuffle ? 'var(--spotify-green)' : 'var(--text-grey)';
});

repeatBtn.addEventListener('click', () => {
    isRepeat = !isRepeat;
    repeatBtn.style.color = isRepeat ? 'var(--spotify-green)' : 'var(--text-grey)';
});

// "My Album" functionality
function showMyAlbum() {
    syncActiveNav('my-album');
    renderSongs(songs.slice(0, 5));
    document.querySelector('.greeting').innerText = "My Album";
}

function showHome() {
    syncActiveNav('home');
    renderSongs(songs);
    document.querySelector('.greeting').innerText = "Good evening";
}

function syncActiveNav(target) {
    // Desktop
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    // Mobile
    document.querySelectorAll('.mobile-nav-item').forEach(item => item.classList.remove('active'));

    if (target === 'home') {
        homeBtn.classList.add('active');
        mobileHome.classList.add('active');
    } else if (target === 'my-album') {
        myAlbumBtn.classList.add('active');
        mobileMyAlbum.classList.add('active');
    } else if (target === 'search') {
        document.getElementById('search-link').classList.add('active');
        mobileSearch.classList.add('active');
    } else if (target === 'library') {
        mobileLibrary.classList.add('active');
    }
}

myAlbumBtn.addEventListener('click', showMyAlbum);
mobileMyAlbum.addEventListener('click', showMyAlbum);

homeBtn.addEventListener('click', showHome);
mobileHome.addEventListener('click', showHome);

document.getElementById('search-link').addEventListener('click', () => {
    syncActiveNav('search');
    alert("Search feature coming soon!");
});

mobileSearch.addEventListener('click', () => {
    syncActiveNav('search');
    // Just a placeholder for search
    alert("Search feature coming soon! Showing all songs for now.");
    showHome();
});

mobileLibrary.addEventListener('click', () => {
    syncActiveNav('library');
    alert("Library feature coming soon!");
});

// Initialize the app
init();

// Keyboard Shortcuts
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault(); // Prevent scrolling
        togglePlay();
    }
});
