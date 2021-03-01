const fazGet = async (url) => {
  const response = await apicotacao();
};

const apicotacao = () =>
  fetch(`https://economia.awesomeapi.com.br/json/ALL`)
    .then((res) => res.json())
    .then((response) => {
      const moedas_middle = ["usd", "btc", "cny", "eur", "ars", "jpy"];
      const moedas_bottom = [
        ...moedas_middle,
        "usdt",
        "cad",
        "gbp",
        "ars",
        "ltc",
        "jpy",
        "chf",
        "aud",
        "cny",
        "eth",
        "ils",
        "xrp",
      ];
      // MIDDLE CARD
      moedas_middle.forEach((moeda_middle) => {
        const moeda_middle_up = moeda_middle.toUpperCase();
        document.querySelector(`.code-${moeda_middle}`).innerHTML =
          response[moeda_middle_up].code;
        document.querySelector(`.bid-${moeda_middle}`).innerHTML =
          response[moeda_middle_up].bid;
      });
      // BOTTOM CARD
      moedas_bottom.forEach((moeda_bottom) => {
        const moeda_bottom_up = moeda_bottom.toUpperCase();
        const verify = response[moeda_bottom_up].varBid[0] ==! '-';
        document.querySelector(`.${moeda_bottom}-img`).setAttribute('src', verify ? "../img/arrow-green.svg":"../img/arrow-red.svg")
        document.querySelector(`.code-${moeda_bottom}-bottom`).innerHTML =
          response[moeda_bottom_up].name;
        document.querySelector(`.bid-${moeda_bottom}-bottom`).innerHTML =
          response[moeda_bottom_up].bid;
        document.querySelector(`.ask-${moeda_bottom}`).innerHTML =
          response[moeda_bottom_up].ask;
        document.querySelector(`.varBid-${moeda_bottom}`).innerHTML =
          "(" + response[moeda_bottom_up].varBid + ")";
      });
    });
