SONGS = (element) => {
    let MusicianImage = document.querySelector('.MusicianImage');
    MusicianImage.src = element.ArtistImage;
    let ArtistSongs1 = document.querySelector('.ArtistSongs1');
    let currentIndex = 0; // Track the current song index
  
    // Function to play the next song
    const playNextSong = () => {
      currentIndex++;
      if (currentIndex >= element.ArtistSongs.length) {
        // If no next song, loop the same song
        currentIndex = 0;
      }
      playSong();
    };
  
    // Function to play the current song
    const playSong = () => {
      let song = element.ArtistSongs[currentIndex];
  
      // Create Audio track Name
      let TRACKNAME = document.createElement('h1');
      TRACKNAME.classList.add('TRACKNAME');
      TRACKNAME.innerHTML = song.SongName;
  
      // Create Audio track
      let TRACK = document.createElement('audio');
      TRACK.classList.add('TRACK');
      TRACK.src = song.SongSource;
      TRACK.controls = true; // Add controls to the audio element
  
      // Event listener for when the song ends
      TRACK.addEventListener('ended', playNextSong);
  
      // Append to div
      ArtistSongs1.innerHTML = ''; // Clear the existing content
      ArtistSongs1.append(TRACKNAME);
      ArtistSongs1.append(TRACK);
  
      // Play the song
      TRACK.play();
    };
  
    // Play the first song
    playSong();
  };
  