const pesoString = document.getElementById("peso")
const alturaString = document.getElementById("altura")
const form = document.querySelector("#formulario")
const resultado = document.querySelector("#resultado")

function isValid(peso, altura) {
	let validated = true
	resultado.classList.remove("good")
	resultado.classList.remove("bad")
	if (isNaN(peso) || peso === 0) {
		resultado.classList.add("bad")
		resultado.innerHTML = `<p>Digite um peso válido</p>`
		validated = false
	}
	if (isNaN(altura) || altura === 0) {
		resultado.classList.add("bad")
		resultado.innerHTML = `<p>Digite uma altura válida</p>`
		validated = false
	}
	return validated
}

form.addEventListener("submit", (e) => {
	e.preventDefault()
	const peso = Number(pesoString.value)
	const altura = Number(alturaString.value)
	if (!isValid(peso, altura)) return
	const resultadoImc = calcImc(peso, altura)
	setResult(resultadoImc)
})
function setResult(result) {
	resultado.innerHTML = result
	resultado.classList.add("good")
}

function calcImc(peso, altura) {
	let imc = peso / (altura / 100) ** 2
	return verificaImc(imc)
}

function verificaImc(imc) {
	if (imc < 18.5) {
		return `<p>Seu imc é ${imc.toFixed(2)}, você está abaixo do peso ideal</p>`
	}
	if (imc >= 18.5 && imc < 24.9) {
		return `<p>Seu imc é ${imc.toFixed(2)}, você está no peso ideal</p>`
	}
	if (imc >= 25 && imc < 29.9) {
		return `<p>Seu imc é ${imc.toFixed(2)}, você está com sobrepeso</p>`
	}
	if (imc >= 30 && imc < 34.9) {
		return `<p>Seu imc é ${imc.toFixed(2)}, você está com obesidade de grau I</p>`
	}
	if (imc >= 35 && imc < 39.9) {
		return `<p>Seu imc é ${imc.toFixed(2)}, você com obesidade de grau II</p>`
	}
	if (imc >= 40) {
		return `<p>Seu imc é ${imc.toFixed(2)}, vocêcom obesidade de grau III</p>`
	}
}
