ARTISTSONGS=(element)=>{
    let MusicianImage=document.querySelector('.MusicianImage')
    MusicianImage.src=element.ArtistImage
    let ArtistSongs=document.querySelector('.ArtistSongs')

    //create Audio tracks
    let Audio=document.createElement('audio')
    Audio.classList.add('MYSONGS')
    Audio.src=element.
}