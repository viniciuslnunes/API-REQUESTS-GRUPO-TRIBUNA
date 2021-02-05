
//Adiciona dados de votação para vereador(DOM)
  let dataVer = ({brancosP, brancosD, nulosP, nulosD, validosP, validosD}) =>({
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
            bp.classList.add("ver-data-bp");
            bp.innerHTML = brancosP + "%";
            let bd = document.createElement("div");
            bd.classList.add("ver-data-bd");
            brancosD = parseFloat(brancosD);
            bd.innerHTML = brancosD.toLocaleString();
            let brancos = document.getElementById("dataVer-b");
            brancos.appendChild(bp);
            brancos.appendChild(bd);

            //Nulos
            let np = document.createElement("div");
            np.classList.add("ver-data-np");
            np.innerHTML = nulosP + "%";
            let nd = document.createElement("div");
            nd.classList.add("ver-data-nd");
            nulosD = parseFloat(nulosD);      
            nd.innerHTML = nulosD.toLocaleString();
            let nulos = document.getElementById("dataVer-n");
            nulos.appendChild(np);
            nulos.appendChild(nd);

            //Validos
            let vp = document.createElement("div");
            vp.classList.add("ver-data-vp");            
            vp.innerHTML = validosP + "%";
            let vd = document.createElement("div");
            vd.classList.add("ver-data-vd");
            validosD = parseFloat(validosD);
            vd.innerHTML = validosD.toLocaleString();
            
            let validos = document.getElementById("dataVer-v");
            validos.appendChild(vp);
            validos.appendChild(vd);
        } catch(err){
            console.log("Erro em dados de votação para Vereador : "+err.message);
        }
    }
 });
