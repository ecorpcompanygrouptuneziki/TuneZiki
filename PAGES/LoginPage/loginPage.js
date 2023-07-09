LOGINPAGE=()=>{
    DIV.innerHTML=
    `
    <h1 class='AppLogo'>TUNE ZIKI</h1>
        <form>
            <input type="email" placeholder='Email'>

            <input type="password" placeholder='Password'>

            <button class='LogInButton' onclick='HOMEPAGE()'>Log In</button>

        </form>
        <button class='LogInButton' onclick='CREATEACCOUNTPAGE()'>Create Account</button>
        <div class='LoginWith'>

            <h1 class='AppLogo1'>LOGIN IN WITH</h1>
            <br>
            <button class='LogInButton1' onclick='LOGINWITH()'>Chat-Lander</button>
        </div>
        
    `
}