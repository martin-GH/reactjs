import React from 'react';

export default (props) => {
  return (
    <div className="buttonComponent">
      <button
        onClick={props.handler}
        disabled={props.disabled}
        className="btn btn-warning">{props.label}</button>
    </div>
  );
}