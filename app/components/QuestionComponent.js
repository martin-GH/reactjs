import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import AnswerComponent from '../components/AnswerComponent';

class QuestionComponent extends React.Component {
  render() {
    return (
      <div className="question">
        <HeaderComponent {...this.props} />
        {renderAnswers(this.props)}
      </div>
    );
  }
}

export const renderAnswers = (data) => {
  return data.answers.map((answer) => {
    return (
      <AnswerComponent key={answer.uuid} {...answer} />
    );
  });
}

export default QuestionComponent;