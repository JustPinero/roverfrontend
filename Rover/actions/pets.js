import axios from 'axios';
import {
  SELECT_PET,
  GET_PETS,
  UPDATE_PETS,
  CREATE_PET,
  REMOVE_PET
} from './types';


const getAll = pets => ({ type: GET_PETS, pets });
const create = pet => ({ type: CREATE_PET, pet });
const remove = id => ({ type: REMOVE_PET, id });
const update = pet => ({ type: UPDATE_PET, pet });

export const selectPet= (pet)=>{
  return {type:SELECT_PET, payload:pet };
};
export const updatePets= (pets)=>{
  return {type:UPDATE_PETS, payload:pets };
};
export const fetchPets = () => dispatch => {
    axios.get('http://localhost:1337/rover/pets')
        .then(res => dispatch(getAll(res.data)))
        .catch(err => console.error('Fetching pets unsuccessful', err));
};
