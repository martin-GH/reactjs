import React from 'react';
import AppStore from '../stores/AppStore';
import AppActions from '../actions/AppActions';
import LoaderComponent from '../components/LoaderComponent';
import QuestionComponent from '../components/QuestionComponent';
import BrowseComponent from '../components/BrowseComponent';
import ButtonComponent from '../components/ButtonComponent';
import * as Api from '../utils/ApiUtils';

export default class QuestionnaireComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    Api.getInitialData();
  }

  componentWillMount() {
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(AppStore.getData());
  }

  rawMarkup() {
    return {
      __html: this.state.content.body
    };
  }

  render() {
    let component = <LoaderComponent text="Loading..." />;

    switch (this.state.type) {
      case 'page':
        component = (
            <div>
              <div dangerouslySetInnerHTML={this.rawMarkup()}></div>
              <ButtonComponent
                handler={AppActions.restartQuestionnaire.bind(null)}
                label="nochmal" />
            </div>
        );
        break;

      case 'question':
        component = (
            <div>
              <BrowseComponent
                handler={AppActions.browseBack.bind(null, this.state.browseButtonState.back)}
                disabled={this.state.browseButtonState.back}
                icon="left" />

              <QuestionComponent {...this.state} />

              <BrowseComponent
                handler={AppActions.browseForward.bind(null, this.state.browseButtonState.forward)}
                disabled={this.state.browseButtonState.forward}
                icon="right" />

              <div className="clearfix"></div>

              <ButtonComponent
                handler={AppActions.submitAnswers.bind(null)}
                disabled={this.state.submitButtonState}
                label="weiter" />
          </div>
        );
        break;
    }

    return component;
  }
}