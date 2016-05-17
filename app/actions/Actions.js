import AppDispatcher from '../dispatcher/AppDispatcher';
import { Constants } from '../constants/Constants';
//import { getRandomApi } from '../utils/RandomUserAPI';


export function stepForward() {
  AppDispatcher.handleViewAction({
    actionType: Constants.STEP_FORWARD,
  });
}