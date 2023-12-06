import React from "react";

export default function DivisionList(props) {
  // array of json objects
  const divisionCards = props.teams.map((divisionCards) => {
    return (
      <div className="card col-auto">
        <div className="card-image" back>
          <img src={divisionCards.image} alt={divisionCards.name}></img>
        </div>
        <div className="card-content">
          <div className="card-title">{divisionCards.name}</div>
          <div className="card-description">
            Click to see the teams of {divisionCards.name}
          </div>
        </div>
      </div>
    );
  });

  return <div className="row">{divisionCards}</div>;
}
