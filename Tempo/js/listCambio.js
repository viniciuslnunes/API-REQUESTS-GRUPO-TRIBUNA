const fetchCambioList = async () => {
    const response = await api()
}
const api = async ()=>{
    fetch(`https://www3.bcb.gov.br/vet/rest/v2/listaPontoCambio?cnpj=00000000`)
    .then(res => res.json())
    .then(data => {
        document.querySelector("#cidade").innerHTML = data.listaPontoCambio[5].cidade
        console.log(data)
    })
}