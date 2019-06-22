import  { GET_TOKEN, SAVE_TOKEN, REMOVE_TOKEN, LOADING, ERROR } from '../actionCreator';

const initialState = {
  token: {},
};

export default (state = initialState, action) =>{
  switch (action.type) {
    case GET_TOKEN:
        return { ...state, token: action.payload };
    case SAVE_TOKEN:
        return { ...state, token: action.payload };
    case REMOVE_TOKEN:
        return { ...state, token: action.payload };
    default:
        return state;
 }
};