// Esta requisição traz a lista de jogos

const fetchGames = async () => {
  const response = await api();
};

const api = async () => {
  fetch("https://rawg-video-games-database.p.rapidapi.com/games", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "264e56be72mshf19d80ad3969a5fp17ecaajsn5aefc2463eb4",
      "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
    },
  })
    // .then(response => {
    // 	console.log(response);
    // })

    .then((data) => {
      console.log(data);
    //   document.querySelector("#games").innerHTML = data.body;
    })

    .catch((err) => {
      console.error(err);
    });

  // Esta requisição traz detalhes do jogo

  fetch("https://rawg-video-games-database.p.rapidapi.com/games/3498", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "264e56be72mshf19d80ad3969a5fp17ecaajsn5aefc2463eb4",
      "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
    },
  })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
};
