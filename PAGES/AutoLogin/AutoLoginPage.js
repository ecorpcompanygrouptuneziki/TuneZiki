AUTOCHECK = () => {
  const userEmail = localStorage.getItem('userEmail');

  fetch(USERSAPI)
    .then(response => response.json())
    .then(data => {
      const user = data.find(user => user.UserEmail === userEmail);
      if (user) {
        const userDate = new Date(user.UserDate);
        const today = new Date();
        const ageDiff = today - userDate;
        const ageDate = new Date(ageDiff);
        const userAge = Math.abs(ageDate.getUTCFullYear() - 1970);
        const isUnderAge = userAge < 13;

        if (isUnderAge) {
          DIV.innerHTML = `
            <h1 class='AppName'>Dear <br><br> ${user.UserName.toUpperCase()}, Your UnderAge.</h1>
            
            <div class='CompanyNameDIv'>
  
            <button class='LogInButton5' onclick='ONLINEPOLICY()'>Read Privacy Policies</button>
            <button class='LogInButton5' onclick='LOGINPAGE()'>Back To Home</button>

            </div>
          `;
          // Don't proceed with opening the app
          return;
        }

        // Save the user data to localStorage
        localStorage.setItem('userData', JSON.stringify(user));

        DIV.innerHTML = `
          <h1 class='AppName'>WELCOME BACK <br><br> ${user.UserName.toUpperCase()}</h1>
        `;
        setTimeout(() => {
          HOMEPAGE();
        }, 2000);
      } else {
        LOGINPAGE();
      }
    })
    .catch(error => {
      console.error('Error checking user email:', error);
    });
};
