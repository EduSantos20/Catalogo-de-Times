const card = [
  {
    nameTime1: "SÃO PAULO",
    image1: "img/saopaulo.png",
    nameTime2: "CORINTHIANS",
    image2: "img/corinthinas.png",
  },
  {
    nameTime1: "FLAMENFO",
    image1: "img/flamengo.png",
    nameTime2: "GREMIO",
    image2: "img/gremio.png",
  },
]
const cardContainer = document.querySelector(".card_Container")

for (let i = 0; i < card.length; i++) {
  const cards = document.createElement("div")
  cards.classList.add("catalog")
  /**Primeiro card */
  const playerCard = document.createElement("div")
  playerCard.classList.add("team")

  const nameTime = document.createElement("h2")
  nameTime.textContent = card[i].nameTime1

  var img = document.createElement("img")
  img.src = card[i].image1
  img.alt = "Info da imagem"

  const labelGool = document.createElement("label")
  labelGool.classList.add("teamGool")
  labelGool.textContent = `Gols`

  const inputGool = document.createElement("input")
  inputGool.type = "text"
  inputGool.classList.add("input")
  inputGool.placeholder = "0"
  inputGool.id = `gool${card[i]}`

  var Resultado = document.createElement("div")
  Resultado.id = `result${card[i]}`

  var button = document.createElement("button")
  button.type = "button"
  button.textContent = "Vitória"
  button.classList.add("button")
  button.id = "vitoria"
  button.onclick = function vote() {
    var gool = document.getElementById(`gool${card[i]}`).value
    if (gool == 0 || gool === 0) {
      var resultado = document.getElementById(`result${card[i]}`)
      resultado.textContent = `Vitória do ${card[i].nameTime1}`
    } else {
      var resultado = document.getElementById(`result${card[i]}`)
      resultado.textContent = `Vitória do ${card[i].nameTime1} com ${gool} gools!`
    }
    document.getElementById(`gool${card[i]}`).value = " "
  }

  playerCard.appendChild(nameTime)
  playerCard.appendChild(img)
  playerCard.appendChild(labelGool)
  playerCard.appendChild(inputGool)
  playerCard.appendChild(button)

  /**div empate */

  const cardInfo = document.createElement("div")
  cardInfo.classList.add("info")

  var button = document.createElement("button")
  button.type = "button"
  button.textContent = "EMPATE"
  button.classList.add("button")
  button.id = "empate"
  button.onclick = function vote() {
    var resultado = document.getElementById(`result${card[i]}`)
    resultado.textContent = `EMPATE`
  }

  cardInfo.appendChild(Resultado)
  cardInfo.appendChild(button)

  /**Segundo card */
  var playcar = document.createElement("div")
  playcar.classList.add("team")

  const name = document.createElement("h2")
  name.textContent = card[i].nameTime2

  const img1 = document.createElement("img")
  img1.src = card[i].image2
  img1.alt = "Info da imagem"

  const label = document.createElement("label")
  label.classList.add("teamGool")
  label.textContent = `Gols`

  const input = document.createElement("input")
  input.type = "text"
  input.classList.add("input")
  input.placeholder = "0"
  input.id = `gool${card[i]}`

  var Resultado = document.createElement("div")
  Resultado.id = `result${card[i]}`

  var button = document.createElement("button")
  button.type = "button"
  button.textContent = "Vitória"
  button.classList.add("button")
  button.id = "empate"
  button.onclick = function vote1() {
    var gool1 = document.getElementById(`gool${card[i]}`).value
    if (gool1 == 0 || gool1 === 0) {
      var resultado = document.getElementById(`result${card[i]}`)
      resultado.textContent = `Vitória do ${card[i].nameTime2}`
    } else {
      var resultado = document.getElementById(`result${card[i]}`)
      resultado.textContent = `Vitória do ${card[i].nameTime2} com ${gool1} gools!`
    }
    document.getElementById(`gool${card[i]}`).value = " "
  }

  playcar.appendChild(name)
  playcar.appendChild(img1)
  playcar.appendChild(label)
  playcar.appendChild(input)
  playcar.appendChild(button)

  cards.appendChild(playerCard)
  cards.appendChild(cardInfo)
  cards.appendChild(playcar)

  cardContainer.append(cards)
}
