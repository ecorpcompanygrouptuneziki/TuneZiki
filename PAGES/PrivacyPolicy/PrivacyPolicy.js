//FETCH PRIVACY POLICY
SHOWPRIVACYPOLICY=()=>{
    fetch(PRIVACYPOLICYAPI)
    .then(response => response.text())
    .then(data => {
        const TERMSDATA=document.querySelector('#PrivacyPagedata')

        TERMSDATA.innerHTML=data
    })
    .catch(error => {console.error(error)})
}

//FETCH HELP DATA
SHOWHELPPAGE=()=>{
    fetch(HELPPAGEAPI)
    .then(response => response.text())
    .then(data => {
        const TERMSDATA=document.querySelector('#HELPPAGEDATA')

        TERMSDATA.innerHTML=data
    })
    .catch(error => {console.error(error)})
}