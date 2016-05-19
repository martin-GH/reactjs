import React from 'react';

export default (props) => {
  return (
    <div className="loading">
      <span className="glyphicon glyphicon-hourglass" />
      {props.text}
    </div>
  );
};