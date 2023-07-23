LogInUserAccount = () => {
  const form = document.querySelector('#login-form');
  let Message = document.querySelector('.Message');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userEmail = document.getElementById('MyEmail').value;
    const userPassword = document.getElementById('MyPassword').value;

    Message.style.height = '10%';
    Message.innerHTML = `<h1 class='App_Name1'>Please Wait...</h1>`;

    // Fetch JSON data
    fetch(USERSAPI)
      .then(response => response.json())
      .then(data => {
        // Check if email and password match
        const user = data.find(user => user.UserEmail === userEmail && user.UserPassword === userPassword);
        if (user) {
          // Get user's age based on the provided date
          const userDate = new Date(user.UserDate);
          const today = new Date();
          const ageDiff = today - userDate;
          const ageDate = new Date(ageDiff);
          const userAge = Math.abs(ageDate.getUTCFullYear() - 1970);

          if (userAge < 13) {
            Message.style.height = '10%';
            DIV.innerHTML = `<h1 class='App_Name1'>${user.UserName.toUpperCase()},<br><br> Your UnderAge.</h1>
            <div class='CompanyNameDIv'>
  
              <button class='LogInButton5' onclick='ONLINEPOLICY()'>Read Privacy Policies</button>
              <button class='LogInButton5' onclick='LOGINPAGE()'>Back To Home</button>

            </div>
            
            `;
            return; // Don't proceed with logging in
          }

          // Store user email and data in localStorage
          localStorage.setItem('userEmail', userEmail);
          localStorage.setItem('userData', JSON.stringify(user));

          DIV.innerHTML = `<h1 class='AppName'>WELCOME BACK <br> ${user.UserName.toUpperCase()}</h1>`;

          setTimeout(() => {
            HOMEPAGE();
          }, 2000);
        } else {
          Message.style.height = '10%';
          Message.innerHTML = `<h1 class='App_Name1'>User Doesnot Exist !!!</h1>`;
          setTimeout(() => {
            Message.style.height = '0%';
            LOGINPAGE()
          }, 2000);
        }
      })
      .catch(error => {
        console.error(error);
        Message.style.height = '10%';
        Message.innerHTML = `<h1 class='App_Name1'>Something Went Wrong, Try Again!!!</h1>`;
        setTimeout(() => {
          Message.style.height = '0%';
        }, 3000);
      });
  });
};
