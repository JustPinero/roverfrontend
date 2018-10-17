import axios from 'axios';
import {
  SELECT_PET,
  GET_PETS,
  UPDATE_PETS,
  CREATE_PET,
  REMOVE_PET
} from '../actions/types';

export default function reducer(pets = [], action) {
  console.log(action);
    switch (action.type) {
      case SELECT_PET:
        return {selectedPet: action.payload};
    case GET_PETS:
        return [...action.pets];
    case CREATE_PET:
        return [action.pet, ...pets];

    case REMOVE_PET:
        return pets.filter(pet => pet.id !== action.id);

    case UPDATE_PETS:
        return [...pets, action.payload];
    default:
        return pets;
      }
}