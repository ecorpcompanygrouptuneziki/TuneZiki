TRENDINGARTISTS=()=>{
    const HOMEPAGEDIV=document.querySelector('.TrendingArtistDiv')
    fetch('https://ecorpcompanygroupchatlander.github.io/tuneziki/NewsPage.json')
    .then(res=>res.json())
    .then(data=>{
        data.reverse()
        data.forEach(element => {
            //DIV FOR NEWS
            let HOMENEWSDIV=document.createElement('button')
            HOMENEWSDIV.classList.add('ARTISTDIVS')
            //NEWS TITLE
            let HOMENEWSTITLE=document.createElement('h1')
            HOMENEWSTITLE.classList.add('TRENDINGARTISTNAME')
            HOMENEWSTITLE.innerHTML=element.NewsTopic
             //NEWS TITLE
             let HOMENEWSIMAGE=document.createElement('img')
             HOMENEWSIMAGE.classList.add('TRENDINGARTISTIMAGE')
             HOMENEWSIMAGE.src=element.NewsImage


            //APPEND IT TO DIV
            HOMENEWSDIV.append(HOMENEWSIMAGE)
            HOMENEWSDIV.append(HOMENEWSTITLE)
            HOMEPAGEDIV.append(HOMENEWSDIV)
        });
        
    })
    .catch(error=>console.log(error))
    
}