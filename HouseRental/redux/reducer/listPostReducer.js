import {
  GET_LIST_POST,
  REMOVE_ITEM_POST
} from '../actionCreator';

const initialState = {
  listPost: [],
  loading: false,
  error: false,
};

const listPostReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_LIST_POST:
      return {
        ...state,
        listPost: action.payload
      };
      case REMOVE_ITEM_POST:
      return {
        ...state,
        listPost: state.listPost.filter(item => item.house_id !== action.payload),
      };
    default:

      return state;
  }
}
export default listPostReducer;