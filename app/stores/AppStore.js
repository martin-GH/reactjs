import AppDispatcher from '../dispatcher/AppDispatcher';
import { Constants } from '../constants/constants';
import { EventEmitter } from 'events';
import * as DataHelper from '../helper/data';
import { questions } from '../mocks/questions';

const CHANGE_EVENT = 'change';

// Define the store as an empty array
let _store = {
  stepsMap: null,
  currentStepData: null,
  currentStepIndex: 0,
};

class AppStoreClass extends EventEmitter {
  constructor() {
    super();

    _store.stepsMap = DataHelper.getStepsMap(questions);
    _store.currentStepData = DataHelper.getStep(
      _store.stepsMap,
      _store.currentStepIndex
    );
  }

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  getQuestion() {
    return _store;
  }
}

const AppStore = new AppStoreClass();

// Register each of the actions with the dispatcher
// by changing the store's data and emitting a
// change
AppDispatcher.register((payload) => {
  const action = payload.action;

  switch (action.actionType) {

    case Constants.STEP_FORWARD:
      AppStore.emit(CHANGE_EVENT);
      break;

    default:
      return true;
  }
});

export default AppStore;