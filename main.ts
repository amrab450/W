import './style.css';
import { getTeams, getPlayers } from './api.ts';
import { displayTeams, displayPlayers } from './display.ts';
import { createTeam, createPlayer } from './create.ts';

// Get HTML elements
export const teamsDiv = document.getElementById('teams') as HTMLDivElement;
export const playersDiv = document.getElementById('players') as HTMLDivElement;

// Check if elements exist
if (teamsDiv && playersDiv) {
  // Initialize app
  getTeams();
  getPlayers();
}
