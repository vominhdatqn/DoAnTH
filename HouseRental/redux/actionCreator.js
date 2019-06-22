import AsyncStorage from '@react-native-community/async-storage';

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const GET_TOKEN = 'GET_TOKEN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';



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
      // const response = await fetch(`http://192.168.1.252:3001/api/houses?page=${page}&pageSize=${pageSize}`);
      // const response = await fetch(`http://192.168.1.15:3001/api/houses?page=${page}&pageSize=${pageSize}`);
      const response = await fetch(`http://192.168.1.16:3001/api/houses?page=${page}&pageSize=${pageSize}`);
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