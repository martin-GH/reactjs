import React from 'react';

class AnswerComponent extends React.Component {
  render() {
    return (
      <div className="answer">
        <div className="answerCheckbox">
          <input type="checkbox"/>
        </div>
        <div className="answerContent">{this.props.title}</div>
        <div className="clearfix"></div>
      </div>

    );
  }
}

export default AnswerComponent;