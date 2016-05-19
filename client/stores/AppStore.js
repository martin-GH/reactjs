import { register } from '../dispatcher/AppDispatcher';
import { Constants } from '../constants/constants';
import { EventEmitter } from 'events';
import StoreHelper from '../helper/StoreHelper';

const CHANGE_EVENT = 'change';

const AppStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback){
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },

  getData() {
    return StoreHelper.getData();
  },

  dispatcherIndex: register((action) => {
    switch(action.actionType) {
      case Constants.INITIALIZE:
        StoreHelper.initData(action.response);
        break;

      case Constants.BROWSE_FORWARD:
        StoreHelper.increaseStepIndex();
        StoreHelper.prepareData();
        break;

      case Constants.BROWSE_BACK:
        StoreHelper.decreaseStepIndex();
        StoreHelper.prepareData();
        break;

      case Constants.TOGGLE_CHECKBOX:
        StoreHelper.toggleCheckbox(action.value);
        StoreHelper.initSubmitButtonState();
        StoreHelper.toggleSubmitButtonState();
        break;

      case Constants.SUBMIT_ANSWERS:
        StoreHelper.submitAnswers();
        StoreHelper.prepareData();
        break;

      case Constants.RESTART_QUESTIONNAIRE: {
        StoreHelper.resetStepIndex();
        StoreHelper.prepareData();
      }
    }

    AppStore.emitChange();
  }),
});

export default AppStore;