const fetchFutebol= async () => {

    const response = await api("10")
    };
    
    const api = (campeonato_id) => (  
      fetch(`https://api.api-futebol.com.br/v1/campeonatos/${campeonato_id}/fases/55`, {headers:new Headers({Authorization:"Bearer test_0438f63aba73371258211209c5db30"})})
      .then((res) => res.json()))
      .then(data => {       
      console.log(data);
      })