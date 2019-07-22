import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from '../actionCreator';

const initialState = {
  house: [],
  loading: false,
  error: null
};

const houseReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PRODUCTS_BEGIN:
    
      return {
        ...state,
        loading: true,
      };

    case FETCH_PRODUCTS_SUCCESS:
     
      return {
        ...state,
        loading: false,
        house: state.house.concat(action.payload)
        // [...state.house, action.payload]
      };

    case FETCH_PRODUCTS_FAILURE:
  
      return {
        ...state,
        loading: true,
        error: action.payload,
      };

    default:

      return state;
  }
}
export default houseReducer;