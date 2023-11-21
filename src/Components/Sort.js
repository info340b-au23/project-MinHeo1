import React, {useState} from 'react';

const Sort = ({data}) => {
  const [startSort, setSort] = useState({key: null, direction: 'ascending'});
  const handleSort = (key) => {
    let direction = 'ascending';
    if (startSort.key === key && startSort.direction === 'ascending') {
      direction = 'descending';
    }
    setSort({key, direction});
  };
}

const sorted = [...data].sort((a, b) => {
  if (startSort.direction === 'ascending') {
    return a[startSort.key] > b[startSort.key] ? 1 : -1;
  } else {
    return a[startSort.key] < b[startSort.key] ? 1 : -1;
  }
});

return (
  <table>
    <thead>
      <tr>
        <th onClick={() => handleSort('rank')}>Rank</th>
        <th onClick={() => handleSort('player')}>Player</th>
        <th onClick={() => handleSort('team')}>Tm</th>
        <th onClick={() => handleSort('position')}>FantPos</th>
        <th onClick={() => handleSort('age')}>Age</th>
        <th onClick={() => handleSort('Passing Completion')}>PassingCmp</th>
        <th onClick={() => handleSort('Passing Attempted')}>PassingAtt</th>
        <th onClick={() => handleSort('Passing Yards')}>PassingYds</th>
        <th onClick={() => handleSort('Passing Touchdown')}>PassingTD</th>
        <th onClick={() => handleSort('Passing Interceptions')}>PassingInt</th>
        <th onClick={() => handleSort('Rushing Attempted')}>RushingAtt</th>
        <th onClick={() => handleSort('Rushing Yards')}>RushingYds</th>
        <th onClick={() => handleSort('Rushing Touchdown')}>RushingTD</th>
        <th onClick={() => handleSort('Receiving Targets')}>ReceivingTgt</th>
        <th onClick={() => handleSort('Receiving Receptions')}>ReceivingRec</th>
        <th onClick={() => handleSort('Receiving Yards')}>ReceivingYds</th>
        <th onClick={() => handleSort('Receiving Touchdowns')}>ReceivingTD</th>
        <th onClick={() => handleSort('Fumbles')}>Fumbles</th>
        <th onClick={() => handleSort('Fumbles Lost')}>FumblesLost</th>
        <th onClick={() => handleSort('Scoring Touchdowns')}>ScoringTD</th>
        <th onClick={() => handleSort('Fantasy Points')}>FantasyPts</th>
        <th onClick={() => handleSort('Fantasy PPR')}>FantasyPPR</th>
        <th onClick={() => handleSort('Fantasy VBD')}>FantasyVBD</th>
        <th onClick={() => handleSort('Fantasy DKPt')}>FantasyDKPt</th>
        <th onClick={() => handleSort('Fantasy FDPt')}>FantasyFDPt</th>
        <th onClick={() => handleSort('Fantasy VBD')}>FantasyVBD</th>
        <th onClick={() => handleSort('Fantasy Position Rank')}>Position Rank</th>
        <th onClick={() => handleSort('Fantasy Overall Rank')}>Overall Rank</th>
      </tr>
    </thead>
    <tbody>
      {sorted.map((value, index) => (
        <tr key={index}>
          <td>{value.rank}</td>
          {/* add more depending on value. just do <td>{value.___}</td>. need dataset to add to it */}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Sort;
