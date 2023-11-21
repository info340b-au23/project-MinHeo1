import React, {useState} from 'react';

import _ from 'lodash';

function Sort(props) {
  const [isAscending, setAscending] = useState(null);
  const [sortByCriteria, setCriteria] = useState(null);

  const sortedData = _.sortBy(props.data, sortByCriteria);
  if ((isAscending !== null && isAscending === false)) {
    _.reverse(sortedData);
  }

  const headers = Object.keys(props.data[0]);
  const statRows = props.data.map((jsonObj, index) => {
  return <tr><StatRow statObj={jsonObj} key={index} /></tr>
 })

  const headerMap = headers.map((jsonKey, index) => {
    console.log(jsonKey);
    return (
      <>
        <th>
          <SortButton 
            onClick={SortButtonHanler}
            key={index}
            header={jsonKey}
            ascending={sortByCriteria === jsonKey.Player && isAscending}
          />
        </th>
      </>
    );
  })

  return (
    <>
      <table>
        <thead>
          <tr>
            {headerMap}
          </tr>
        </thead>
          <tbody>
            {statRows}
          </tbody>
      </table>
    </>
  );

  function SortButtonHanler(event) {
    const clickedButtonName = event.currentTarget.name;
    if (clickedButtonName !== sortByCriteria) {
      setCriteria(clickedButtonName);
      setAscending(true);
    } else if (isAscending) {
      setAscending(!isAscending);
    } else {
      setCriteria(null);
      setAscending(null);
    }
  }
}

function SortButton(props) {
  return (
    <button className="btn btn-sm btn-sort" name={props.header} onClick={props.onClick}>
    <span aria-label={`sort by ${props.header}`}>{props.header}</span>
    </button>
  );
}

// function StatRow(statObj) {
//   const statArray = [];
//   for (const stat in statObj) {
//     statArray.push(<td key={stat}>{statObj[stat]}</td>);
//   }
//   return statArray;
// }

function StatRow(statObj) {
  const renderStat = (statObj) => {
    return Object.entries(statObj).map(([key, value]) => {
      if (typeof value === 'object') {
        // If the value is an object, recursively render its contents
        return (
          renderStat(value)
        );
      } else {
        // If the value is not an object, render a single <td>
        return <td key={key}>{value}</td>;
      }
    });
  };

  return renderStat(statObj);
}



// return (
//   <table>
//     <thead>
//       <tr>
//         <th onClick={() => handleSort('rank')}>Rank</th>
//         <th onClick={() => handleSort('player')}>Player</th>
//         <th onClick={() => handleSort('team')}>Tm</th>
//         <th onClick={() => handleSort('position')}>FantPos</th>
//         <th onClick={() => handleSort('age')}>Age</th>
//         <th onClick={() => handleSort('Passing Completion')}>PassingCmp</th>
//         <th onClick={() => handleSort('Passing Attempted')}>PassingAtt</th>
//         <th onClick={() => handleSort('Passing Yards')}>PassingYds</th>
//         <th onClick={() => handleSort('Passing Touchdown')}>PassingTD</th>
//         <th onClick={() => handleSort('Passing Interceptions')}>PassingInt</th>
//         <th onClick={() => handleSort('Rushing Attempted')}>RushingAtt</th>
//         <th onClick={() => handleSort('Rushing Yards')}>RushingYds</th>
//         <th onClick={() => handleSort('Rushing Touchdown')}>RushingTD</th>
//         <th onClick={() => handleSort('Receiving Targets')}>ReceivingTgt</th>
//         <th onClick={() => handleSort('Receiving Receptions')}>ReceivingRec</th>
//         <th onClick={() => handleSort('Receiving Yards')}>ReceivingYds</th>
//         <th onClick={() => handleSort('Receiving Touchdowns')}>ReceivingTD</th>
//         <th onClick={() => handleSort('Fumbles')}>Fumbles</th>
//         <th onClick={() => handleSort('Fumbles Lost')}>FumblesLost</th>
//         <th onClick={() => handleSort('Scoring Touchdowns')}>ScoringTD</th>
//         <th onClick={() => handleSort('Fantasy Points')}>FantasyPts</th>
//         <th onClick={() => handleSort('Fantasy PPR')}>FantasyPPR</th>
//         <th onClick={() => handleSort('Fantasy VBD')}>FantasyVBD</th>
//         <th onClick={() => handleSort('Fantasy DKPt')}>FantasyDKPt</th>
//         <th onClick={() => handleSort('Fantasy FDPt')}>FantasyFDPt</th>
//         <th onClick={() => handleSort('Fantasy VBD')}>FantasyVBD</th>
//         <th onClick={() => handleSort('Fantasy Position Rank')}>Position Rank</th>
//         <th onClick={() => handleSort('Fantasy Overall Rank')}>Overall Rank</th>
//       </tr>
//     </thead>
//     <tbody>
//       {sorted.map((value, index) => (
//         <tr key={index}>
//           <td>{value.rank}</td>
//           {/* add more depending on value. just do <td>{value.___}</td>. need dataset to add to it */}
//         </tr>
//       ))}
//     </tbody>
//   </table>
// );


// const sorted = [...props.data].sort((a, b) => {
//   if (startSort.direction === 'ascending') {
//     return a[startSort.key] > b[startSort.key] ? 1 : -1;
//   } else {
//     return a[startSort.key] < b[startSort.key] ? 1 : -1;
//   }
// });

// const handleSort = (key) => {
//   let direction = 'ascending';
//   if (startSort.key === key && startSort.direction === 'ascending') {
//     direction = 'descending';
//   }
//   setSort({key, direction});
// };  

export default Sort;
