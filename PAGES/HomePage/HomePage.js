HOMEPAGE=()=>{
    DIV.innerHTML=
    `
        <header>

            <h1 class='App_Name'>Tune Ziki</h1>

            <img src='../ICONS/search.png' class='HeaderIcon' onclick='SEARCHPAGE()'>
        
        </header>

        <div class='HomePageDiv'></div>

        <footer>

            <img src='../ICONS/menu.png' class='FooterIcons' id='Movies' onclick='CATERGORYPAGE()'>

            <img src='../ICONS/music.png' class='FooterIcons' onclick='MUSICPAGE()'>

            <img src='../ICONS/user.png' class='FooterIcons' onclick='USERACCOUNTPAGE()'>

        </footer>

        <div class='newsDiv'>
        <img src='' class='NewsImage' >
        <p class='newTitle'></p>
        <p class='newStory'></p>
        <img src='../ICONS/close.png' class='ClosePostIcon' onclick='CLOSEREADPOST()'>
        </div>

    `
    NEWSPAGEDATA()
}