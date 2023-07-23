OLDIESMUSICSECTION = () => {
    let isDataDisplayed = false;
  
    if (isDataDisplayed) {
      return; // Exit the function if data has been displayed already
    }
  
    const POSTDIV = document.querySelector('#OldiesSectionResults');
    POSTDIV.scrollTop = POSTDIV.scrollHeight; // Scroll to the bottom of the div
  
    fetch(OLDIESAPI, {
      method: 'GET',
      mode: 'cors'
    })
      .then(res => res.json())
      .then(data => {
        data.reverse();
  
        if (data.length === 0) {
          // Display a message in the div if no data in the database
          POSTDIV.innerHTML = "<p class='LyricsHolders'>No Songs available in this Section.</p>";
          return; // Exit the function
        }
  
        data.forEach(post => {
          // CREATE A TAG
          const DIVLINK = document.createElement('a');
          DIVLINK.href = '#Nowplaying';
  
          // CREATE A DIV TO HOLD THE POSTS
          const POSTERSDIV = document.createElement('div');
          POSTERSDIV.classList.add('ARTISTDIV');
  
          // CREATE A TITLE FOR THE POST
          const POSTHEADER = document.createElement('h1');
          POSTHEADER.classList.add('ARTISTNAME');
          POSTHEADER.innerHTML = post.ArtistName;

          //CREATE A SONG NAME
          const POSTSONG = document.createElement('h1');
          POSTSONG.classList.add('ARTISTSONG');
          POSTSONG.innerHTML = post.SongName;
  
          // CREATE AN IMG FOR THE POST
          const POSTIMG = document.createElement('img');
          POSTIMG.classList.add('ARTISTIMAGE');
          POSTIMG.src = post.ArtistImage;
  
          // FUNCTION TO DISPLAY SONG DATA TO NOW PLAYING
          DIVLINK.addEventListener('click', () => {
            // DISPLAY ARTIST TO THE NOW PLAY SECTION
            const MusicianName = document.querySelector('.ArtistName');
            MusicianName.innerHTML = post.ArtistName;
  
            // DISPLAY SONG IMAGE TO THE NOW PLAYING
            const MusicianImage = document.querySelector('.SongImage');
            MusicianImage.src = post.SongImage;
  
            // DISPLAY SONG NAME TO THE NOW PLAYING IMAGE
            const MusicianSong = document.querySelector('.Trackname');
            MusicianSong.innerHTML = post.SongName;
  
            // ADD AUDIO SOURCE TO THE SONGS TO PLAY
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
  
            // DISPLAY LYRICS OF THAT SONG
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
  
            // APPEND DIVS TO DISPLAY
            POSTERSDIV.appendChild(POSTIMG);
            POSTERSDIV.appendChild(POSTHEADER);
            DIVLINK.appendChild(POSTERSDIV);
            POSTDIV.appendChild(DIVLINK);
          });
  
          // APPEND DIVS TO DISPLAY
          POSTERSDIV.appendChild(POSTIMG);
          POSTERSDIV.appendChild(POSTHEADER);
          POSTERSDIV.appendChild(POSTSONG)
          DIVLINK.appendChild(POSTERSDIV);
          POSTDIV.insertBefore(DIVLINK, POSTDIV.firstChild); // Insert at the beginning of the div
          //console.log(post);
        });
  
        isDataDisplayed = true; // Set the flag to true once the data is displayed
      })
      .catch(error => console.log(error));
  };
  