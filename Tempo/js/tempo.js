function buscarDia(id) {
    let cidade = id;
    if (cidade == null) {
        cidade = location.search.slice(1);
        let cidadesSplit = cidade.split('=');
        cidade = cidadesSplit[1];
    }
    if(cidade == null){
        cidade = '3675'
    }
    const url =
        'https://apiadvisor.climatempo.com.br/api/v1/forecast/locale/' +
        cidade +
        '/days/15?token=cb56842069f895e3af5c4807ddf159d7';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function(e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let previsao = JSON.parse(xhr.responseText);
                const data_semana = new Date();
                let dia_semana = [
                    'Domingo',
                    'Segunda-feira',
                    'Terça-feira',
                    'Quarta-feira',
                    'Quinta-feira',
                    'Sexta-feira',
                    'Sábado',
                    'Domingo',
                    'Segunda-feira',
                    'Terça-feira',
                    'Quarta-feira',
                ];
                let date_br = document.getElementById('date_br');
                let maxDia = [document.getElementById('max1')];
                let minDia = [document.getElementById('min1')];
                let data = [
                    document.getElementById('hoje'),
                    document.getElementById('prox'),
                    document.getElementById('prox2'),
                    document.getElementById('prox3'),
                    document.getElementById('prox4'),
                ];
                let max_prox = [
                    document.getElementById('max_prox'),
                    document.getElementById('max_prox2'),
                    document.getElementById('max_prox3'),
                    document.getElementById('max_prox4'),
                ];
                let min_prox = [
                    document.getElementById('min_prox'),
                    document.getElementById('min_prox2'),
                    document.getElementById('min_prox3'),
                    document.getElementById('min_prox4'),
                ];
                let img_prox = [
                    document.getElementById('img_prox'),
                    document.getElementById('img_prox2'),
                    document.getElementById('img_prox3'),
                    document.getElementById('img_prox4'),
                ];
                let texto = [document.getElementById('texto1')];
                let imagemClima = [
                    document.getElementById('img1'),
                    document.getElementById('img2'),
                    document.getElementById('img3'),
                ];
                let wind = [
                    document.getElementById('velocidade_wind'),
                    document.getElementById('direcao_wind'),
                ];
                let probabilidade = document.getElementById('probabilidade');
                let precipitacao = document.getElementById('precipitacao');
                let umidade = document.getElementById('umidade');
                let cidadeClima = document.getElementById('cidade');
                let sol = [
                    document.getElementById('nascer_sol'),
                    document.getElementById('por_sol'),
                ];
                const src = 'img/';
                for (let i = 0; i < 5; i++) {
                    data[i].innerHTML = dia_semana[data_semana.getDay() + i];
                }
                for (let i = 0; i < 4; i++) {
                    max_prox[i].innerHTML = previsao.data[i].temperature.max + '°';
                    min_prox[i].innerHTML = previsao.data[i].temperature.min + '°';
                    img_prox[i].src = src + previsao.data[i].text_icon.icon.day + '.png';
                }
                date_br.innerHTML = previsao.data[0].date_br;
                cidadeClima.innerHTML = previsao.name + ' (' + previsao.state + ')';
                maxDia[0].innerHTML = previsao.data[0].temperature.max + '°';
                minDia[0].innerHTML = previsao.data[0].temperature.min + '°';
                umidade.innerHTML = previsao.data[0].humidity.min;
                texto[0].innerHTML = previsao.data[0].text_icon.text.pt;
                probabilidade.innerHTML = previsao.data[0].rain.probability;
                precipitacao.innerHTML = previsao.data[0].rain.precipitation;
                wind[0].innerHTML = previsao.data[0].wind.velocity_avg;
                wind[1].innerHTML = previsao.data[0].wind.direction;
                sol[0].innerHTML = previsao.data[0].sun.sunrise.replace(':00', '');
                sol[1].innerHTML = previsao.data[0].sun.sunset.replace(':00', '');
                document.getElementById('raios_uv').innerHTML = previsao.data[0].uv.max;
                imagemClima[0].src = src + previsao.data[0].text_icon.icon.day + '.png';
                imagemClima[1].src =
                    src + previsao.data[0].text_icon.icon.afternoon + '.png';
                imagemClima[2].src =
                    src + previsao.data[0].text_icon.icon.night + '.png';
            } else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.onerror = function(e) {
        console.error(xhr.statusText);
    };
    xhr.send(null);
}