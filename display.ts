
// Import teamsDiv and playersDiv from main.ts
import { teamsDiv, playersDiv } from './main.ts';

// Define Team interface
interface Team {
  id: number;
  name: string;
}

// Define Player interface
interface Player {
  id: number;
  name: string;
}

// Function to display a single team
function displayTeam(team: Team) {
  // Create a new div element for the team
  const teamDiv = document.createElement('div');
  // Add CSS class to div
  teamDiv.classList.add('team');
  // Set inner HTML of div to team name and delete button
  teamDiv.innerHTML = `
    <h2>${team.name}</h2>
    <button onclick="deleteTeam(${(team.id)})">Delete</button>
  `;
  // Append team div to teams container
  teamsDiv.appendChild(teamDiv);
}

// Function to display multiple teams
function displayTeams(teams: Team[]) {
  
  // Loop through each team and display it
  teams.forEach((team) => {
    displayTeam(team);
  });
}

// Function to display a single player
function displayPlayer(player: Player) {
  
  // Create a new div element for the player
  const playerDiv = document.createElement('div');
 
  // Add CSS class to div
  playerDiv.classList.add('player');
  
  // Set inner HTML of div to player name and delete button
  playerDiv.innerHTML = `
    <h2>${player.name}</h2>
    <button onclick="deletePlayer(${(player.id)})">Delete</button>
  `;
 
  // Append player div to players container
  playersDiv.appendChild(playerDiv);
}

// Function to display multiple players
function displayPlayers(players: Player[]) {
  
  // Loop through each player and display it
  players.forEach((player) => {
    displayPlayer(player);
  });
}

// Export display functions
export { displayTeam, displayTeams, displayPlayer, displayPlayers };
