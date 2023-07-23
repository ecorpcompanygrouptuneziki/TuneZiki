LOGINPAGE=()=>{
    DIV.innerHTML=
    `
    <h1 class='AppLogo'>TUNE ZIKI</h1>

        <form id='login-form'>

            <input type="email" id="MyEmail" placeholder="Email" minlength="6" maxlength="200" required>
            
            <input type="password" id="MyPassword" minlength="6" maxlength="50" placeholder="Password" required>

            <h1 onclick='FORGOTPASSWORD()' class='Terms'>Forgot Password</h1>

            <h1 class='Terms' onclick='TERMSPAGE()'>Terms And Conditions</h1>

            <button class='LogInButton' onclick='LogInUserAccount()'>Log In</button>

        </form>

    <button class='LogInButton' onclick='CREATEACCOUNTPAGE()'>Create Account</button>

    <div class='Message'></div>

    <div class='TERMSPAGE'>

        <img src="../ICONS/close.png"  onclick='CLOSETERMS()' class="BackLinks">

        <div class='TermsDisplay'></div>
    
    </div>


    `;
    //DISPLAY TERMS AND CONDITIONS
    SHOWTERMS()
}