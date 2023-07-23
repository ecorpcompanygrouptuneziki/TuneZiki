HOMEPAGE=()=>{
    DIV.innerHTML=`

<div class='HomePage' id='HomePage'>

    <div class='HomeNewsFeedDiv' id='HomeNewsFeedDiv'></div>

    <div class='ReadPostPage'></div>

    <div class='NowPlayingButton' onclick='BACKTONOWPLAYING()'>
        <img src="../ICONS/heart.png"  class="NowPlayingButton1">
    </div>
    
        
    <div class='CompanyName'>
        
        <img src="../ICONS/list.png" onclick='CATERGORIESPAGENAV()' class="HomeFooterIcons">

        <img src="../ICONS/music.png" onclick='MUSICPAGENAV()' class="HomeFooterIcons">

        <img src="../ICONS/user.png" id='HomeProfileImage' onclick='USERACCOUNTPAGENAV()' class="HomeFooterIcons">

    </div>
</div>

<div class='CatergoriesPage' id='CatergoriesPage'>

    <div class='CompanyNameTop'>
        
        <img src="../ICONS/back.png" onclick='BACKTOHOME()' class="BackIcon">

    </div>

    <div class='MyCatergoriesSection' id='MyCatergoriesSection'>
        
        <div  class='CatergoriesDivdata' onclick='GOSPELSECTION()'>

            <h1 class='CatergoriesTitle'>GOSPEL</h1>
            
        </div>

        <div  class='CatergoriesDivdata' onclick='HIPPOPSECTION()'>

            <h1 class='CatergoriesTitle'>HIPPOP</h1>
        
        </div>

        <div  class='CatergoriesDivdata' onclick='TRAPSECTION()'>

            <h1 class='CatergoriesTitle'>TRAP</h1>

        </div>

        <div  class='CatergoriesDivdata' onclick='AFROSECTION()'>

            <h1 class='CatergoriesTitle'>AFRO</h1>
    
        </div>

        <div  class='CatergoriesDivdata' onclick='OLDIESSECTION()'>

            <h1 class='CatergoriesTitle'>OLDIES</h1>

        </div>
        
    </div>

    <div class='MyGospelSection' id='MyGospelSection'>

        <div class='CompanyNameTop'>
                
            <img src="../ICONS/back.png" onclick='BACKTOCATERGORIES()' class="BackIcon">

            <h1 class='CatergoriesTitle'>GOSPEL MUSIC SECTION</h1>

        </div>

        <div class='MyCatergoriesResults' id='GospelSectionResults'></div>
            
    </div>

    <div class='MyHippopSection' id='MyHippopSection'>
            
        <div class='CompanyNameTop'>
                    
            <img src="../ICONS/back.png" onclick='BACKTOCATERGORIES()' class="BackIcon">

            <h1 class='CatergoriesTitle'>HIPPOP MUSIC SECTION</h1>

        </div>

        <div class='MyCatergoriesResults' id='HippopSectionResults'></div>
            
    </div>

    <div class='MyTrapSection' id='MyTrapSection'>
            
        <div class='CompanyNameTop'>
                    
            <img src="../ICONS/back.png" onclick='BACKTOCATERGORIES()' class="BackIcon">

            <h1 class='CatergoriesTitle'>TRAP MUSIC SECTION</h1>

        </div>

        <div class='MyCatergoriesResults' id='TrapSectionResults'></div>

    </div>

    <div class='MyAfroSection' id='MyAfroSection'>
            
        <div class='CompanyNameTop'>
                        
            <img src="../ICONS/back.png" onclick='BACKTOCATERGORIES()' class="BackIcon">

            <h1 class='CatergoriesTitle'>AFRO MUSIC SECTION</h1>

        </div>

        <div class='MyCatergoriesResults' id='AfroSectionResults'></div>
            
    </div>

    <div class='MyOldiesSection' id='MyOldiesSection'>
            
        <div class='CompanyNameTop'>
                        
            <img src="../ICONS/back.png" onclick='BACKTOCATERGORIES()' class="BackIcon">

            <h1 class='CatergoriesTitle'>OLDIES MUSIC SECTION</h1>

        </div>
            
        <div class='MyCatergoriesResults' id='OldiesSectionResults'></div>
            
    </div>

</div>

<div class='MusicPage' id='MusicPage'>

    <div class='CompanyNameTop'>
        
        <img src="../ICONS/back.png" onclick='BACKTOHOME()' class="BackIcon">

        <input type="text" class="SearchInput" placeholder="Search For Song Or Artist">

    </div>

    <div class='MyCatergoriesResults' id='AllSearchiesDiv'></div>
    
    <div class='MyGospelSection' id='Nowplaying'>

            <div class='CompanyNameTop'>
                                
                <img src="../ICONS/back.png" onclick='BACKTOSEARCHPAGE()' class="BackIcon">

                <img src="../ICONS/info.png" onclick='LYRICSPAGE()' id='Lyrics' class="LyricsIcon">

            </div>

        <div class='NowPlayingDiv'>

            <img src="https://drive.google.com/uc?export=download&id=1JCKt-Hqgze7BIJvxVsGBzYnov8BfgCiT"  class="SongImage">

            <div class='AudioControls'>

                <h1 class='ArtistName'></h1>

                <h1 class='Trackname'></h1>

                <br>

                <div class='NEXTBUTTON'></div>

                <br>

                <div class='AudioButtonsControls'>

                    <audio controls src=""></audio>

                </div>

            </div>

        </div>

    </div>

    <div class='MyHippopSection' id='LyricsPage'>
                
        <div class='CompanyNameTop'>

            <h1 class='SongTitleLyrics'></h1>
                    
            <img src="../ICONS/back.png" onclick='BACKTONOWPLAYING()' class="BackIcon">

        </div>

            <div class='SONGSLYRICS' ></div>
            
    </div>

    
</div>
  
</div>
        
</div>

<div class='UserAccountPage' id='UserAccountPage'>

        <div class='CompanyNameTop'>
                
            <img src="../ICONS/back.png" onclick='BACKTOHOME()' class="BackIcon">
                    
        </div>

        <div class='AccountPageDivHolder'> 

            <div class='MyProfileData' id='MyProfileData'>

                <div class='UserProfilePhotoHolder'>

                    <img src="../ICONS/user.png" onclick='PROFILEIMAGE()' class="UserProfileImage">
            
                </div>

                <div class='UserDetails'>

                    <h1 class='UserAccountDetails' id='MyUserName'></h1>

                    <h1 class='UserAccountDetails' id='MyUserContact'></h1>

                    <h1 class='UserAccountDetails' id='MyUserLocation'></h1>

                    <h1 class='UserAccountDetails' id='MyUserAccount'></h1>
                    
                </div>

                <div class='UserEmailDiv'>

                    <h1 class='UserAccountEmail'></h1>

                </div>
            
                <div class='UserAccountType'>
                
                    <button class='LogInButton' onclick='UPGRADEACCOUNT()'>UP GRADE ACCOUNT</button>
                
                </div>
            
                <div class='AccountUpdate'>
                
                    <button class='LogInButton' onclick='UPDATEPROFILE()'>UP DATE ACCOUNT</button>
                
                </div>
                
            </div>

            <div class='MySettings' id='MySettings'>
            
                <button class='LogInButton' onclick='LOGOUTUSERACCOUNT()'>LOGOUT MY ACCOUNT</button>

                <button class='LogInButton' onclick='PRIVACYPOLICY()'>PRIVACY POLICY</button>

                <button class='LogInButton' onclick='BECOMEARTISTS()'>BECOME ARTIST</button>

                <button class='LogInButton' onclick='HELPPAGE()'>HELP</button>

                <button class='LogInButton' onclick='CONTACTUS()'>CONTACT US</button>

                <button class='LogInButton' onclick='MOREAPPS()'>MORE APPS</button>


            </div>
            
    </div>

        <div class='CompanyName'>
            
            <img src="../ICONS/profile.png" onclick='MYPROFILE()'  class="HomeFooterIcons">

            <img src="../ICONS/setting.png" onclick='SETTINGS()' class="HomeFooterIcons">

        </div>
    <div class='ProfilePicture'></div>
    
</div>

<div class='PrivacyPolicyPage' id='PrivacyPolicyPage' >
    <div class='CompanyNameTop'>
                    
        <img src="../ICONS/back.png" onclick='BACKTOHOME()' class="BackIcon">
            
    </div>

    <div class='PrivacyPage' id='PrivacyPagedata'></div>

</div>

<div class='HelpPage' id='HelpPage' >
    <div class='CompanyNameTop'>
                    
        <img src="../ICONS/back.png" onclick='BACKTOHOME()' class="BackIcon">
            
    </div>

    <div class='PrivacyPage' id='HELPPAGEDATA'></div>

</div>

`
    //DISPLAY ALL SONGS FROM DATABASE
    ALLSONGS()
    
    //DISPLAY POSTS TO THE NEWS FEED
    DISPLAYPOSTS()
    //DISPLAY THE PROFILE DATA
    USERPROFILE()

    //MUSIC SECTION DATABASE FETCHING
    GOSPELMUSICSECTION()

    //HIPPOPMUSICSECTION DATABASE FETCHING
    HIPPOPMUSICSECTION()

    //TRAP TRAPMUSICSECTION DATABASE FETCHING
    TRAPMUSICSECTION()

    //OLDIESMUSICSECTION DATABSE FETCHING
    OLDIESMUSICSECTION()

    //AFROMUSICSECTION DATABASE FETCHING
    AFROMUSICSECTION()

    //SHOW PRIVACY POLICY
    SHOWPRIVACYPOLICY()

    //SHOW HELP PAGE
    SHOWHELPPAGE()
    
}