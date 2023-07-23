USERPROFILE=()=>{
      //DECLARE THE POINTS FOR DATA STORAGE
      //USERNAME
      const MyUserName=document.querySelector('#MyUserName')
      //USERCONTACT
      const MyUserContact=document.querySelector('#MyUserContact')
      //USEREMAIL
      const UserAccountEmail=document.querySelector('.UserAccountEmail')
      //USER LOCATION
      const MyUserLocation=document.querySelector('#MyUserLocation')
      //ACCOUNT TYPE
      const MyUserAccount=document.querySelector('#MyUserAccount')
        // Retrieve values from localStorage
      const userEmail = localStorage.getItem('userEmail');
      const userData = JSON.parse(localStorage.getItem('userData'));
      //user profile Image
      const savedImageData = localStorage.getItem('uploadedImage');
      const UserProfileImage=document.querySelector('.UserProfileImage')
      const HomeProfileImage=document.querySelector('#HomeProfileImage')
      
      
  
    // Display values in a <div>

    MyUserName.innerHTML=userData.UserName;
    MyUserContact.innerHTML='0'+userData.Telephone;
    MyUserLocation.innerHTML=userData.UserLocation;
    UserAccountEmail.innerHTML=userEmail
    MyUserAccount.innerHTML=userData.AccountType;
    
    if (savedImageData) {
      HomeProfileImage.src=`data:image/png;base64,${savedImageData}`;
      UserProfileImage.src = `data:image/png;base64,${savedImageData}`;
    } else {
      HomeProfileImage.src='../ICONS/user.png';
      UserProfileImage.src = '../ICONS/user.png';
    }
    
}