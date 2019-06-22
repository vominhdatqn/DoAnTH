import { combineReducers } from 'redux';

import houseReducer from './houseReducer';
import tokenReducer from './tokenReducer';
import postReducer from './postReducer';
  const reducer = combineReducers({
    houseReducer,
    tokenReducer,
    postReducer,
  });
  export default reducer;