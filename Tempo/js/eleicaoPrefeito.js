//Adiciona dados de votação para prefeito(DOM)
  let dataPre = ({brancosP, brancosD, nulosP, nulosD, validosP, validosD}) => ({
    brancosP,
    brancosD,
    nulosP,
    nulosD,
    validosP,
    validosD,
    fill() {
        try {
            //Brancos
            let bp = document.createElement("div");
            bp.classList.add("bottom-data-bp");
            bp.innerHTML = brancosP + "%";
            let bd = document.createElement("div");
            bd.classList.add("bottom-data-bd");
            brancosD = parseFloat(brancosD);
            bd.innerHTML = brancosD.toLocaleString();
            let brancos = document.getElementById("dataPre-b");
            brancos.appendChild(bp);
            brancos.appendChild(bd);

            //Nulos
            let np = document.createElement("div");
            np.classList.add("bottom-data-np");
            np.innerHTML = nulosP + "%";
            let nd = document.createElement("div");
            nd.classList.add("bottom-data-nd");
            nulosD = parseFloat(nulosD);
            nd.innerHTML = nulosD.toLocaleString();
            let nulos = document.getElementById("dataPre-n");
            nulos.appendChild(np);
            nulos.appendChild(nd);

            //Validos
            let vp = document.createElement("div");
            vp.classList.add("bottom-data-vp");
            vp.innerHTML = validosP + "%";
            let vd = document.createElement("div");
            vd.classList.add("bottom-data-vd");
            validosD = parseFloat(validosD);
            vd.innerHTML = validosD.toLocaleString();
            let validos = document.getElementById("dataPre-v");
            validos.appendChild(vp);
            validos.appendChild(vd);
        } catch(err){
            console.log("Erro em dados de votação para Prefeito :" + err.message);
        }
    }
});

