        // SCRIPT INLINE
        const requisiçãohttp = async url => {
            const resposta = await fetch(url).then(response => response.json());
            return resposta;
        };
    
        const getUltimoDia = async => {
            const data = new Date();
            const date = new Date(data.getFullYear(), data.getMonth() + 1, 0)
            const ultimoDia = date.getDate();
            return ultimoDia;
        }
    
        function getTabuaResumo(cidade) {
    
            let table = document.getElementById('row-table')
    
            if (table) {
                table.innerHTML = ""
            }
    
            if (cidade == null) {
                cidade = 3675
            }
            else {
                cidade = cidade.value
            }
            const date = new Date();
            requisiçãohttp(
                'https://apiadvisor.climatempo.com.br/api/v1/tide-tables/locale/' + cidade + '?&token=cb56842069f895e3af5c4807ddf159d7&from='+date.getFullYear()+'-' + (date.getMonth() + 1) + '-' + date.getDate() + '&to='+date.getFullYear()+'-' + (date.getMonth() + 1)+'-'+ getUltimoDia()).then(responseData => {
                    const { table } = responseData.data[0];
    
                    let day = date.getTime();
                    let obj = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
                    let i = 0;
                    let j = 0;
                    const dias = [
                        'Domingo',
                        'Segunda',
                        'Terça',
                        'Quarta',
                        'Quinta',
                        'Sexta',
                        'Sábado',
                        'Domingo',
                        'Segunda',
                        'Terça',
                        'Quarta',
                        'Quinta',
                        'Sexta',
                        'Sábado',
                        'Domingo',
                        'Segunda',
                        'Terça',
                        'Quarta',
                        'Quinta',
                        'Sexta',
                        'Sábado',
                        'Domingo',
                        'Segunda',
                        'Terça',
                        'Quarta',
                        'Quinta',
                        'Sexta',
                        'Sábado',
                        'Domingo',
                        'Segunda',
                        'Terça'
                    ];
    
                    //Divide os arrays por dia começando do 0 e indo pro 9
                    do {
                        day = date.getDate() + j;
                        let data_mare = table[i].date.split(' ');
                        dia_mare = data_mare[0].split('-');
                        if (day === parseInt(dia_mare[2])) {
                            obj[j].push(data_mare[1], table[i].height, table[i].tide);
                        } else {
                            j++;
                            obj[j].push(data_mare[1], table[i].height, table[i].tide);
                        }
                        i++;
                    } while (i < table.length);
    
    
                    //AppendChild no html
                    for (let index = 0; index < obj.length; index++) {
                        const element = obj[index];
    
                        //Declaração dos createElements
                        let t = 0
                        let j = 0
                        let i = 0
    
                        let table = document.createElement('table')
                        let tbody = document.createElement('tbody')
                        let thead = document.createElement('thead')
                        let div = document.createElement('div')
                        let th = [
                            document.createElement('th'),
                            document.createElement('th'),
                            document.createElement('th'),
                            document.createElement('th')
                        ]
                        let td = [
                            document.createElement('td'),
                            document.createElement('td'),
                            document.createElement('td'),
                            document.createElement('td'),
                            document.createElement('td'),
                            document.createElement('td'),
                            document.createElement('td'),
                            document.createElement('td'),
                            document.createElement('td'),
                            document.createElement('td'),
                            document.createElement('td'),
                            document.createElement('td'),
                            document.createElement('td'),
                            document.createElement('td'),
                            document.createElement('td'),
                            document.createElement('td'),
                            document.createElement('td')
                        ]
                        let tr = [
                            document.createElement('tr'),
                            document.createElement('tr'),
                            document.createElement('tr'),
                            document.createElement('tr'),
                            document.createElement('tr'),
                            document.createElement('tr'),
                            document.createElement('tr'),
                            document.createElement('tr')
                        ]
                        let span = [
                            document.createElement('span'),
                            document.createElement('span'),
                            document.createElement('span'),
                            document.createElement('span'),
                            document.createElement('span'),
                            document.createElement('span'),
                            document.createElement('span'),
                            document.createElement('span')
                        ]
                        let iE = [
                            document.createElement('span'),
                            document.createElement('span'),
                            document.createElement('span'),
                            document.createElement('span'),
                            document.createElement('span'),
                            document.createElement('span'),
                            document.createElement('span'),
                            document.createElement('span')
                        ]
    
                        //Estilizando a tabela e a div para responsividade
                        if((index+1)%3==0){
                            div.className = "col-12 col-sm-6 col-md-3 p-1"
                        }
                        else{
                            div.className = "col-12 col-sm-6 col-md-4 px-2 py-1"
                        }
                        table.className = "table"
    
                        th[0].innerText = dias[date.getDay() + index]
                        th[1].innerText = (date.getDate() + index) + ' / ' + (date.getMonth() + 1)
                        // th[2].innerText = 'Horários'
                        // th[3].innerText = 'Altura'
                        thead.appendChild(th[0])
                        thead.appendChild(th[1])
                        table.appendChild(thead)
                        // tr[5].appendChild(th[2])
                        // tr[5].appendChild(th[3])
                        tbody.appendChild(tr[5])
    
    
                        do {
                            //Pegando dados do dia
                            const elemento = [element[j], element[j + 1], element[j + 2]];
    
                            //Adicinando a hora
                            td[i].innerText = elemento[0].replace(":00", "") + "h"
                            span[t].innerText = elemento[1] + 'm'
    
                            //Comparando pra ver se altura é alta ou baixa
                            if (elemento[2] == 'a')
                            
                                iE[t].className = '"iconify ml-1 font-weight-bold color-red" data-icon="wi-direction-up" data-inline="false"' 
                            else
                                iE[t].className = '"iconify ml-1 font-weight-bold color-red" data-icon="wi-direction-down" data-inline="false"'
    
                            //Adicionando icone á tabela
                            td[i + 1].appendChild(iE[t])
    
                            //Adicionando altura
                            td[i + 1].appendChild(span[t])
    
                            //Adicionando td ao tr
                            tr[t].appendChild(td[i])
                            tr[t].appendChild(td[i + 1])
    
                            //Adicionando tr ao tbody
                            tbody.appendChild(tr[t])
    
                            j += 3
                            i += 2
                            t++
                        } while (j < element.length);
    
                        //Adicionando tbody ao table
                        table.appendChild(tbody)
    
                        //Adicinando o table a div
                        div.appendChild(table)
    
                        //Adicionando a div a Row
                        document.getElementById('row-table').appendChild(div)
                    }
                });
        }
    
    