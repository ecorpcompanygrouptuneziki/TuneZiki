CREATEACCOUNTPAGE=()=>{
    DIV.innerHTML=
    `
    <div class='LOGINDIV' >

        <h1 class='AppLogo'>TUNE ZIKI</h1>

        <form id='registration-form'>

            <input type="text" name='UserName' minlength="6" maxlength="50" id='name' placeholder='UserName' required >

            <input type="email" name='UserEmail' minlength="6" maxlength="200" id='Email' placeholder='Email' required >

            <input type="password" name='UserPassword' minlength="6" maxlength="50" placeholder='Password' required >

            <input type="Date" name='UserDate'  maxlength="10" required >

            <input type="tel" name='Telephone' minlength="10" maxlength="20" placeholder='Phone Number' required >

            <input type="text" name='UserLocation' maxlength="50" placeholder='Country' required >

            <h1 class='Terms' onclick='TERMSPAGE()'>Terms And Conditions</h1>

            <button class='LogInButton' type="submit" id='RegisterButton' onclick='CREATEUSERACCOUNT()'>Register</button>

        </form>

        <button class='LogInButton' onclick='LOGINPAGE()'>Log In</button>

        <br><br><br>

    </div>

    <div class='Message'></div>

    <div class='TERMSPAGE'>

    <img src="../ICONS/close.png"  onclick='CLOSETERMS()' class="BackLinks">

    <div class='TermsDisplay'></div>

    </div>
    
    `;

     //DISPLAY TERMS AND CONDITIONS
     SHOWTERMS()
}