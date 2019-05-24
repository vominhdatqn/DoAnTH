import {
    TOGGLE_MODAL
  } from '../actionCreator';
const defaultState = {
    isVisible:false,
   
}
const modalReducer = (state = defaultState,action) => {
    switch(action.type){
        case TOGGLE_MODAL : return {
            isVisible:!state.isVisible
        };
        default: 
        return state;
    }
}
export default modalReducer;