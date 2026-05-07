const songs = [
    {
        title: "SHERIYA",
        artist: "ARJN X KDS X RONN",
        audio: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153085/ARJN_X_KDS_X_RONN_-_SHERIYA_Official_Music_Video___Def_Jam_India___Latest_Malayalam_Rap_Song_MP3_160K_bblede.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159368/ab67616d0000b273dc54baf911bfff7715c66481_dchxzb.jpg"
    },
    {
        title: "Fa9la",
        artist: "Flipperachi",
        audio: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153083/Fa9la_-_Flipperachi_Prod._by_DJ_Outlaw_Official_Audio___%D9%81%D8%B5%D9%84%D8%A9_-_%D9%81%D9%84%D9%8A%D8%A8%D8%B1%D8%AAT%D8%B4%D9%8A_MP3_160K_m99eot.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159370/ab67616d0000b2733d8df7193d625455be369fc3_hlldot.jpg"
    },
    {
        title: "Alappuzha Sandhayil",
        artist: "Ken Karunaas, GV Prakash",
        audio: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153081/Alappuzha_Sandhayil_Video_Song___Youth___Ken_Karunaas___GV_Prakash___Paarvathaa_Entertainments_MP3_320K_xt99yr.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159374/Alappuzha_sandhayil_v0awgg.jpg"
    },
    {
        title: "Mutta Kalakki",
        artist: "Ken Karunaas, GV Prakash",
        audio: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153077/Mutta_Kalakki_Music_Video___Youth___Ken_Karunaas___Suraj_Venjaramoodu___GV_Prakash_Kumar_MP3_320K_iq87wc.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159379/mutta_kalakki_dflfdz.jpg"
    },
    {
        title: "Paranthene Penne",
        artist: "Ken Karunaas, GV Prakash",
        audio: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153076/Paranthene_Penne_Music_Video___Youth___Ken_Karunaas___Anishma___GV_Prakash_Kumar_MP3_320K_t63i4p.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159381/Paranthene-Penne-From-Youth-Tamil-2026-20260219193543-500x500_kedjvn.jpg"
    },
    {
        title: "KALYANI",
        artist: "ARJN x KDS x FIFTY4 x RONN",
        audio: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153074/ARJN_x_KDS_x_FIFTY4_x_RONN_-_KALYANI_Official_Lyrical_Video_MP3_160K_yb9r2q.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159372/ab67616d0000b2738c681e9dd49d13f7d223f8bf_fb5bnw.jpg"
    },
    {
        title: "Loveah Sollitalea",
        artist: "Ken Karunaas, GV Prakash",
        audio: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153071/Loveah_Sollitalea_Official_Video_Song___Ken_Karunaas___GV_Prakash___Youth_MP3_320K_ayzhdx.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159377/loveah_sollitalea_tbjmpy.jpg"
    },
    {
        title: "Aasa Pulla",
        artist: "GV Prakash, Ken Karunaas",
        audio: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153067/Aasa_Pulla_Music_Video___GV_Prakash_Kumar___Ken_Karunaas___Youth_MP3_320K_magmh9.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159367/Aasa-Pulla-From-Youth-Tamil-2026-20260227185734-500x500-2_raabww.jpg"
    },
    {
        title: "Jilpanso",
        artist: "Ken Karunaas, GV Prakash",
        audio: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153065/Jilpanso_Music_Video___Youth___Ken_Karunaas___GV_Prakash_MP3_320K_xsdf2c.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159375/jilpanso_xjphkh.jpg"
    },
    {
        title: "AA 23 THEME",
        artist: "Allu Arjun, Anirudh",
        audio: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153060/AA_23_THEME_Full_Audio___Icon_Star_Allu_Arjun___Lokesh_Kanagaraj___Anirudh___Mythri_Movie_Makers_MP3_160K_tfwiyi.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159370/ab67616d0000b273f8aa25d7dd200235302ffc28_pn9qsc.jpg"
    },
    {
        title: "Enakena",
        artist: "Anirudh Ravichander",
        audio: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163119/Enakena_Music_Video__Love_Insurance_Kompany_Pradeep_Ranganathan_Anirudh_Vignesh_Shivan_Lalit_Kumar_MP3_320K_pnaizr.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163163/ab67616d00001e0233c6ec99236141977db9f410_lyoegd.jpg"
    },
    {
        title: "Adaavadi",
        artist: "Anirudh, Pradeep Ranganathan",
        audio: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163105/Adaavadi_Music_Video___LIK___Pradeep_Ranganathan___Anirudh_l_Vignesh_Shivan___Krithi_Shetty_MP3_320K_e5r9be.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163163/ab67616d00001e0215ddf097f78e749a9eda365c_y2jhml.jpg"
    },
    {
        title: "Oorum Blood",
        artist: "Sai Abhyankkar, Paal Dabba",
        audio: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163104/Oorum_Blood_Movie_Version___Dude___Pradeep_R__Mamitha____SaiAbhyankkar__Keerthiswaran___Paal_Dabba_MP3_320K_w5e7to.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163161/ab67616d0000b2737b5fd77735d2fa9cc7e982df_gacog7.jpg"
    },
    {
        title: "Singari",
        artist: "Sai Abhyankkar",
        audio: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163115/Singari_Video_Song___Dude___Pradeep_Ranganathan__Mamitha_Baiju____SaiAbhyankkar___Keerthiswaran_MP3_320K_b0jg51.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163160/ab67616d0000b273c97794bc5f05f822f0be7ac9_o1wodb.jpg"
    },
    {
        title: "Pavazha Malli",
        artist: "Sai Abhyankkar, Shruti Haasan",
        audio: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163100/_SaiAbhyankkar_-_Pavazha_Malli_Music_Video___Kayadu___Shruti_Haasan___Vivek___Thejo___Think_Indie_MP3_320K_ikpkim.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163161/ab67616d0000b273f5f2a6705dfe3c2fe11028c8_lsaiem.jpg"
    },
    {
        title: "Jana Nayagan - Oru Pere Varalaaru",
        artist: "Anirudh, Vishal Mishra",
        audio: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163114/Jana_Nayagan_Oru_Pere_Varalaaru_Lyrical___Thalapathy_Vijay___H_Vinoth__Anirudh__KVN__Vishal_Mishra_MP3_320K_uno1ni.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163161/ab67616d0000b273e941e71a3b4c4cb761097dc5_ylsrxs.jpg"
    },
    {
        title: "Jana Nayagan - Raavana Mavandaa",
        artist: "Anirudh, Thalapathy Vijay",
        audio: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163105/Jana_Nayagan_-_Raavana_Mavandaa_Lyrical___Thalapathy_Vijay___Pooja_Hegde___H_Vinoth___Anirudh___KVN_MP3_320K_g7hdza.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163162/ab67616d00001e02e0807b4138d187c74233853b_yj3s3r.jpg"
    },
    {
        title: "Jana Nayagan - Thalapathy Kacheri",
        artist: "Anirudh Ravichander",
        audio: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163100/Jana_Nayagan_Thalapathy_Kacheri_Lyric_Video__Thalapathy_Vijay__H_Vinoth__Anirudh__Pooja_Hegde__KVN_MP3_320K_zc9fij.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163161/ab67616d00001e02e2b41d0e6e8205e913701a42_umkkme.jpg"
    },
    {
        title: "Aura 10 10",
        artist: "Hiphop Tamizha",
        audio: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163113/Aura_10_10_-_Music_Video___Meesaya_Murukku_2___Hiphop_Tamizha___Ketika_Sharma_MP3_320K_wvoddi.mp3",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163162/ab67616d0000b273452dc35c269e2be9de5c2a85_luywpo.jpg"
    }
];

// DOM Elements
const songGrid = document.getElementById('songGrid');
const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const volumeBar = document.getElementById('volumeBar');
const volumeFill = document.getElementById('volumeFill');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const currentTrackImage = document.getElementById('currentTrackImage');
const currentTrackTitle = document.getElementById('currentTrackTitle');
const currentTrackArtist = document.getElementById('currentTrackArtist');

let currentSongIndex = 0;
let isPlaying = false;

// Initialize the grid
function initGrid() {
    songs.forEach((song, index) => {
        const card = document.createElement('div');
        card.className = 'song-card';
        card.innerHTML = `
            <img src="${song.cover}" alt="${song.title}">
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
            <div class="play-hover">
                <i class="fas fa-play"></i>
            </div>
        `;
        card.addEventListener('click', () => playSong(index));
        songGrid.appendChild(card);
    });
}

// Play a specific song
function playSong(index) {
    if (currentSongIndex === index && !audioPlayer.paused) {
        pauseAudio();
        return;
    }
    
    currentSongIndex = index;
    const song = songs[currentSongIndex];
    
    audioPlayer.src = song.audio;
    currentTrackImage.src = song.cover;
    currentTrackTitle.innerText = song.title;
    currentTrackArtist.innerText = song.artist;
    
    playAudio();
}

function playAudio() {
    audioPlayer.play();
    isPlaying = true;
    playPauseBtn.innerHTML = '<i class="fas fa-pause-circle"></i>';
}

function pauseAudio() {
    audioPlayer.pause();
    isPlaying = false;
    playPauseBtn.innerHTML = '<i class="fas fa-play-circle"></i>';
}

// Player controls
playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseAudio();
    } else {
        if (!audioPlayer.src) {
            playSong(0);
        } else {
            playAudio();
        }
    }
});

nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
});

prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex);
});

// Update progress bar
audioPlayer.addEventListener('timeupdate', () => {
    const { duration, currentTime } = audioPlayer;
    if (duration) {
        const progressPercent = (currentTime / duration) * 100;
        progressBar.value = progressPercent;
        progressFill.style.width = `${progressPercent}%`;
        
        currentTimeEl.innerText = formatTime(currentTime);
        durationEl.innerText = formatTime(duration);
    }
});

// Seek functionality
progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
});

// Volume control
volumeBar.addEventListener('input', () => {
    const volume = volumeBar.value / 100;
    audioPlayer.volume = volume;
    volumeFill.style.width = `${volumeBar.value}%`;
});

// Helper: Format time
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Auto next song
audioPlayer.addEventListener('ended', () => {
    nextBtn.click();
});

// Load initial grid
initGrid();
