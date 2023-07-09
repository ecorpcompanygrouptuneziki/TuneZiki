SEARCHPAGE=()=>{
    DIV.innerHTML=
    `
        <header>

            <img src='../ICONS/back.png' class='BackIcon' onclick='HOMEPAGE()'>

            <input class='FindInput' type="text" name='Search' placeholder='Search For Favourite song or artist' onclick='SEARCH()' > 
        
        </header>

        <div class='OtherDiv' id='AllSEARCHPAGE'></div>
    
    `
    AllSEARCHIES()

   
}