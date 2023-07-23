//ROUTE BACK TO SEARCH PAGE
BACKTOSEARCHPAGE=()=>{
    // Get the target element's ID you want to scroll to
  const targetId = "AllSearchiesDiv";
  // Scroll to the target element
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  } 
}

//ROUTE TO NOW PLAYING PAGE
LYRICSPAGE=()=>{
      // Get the target element's ID you want to scroll to
  const targetId = "LyricsPage";
  // Scroll to the target element
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  } 
}

//ROUTE TO NOWPLAYING PAGE
BACKTONOWPLAYING=()=>{
       // Get the target element's ID you want to scroll to
  const targetId = "Nowplaying";
  // Scroll to the target element
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  } 
}
