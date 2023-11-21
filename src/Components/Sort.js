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

export default Sort;
