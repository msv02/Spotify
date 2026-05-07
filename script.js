const songs = [
    {
        title: "SHERIYA",
        artist: "ARJN X KDS X RONN",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159368/ab67616d0000b273dc54baf911bfff7715c66481_dchxzb.jpg",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153085/ARJN_X_KDS_X_RONN_-_SHERIYA_Official_Music_Video___Def_Jam_India___Latest_Malayalam_Rap_Song_MP3_160K_bblede.mp3"
    },
    {
        title: "Fa9la",
        artist: "Flipperachi",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159370/ab67616d0000b2733d8df7193d625455be369fc3_hlldot.jpg",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153083/Fa9la_-_Flipperachi_Prod._by_DJ_Outlaw_Official_Audio___%D9%81%D8%B5%D9%84%D8%A9_-_%D9%81%D9%84%D9%8A%D8%A8%D8%B0%D8%A7%D8%AA%D8%B4%D9%8A_MP3_160K_m99eot.mp3"
    },
    {
        title: "Alappuzha Sandhayil",
        artist: "Ken Karunaas",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159374/Alappuzha_sandhayil_v0awgg.jpg",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153081/Alappuzha_Sandhayil_Video_Song___Youth___Ken_Karunaas___GV_Prakash___Paarvathaa_Entertainments_MP3_320K_xt99yr.mp3"
    },
    {
        title: "Mutta Kalakki",
        artist: "Ken Karunaas",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159379/mutta_kalakki_dflfdz.jpg",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153077/Mutta_Kalakki_Music_Video___Youth___Ken_Karunaas___Suraj_Venjaramoodu___GV_Prakash_Kumar_MP3_320K_iq87wc.mp3"
    },
    {
        title: "Paranthene Penne",
        artist: "Ken Karunaas",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159381/Paranthene-Penne-From-Youth-Tamil-2026-20260219193543-500x500_kedjvn.jpg",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153076/Paranthene_Penne_Music_Video___Youth___Ken_Karunaas___Anishma___GV_Prakash_Kumar_MP3_320K_t63i4p.mp3"
    },
    {
        title: "KALYANI",
        artist: "ARJN x KDS x FIFTY4 x RONN",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159372/ab67616d0000b2738c681e9dd49d13f7d223f8bf_fb5bnw.jpg",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153074/ARJN_x_KDS_x_FIFTY4_x_RONN_-_KALYANI_Official_Lyrical_Video_MP3_160K_yb9r2q.mp3"
    },
    {
        title: "Loveah Sollitalea",
        artist: "Ken Karunaas",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159377/loveah_sollitalea_tbjmpy.jpg",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153071/Loveah_Sollitalea_Official_Video_Song___Ken_Karunaas___GV_Prakash___Youth_MP3_320K_ayzhdx.mp3"
    },
    {
        title: "Aasa Pulla",
        artist: "GV Prakash Kumar",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159367/Aasa-Pulla-From-Youth-Tamil-2026-20260227185734-500x500-2_raabww.jpg",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153067/Aasa_Pulla_Music_Video___GV_Prakash_Kumar___Ken_Karunaas___Youth_MP3_320K_magmh9.mp3"
    },
    {
        title: "Jilpanso",
        artist: "Ken Karunaas",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159375/jilpanso_xjphkh.jpg",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153065/Jilpanso_Music_Video___Youth___Ken_Karunaas___GV_Prakash_MP3_320K_xsdf2c.mp3"
    },
    {
        title: "AA 23 THEME",
        artist: "Anirudh",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778159370/ab67616d0000b273f8aa25d7dd200235302ffc28_pn9qsc.jpg",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778153060/AA_23_THEME_Full_Audio___Icon_Star_Allu_Arjun___Lokesh_Kanagaraj___Anirudh___Mythri_Movie_Makers_MP3_160K_tfwiyi.mp3"
    },
    {
        title: "Enakena",
        artist: "Pradeep Ranganathan",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163163/ab67616d00001e0233c6ec99236141977db9f410_lyoegd.jpg",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163119/Enakena_Music_Video__Love_Insurance_Kompany_Pradeep_Ranganathan_Anirudh_Vignesh_Shivan_Lalit_Kumar_MP3_320K_pnaizr.mp3"
    },
    {
        title: "Adaavadi",
        artist: "Pradeep Ranganathan",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163163/ab67616d00001e0215ddf097f78e749a9eda365c_y2jhml.jpg",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163105/Adaavadi_Music_Video___LIK___Pradeep_Ranganathan___Anirudh_l_Vignesh_Shivan___Krithi_Shetty_MP3_320K_e5r9be.mp3"
    },
    {
        title: "Oorum Blood",
        artist: "SaiAbhyankkar",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163161/ab67616d0000b2737b5fd77735d2fa9cc7e982df_gacog7.jpg",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163104/Oorum_Blood_Movie_Version___Dude___Pradeep_R__Mamitha____SaiAbhyankkar__Keerthiswaran___Paal_Dabba_MP3_320K_w5e7to.mp3"
    },
    {
        title: "Singari",
        artist: "SaiAbhyankkar",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163160/ab67616d0000b273c97794bc5f05f822f0be7ac9_o1wodb.jpg",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163115/Singari_Video_Song___Dude___Pradeep_Ranganathan__Mamitha_Baiju____SaiAbhyankkar___Keerthiswaran_MP3_320K_b0jg51.mp3"
    },
    {
        title: "Pavazha Malli",
        artist: "SaiAbhyankkar",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163161/ab67616d0000b273f5f2a6705dfe3c2fe11028c8_lsaiem.jpg",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163100/_SaiAbhyankkar_-_Pavazha_Malli_Music_Video___Kayadu___Shruti_Haasan___Vivek___Thejo___Think_Indie_MP3_320K_ikpkim.mp3"
    },
    {
        title: "Jana Nayagan (Oru Pere)",
        artist: "Anirudh",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163161/ab67616d0000b273e941e71a3b4c4cb761097dc5_ylsrxs.jpg",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163114/Jana_Nayagan_Oru_Pere_Varalaaru_Lyrical___Thalapathy_Vijay___H_Vinoth__Anirudh__KVN__Vishal_Mishra_MP3_320K_uno1ni.mp3"
    },
    {
        title: "Jana Nayagan (Raavana)",
        artist: "Anirudh",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163162/ab67616d00001e02e0807b4138d187c74233853b_yj3s3r.jpg",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163105/Jana_Nayagan_-_Raavana_Mavandaa_Lyrical___Thalapathy_Vijay___Pooja_Hegde___H_Vinoth___Anirudh___KVN_MP3_320K_g7hdza.mp3"
    },
    {
        title: "Jana Nayagan (Thalapathy Kacheri)",
        artist: "Anirudh",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163161/ab67616d00001e02e2b41d0e6e8205e913701a42_umkkme.jpg",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163100/Jana_Nayagan_Thalapathy_Kacheri_Lyric_Video__Thalapathy_Vijay__H_Vinoth__Anirudh__Pooja_Hegde__KVN_MP3_320K_zc9fij.mp3"
    },
    {
        title: "Aura 10/10",
        artist: "Hiphop Tamizha",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778163162/ab67616d0000b273452dc35c269e2be9de5c2a85_luywpo.jpg",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778163113/Aura_10_10_-_Music_Video___Meesaya_Murukku_2___Hiphop_Tamizha___Ketika_Sharma_MP3_320K_wvoddi.mp3"
    },
    {
        title: "TVK Election Song",
        artist: "TVK Campaign",
        cover: "https://res.cloudinary.com/dpj4mbgbk/image/upload/v1778174737/ab67616d0000b2731e2527b140ee8253064033fa_muhop6.jpg",
        url: "https://res.cloudinary.com/dpj4mbgbk/video/upload/v1778174721/TVK_ELECTION_CAMPAIGN_SONG_-_%E0%AE%89%E0%AE%99%E0%AF%8D%E0%AE%95_%E0%AE%B5%E0%AE%BF%E0%AE%9C%E0%AE%AF%E0%AF%8D_%E0%AE%A8%E0%AE%BE_%E0%AE%B5%E0%AE%B0%E0%AF%87%E0%AE%A9%E0%AF%8D__Whistle_%E0%AE%85%E0%AE%9F%E0%AE%BF%E0%AE%95%E0%AF%8D%E0%AE%95_%E0%AE%B0%E0%AF%86%E0%AE%9F%E0%AE%BF%E0%AE%AF%E0%AE%BE__MP3_320K_orrvx2.mp3"
    }
];

let currentSongIndex = 0;
let isPlaying = false;

const audio = document.getElementById('mainAudio');
const songGrid = document.getElementById('songGrid');
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.getElementById('playIcon');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressFill = document.getElementById('progressFill');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');

const currentTitleEl = document.getElementById('currentTitle');
const currentArtistEl = document.getElementById('currentArtist');
const currentAlbumArt = document.getElementById('currentAlbumArt');

// Initialize Grid
function initGrid() {
    songGrid.innerHTML = '';
    songs.forEach((song, index) => {
        const card = document.createElement('div');
        card.className = 'song-card';
        card.innerHTML = `
            <div class="card-img-container">
                <img src="${song.cover}" alt="${song.title}">
                <div class="play-button">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <div class="song-title">${song.title}</div>
            <div class="song-artist">${song.artist}</div>
        `;
        card.addEventListener('click', () => {
            loadSong(index);
            playSong();
        });
        songGrid.appendChild(card);
    });
}

function loadSong(index) {
    currentSongIndex = index;
    const song = songs[index];
    audio.src = song.url;
    currentTitleEl.innerText = song.title;
    currentArtistEl.innerText = song.artist;
    currentAlbumArt.src = song.cover;
}

function playSong() {
    isPlaying = true;
    audio.play();
    playIcon.className = 'fas fa-pause';
}

function pauseSong() {
    isPlaying = false;
    audio.pause();
    playIcon.className = 'fas fa-play';
}

function togglePlay() {
    if (isPlaying) {
        pauseSong();
    } else {
        if (!audio.src) {
            loadSong(0);
        }
        playSong();
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progressFill.style.width = `${progressPercent}%`;

    // Time update
    currentTimeEl.innerText = formatTime(currentTime);
    if (duration) durationEl.innerText = formatTime(duration);
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

function formatTime(time) {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

// Event Listeners
playPauseBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', nextSong);
progressBar.addEventListener('click', setProgress);

// Handle spacebar for play/pause
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
    }
});

// Init
initGrid();
loadSong(0); // Load first song by default but don't play
