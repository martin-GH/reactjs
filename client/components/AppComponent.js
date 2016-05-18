import React from 'react';
import AppStore from '../stores/AppStore';
import AppActions from '../actions/AppActions';
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

  render() {
    let component;

    switch (this.state.type) {
      case 'page':
        component = (
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <div className="row">
                <BrowseComponent handler={AppActions.browseBack.bind(null)} icon="left" />
                <div className="col-sm-8 page">{this.state.content.body}</div>
                <BrowseComponent handler={AppActions.browseForward.bind(null)} icon="right" />
              </div>
            </div>
          </div>
        );
        break;

      case 'question':
        component = (
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <div className="row">
                <BrowseComponent handler={AppActions.browseBack.bind(null)} icon="left" />
                <QuestionComponent {...this.state} />
                <BrowseComponent handler={AppActions.browseForward.bind(null)} icon="right" />
              </div>
              <div className="row">
                <ButtonComponent handler={AppActions.submitAnswers.bind(null)} />
              </div>
            </div>
          </div>
        );
        break;

      default:
        component = (
          <div>Loading ...</div>
        );
    }

    return component;
  }
}