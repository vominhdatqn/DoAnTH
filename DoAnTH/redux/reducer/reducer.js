import { combineReducers } from 'redux';

import modalReducer from './modalReducer';
import houseReducer from './houseReducer'
  const reducer = combineReducers({
    modalReducer,
    houseReducer
  });
  export default reducer;