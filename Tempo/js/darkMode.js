const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeader: getStyle(html, "--color-header"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
    colorCidadedata: getStyle(html, "--color-cidadedata"),
    colorToppref: getStyle(html, "--color-toppref"),
    colorNomepref: getStyle(html, "--color-nomepref"),
    colorPercentpref: getStyle(html, "--color-percentpref"),
    colorOutrospref: getStyle(html, "--color-outrospref"), 
  	colorBottomdata: getStyle(html, "--color-bottomdata"),
  	colorSrcver: getStyle(html, "--color-srcver"), 
  	colorVercand: getStyle(html, "--color-vercand"),
  	colorṔorcentver: getStyle(html, "--color-porcentver"),
  	colorNav: getStyle(html, "--color-nav"),
  	colorIcons: getStyle(html, "--color-icons"),
  	colorNavbar: getStyle(html, "--color-navbar"), 
}

const darkMode = {
    bg: "#333333",
    bgPanel: "#1c1e21",
    colorHeader: "#fff",
    colorHeadings: "#fff",
    colorText: "#B5B5B5",
    colorCidadedata: "#fff",
    colorToppref: "#434343",
    colorNomepref: "#fff",
    colorPercentpref: "#fff",
    colorOutrospref: "#fff",
  	colorBottomdata: "#fff",
  	colorSrcver: "#fff",
  	colorVercand: "#fff",
  	colorPorcentver: "#fff",
  	colorNav: "#fff", 
  	colorIcons: "#fff",
  	colorNavbar: "#fff",
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}

// checkbox.addEventListener("change", ({target}) => {
//   // target.checked ? changeColors(darkMode): changeColors(initialColors)
//   if(target.checked) {
//   document.getElementById('logo-topo-at').src = '/img/logoat-white.png' 
//   return changeColors(darkMode);
// }
//   else{
//   document.getElementById('logo-topo-at').src = '/img/logoat.png'
//   return changeColors(initialColors);
// }
  
// })
