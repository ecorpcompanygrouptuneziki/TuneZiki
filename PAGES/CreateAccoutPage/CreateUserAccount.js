CREATEUSERACCOUNT = () => {
  const form = document.getElementById('registration-form');
  let Message = document.querySelector('.Message');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    Message.style.height = '10%';
    Message.innerHTML = `<h1 class='App_Name1'>PLEASE WAIT ...</h1>`;

    const formData = new FormData(form);
    const userEmail = formData.get('UserEmail');

    // Get user's age based on the provided date
    const userDate = new Date(formData.get('UserDate'));
    const today = new Date();
    const ageDiff = today - userDate;
    const ageDate = new Date(ageDiff);
    const userAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    const isUnderAge = userAge < 13;

    // Add current date and time to form data
    const currentDate = new Date().toISOString();
    formData.append('DateJoined', currentDate);

    // Add additional parameters to form data
    const accountType = 'Free';
    formData.append('AccountType', accountType);
    formData.append('UnderAge', isUnderAge.toString());

    // Check if the user email exists in the database
    fetch(USERSAPI)
      .then(response => response.json())
      .then(data => {
        const emailExists = data.some(user => user.UserEmail === userEmail);
        if (emailExists) {
          Message.style.height = '10%';
          Message.innerHTML = `<h1 class='App_Name1'>User email already exists</h1>`;
          setTimeout(() => {
            CREATEACCOUNTPAGE();
          }, 2000);
          console.log('User email already exists. Registration aborted.');
          return; // Don't proceed with sending the form data to the backend
        } else {
          // Send the form data to the backend
          fetch(POSTAPI, {
            method: 'POST',
            body: formData
          })
            .then(response => {
              // Handle the response from the server if needed
              console.log('Form data submitted successfully.');
              // Save the user input email to localStorage
              localStorage.setItem('userEmail', userEmail);

              // Fetch all Data
              fetch(USERSAPI)
                .then(response => response.json())
                .then(data => {
                  const user = data.find(user => user.UserEmail === userEmail && !user.UnderAge);
                  if (user) {
                    // Save the user data to localStorage
                    localStorage.setItem('userData', JSON.stringify(user));

                    DIV.innerHTML = `
                      <h1 class='AppName'>DEAR <br> ${user.UserName.toUpperCase()}</h1>
                    `;
                    setTimeout(() => {
                      DIV.innerHTML = `
                      <h1 class='AppName'>WELCOME TO TUNE ZIKI</h1>
                    `;
                      setTimeout(() => {
                        HOMEPAGE();
                      }, 2000);
                    }, 2000);
                  } else {
                    DIV.innerHTML = `<h1 class='AppName'>Dear User,<br><br>Your UnderAge.</h1>
                    <div class='CompanyNameDIv'>
  
                      <button class='LogInButton5' onclick='ONLINEPOLICY()'>Read Privacy Policies</button>
                      <button class='LogInButton5' onclick='CREATEACCOUNTPAGE()'>Back To Home</button>
          
                    </div>

                    `;
                    return;
                  }
                })
                .catch(error => {
                  console.error('Error checking user email:', error);
                });
            })
            .catch(error => {
              // Handle any errors that occur during the request
              console.error('Error submitting form data:', error);
            });
        }
      })
      .catch(error => {
        console.error('Error checking user email:', error);
        Message.style.height = '10%';
        Message.innerHTML = `<h1 class='App_Name1'>Something Went Wrong <br> try Again!!!</h1>`;
        setTimeout(() => {
          Message.style.height = '0%';
        }, 2000);
      });
  });
};