/**document.addEventListener("DOMContentLoaded", () => {
  const catalog = document.querySelector(".catalog")

  fetch("players.json")
    .then((response) => response.json())
    .then((data) => {
      data.players.forEach((player) => {
        const playerCard = document.createElement("div")
        playerCard.classList.add("team")

        const nameTime = document.createElement("h2")
        nameTime.textContent = player.nameTime

        const img = document.createElement("img")
        img.src = player.image
        img.alt = player.nameTime

        const labelGool = document.createElement("label")
        labelGool.classList.add("teamGool")
        labelGool.textContent = `Gools`

        const inputGool = document.createElement("input")
        inputGool.type = "text"
        inputGool.classList.add("input")
        inputGool.placeholder = "0"
        inputGool.id = "gool"

        const divResult = document.createElement("div")
        divResult.id = "result"

        const divResultGool = document.createElement("div")
        divResultGool.id = "resultGool"

        const button = document.createElement("button")
        button.type = "button"
        button.textContent = "Vitória"
        button.onclick = function vote() {
          const resultDiv = document.getElementById("result")
          resultDiv.innerHTML = " "
          const resultGoolDiv = document.getElementById("resultGool")
          resultGoolDiv.innerHTML = " "
          var gool = document.getElementById("gool").value
          gool.innerHTML = " "
          if (gool == 0) {
            resultDiv.textContent = `Vitória do ${player.nameTime}`
          } else {
            resultGoolDiv.textContent = `Vitoria do ${player.nameTime} com ${gool} Gools.`
          }
        }

        playerCard.appendChild(nameTime)
        playerCard.appendChild(img)
        playerCard.appendChild(labelGool)
        playerCard.appendChild(inputGool)
        playerCard.appendChild(button)
        playerCard.appendChild(divResult)
        playerCard.appendChild(divResultGool)

        catalog.appendChild(playerCard)
      })
    })
    .catch((error) => console.error("Erro ao carregar os dados:", error))
})**/

players = [
  {
    nameTime: "SÃO PAULO",
    image: "img/saopaulo.png",
    gool: 0,
  },
  {
    nameTime: "CORINTHIANS",
    image: "img/corinthinas.png",
    gool: 0,
  },
]

const lista = document.querySelector(".catalog")

players.forEach((item) => {
  const playerCard = document.createElement("div")
  playerCard.classList.add("team")

  const nameTime = document.createElement("h2")
  nameTime.textContent = item.nameTime

  const img = document.createElement("img")
  img.src = item.image
  img.alt = item.nameTime

  const labelGool = document.createElement("label")
  labelGool.classList.add("teamGool")
  labelGool.textContent = `Gools`

  const inputGool = document.createElement("input")
  inputGool.type = "text"
  inputGool.classList.add("input")
  inputGool.placeholder = item.gool
  inputGool.id = "gool"

  const divResult = document.createElement("div")
  divResult.id = "result"

  const divResultGool = document.createElement("div")
  divResultGool.id = "resultGool"

  const button = document.createElement("button")
  button.type = "button"
  button.textContent = "Vitória"
  button.id = "button"
  button.onclick = function vote() {
    const resultDiv = document.getElementById("result")
    resultDiv.innerHTML = " "
    const resultGoolDiv = document.getElementById("resultGool")
    resultGoolDiv.innerHTML = " "
    var gool = document.getElementById("gool").value
    gool.innerHTML = " "
    if (gool == 0) {
      resultDiv.textContent = `Vitória do ${item.nameTime}`
    } else {
      resultGoolDiv.textContent = `Vitoria do ${item.nameTime} com ${gool} Gools.`
    }
  }

  playerCard.appendChild(nameTime)
  playerCard.appendChild(img)
  playerCard.appendChild(labelGool)
  playerCard.appendChild(inputGool)
  playerCard.appendChild(button)
  playerCard.appendChild(divResult)
  playerCard.appendChild(divResultGool)

  lista.appendChild(playerCard)
})
