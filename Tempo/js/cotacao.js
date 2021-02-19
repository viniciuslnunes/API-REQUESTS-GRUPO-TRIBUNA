const fazGet= async (url) => {

  const response = await api()
  };
  
  const api = (campeonato_id, fase_id) => (  
    fetch(`https://economia.awesomeapi.com.br/json/ALL`)
    .then((res) => res.json()))
    .then(moedas => {       
    console.log(moedas);
    console.log(moedas.USD.code);
      console.log(moedas.EUR);
      document.querySelector(".money-usd").innerHTML = moedas.USD.code;
      document.querySelector(".money-eur").innerHTML = moedas.EUR.code;
      document.getElementById("usd-price").innerHTML = moedas.USD.ask;
      document.getElementById("eur-price").innerHTML = moedas.EUR.ask;

    })


// function criaLinha(code, name, high, low){
//   linha = document.createElement("tr");
//   tdId = document.createElement("td");
//   tdNome = document.createElement("td");
//   tdHigh = document.createElement("td");
//   tdLow = document.createElement("td");
//   tdId.innerHTML = code.code;
//   tdNome.innerHTML = code.name;
//   tdHigh.innerHTML = "R$ " + code.high;
//   tdLow.innerHTML = "R$ " + code.low;

//   linha.appendChild(tdId);
//   linha.appendChild(tdNome);
//   linha.appendChild(tdHigh);
//   linha.appendChild(tdLow);

//   return linha;
// }

// function main(){
//   data = fazGet("https://economia.awesomeapi.com.br/json/ALL")
//   let moedas = JSON.parse(data);
//   let tabela = document.getElementById("tabela");
//   console.log(moedas.USD);
//   console.log(moedas.EUR);
//   window.onload = function(){ 
//   document.querySelector(".money").innerHTML = moedas.USD;
//   }
// }

// main()