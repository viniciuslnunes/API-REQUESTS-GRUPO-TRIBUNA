function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Base link da imagem de candidato
let linkf =
  "https://resultados.tse.jus.br/oficial/ele2020/divulgacao/oficial/426/fotos/sp/";

let slt = document.querySelector("#cidade-select");

let arrayPref = {
  prefeitos: [],
};

let arrayVer = {
  vereadores: [],
};

// Adiciona dados da cidade(DOM)
let cidade = (progress, dataEleitores, dataVotantes, dataAusentes) => ({
  progress,
  dataEleitores,
  dataVotantes,
  dataAusentes,
  fill() {
    try {
      document.getElementById("cidade-prog").innerHTML =
        progress + "%<span>Urnas apuradas</span>";
      document.getElementById("cidade-bar").style =
        "background : linear-gradient(90deg, #000 0%, #000 " +
        progress +
        "%, #fff " +
        progress +
        "%, #fff 100%);";
      dataEleitores = parseFloat(dataEleitores);

      document.getElementById(
        "cidade-eleitores"
      ).innerHTML = dataEleitores.toLocaleString();
      document.getElementById("cidade-votantes").innerHTML = dataVotantes + "%";
      document.getElementById("cidade-ausentes").innerHTML = dataAusentes + "%";
    } catch (err) {
      console.log("Erro em cidades :" + err.message);
    }
  },
});

function isNull(element) {
  if (element == "" || element == null) {
    return false;
  } else {
    return true;
  }
}

//Requisições de Cidade
async function dataRefresh(resposta) {
  cidade(
    resposta.progress,
    resposta.dataEleitores,
    resposta.dataVotantes,
    resposta.dataAusentes
  ).fill();
  console.log(
    "progress :" +
      resposta.progress +
      typeof resposta.progress +
      "  " +
      "eleitores :" +
      resposta.dataEleitores +
      typeof resposta.dataEleitores +
      "  " +
      "votantes :" +
      resposta.dataVotantes +
      typeof resposta.dataVotantes +
      "  " +
      "ausentes :" +
      resposta.dataAusentes +
      typeof resposta.dataAusentes
  );

  //Requisição de prefeitos
  resposta.prefeitos.forEach((element) => {
    arrayPref.prefeitos.push(element);
  });

  attPrefeitos(arrayPref.prefeitos);

  //Requisição de vereadores
  resposta.vereadores.forEach((element) => {
    arrayVer.vereadores.push(element);
  });

  attVereadores(arrayVer.vereadores);

  //Requisição de dados de vereadores e prefeitos
  let arrayDados = {
    dados: [],
  };
  resposta.cargos.forEach((element) => {
    arrayDados.dados.push(element);
  });

  switch (arrayDados.dados[0].tipo) {
    case "prefeito":
      dataPre(arrayDados.dados[0]).fill();
      dataVer(arrayDados.dados[1]).fill();
      break;
    case "vereador":
      dataPre(arrayDados.dados[1]).fill();
      dataVer(arrayDados.dados[0]).fill();
      break;
  }
}

//Função pesquisa de vereadores(DOM)
async function filterVereador(value = "") {
  let ver = document.getElementById("ver");
  ver.innerHTML = "";

  const vereadores_parecidos = arrayVer.vereadores.filter(
    ({ nome }) => nome.toLowerCase().includes(value) || nome.includes(value)
  );
  vereadores_parecidos.forEach(criarVereador);
}

//Organização de prefeitos
async function attPrefeitos(prefeitos) {
  let sorted = prefeitos.sort(function (a, b) {
    return a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0;
  });

  sorted = sorted.sort(function (a, b) {
    a.votoDec = Number(a.votoDec);
    b.votoDec = Number(b.votoDec);
    return a.votoDec > b.votoDec ? -1 : b.votoDec > a.votoDec ? 1 : 0;
  });

  addTop1(sorted[0]);
  addTop2(sorted[1]);

  sorted.splice(0, 2);
  sorted.forEach(addBottom);
}

//Adiciona o candidato em primeiro lugar(DOM)
async function addTop1(top1) {
  let nome = document.createTextNode(top1.nome);
  let partido = document.createTextNode(top1.partido);

  //Mascara decimal

  top1.votoDec = parseFloat(top1.votoDec);
  let votoD = document.createTextNode(top1.votoDec.toLocaleString());

  let votoP = document.createTextNode(top1.votoPor);
  let foto = document.getElementById("top1-ft");
  document.getElementById("top1-nm").innerHTML = nome.data;
  document.getElementById("top1-par").innerHTML = partido.data;
  document.getElementById("top1-vd").innerHTML = votoD.data + " votos";
  document.getElementById("top1-vp").innerHTML = votoP.data + "<span>%</span";
  foto.style.backgroundImage = "url('" + linkf + top1.sqcand + ".jpeg')";
  //foto.style.backgroundImage = "url('https://divulgacandcontas.tse.jus.br/candidaturas/oficial/2020/SP/70718/426/candidatos/302077/1600473122970.jpg')";
  if (top1.eleito != "s") {
    document.getElementById("top1-flag").style.display = "none";
  } else {
    document.getElementById(
      "top1-flag"
    ).innerHTML = top1.situacaosegundoturno.replace(/Â/g, "");
  }
}

//Adiciona o candidato em segundo lugar(DOM)
async function addTop2(top2) {
  let nome = document.createTextNode(top2.nome);
  let partido = document.createTextNode(top2.partido);

  //Mascara decimal

  top2.votoDec = parseFloat(top2.votoDec);
  let votoD = document.createTextNode(top2.votoDec.toLocaleString());

  let votoP = document.createTextNode(top2.votoPor);
  let foto = document.getElementById("top2-ft");
  document.getElementById("top2-nm").innerHTML = nome.data;
  document.getElementById("top2-par").innerHTML = partido.data;
  document.getElementById("top2-vd").innerHTML = votoD.data + " votos";
  document.getElementById("top2-vp").innerHTML = votoP.data + "<span>%</span";
  foto.style.backgroundImage = "url('" + linkf + top2.sqcand + ".jpeg')";
  //foto.style.backgroundImage = "url('https://divulgacandcontas.tse.jus.br/candidaturas/oficial/2020/SP/70718/426/candidatos/637821/foto.jpeg')";
  if (top2.eleito != "s") {
    document.getElementById("top2-flag").style.display = "none";
  } else {
    document.getElementById(
      "top2-flag"
    ).innerHTML = top2.situacaosegundoturno.replace(/Â/g, "");
  }
}

//Adiciona outros candidatos a prefeito(DOM)
async function addBottom(prefeito) {
  let nome = document.createElement("span");
  nome.innerHTML = prefeito.nome;
  let partido = document.createElement("span");
  partido.innerHTML = prefeito.partido;
  let votoD = document.createElement("span");
  prefeito.votoDec = parseFloat(prefeito.votoDec);
  votoD.innerHTML = prefeito.votoDec.toLocaleString();
  let votoP = document.createElement("span");
  votoP.innerHTML = prefeito.votoPor + "%";

  let divp = document.createElement("div");
  divp.classList.add("bottom-cand");
  divp.appendChild(nome);
  divp.appendChild(partido);
  divp.appendChild(votoD);
  divp.appendChild(votoP);

  let btm = document.getElementById("bottom");
  btm.appendChild(divp);
}

//Organiza os vereadores
async function attVereadores(vereadores) {
  // let sorted = vereadores.sort(function (a, b) {
  //  return a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0;
  // });

  //    sorted = sorted.sort(function (a, b) {
  //	return a.votoDec > b.votoDec ? -1 : b.votoDec > a.votoDec ? 1 : 0;
  //  });

  let sorted = vereadores.sort(function (a, b) {
    a.votoDec = Number(a.votoDec);
    b.votoDec = Number(b.votoDec);

    return a.votoDec > b.votoDec ? -1 : b.votoDec > a.votoDec ? 1 : 0;
  });

  sorted = sorted.sort(function (a, b) {
    return a.eleito - b.eleito;
  });

  sorted.forEach(criarVereador);
}

//Adiciona os vereadores(DOM)
async function criarVereador(vereador, i) {
  let nome = document.createElement("span");
  nome.innerHTML = vereador.nome;
  let partido = document.createElement("span");
  partido.innerHTML = vereador.partido;
  let votoD = document.createElement("span");
  vereador.votoDec = parseFloat(vereador.votoDec);
  votoD.innerHTML = vereador.votoDec.toLocaleString();
  let votoP = document.createElement("span");
  votoP.innerHTML = (vereador.votoPor ? vereador.votoPor : "0.0") + "%";
  let sit = document.createElement("span");
  sit.innerHTML = "E";
  sit.classList.add("flag");
  sit.id = "flag-" + i;
  sit.style.opacity = vereador.eleito == "s" ? "1" : "0";

  let divv = document.createElement("div");
  divv.classList.add("ver-cand");
  divv.appendChild(nome);
  divv.appendChild(partido);
  divv.appendChild(votoD);
  divv.appendChild(votoP);
  divv.appendChild(sit);

  let ver = document.getElementById("ver");
  ver.appendChild(divv);
}

function redirecionar(id) {
  let url = "/eleicoes/apuracao?id=";
  window.location.href = url + id.value;
}

function cityChange() {
  const params = new URLSearchParams(window.location.search);
  const cidade = Array.from(params.keys()).reduce(
    (acc, key) => ({ ...acc, [key]: params.get(key) }),
    {}
  );
  if (cidade.id) {
    loadDoc(cidade.id);
    $("#cidade-select").val(cidade.id);
  } else {
    loadDoc(slt.value);
  }
}

function loadDoc(cidade) {
  var aleatorio = makeid(5);
  fetch("https://www.atribuna.com.br/cmlink/" + cidade + "?" + aleatorio)
    .then((res) => res.text())
    .then((out) => {
      return JSON.parse(out);
    })
    .then((response) => dataRefresh(response));
}

window.addEventListener("DOMContentLoaded", cityChange());
