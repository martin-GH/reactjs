import React from 'react';

export default (props) => {
  return (
    <div className="col-sm-2 browseComponent" onClick={props.handler}>
      <div className="browseIcon text-center">
        <span className={`glyphicon glyphicon-chevron-${props.icon}`} />
      </div>
    </div>
  );
};