NEWSPAGEDATA = () => {
    const HOMEPAGEDIV = document.querySelector('.HomePageDiv');

    fetch('https://ecorpcompanygroupchatlander.github.io/tuneziki/NewsPage.json')
        .then(res => res.json())
        .then(data => {
            data.reverse();
            data.forEach(element => {
                // DIV FOR NEWS
                let HOMENEWSDIV = document.createElement('div');
                HOMENEWSDIV.classList.add('HOMENEWSDIV');

                // NEWS TITLE
                let HOMENEWSTITLE = document.createElement('h1');
                HOMENEWSTITLE.classList.add('HOMENEWSTITLE');
                HOMENEWSTITLE.innerHTML = element.NewsTopic;

                // NEWS IMAGE
                let HOMENEWSIMAGE = document.createElement('img');
                HOMENEWSIMAGE.classList.add('HOMENEWSIMAGE');
                HOMENEWSIMAGE.src = element.NewsImage;

                // NEWS STORY
                let HOMENEWSTORY = document.createElement('p');
                HOMENEWSTORY.classList.add('HOMENEWSTORY');
                HOMENEWSTORY.innerHTML = element.NewsDetails;

                // NEWS TIME
                let HOMENEWSTIME = document.createElement('h1');
                HOMENEWSTIME.classList.add('HOMENEWSTIME');
                HOMENEWSTIME.innerHTML = element.NewsTime;

                // CREATE A READ MORE BUTTON
                let HOMENEWSTIMEBUTTON = document.createElement('div');
                HOMENEWSTIMEBUTTON.classList.add('HOMENEWSTIMEBUTTON');
                HOMENEWSTIMEBUTTON.innerHTML = `<h1 class='READMORE'>READ MORE</h1>`;

                // ADD FUNCTION READ FULLPOST
                HOMENEWSTIMEBUTTON.addEventListener('click', () => {
                    OPENPOST(element);
                });

                // APPEND ELEMENTS TO DIV
                HOMENEWSDIV.append(HOMENEWSIMAGE);
                HOMENEWSDIV.append(HOMENEWSTITLE);
                HOMENEWSDIV.append(HOMENEWSTIME);
                HOMENEWSDIV.append(HOMENEWSTORY);
                HOMENEWSDIV.append(HOMENEWSTIMEBUTTON);
                HOMEPAGEDIV.append(HOMENEWSDIV);
            });
        })
        .catch(error => console.log(error));
};
