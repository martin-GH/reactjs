import { config } from '../configs/application';
import AppActions from '../actions/AppActions';
import request from 'superagent';

export const makeUrl = (path) => config.API + path;

export const getInitialData = () => {
  request.get(makeUrl('get-initial-data'))
    .set('Accept', 'application/json')
    .end((err, response) => {
      if (err) {
        return console.error(err);
      }

      window.setTimeout(() => {
        AppActions.getInitialData(response.body);
      }, 1000);
    });
}