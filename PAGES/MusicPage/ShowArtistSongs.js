SONGS = (element) => {
    let MusicianImage = document.querySelector('.MusicianImage');
    MusicianImage.src = element.ArtistImage;
    let ArtistSongs1 = document.querySelector('.ArtistSongs1');
    let currentIndex = 0; // Track the current song index
  
    // Function to play the next song
    const playNextSong = () => {
      currentIndex++;
      if (currentIndex >= element.ArtistSongs.length) {
        // If no next song, loop back to the first song
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
  
      // Create Song Image
      let SongImage = document.createElement('img');
      SongImage.classList.add('SongImage');
      SongImage.src = song.SongImage;
      SongImage.alt = song.SongName;
  
      // Create Song Details
      let SongDetails = document.createElement('p');
      SongDetails.classList.add('SongDetails');
      SongDetails.innerHTML = song.SongDetails;
  
      // Create Audio track
      let TRACK = document.createElement('audio');
      TRACK.classList.add('TRACK');
      TRACK.src = song.SongSource;
      TRACK.controls = true; // Add controls to the audio element
  
      // Event listener for when the song ends
      TRACK.addEventListener('ended', playNextSong);
  
      // Append to div
      ArtistSongs1.innerHTML = ''; // Clear the existing content
      ArtistSongs1.appendChild(TRACKNAME);
      ArtistSongs1.appendChild(SongImage);
      ArtistSongs1.appendChild(SongDetails);
      ArtistSongs1.appendChild(TRACK);
  
      // Play the song
      TRACK.play();
    };
  
    // Play the first song
    playSong();
  };
  