import { dispatch } from '../dispatcher/AppDispatcher';
import { Constants } from '../constants/Constants';


export default {
  getInitialData(response) {
    dispatch({
      actionType: Constants.INITIALIZE,
      response: response,
    });
  },

  browseBack() {
    dispatch({
      actionType: Constants.BROWSE_BACK,
    });
  },

  browseForward(disabled) {
    if (disabled !== 'disabled') {
      dispatch({
        actionType: Constants.BROWSE_FORWARD,
      });
    }
  },

  toggleCheckbox(value) {
    dispatch({
      actionType: Constants.TOGGLE_CHECKBOX,
      value: value,
    });
  },

  submitAnswers() {
    dispatch({
      actionType: Constants.SUBMIT_ANSWERS,
    });
  },

  restartQuestionnaire() {
    dispatch({
      actionType: Constants.RESTART_QUESTIONNAIRE,
    });
  }
}