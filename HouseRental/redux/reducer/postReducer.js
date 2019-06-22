import { ADD_ITEM, REMOVE_ITEM } from '../actionCreator';
const initialUserState = {
  arr: []
}

const postReducer = (state = initialUserState, action) => {

  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        arr: [...state.arr, action.payload]
      }
    case REMOVE_ITEM:
      return {
        ...state,
        arr: []
      }
    default:
      return state;
  }
}
export default postReducer;
