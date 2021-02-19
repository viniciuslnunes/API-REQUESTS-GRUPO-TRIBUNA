const buscarDia = async (id) => {

  let cidade = id;
  if (cidade == null) {
    cidade = location.search.slice(1);
    let cidadesSplit = cidade.split("=");
    cidade = cidadesSplit[1];
  }
  if (cidade == null) {
    cidade = "3675";
  }

  const response = await api(cidade)
  };
  
  const api = (cidade) => (  
    fetch(`https://apiadvisor.climatempo.com.br/api/v1/forecast/locale/${cidade}/days/15?token=cb56842069f895e3af5c4807ddf159d7`)
    .then((res) => res.json()))
    .then(data => {       
    console.log(data);
    console.log(data.data[0].temperature.min);
    console.log(data.data[0].temperature.max);
    console.log(data.data[0].text_icon.icon.day);
    console.log(data.data[0].name);
    `../img/${data.data[0].text_icon.icon.day}.png`

    


    document.querySelector(".weather-today img").src = `../img/${data.data[0].text_icon.icon.day}.png`
    document.querySelector(".low-weather").innerHTML = data.data[0].temperature.min + "º"
    document.querySelector(".high-weather").innerHTML = data.data[0].temperature.max + "º"

    
    })
