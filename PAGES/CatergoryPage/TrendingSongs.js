TRENDINGARTISTSSONGS=()=>{
    const HOMEPAGEDIV=document.querySelector('.TrendingSongsDiv')
    fetch('https://ecorpcompanygroupchatlander.github.io/tuneziki/NewsPage.json')
    .then(res=>res.json())
    .then(data=>{
        data.reverse()
        data.forEach(element => {
            //DIV FOR NEWS
            let HOMENEWSDIV=document.createElement('div')
            HOMENEWSDIV.classList.add('ARTISTDIVSONG')
            //NEWS TITLE
            let HOMENEWSTITLE=document.createElement('h1')
            HOMENEWSTITLE.classList.add('TRENDINGSONGARTISTNAME')
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