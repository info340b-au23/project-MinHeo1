import React, {useState} from 'react';
import _ from 'lodash';

function Sort(props) {
  const headers = ["Rk", "Player", "Tm", "FantPos", "Age", "Fantasy", "FantPt", "PPR", "DKPt", "FDPt", "PosRank"];
  const [isAscending, setAscending] = useState(null);
  const [sortByCriteria, setCriteria] = useState(null);

  const sortedData = _.sortBy(props.data, sortByCriteria);
  if (isAscending !== null && isAscending === false) {
    _.reverse(sortedData);
  }

  const statRows = sortedData.map((jsonObj, index) => (
    <StatRow statObj={jsonObj} key={index}  />
  ));

  const headerMap = headers.map((jsonKey, index) => {
    return (
      <th key={index}>
        <SortButton 
          ascending={sortByCriteria === jsonKey && isAscending}
          name={jsonKey}
          onClick={SortButtonHandler}
        />
      </th>
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

  function SortButtonHandler(event) {
    console.log(event.currentTarget.name);
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
    <button className="btn btn-sm btn-sort" name={props.name} onClick={props.onClick}>
    <span aria-label={`sort by ${props.name}`}>{props.name}</span>
    </button>
  );
}
function StatRow(statObj) {
  const renderStat = (statObj) => {
    return Object.entries(statObj).map(([key, value]) => {
      if (typeof value === 'object') {
        return (
          renderStat(value)
        );
      } else {
        return <td key={key}>{value}</td>;
      }
    });
  };

  return <tr>{renderStat(statObj)}</tr>
}

export default Sort;
