function fazGet(url){
  let request = new XMLHttpRequest()
  request.open("GET", url, false)
  request.send()
  return request.responseText
}

function criaLinha(code, name, high, low){
  linha = document.createElement("tr");
  tdId = document.createElement("td");
  tdNome = document.createElement("td");
  tdHigh = document.createElement("td");
  tdLow = document.createElement("td");
  tdId.innerHTML = code.code;
  tdNome.innerHTML = code.name;
  tdHigh.innerHTML = "R$ " + code.high;
  tdLow.innerHTML = "R$ " + code.low;

  linha.appendChild(tdId);
  linha.appendChild(tdNome);
  linha.appendChild(tdHigh);
  linha.appendChild(tdLow);

  return linha;
}

function main(){
  data = fazGet("https://economia.awesomeapi.com.br/json/ALL")
  let moedas = JSON.parse(data);
  let tabela = document.getElementById("tabela");
  console.log(moedas)
  //
  Object.keys(moedas).forEach(moeda => {
      console.log(moedas[moeda].name)

      let linha = criaLinha(moedas[moeda]);
      tabela.appendChild(linha);
  });

  //Para cada usuario, criar uma linha e adicionar na tabela
}

main()