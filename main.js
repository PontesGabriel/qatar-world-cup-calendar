function createGame(team1, hour, team2) {
  return `
  <li>
     <img src="./assets/icon-${team1}.svg" alt="${team1}} flag" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${team2}.svg" alt="${team2} flag" />
      </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
           ${games}
          </ul>
        </div>
              
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "sunday", createGame("qatar", "13:00", "ecuador")) +
  createCard(
    "21/11",
    "monday",
    createGame("england", "10:00", "iran") +
      createGame("senegal", "13:00", "netherlands") +
      createGame("usa", "16:00", "wales")
  ) +
  createCard(
    "22/11",
    "tuesday",
    createGame("argentina", "07:00", "saudi-arabia") +
      createGame("denmark", "10:00", "tunisia") +
      createGame("mexico", "13:00", "poland") +
      createGame("france", "16:00", "australia")
  )
