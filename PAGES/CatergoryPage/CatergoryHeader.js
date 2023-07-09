CATERGORYHEADER=()=>{
    const HOMEPAGEDIV=document.querySelector('.CatergoriesDiv')
    fetch('https://ecorpcompanygroupchatlander.github.io/tuneziki/Catergories.json')
    .then(res=>res.json())
    .then(data=>{
        data.reverse()
        data.forEach(element => {
            //DIV FOR NEWS
            let HOMENEWSDIV=document.createElement('div')
            HOMENEWSDIV.classList.add('MUSICTYPE')
            //NEWS TITLE
            let HOMENEWSTITLE=document.createElement('h1')
            HOMENEWSTITLE.classList.add('TRENDINGSONGARTISTNAME1')
            HOMENEWSTITLE.innerHTML=element.CatergoryName
             //NEWS TITLE


            //APPEND IT TO DIV
            HOMENEWSDIV.append(HOMENEWSTITLE)
            HOMEPAGEDIV.append(HOMENEWSDIV)
        });
        
    })
    .catch(error=>console.log(error))

}