import axios from 'axios';
import {
  SELECT_VET,
  GET_VETS,
  UPDATE_VETS,
  CREATE_VET,
  REMOVE_VET
} from './types';


const getAll = vets => ({ type: GET_VETS, vets });
const create = vet => ({ type: CREATE_VET, vet });
const remove = id => ({ type: REMOVE_VET, id });
const update = vet => ({ type: UPDATE_VET, vet });

export const selectVet= (vet)=>{
  return {type:SELECT_VET, payload:vet };
};
export const updateVets= (vets)=>{
  return {type:UPDATE_VETS, payload:vets };
};
export const fetchVets = () => dispatch => {
    axios.get('http://localhost:1337/rover/vets')
        .then(res => dispatch(getAll(res.data)))
        .catch(err => console.error('Fetching vets unsuccessful', err));
};
