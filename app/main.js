import React from 'react';
import ReactDOM from 'react-dom';
import QuestionnaireComponent from './components/QuestionnaireComponent';

// static mock data
import { questions } from './mocks/questions';

ReactDOM.render(
  <QuestionnaireComponent questions={questions} />,
  document.getElementById('app')
);