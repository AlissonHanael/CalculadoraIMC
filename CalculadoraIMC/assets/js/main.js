const pesoString = document.getElementById('peso')
const alturaString = document.getElementById('altura')
const form = document.querySelector('#formulario')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const peso = Number(pesoString.value)
    const altura = Number(alturaString.value)
    calcImc(peso, altura)
})
function setResult(result){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = result
}
function calcImc(peso, altura){
    let imc = peso/((altura/100)**2)
    if(imc<18.5){
        let msg = `<p>Seu imc é ${imc.toFixed(2)}, você está abaixo do peso ideal</p>`
        setResult(msg) 
    }else if(imc>=18.5 && imc<24.9){
        let msg = `<p>Seu imc é ${imc.toFixed(2)}, você está no peso ideal</p>`
        setResult(msg) 
    }else if(imc>=25 && imc<29.9){
        let msg = `<p>Seu imc é ${imc.toFixed(2)}, você está com sobrepeso</p>`
        setResult(msg) 
    }else if(imc>=30 && imc<34.9){
        let msg = `<p>Seu imc é ${imc.toFixed(2)}, você está com obesidade de grau I</p>`
         setResult(msg) 
    }else if(imc>=35 && imc<39.9){
        let msg = `<p>Seu imc é ${imc.toFixed(2)}, você com obesidade de grau II</p>`
        setResult(msg) 
    }else if(imc>=40){
        let msg = `<p>Seu imc é ${imc.toFixed(2)}, vocêcom obesidade de grau III</p>`
        setResult(msg) 
    }
}