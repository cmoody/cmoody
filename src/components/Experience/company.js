import React from 'react';

const Company = ({Business, Title, Start, End, Description}) => (
  <div className="vtimeline-point">
    <div className="vtimeline-icon">
      <i className="fa fa-map-marker"></i>
    </div>
    <div className="vtimeline-block">
      <span className="vtimeline-date">{Start} – {End}</span>
      <div data-date="{Start} – {End}" className="vtimeline-content">
        <h3>{Business}</h3>
        <h4>{Title}</h4>
        <p>{Description}</p>
      </div>
    </div>
  </div>
);

export default Company;