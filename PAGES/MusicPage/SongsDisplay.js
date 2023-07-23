ALLSONGS = () => {
  fetch(SONGSAPI, {
    method: 'GET',
    mode: 'cors'
  })
    .then(res => res.json())
    .then(data => {
      let allSongsData = data.reverse(); // Reverse the data array
      let currentSongIndex = 0;

      // Function to display search results
      const displaySearchResults = (results) => {
        const POSTDIV = document.querySelector('#AllSearchiesDiv');
        POSTDIV.innerHTML = '';
        if (results.length > 0) {
          results.forEach(post => {
            const DIVLINK = document.createElement('a');
            DIVLINK.href = '#Nowplaying';
            const POSTERSDIV = document.createElement('div');
            POSTERSDIV.classList.add('ARTISTDIV');
            const POSTHEADER = document.createElement('h1');
            POSTHEADER.classList.add('ARTISTNAME');
            POSTHEADER.innerHTML = post.ArtistName;
            const POSTSONG = document.createElement('h1');
            POSTSONG.classList.add('ARTISTSONG');
            POSTSONG.innerHTML = post.SongName;
            const POSTIMG = document.createElement('img');
            POSTIMG.classList.add('ARTISTIMAGE');
            POSTIMG.src = post.ArtistImage;
            DIVLINK.addEventListener('click', () => {
              const MusicianName = document.querySelector('.ArtistName');
              MusicianName.innerHTML = post.ArtistName;
              const MusicianImage = document.querySelector('.SongImage');
              MusicianImage.src = post.SongImage;
              const MusicianSong = document.querySelector('.Trackname');
              MusicianSong.innerHTML = post.SongName;
              const MYAUDIO = document.querySelector('audio');
              MYAUDIO.src = post.SongSource;
              // EVENT LISTENER FOR AUDIO PLAY
              const NowPlayingButton = document.querySelector('.NowPlayingButton');
              const NowPlayingButton1 = document.querySelector('.NowPlayingButton1');
              MYAUDIO.addEventListener('play', () => {
                NowPlayingButton.style.display = 'block';
                NowPlayingButton1.style.display = 'block';
              });
              //DOWNLOAD AUDIO
             const DOWNLOADBUTTON=document.querySelector('.NEXTBUTTON');
              DOWNLOADBUTTON.innerHTML=`
              <a class='FunctionTags' href="${post.SongSource}">DOWNLOAD SONG</a>
            
              `
              const SONGLYRICS = document.querySelector('#Lyrics');
              const SONGLYRICSDIV = document.querySelector('.SONGSLYRICS');
              const SongTitleLyrics = document.querySelector('.SongTitleLyrics');
              SONGLYRICS.addEventListener('click', () => {
                SongTitleLyrics.innerHTML = post.SongName;
                if (post.SongLyrics) {
                  SONGLYRICSDIV.innerHTML = `<p class='LyricsHolders'>${post.SongLyrics}</p>`;
                } else {
                  SONGLYRICSDIV.innerHTML = "<p class='LyricsHolders'>No lyrics available for this song.</p>";
                }
              });
            });
            POSTERSDIV.appendChild(POSTIMG);
            POSTERSDIV.appendChild(POSTHEADER);
            POSTERSDIV.appendChild(POSTSONG);
            DIVLINK.appendChild(POSTERSDIV);
            POSTDIV.appendChild(DIVLINK);
          });
        } else {
          POSTDIV.innerHTML = `<h1 class='AppLogo2'>No search results</h1>`;
        }
      };

      // Function to play the next song or loop back to the same song
      const playNextSong = () => {
        const audio = document.querySelector('audio');
        if (currentSongIndex < allSongsData.length - 1) {
          currentSongIndex++;
        } else {
          currentSongIndex = 0; // Loop back to the first song when the last one ends
        }
        const nextSong = allSongsData[currentSongIndex];
        // Update the audio source with the next song
        audio.src = nextSong.SongSource;
        // Play the next song
        audio.play();
        // Update displayed data with the next song details
        updateSongDetails(nextSong);
      };

      // Function to update details when a new song starts playing
      const updateSongDetails = (post) => {
        const MusicianName = document.querySelector('.ArtistName');
        MusicianName.innerHTML = post.ArtistName;
        const MusicianImage = document.querySelector('.SongImage');
        MusicianImage.src = post.SongImage;
        const MusicianSong = document.querySelector('.Trackname');
        MusicianSong.innerHTML = post.SongName;
        // Update the lyrics when the song changes
        const SONGLYRICS = document.querySelector('#Lyrics');
        const SONGLYRICSDIV = document.querySelector('.SONGSLYRICS');
        const SongTitleLyrics = document.querySelector('.SongTitleLyrics');
        SONGLYRICS.addEventListener('click', () => {
          SongTitleLyrics.innerHTML = post.SongName;
          if (post.SongLyrics) {
            SONGLYRICSDIV.innerHTML = `<p class='LyricsHolders'>${post.SongLyrics}</p>`;
          } else {
            SONGLYRICSDIV.innerHTML = "<p class='LyricsHolders'>No lyrics available for this song.</p>";
          }
        });
      };

      // Function to handle search input
      const handleSearchInput = () => {
        const FindInput = document.querySelector('.SearchInput');
        FindInput.addEventListener('input', () => {
          const searchTerm = FindInput.value.toLowerCase();
          const searchResults = allSongsData.filter(post =>
            post.ArtistName.toLowerCase().includes(searchTerm) || post.SongName.toLowerCase().includes(searchTerm)
          );
          displaySearchResults(searchResults);
        });

        FindInput.addEventListener('blur', () => {
          if (FindInput.value === '') {
            displaySearchResults(allSongsData);
          }
        });
      };

      // Add event listener to the audio element for 'ended' event
      const audio = document.querySelector('audio');
      audio.addEventListener('ended', playNextSong);

      // Initial display of all songs
      displaySearchResults(allSongsData);

      // Handle search input
      handleSearchInput();
    })
    .catch(error => console.log(error));
};
