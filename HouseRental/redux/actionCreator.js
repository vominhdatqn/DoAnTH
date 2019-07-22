import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const GET_TOKEN = 'GET_TOKEN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_BEGIN = 'GET_PROFILE_BEGIN';
export const GET_PROFILE_ERROR = 'GET_PROFILE_ERROR';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const GET_LIST_POST = 'GET_LIST_POST';
export const REMOVE_ITEM_POST = 'REMOVE_ITEM_POST';
export const UPDATE_PROFILE_LOADING = 'UPDATE_PROFILE_LOADING';

export const getProfileBegin = () => ({
  type: GET_PROFILE_BEGIN
});

export const getProfileSuccess = json => ({
  type: GET_PROFILE_SUCCESS,
  payload: json
});

export const getProfileFailure = error => ({
  type: GET_PROFILE_ERROR,
  payload: error
});

export const getProfile = (token) => {
  return async dispatch => {
    dispatch(getProfileBegin());
    try {
      const response = await fetch('https://dat-khoa.herokuapp.com/api/checkToken', { 
       
      method: 'POST',
            headers: {
              'Authorization': 'Bearer ' + token
            }
        })
      const json = await response.json();
      dispatch(getProfileSuccess(json.user));
    } catch (error) {
      dispatch(getProfileFailure(error));
    }
  };
}
export const updateProfileLoading = () => ({
  type: UPDATE_PROFILE_LOADING,
});
export const updateProfileSuccess = data => ({

  type: UPDATE_PROFILE_SUCCESS,
  payload: data
});

export const updateProfile = (editProfile) => {
 
  return async dispatch => {
    dispatch(updateProfileLoading());
    try {
  
        dispatch(updateProfileSuccess(editProfile));
    
    } catch (error) {
      console.log("lỗi edit profile", error);
    }
  };
}

export const getListPostSuccess = (data) => ({
  type: GET_LIST_POST,
  payload: data
});

export const getListPost = (userID) => {
  return async dispatch => {
    try {
      const response = await fetch(`https://dat-khoa.herokuapp.com/listPosts?userID=${userID}`);
      
      const json = await response.json();
      dispatch(getListPostSuccess(json.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export const removeItemListPost = (data) => ({
  type: REMOVE_ITEM_POST,
  payload: data
});
export const removeListPost = (house_id) => {
  console.log("houseid",JSON.stringify({
    house_id
   }));
  return async dispatch => {
    try {
       const response = await fetch(`https://dat-khoa.herokuapp.com/deletePostHouse`, { 
        method: 'POST',
        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
       },
       body: JSON.stringify({
        house_id
       })
      })
    const responseJSON = await response.json();
    console.log(responseJSON);
    
    if (responseJSON.success) {
      dispatch(removeItemListPost(house_id));
    } else {
      console.log("delete error");
    }
    } catch (error) {
      console.log(error);
    }
  };
}


export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = json => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: json
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error
});

export const fetchHouses = (page, pageSize) => {
  
  return async dispatch => {
    dispatch(fetchProductsBegin());
    try {
      const data = {};
      const response = await fetch(`https://dat-khoa.herokuapp.com/api/houses?page=${page}&pageSize=${pageSize}`);
    
      const json = await response.json();
      dispatch(fetchProductsSuccess(json.houses));
    } catch (error) {
      dispatch(fetchProductsFailure(error));
    }
  };
}

export const addItem = json => ({
  type: ADD_ITEM,
  payload: json,
});

export const removeItem = () => ({
  type: REMOVE_ITEM,
});

export const getToken = (token) => ({
  type: GET_TOKEN,
  payload: token,
});

export const saveToken = (token) => ({
  type: SAVE_TOKEN,
  payload: token,
});

export const removeToken = () => ({
  type: REMOVE_TOKEN,
});


export const getUserToken = () => dispatch => 

 AsyncStorage.getItem('token')
        .then((data) => {
            dispatch(getToken(data));
        })
        .catch((err) => {
          console.log(err)
        })



export const saveUserToken = (data) => dispatch =>
    AsyncStorage.setItem('token', data)
        .then((data) => {
            dispatch(saveToken(data));
        })
        .catch((err) => {
          console.log(err)
        })

export const removeUserToken = () => dispatch =>
    AsyncStorage.removeItem('token')
        .then((data) => {
            dispatch(removeToken(data));
        })
        .catch((err) => {
          console.log(err)
        })