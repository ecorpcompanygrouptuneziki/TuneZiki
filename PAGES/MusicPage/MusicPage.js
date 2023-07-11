MUSICPAGE=()=>{
    DIV.innerHTML=
    `
        <header>

            <img src='../ICONS/back.png' class='BackIcon' onclick='HOMEPAGE()'>
            
            <img src='../ICONS/list.png' class='HeaderIcon' id='NowPlaying' onclick='NOWPLAYING()'>

        </header>

        <div class='OtherDiv' id='ArtistPage'></div>

        <div class='ArtistSongs'>
            <img src='../ICONS/close.png' class='BackIcon' onclick='CLOSEMUSICPAGE()'>
            
            <div class='ArtistImage'></div>

            <div class='ArtistSongs1'></div>
            
            <div class='AudioControls'></div>

            <div class='SongDetails1'></div>
        
        </div>
    
    `
    ARTISTPAGE()
}