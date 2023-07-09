OPENPOST=(element)=>{
    const newsDiv=document.querySelector('.newsDiv')
    newsDiv.style.height=100+'%'
    const NewsImage=document.querySelector('.NewsImage')
    NewsImage.src=element.NewsImage
    const newStory=document.querySelector('.newStory')
    newStory.innerHTML=element.NewsDetails
    const newTitle=document.querySelector('.newTitle')
    newTitle.innerHTML=element.NewsTopic
}

CLOSEREADPOST=()=>{
    const newsDiv=document.querySelector('.newsDiv')
    newsDiv.style.height=0+'%'
}