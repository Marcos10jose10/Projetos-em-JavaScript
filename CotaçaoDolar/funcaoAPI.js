let moedaEuro,
    dataEuro,
    euroMax,
    euroMin;

let moedaDolar,
    dataDolar,
    dolarMax,
    dolarMin;

let moedaBtc,
    dataBtc,
    btcMax,
    btcMin;




const url = 'https://economia.awesomeapi.com.br/last/'
const coins = 'USD-BRL,EUR-BRL,BTC-BRL'

fetch(url + coins)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        const dolarReal = data.USDBRL
        const euroReal = data.EURBRL
        const btcReal = data.BTCBRL

        dataDolar = new Date(dolarReal.create_date)
        dataEuro = new Date(euroReal.create_date)
        dataBtc = new Date(btcReal.create_date)

        // pegando variaves para mudar ao da um click no botão
        moedaEuro = euroReal.name
        euroMax = parseFloat(euroReal.high).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })
        euroMin = parseFloat(euroReal.low).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })

        // pegando variaves para mudar ao da um click no botão
        moedaDolar = dolarReal.name
        dolarMax = parseFloat(dolarReal.high).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })
        dolarMin = document.getElementById('minvalue').innerHTML = parseFloat(dolarReal.low).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })

        moedaBtc= btcReal.name
        btcMax = parseFloat(btcReal.high).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })
        btcMin = document.getElementById('minvalue').innerHTML = parseFloat(btcReal.low).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })


        document.getElementById('title').innerHTML = dolarReal.name
        document.getElementById('thisdate').innerHTML = dataDolar.toLocaleString()
        document.getElementById('maxvalue').innerHTML = parseFloat(dolarReal.high).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })
        document.getElementById('minvalue').innerHTML = parseFloat(dolarReal.low).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })

    })





// addEventListener("click", function mudarParaEuro(){
//     document.getElementById('title').innerHTML = moedaEuro
//     document.getElementById('thisdate').innerHTML = dataEuro.toLocaleString()
//     document.getElementById('maxvalue').innerHTML = euroMax.toLocaleString()

function MudarParaEuro() {
    document.getElementById('title').innerHTML = moedaEuro
    document.getElementById('thisdate').innerHTML = dataEuro.toLocaleString()
    document.getElementById('maxvalue').innerHTML = euroMax
    document.getElementById('minvalue').innerHTML = euroMin


}
function MudarParaDolar() {
    document.getElementById('title').innerHTML = moedaDolar
    document.getElementById('thisdate').innerHTML = dataDolar.toLocaleString()
    document.getElementById('maxvalue').innerHTML = dolarMax
    document.getElementById('minvalue').innerHTML = dolarMin


}
function MudarParaBtc() {
    document.getElementById('title').innerHTML = moedaBtc
    document.getElementById('thisdate').innerHTML = dataBtc.toLocaleString()
    document.getElementById('maxvalue').innerHTML = btcMax
    document.getElementById('minvalue').innerHTML = btcMin


}



