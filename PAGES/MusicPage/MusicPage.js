MUSICPAGE=()=>{
    DIV.innerHTML=
    `
        <header>

            <img src='../ICONS/back.png' class='BackIcon' onclick='HOMEPAGE()'>
            
        </header>

        <div class='OtherDiv' id='ArtistPage'></div>

        <div class='ArtistSongs'>
            <img src='../ICONS/back.png' class='BackIcon' onclick='MUSICPAGE()'>
            
            <div class='ArtistImage'>
                <img src='' class='MusicianImage'>
            </div>

            <div class='ArtistSongs1'></div>

            <div class='ArtistControls'>
                
            
            </div>
        
        </div>
    
    `
    ARTISTPAGE()
}