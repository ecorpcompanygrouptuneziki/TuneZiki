TERMSPAGE=()=>{
    const TERMS=document.querySelector('.TERMSPAGE')
    TERMS.style.height=100+'%';
}

CLOSETERMS=()=>{
    const TERMS=document.querySelector('.TERMSPAGE')
    TERMS.style.height=0+'%';
}

//FETCH TERMS
SHOWTERMS=()=>{
    fetch(TERMSAPIR)
    .then(response => response.text())
    .then(data => {
        const TERMSDATA=document.querySelector('.TermsDisplay')

        TERMSDATA.innerHTML=data
    })
    .catch(error => {console.error(error)})
}
