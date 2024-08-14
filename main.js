
const body = document.body
const element = document.getElementById("element")
const answerOne = document.getElementById("answerOne")

const colorArray = ["#add8e6", "lightcoral", "lightgreen"]

const randomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length)
}

console.log(colorArray[randomIndex(colorArray)])

body.style.backgroundColor = colorArray[randomIndex(colorArray)]


answerOne.textContent = "Svar: " + "se consol log linje 20"


