const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    {
      name: "Diego Maradona",
      position: "midfielder",
      isCaptain: true,
    },
    {
      name: "Jorge Valdano",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Sergio Batista",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Oscar Ruggeri",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      isCaptain: false,
    }
  ]
};

const teamElement = document.getElementById("team");
const yearElement = document.getElementById("year");
const headCoachElement = document.getElementById("head-coach");
const playerCardsContainer = document.getElementById("player-cards");
const playersDropdown = document.getElementById("players");

teamElement.textContent = footballTeam.team;
yearElement.textContent = footballTeam.year;
headCoachElement.textContent = footballTeam.headCoach;

const displayPlayers = (playersList) => {
  playerCardsContainer.innerHTML = "";

  playersList.forEach(({ name, position, isCaptain }) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "player-card";

    const playerHeading = isCaptain ? `(Captain) ${name}` : name;

    cardDiv.innerHTML = `
      <h2>${playerHeading}</h2>
      <p>Position: ${position}</p>
    `;
    
    playerCardsContainer.appendChild(cardDiv);
  });
};

displayPlayers(footballTeam.players);

playersDropdown.addEventListener("change", (e) => {
  const selectedValue = e.target.value;

  if (selectedValue === "all") {
    displayPlayers(footballTeam.players);
  } else {
    const filteredPlayers = footballTeam.players.filter(
      (player) => player.position === selectedValue
    );
    displayPlayers(filteredPlayers);
  }
});