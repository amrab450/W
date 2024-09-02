

// Import CSS styles
import './style.css';

// Import API functions
import { getTeams, getPlayers } from './api.ts';



// Get HTML elements
export const teamsDiv = document.getElementById('teams') as HTMLDivElement;
export const playersDiv = document.getElementById('players') as HTMLDivElement;

// Check if elements exist
if (teamsDiv && playersDiv) {
  // Initialize app
  // Fetch and display teams
  getTeams();
  // Fetch and display players
  getPlayers();
}
