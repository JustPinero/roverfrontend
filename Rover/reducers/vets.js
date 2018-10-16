import axios from 'axios';
import {
  SELECT_VET,
  GET_VETS,
  UPDATE_VETS,
  CREATE_VET,
  REMOVE_VET
} from '../actions/types';

export default function reducer(VETS = [], action) {
  console.log(action);
    switch (action.type) {
      case SELECT_VET:
        return {selectedGroup: action.payload};
    case GET_VETS:
        return action.VETS;
    case CREATE_VET:
        return [action.pet, ...VETS];

    case REMOVE_VET:
        return VETS.filter(pet => pet.id !== action.id);

    case UPDATE_VETS:
        return [...VETS, action.payload];
    default:
        return VETS;
      }
}