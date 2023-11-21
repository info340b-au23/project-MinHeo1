import React from 'react';

function TeamInfo({ teamName, coach, foundedYear }) {
  return (
    <div className="team-info">
      <h2>Team Information</h2>
      <p>Team Name: {teamName}</p>
      <p>Coach: {coach}</p>
      <p>Founded Year: {foundedYear}</p>
    </div>
  );
}

export default TeamInfo;
