PROFILEIMAGE=()=>{
    const savedImageData = localStorage.getItem('uploadedImage');
    const ProfilePicture=document.querySelector('.ProfilePicture')
    ProfilePicture.style.height=100+'%'
    ProfilePicture.innerHTML=
    `
    <img src="../ICONS/close.png"  onclick='CLOSEPROFILE()' class="BackLinks">
    <br><br><br><br>
    <img src='data:image/png;base64,${savedImageData}' class='ProfileImage'>
    
    <div class='CompanyName'>
    <button class='LogInButton' onclick='UPDATEPROFILEPICTURE()'>UPDATE PROFILE PICTURE</button>
    </div>
    `
}

CLOSEPROFILE=()=>{
    const ProfilePicture=document.querySelector('.ProfilePicture')
    ProfilePicture.style.height=0+'%'
    USERPROFILE()
}

UPDATEPROFILEPICTURE=()=>{
  open(UPDATEPROFILEPICTUREAPI)
}

UPGRADEACCOUNT=()=>{
  open(PAYMENTSAPI)
}

UPDATEPROFILE=()=>{
  open(PROFILEAPI)
}