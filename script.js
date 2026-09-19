function toggleMode() {
  const html = document.documentElement

  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')) {
    html.classList.remove('light')

    img.setAttribute("src", "./assets/WhatsApp Image 2026-09-19 at 12.54.55.jpeg")
   

  } else {
    html.classList.add('light')
    img.setAttribute("src", "./assets/WhatsApp Image 2026-09-19 at 12.54.55.jpeg")
   
    
  }
 }