

import { displayTeams, displayPlayers } from './display.ts';

interface Team {
  id: number;
  name: string;
}

interface Player {
  id: number;
  name: string;
}

export async function getTeams() {
  try {
    const response = await fetch('http://localhost:3000/teams', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const teams: Team[] = await response.json();
    displayTeams(teams);
  } catch (error) {
    console.error('Error fetching teams:', error);
  }
}

export async function getPlayers() {
    try {
      const response = await fetch('http://localhost:3000/players', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const players: Player[] = await response.json();
      displayPlayers(players); // Call displayPlayers instead of displayPlayer
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  }
export async function deleteTeam(id: number) {
  try {
    const response = await fetch(`http://localhost:3000/teams/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`HTTP error! status: ${response.status} - ${errorMessage}`);
    }
    await getTeams();
    console.log(`Team ${id} deleted successfully`);
  } catch (error) {
    console.error('Error deleting team:', error);
  }
}

export async function deletePlayer(id: number) {
  try {
    const response = await fetch(`http://localhost:3000/players/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`HTTP error! status: ${response.status} - ${errorMessage}`);
    }
    await getPlayers();
    console.log(`Player ${id} deleted successfully`);
  } catch (error) {
    console.error('Error deleting player:', error);
  }
}

