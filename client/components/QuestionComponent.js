import React from 'react';
import AnswerComponent from '../components/AnswerComponent';

export default (props) => {
  return (
    <div className="questionComponent">
      <div className="questionTitle">{props.content.question.title}</div>
      <div className="answersContainer">
        {renderAnswers(props.content.answers)}
      </div>
    </div>
  );
}

export const renderAnswers = (answers) => {
  return answers.map((answer) => {
    let state = 'unchecked';

    if (answer.checked) {
      state = 'check';
    }

    return (
      <AnswerComponent key={answer.uuid} checkbox={state} answer={answer} />
    );
  });
}