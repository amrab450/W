import { teamsDiv, playersDiv } from './main.ts';

interface Team {
  id: number;
  name: string;
}

interface Player {
  id: number;
  name: string;
}

function displayTeam(team: Team) {
  const teamDiv = document.createElement('div');
  teamDiv.classList.add('team');
  teamDiv.innerHTML = `
    <h2>${team.name}</h2>
    <button onclick="deleteTeam(${(team.id)})">Delete</button>
  `;
  teamsDiv.appendChild(teamDiv);
}

function displayTeams(teams: Team[]) {
  teams.forEach((team) => {
    displayTeam(team);
  });
}

function displayPlayer(player: Player) {
  const playerDiv = document.createElement('div');
  playerDiv.classList.add('player');
  playerDiv.innerHTML = `
    <h2>${player.name}</h2>
    <button onclick="deletePlayer(${(player.id)})">Delete</button>
  `;
  playersDiv.appendChild(playerDiv);
}

function displayPlayers(players: Player[]) {
  players.forEach((player) => {
    displayPlayer(player);
  });
}

export { displayTeam, displayTeams, displayPlayer, displayPlayers };