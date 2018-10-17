import axios from 'axios';
import {
  SELECT_VET,
  GET_VETS,
  UPDATE_VETS,
  CREATE_VET,
  REMOVE_VET
} from '../actions/types';

export default function reducer(vets = [], action) {
  console.log(action);
    switch (action.type) {
      case SELECT_VET:
        return {selectedVet: action.payload};
    case GET_VETS:
        return [...action.vets];
    case CREATE_VET:
        return [action.pet, ...vets];

    case REMOVE_VET:
        return vets.filter(pet => vet.id !== action.id);

    case UPDATE_VETS:
        return [...vets, action.payload];
    default:
        return vets;
      }
}