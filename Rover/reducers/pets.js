import axios from 'axios';
import {
  SELECT_PET,
  GET_PETS,
  UPDATE_PETS,
  CREATE_PET,
  REMOVE_PET
} from '../actions/types';

export default function reducer(PETS = [], action) {
  console.log(action);
    switch (action.type) {
      case SELECT_PET:
        return {selectedGroup: action.payload};
    case GET_PETS:
        return action.PETS;
    case CREATE_PET:
        return [action.pet, ...PETS];

    case REMOVE_PET:
        return PETS.filter(pet => pet.id !== action.id);

    case UPDATE_PETS:
        return [...PETS, action.payload];
    default:
        return PETS;
      }
}