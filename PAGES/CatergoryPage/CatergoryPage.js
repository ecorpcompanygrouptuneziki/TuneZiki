CATERGORYPAGE=()=>{
    DIV.innerHTML=
    `
        <header>

            <img src='../ICONS/back.png' class='BackIcon' onclick='HOMEPAGE()'>

            <img src='../ICONS/dropdown.png' class='HeaderIcon' id='MenuIconOpen' onclick='OPENMENU()'>

            <img src='../ICONS/dropdown.png' class='HeaderIcon' id='MenuIconClose' onclick='CLOSEMENU()'>
        
        </header>

        <div class='OtherDiv'>
        
        <h1 class='TRENDING_SECTION'>TRENDING ARTISTS</h1>
        <div class='TrendingArtistDiv'></div>
        <h1 class='TRENDING_SECTION'>TRENDING SONGS</h1>
        <div class='TrendingSongsDiv'></div>
        
        </div>

        <div class='CatergoriesDiv'></div>
    
    `
    CATERGORYHEADER()

    TRENDINGARTISTS()

    TRENDINGARTISTSSONGS()
}