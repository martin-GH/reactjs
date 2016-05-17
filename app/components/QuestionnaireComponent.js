import React from 'react';
import AppStore from '../stores/AppStore';
import QuestionComponent from '../components/QuestionComponent';
import StepBackComponent from '../components/StepBackComponent';
import StepForwardComponent from '../components/StepForwardComponent';
import NextComponent from '../components/NextComponent';
import * as DataHelper from '../helper/data';

export default class QuestionnaireComponent extends React.Component {
  constructor(props) {
    super(props);

    this._onChange = this._onChange.bind(this);
    this.state = AppStore.getQuestion();
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(AppStore.getQuestion());
  }

  render() {
    //const uuid = '1574606c-fbde-11e5-b7f0-08002788ba8f';
    //const step = getStep(uuid, this.state.question);
    //const question = getQuestion(step);
    //const answers = getAnswers(step);

    const question = DataHelper.getQuestion(this.state.currentStepData);
    const answers = DataHelper.getAnswers(this.state.currentStepData)

    console.log('>> ', question, answers);

    return (
      <div className="questionnaire">
        <StepBackComponent />
        <QuestionComponent question={question} answers={answers} />
        <StepForwardComponent />
        <NextComponent />
      </div>
    );
  }
}