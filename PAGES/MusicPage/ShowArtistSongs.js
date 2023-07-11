SONGS = (element) => {
  let MusicianImage = document.querySelector('.ArtistImage');
  let ArtistSongs1 = document.querySelector('.ArtistSongs1');
  let SongDetails1 = document.querySelector('.SongDetails1');
  let AudioControls=document.querySelector('.AudioControls')
  let currentIndex = 0; // Track the current song index
  let previousImage = null;

  // Function to play the next song
  const playNextSong = () => {
    currentIndex++;
    if (currentIndex >= element.ArtistSongs.length) {
      // If no next song, loop back to the first song
      currentIndex = 0;
    }
    playSong();
  };

  // Function to play the previous song
  const playPreviousSong = () => {
    currentIndex--;
    if (currentIndex < 0) {
      // If no previous song, go to the last song
      currentIndex = element.ArtistSongs.length - 1;
    }
    playSong();
  };

  // Function to play the current song
  const playSong = () => {
    let song = element.ArtistSongs[currentIndex];

    // Clear existing content
    ArtistSongs1.innerHTML = '';
    SongDetails1.innerHTML = '';

    // Create Audio track Name
    let TRACKNAME = document.createElement('h1');
    TRACKNAME.classList.add('TRACKNAME');
    TRACKNAME.innerHTML = song.SongName;

    // Create Song Image
    let SongImage = document.createElement('img');
    SongImage.classList.add('SongImage');

    // If song has an image, set the source
    if (song.SongImage) {
      SongImage.src = song.SongImage;
      SongImage.alt = song.SongName;
      previousImage = song.SongImage;
    } else {
      // Use the previous image if available
      if (previousImage) {
        SongImage.src = element.ArtistImage;
        SongImage.alt = 'No Image Available';
      }
    }

    // Create Song Details
    let SongDetails = document.createElement('p');
    SongDetails.classList.add('SongDetails');
    SongDetails.innerHTML = song.SongDetails ? song.SongDetails : 'No song data available';

    // Create Audio track
    let TRACK = document.createElement('audio');
    TRACK.classList.add('TRACK');
    TRACK.src = song.SongSource;
    TRACK.controls = true; // Add controls to the audio element

    // Event listener for when the song ends
    TRACK.addEventListener('ended', playNextSong);

    // Append to div
    ArtistSongs1.appendChild(TRACKNAME);
    MusicianImage.innerHTML = '';
    MusicianImage.appendChild(SongImage);
    SongDetails1.appendChild(SongDetails);
    ArtistSongs1.appendChild(TRACK);
  };

  // Play the first song
  playSong();

  // Add back button
  let backButton = document.createElement('button');
  backButton.classList.add('FunctionButtons')
  backButton.textContent = 'Back';
  backButton.addEventListener('click', playPreviousSong);
  AudioControls.appendChild(backButton);

  // Add next button
  let nextButton = document.createElement('button');
  nextButton.classList.add('FunctionButtons')
  nextButton.textContent = 'Next';
  nextButton.addEventListener('click', playNextSong);
  AudioControls.appendChild(nextButton);
};
