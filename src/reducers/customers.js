import { handleActions } from 'redux-actions'; 
import { FETCH_CUSTOMERS } from '../constants';

export const customers = handleActions({
    //tomar lo que viene del action payload y generar una copia
    [FETCH_CUSTOMERS]: (state, action) => [...action.payload],
}, []);