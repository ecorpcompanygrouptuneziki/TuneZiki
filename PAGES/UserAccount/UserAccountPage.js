USERACCOUNTPAGE=()=>{
    DIV.innerHTML=
    `
        <header>

            <img src='../ICONS/back.png' class='BackIcon' onclick='HOMEPAGE()'>

            <img src='../ICONS/logout.png' class='HeaderIcon' onclick='LOGOUT()'>
        
        </header>

        <div class='OtherDiv'>
        
        <div class='MyProfile'>

            <img src='../ICONS/logout.png' class='MYPROFILEIMAGE'>

            <img src='../ICONS/post.png' class='UPDATEPROFILEIMAGE'>
        
        </div>

        <div class='MyProfileData'>
            <h1 class='Userdetails'>UserName</h1>
            <h1 class='Userdetails'>UserCountry</h1>
            <h1 class='Userdetails'>UserTelephone</h1>
            <button class='LogInButton3'>Update Profile</button>
        </div>

        <div class='EmailDisplay'>
        <h1 class='Userdetails1'>UserEmail</h1>
        </div>


        <div class='People'></div>
        
        
        </div>
    
    `
    PEOPLEONAPP()
}