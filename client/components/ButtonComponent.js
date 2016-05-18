import React from 'react';

export default (props) => {
  return (
    <div className="col-sm-12">
      <div className="buttonComponent">
        <button onClick={props.handler} className="btn btn-warning">Next</button>
      </div>
    </div>
  );
}