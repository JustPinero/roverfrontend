import {combineReducers} from 'redux';
import pets from './pets';
import vets from './vets';

export default combineReducers(
  {
  pets: pets,
  vets: vets
  }
);