SEARCH = () => {
    const HOMEPAGEDIV = document.querySelector('#AllSEARCHPAGE');
    const FindInput = document.querySelector('.FindInput');
  
    fetch('https://ecorpcompanygroupchatlander.github.io/tuneziki/NewsPage.json')
      .then(res => res.json())
      .then(data => {
        data.reverse();
        FindInput.addEventListener('input', ()=>{
            let searchResults = data.filter(element => {
                const regex = new RegExp(`^${FindInput.value.toLowerCase()}`, 'i');
                return regex.test(element.NewsTopic);
              });
              HOMEPAGEDIV.innerHTML = '';
              if (searchResults.length > 0) {
                searchResults.forEach(element => {
                  let HOMENEWSDIV = document.createElement('div');
                  HOMENEWSDIV.classList.add('ARTISTDIVSONG');
                  let HOMENEWSTITLE = document.createElement('h1');
                  HOMENEWSTITLE.classList.add('TRENDINGSONGARTISTNAME');
                  HOMENEWSTITLE.innerHTML = element.NewsTopic;
                  let HOMENEWSIMAGE = document.createElement('img');
                  HOMENEWSIMAGE.classList.add('TRENDINGARTISTIMAGE');
                  HOMENEWSIMAGE.src = element.NewsImage;
                  HOMENEWSDIV.append(HOMENEWSIMAGE);
                  HOMENEWSDIV.append(HOMENEWSTITLE);
                  HOMEPAGEDIV.append(HOMENEWSDIV);
                });
              } else {
                HOMEPAGEDIV.innerHTML = `<h1 class='AppLogo2'>No search results</h1>`;
              }
        }); 
        
      })
      .catch(error => console.log(error));
  };