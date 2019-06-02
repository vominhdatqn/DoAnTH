
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export  const showLocation = () => ({
  type:TOGGLE_MODAL
});

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = json => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload:json
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload:error
});

export const fetchHouses = () => {
    return async dispatch => {
      dispatch(fetchProductsBegin());
      try {
        let response = await fetch("http://192.168.1.28:3001/api/houses");
        let json = await response.json();
        dispatch(fetchProductsSuccess(json.houses));
      } catch (error) {
        dispatch(fetchProductsFailure(error));
      }
    };
  }
  