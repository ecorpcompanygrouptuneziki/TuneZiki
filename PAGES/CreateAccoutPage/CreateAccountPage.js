CREATEACCOUNTPAGE=()=>{
    DIV.innerHTML=
    `
    <h1 class='AppLogo'>TUNE ZIKI</h1>
        <form id='registration-form'>

            <input type="text" name='name' placeholder='UserName'>

            <input type="email" name='email' id='Email' placeholder='Email'>

            <input type="password" name='password' placeholder='Password'>

            <input type="Date" name='date'>

            <input type="tel" name='telephone' placeholder='Phone Number'>

            <input type="text" name='country' placeholder='Country'>

            <button class='LogInButton' type="submit" onclick='CREATEUSERACCOUNT()'>Register</button>

        </form>
        <button class='LogInButton' onclick='LOGINPAGE()'>Log In</button>

        <div class='Message'></div>
       
    `
}