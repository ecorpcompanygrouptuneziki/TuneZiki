CREATEUSERACCOUNT=()=>{
    const form = document.querySelector('#registration-form');
    const useremailInput = document.getElementById('Email').value;
    let Message = document.querySelector('.Message');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      Message.style.height = '10%';
      Message.innerHTML = `<h1 class='App_Name1'>PLEASE WAIT ...</h1>`;
      fetch(`http://tunezikiofficial.infinityfreeapp.com/CreateAccount.php`, {
        method: 'POST',
        body: formData,
        mode: 'cors', // Enable CORS mode
        headers: {
          'Access-Control-Allow-Origin': '*', // Specify the desired origin
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', // Specify allowed HTTP methods
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            fetch(`http://tunezikiofficial.infinityfreeapp.com/jsonFile.json`)
              .then((response) => response.json())
              .then((data) => {
                const foundUser = data.find(
                  (element) => element.UserEmail === useremailInput
                );
                Message.style.height = '10%';
                Message.innerHTML = `<h1 class='App_Name1'>THANK YOU <br> ${foundUser.UserName.toUpperCase()}</h1>`;
                localStorage.setItem('MYEMAIL', foundUser.UserEmail);
                setTimeout(() => {
                  HOMEPAGE();
                }, 2000);
              })
              .catch((error) => {
                console.log('Error reading the JSON file:', error);
              });
          } else {
            Message.style.height = '10%';
            Message.innerHTML = `<h1 class='App_Name1'>${data.message}</h1>`;
            setTimeout(() => {
              CREATEACCOUNTPAGE();
            }, 2000);
          }
        })
        .catch((error) => console.log(error));
    });
  }
  