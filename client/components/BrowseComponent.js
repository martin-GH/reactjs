import React from 'react';

export default (props) => {
  return (
    <div className={`browseComponent ${props.disabled}`} onClick={props.handler}>
      <div className="browseIcon text-center">
        <span className={`glyphicon glyphicon-chevron-${props.icon}`} />
      </div>
    </div>
  );
};