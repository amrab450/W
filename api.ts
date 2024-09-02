





// Import display functions from display.ts

import { displayTeams, displayPlayers } from './display.ts';

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

// Function to fetch and display teams

export async function getTeams() {
  try {
    // Fetch teams from API
    
    const response = await fetch('http://localhost:3000/teams', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // Parse response as JSON
    
    const teams: Team[] = await response.json();
    
    // Display teams
   
    displayTeams(teams);
  } catch (error) {
   
    // Log error
    
    console.error('Error fetching teams:', error);
  }
}

// Function to fetch and display players

export async function getPlayers() {
  try {
    // Fetch players from API
    const response = await fetch('http://localhost:3000/players', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // Parse response as JSON
    const players: Player[] = await response.json();
    // Display players
    displayPlayers(players); // Call displayPlayers instead of displayPlayer
  } catch (error) {
    // Log error
    console.error('Error fetching players:', error);
  }
}

// Function to delete a team

 export async function deleteTeam(id: number) {
  try {
   
    // Delete team from API
   
    const response = await fetch(`http://localhost:3000/teams/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    // Check if response is OK
    
    if (!response.ok) {
      // Get error message
      const errorMessage = await response.text();
      // Throw error
      throw new Error(`HTTP error! status: ${response.status} - ${errorMessage}`);
    }
    // Refetch teams
   
    await getTeams();
    
    // Log success
    
    console.log(`Team ${id} deleted successfully`);
  } catch (error) {
   
    // Log error
    
    console.error('Error deleting team:', error);
  }
}

 // Function to delete a player

  export async function deletePlayer(id: number) {
  try {
    
    // Delete player from API
   
    const response = await fetch(`http://localhost:3000/players/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    // Check if response is OK
    
    if (!response.ok) {
      
      // Get error message
      const errorMessage = await response.text();
     
      // Throw error
      throw new Error(`HTTP error! status: ${response.status} - ${errorMessage}`);
    }
    // Refetch players
    await getPlayers();
    
    // Log success
    console.log(`Player ${id} deleted successfully`);
  } catch (error) {
    
    // Log error
    console.error('Error deleting player:', error);
  }
}

