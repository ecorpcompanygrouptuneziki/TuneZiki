ARTISTPAGE=()=>{
    const HOMEPAGEDIV=document.querySelector('#ArtistPage')
    let ArtistSongs=document.querySelector('.ArtistSongs')
    let NowPlaying=document.querySelector('#NowPlaying')
    fetch('https://ecorpcompanygrouptuneziki.github.io/TuneZiki/JSON/MusicPageJson/Artists.json')
    .then(res=>res.json())
    .then(data=>{
        data.reverse()
        data.forEach(element => {

            //DIV FOR NEWS
            let HOMENEWSDIV=document.createElement('div')
            HOMENEWSDIV.classList.add('ARTISTDIV')
            
            //NEWS TITLE
            let HOMENEWSTITLE=document.createElement('h1')
            HOMENEWSTITLE.classList.add('ARTISTNAME')
            HOMENEWSTITLE.innerHTML=element.ArtistName

             //NEWS TITLE
            let HOMENEWSIMAGE=document.createElement('img')
            HOMENEWSIMAGE.classList.add('ARTISTIMAGE')
            HOMENEWSIMAGE.src=element.ArtistImage

            //OPEN ARTISTS SONGS
            HOMENEWSDIV.addEventListener('click',()=>{
                NowPlaying.style.display='block'
                ArtistSongs.style.height=100+'%'
                SONGS(element)
            })

            

            //APPEND IT TO DIV
            HOMENEWSDIV.append(HOMENEWSIMAGE)
            HOMENEWSDIV.append(HOMENEWSTITLE)
            HOMEPAGEDIV.append(HOMENEWSDIV)
        });
        
    })
    .catch(error=>console.log(error))
    
}
