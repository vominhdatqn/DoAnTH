import { GET_PROFILE_SUCCESS, GET_PROFILE_ERROR, GET_PROFILE_BEGIN, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_LOADING } from '../actionCreator';
const initialUserState = {
  profile: [],
  error: '',
  loading: true,
}

const profileReducer = (state = initialUserState, action) => {
  console.log("playload",action.payload)
  switch (action.type) {
    case GET_PROFILE_BEGIN:
      return {
        ...state,
      }
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: [action.payload]
      }
      case UPDATE_PROFILE_LOADING:
        return {
          ...state,
        }
      case UPDATE_PROFILE_SUCCESS:
        return {
          ...state,
          loading: false,
          profile: [action.payload]
        }
      case GET_PROFILE_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}
export default profileReducer;
