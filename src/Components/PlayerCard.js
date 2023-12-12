import React, { useState } from 'react';

function PlayerCard({ players }) {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handlePlayerChange = (event) => {
    const selectedPlayerId = event.target.value;
    const selectedPlayer = players.find(player => player.Player === selectedPlayerId);
    setSelectedPlayer(selectedPlayer);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const renderStatsTable = (player) => {
    return (
      <table>
        <tbody>
          {Object.entries(player).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>
                {typeof value === 'object' ? (
                  key !== "Fantasy" ? (
                    <table>
                      <tbody>
                        {value[0] && Object.entries(value[0]).map(([nestedKey, nestedValue]) => (
                          <tr key={nestedKey}>
                            <td>{nestedKey}</td>
                            <td>
                              {typeof nestedValue === 'object' ? (
                                JSON.stringify(nestedValue)
                              ) : (
                                nestedValue
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : JSON.stringify(value[0])
                ) : (
                  value
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
      
    const filteredPlayers = players.filter(player =>
    player.Player.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="player-card">
      <div>
        <label>Search for a Player:</label>
        <input
          id="playerSearch"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {filteredPlayers.length > 0 && (
        <div>
          <label>Select a Player:</label>
          <select id="playerDropdown" onChange={handlePlayerChange}>
            <option value="">Select a player</option>
            {filteredPlayers.map(player => (
              <option key={player.Player} value={player.Player}>{player.Player}</option>
            ))}
          </select>
        </div>
      )}

      {selectedPlayer && (
        <div className="player-profile">
          {renderStatsTable(selectedPlayer)}
        </div>
      )}
    </div>
  );
}

export default PlayerCard;
