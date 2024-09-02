
 
 
 const teamsDiv = document.getElementById('team');
const playersDiv = document.getElementById('players');

if (teamsDiv && playersDiv) {
  async function getTeams() {
    console.log("getting teams....")
    const response = await fetch('http://localhost:3000/teams', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const teams = await response.json();
    console.log("teams from the GET request:", teams)
    displayTeams(teams);
  }

  async function getPlayers() {
    try {
      const response = await fetch('http://localhost:3000/players', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const players = await response.json();
      displayPlayers(players);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  }

  function displayTeam(team) {
    const teamDiv = document.createElement('div');
    teamDiv.classList.add('team');
    teamDiv.innerHTML = `
      <h2>${team.name}</h2>
      <button onclick="deleteTeam(${team.id})">Delete</button>
    `;
    teamsDiv.appendChild(teamDiv);
  }

  function displayTeams(teams) {
    teams.forEach((team) => {
      displayTeam(team);
    });
  }

  function displayPlayer(player) {
    const playerDiv = document.createElement('div');
    playerDiv.classList.add('player');
    playerDiv.innerHTML = `
      <h2>${player.name}</h2>
      <button onclick="deletePlayer${player.id}">Delete</button>
    `;
    playersDiv.appendChild(playerDiv);
  }

  function displayPlayers(players) {
    players.forEach((player) => {
      displayPlayer(player);
    });
  }

  async function deleteTeam(id) {
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

  async function deletePlayer(id) {
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

  async function createTeam() {
    const teamName = document.getElementById('team-name').value;
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

  async function createPlayer() {
    const playerName = document.getElementById('player-name').value;
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

  document.getElementById('create-team-btn').addEventListener('click', createTeam);
  document.getElementById('create-player-btn').addEventListener('click', createPlayer);

  getTeams();
  getPlayers();
}
