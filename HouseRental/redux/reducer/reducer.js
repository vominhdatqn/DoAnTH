import { combineReducers } from 'redux';

import houseReducer from './houseReducer';
import tokenReducer from './tokenReducer';
import postReducer from './postReducer';
import profileReducer from './profileReducer';
import listPostReducer from './listPostReducer';
  const reducer = combineReducers({
    houseReducer,
    tokenReducer,
    postReducer,
    profileReducer,
    listPostReducer,
  });
  export default reducer;