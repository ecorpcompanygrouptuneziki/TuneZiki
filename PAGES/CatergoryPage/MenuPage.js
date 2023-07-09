OPENMENU=()=>{
    const HOMEPAGEDIV=document.querySelector('.CatergoriesDiv')
    const MenuIconOpen=document.querySelector('#MenuIconOpen')
    const MenuIconClose=document.querySelector('#MenuIconClose')
    HOMEPAGEDIV.style.height=100+'%'
    MenuIconOpen.style.display='none'
    MenuIconClose.style.display='block'
}

CLOSEMENU=()=>{
    const HOMEPAGEDIV=document.querySelector('.CatergoriesDiv')
    const MenuIconOpen=document.querySelector('#MenuIconOpen')
    const MenuIconClose=document.querySelector('#MenuIconClose')
    HOMEPAGEDIV.style.height=0+'%'
    MenuIconOpen.style.display='block'
    MenuIconClose.style.display='none'
}