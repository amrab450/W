

// Import API functions from api.ts
import { getTeams, getPlayers } from './api.ts';

// Function to create a new team
export async function createTeam() {
  
  // Get team name from input field
  const teamName = (document.getElementById('team-name') as HTMLInputElement).value;

  try {
   
    // Send POST request to create team
    const response = await fetch('http://localhost:3000/teams', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
      // Send team name in request body
      body: JSON.stringify({ name: teamName }),
    });

    
    // Check if response is OK
    if (!response.ok) {
      // Get error message
      const errorMessage = await response.text();
      // Throw error
      throw new Error(`HTTP error! status: ${response.status} - ${errorMessage}`);
    }

    // Refetch teams to update list
    await getTeams();

    // Log success
    console.log(`Team ${teamName} created successfully`);
  } catch (error) {
    
    // Log error
    console.error('Error creating team:', error);
  }
}

  // Function to create a new player
export async function createPlayer() {
  
  // Get player name from input field
  const playerName = (document.getElementById('player-name') as HTMLInputElement).value;

  try {
   
    // Send POST request to create player
    const response = await fetch('http://localhost:3000/players', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
      // Send player name in request body
      body: JSON.stringify({ name: playerName }),
    });

    // Check if response is OK
    if (!response.ok) {
     
      // Get error message
      const errorMessage = await response.text();
     
      // Throw error
      throw new Error(`HTTP error! status: ${response.status} - ${errorMessage}`);
    }

    // Refetch players to update list
    await getPlayers();

    // Log success
    console.log(`Player ${playerName} created successfully`);
  } catch (error) {
    
    // Log error
    console.error('Error creating player:', error);
  }
}

