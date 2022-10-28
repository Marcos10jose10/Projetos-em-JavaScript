// as variaveis que vão mostra na tela o tempo
let minuto = document.getElementById('minuto')
let segundo = document.getElementById('segundo')
let hora = document.getElementById('hora') 

// as variaveis para determinar o cronometro
let hh = 0 
let mm = 0 
let ss = 0
let temp;

// pegar a hora para dar a suadação
let saudação = document.getElementById('saudaçao')
let pegarHorario = new Date().getHours() 
pegueiAhorario(pegarHorario)

// para da o play no cronometro
function play(){
    temp = setInterval(() => { tempo(); }, 1000)
    
    document.getElementById('play').disabled = true
    document.getElementById('play').style.opacity = "0.5"
    document.getElementById('stop').style.opacity = "1"
    document.getElementById('reset').style.opacity = "1"
}

//para pausar o cronometro 
function pausar(){
    clearInterval(temp)
    document.getElementById('play').disabled = false
    document.getElementById('play').style.opacity = "1"
    document.getElementById('stop').style.opacity = "0.5"
}

//para resetar o cronometro
function reset(){
    clearInterval(temp)
    hh = 0
    mm = 0
    ss = 0
    
    hora.innerHTML = '00'
    minuto.innerHTML = '00' 
    segundo.innerText = '00'
    
    document.getElementById('play').disabled = false
    document.getElementById('play').style.opacity = "1"
    document.getElementById('reset').style.opacity = "0.5"
}

// para fazer a contagem do cronometro e exibir o resultado 
function tempo(){ 
    ss++
    if(ss == 59){
        
        ss = 00
        mm++
    }
    if(mm == 59){
        mm = 00
        hh++
    }

    let cronometroSS = (ss < 10 ? '0' + ss : ss);
    let cronometroMM = (mm < 10 ? '0' + mm : mm);
    let cronometroHH = (hh < 10 ? '0' + hh : hh);
    
    segundo.innerText = cronometroSS
    minuto.innerText = cronometroMM
    hora.innerText = cronometroHH
}

//função para dar a saudação
function pegueiAhorario(e){
    if(e < 12){saudação.innerHTML = 'Bom Dia!'}
    if(e < 18){saudação.innerHTML = 'Boa Tarde!'}
    if(e < 24){saudação.innerHTML = 'Boa Noite!'}
}   