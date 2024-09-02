import { getTeams, getPlayers } from './api.ts';

export async function createTeam() {
  const teamName = (document.getElementById('team-name') as HTMLInputElement).value;
  try {
    const response = await fetch('http://localhost:3000/teams', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: teamName }),
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`HTTP error! status: ${response.status} - ${errorMessage}`);
    }
    await getTeams();
    console.log(`Team ${teamName} created successfully`);
  } catch (error) {
    console.error('Error creating team:', error);
  }
}

export async function createPlayer() {
  const playerName = (document.getElementById('player-name') as HTMLInputElement).value;
  try {
    const response = await fetch('http://localhost:3000/players', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: playerName }),
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`HTTP error! status: ${response.status} - ${errorMessage}`);
    }
    await getPlayers();
    console.log(`Player ${playerName} created successfully`);
  } catch (error) {
    console.error('Error creating player:', error);
  }
}

