import React from 'react';
import AppActions from '../actions/AppActions';

export default (props) => {
  return (
    <div className="answerComponent">
      <div className="answerCheckbox" onClick={AppActions.toggleCheckbox.bind(null, props.answer.uuid)}>
        <span className={`glyphicon glyphicon-${props.checkbox}`}/>
      </div>
      <div className="answerContent">{props.answer.title}</div>
      <div className="clearfix"></div>
    </div>
  );
}