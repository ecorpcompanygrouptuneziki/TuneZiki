DISPLAYPOSTS=()=>{
  fetch(NEWSAPI,{
    method:'GET',
    mode:'cors'
  })
  .then(res => res.json())
  .then(data => {
      //DECLARE THE DIV FOR THE POSTS
      const POSTDIV=document.querySelector('#HomeNewsFeedDiv')
      data.reverse()
    data.forEach(post => {
      
      //CREATE A DIV TO HOLD THE POSTS
      const POSTERSDIV=document.createElement('div')
      POSTERSDIV.classList.add('MYPOSTS')
      //CREATE A TITLE FOR THE POST
      const POSTHEADER=document.createElement('h1')
      POSTHEADER.classList.add('POSTHEADER')
      POSTHEADER.innerHTML=post.TITLE
      //CREATE A IMG FOR THE POST
      const POSTIMG=document.createElement('img')
      POSTIMG.classList.add('POSTIMG')
      POSTIMG.src=post.IMAGE
        //CREATE A STORY FOR THE POST
        const POSTSTORY=document.createElement('div')
        POSTSTORY.classList.add('POSTSTORY')
        POSTSTORY.innerHTML=`<p id='Stories'>${post.SHORTSTORY}</p>`

        //FUNCTION WHEN THE DIV IS CLICKED
        POSTERSDIV.addEventListener('click',()=>{
          const ReadPostPage=document.querySelector('.ReadPostPage')
          ReadPostPage.style.height=100+'%'
          ReadPostPage.innerHTML=
          `
            <img src="../ICONS/close.png"  onclick='CLOSEPOST()' class="BackLinks">
            <br><br>
            <img src="${post.IMAGE}"  class="POSTIMAGE">
            <h1 class='ArtistTitle'>${post.TITLE}</h1>
            <a class='ArtistTitle' href="${post.SONGLINK}">Vist Artist</a>
            <div class='FullStory'> <p class='data'>${post.FULLSTORY}</p></div>
          `
          CLOSEPOST=()=>{
            ReadPostPage.style.height=0+'%'
          }
        })


      //APPEND TO DIV TO DISPLAY
      POSTERSDIV.append(POSTIMG)
      POSTERSDIV.append(POSTHEADER)
      POSTERSDIV.append(POSTSTORY)
      POSTDIV.append(POSTERSDIV)
     // console.log(post)
    });
  })
  .catch(error => console.log(error));

}