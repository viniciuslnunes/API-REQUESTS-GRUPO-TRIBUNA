const fetchLoteria = async () => {

    const response = await api("quina")
    // console.log(response);
    };
    
    const showData = (result)=>{
        for(const campo in result){
            // if(document.querySelector("#"+campo)){
            console.log(campo)
            // }
        }
    }

    const api = (loteria) => (  
      fetch(`https://apiloterias.com.br/app/resultado?loteria=${loteria}&token=PS2Wumcll4pkHJG`)
    .then(response => response.json()
        .then(data => {
            document.querySelector("#app").innerHTML = data.nome
            console.log(data)
        }  
        // .then(data => showData(data))
    ))
    // .catch(e => console.log('Deu erro: ' +e.message))
    )

    //   {"nome":"QUINA","numero_concurso":5478,"data_concurso":"2021-01-28T00:00:00-03:00",
    //   "data_concurso_milliseconds":1611802800000,"local_realizacao":"S\u00c3O PAULO, SP",
    //   "rateio_processamento":false,"acumulou":true,"valor_acumulado":11802210.7,
    //   "dezenas":["28","33","35","74","79"],"premiacao":[{"nome":"Quina","quantidade_ganhadores":0,
    //   "valor_total":0,"acertos":5},{"nome":"Quadra","quantidade_ganhadores":158,"valor_total":6006.31,
    //   "acertos":4},{"nome":"Terno","quantidade_ganhadores":9445,"valor_total":151.09,"acertos":3},
    //   {"nome":"Duque","quantidade_ganhadores":233046,"valor_total":3.36,"acertos":2}],
    //   "local_ganhadores":[],"arrecadacao_total":16459770,"concurso_proximo":5479,
    //   "data_proximo_concurso":"2021-01-29T00:00:00-03:00",
    //   "data_proximo_concurso_milliseconds":1611889200000,"valor_estimado_proximo_concurso":13500000,
    //   "valor_acumulado_especial":85281391.16,"nome_acumulado_especial":"S\u00e3o Jo\u00e3o",
    //   "concurso_especial":false}