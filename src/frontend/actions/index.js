import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const setFavorite = (payload) => ({ //payload= informacion que vamos a transmitir
  type: 'SET_FAVORITE',
  payload,
}); //guardar elementos en favoritos

export const deleteFavorite = (payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
}); //eliminar elementos en favoritos

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const getVideoSource = (payload) => ({
  type: 'GET_VIDEO_SOURCE',
  payload,
});

export const getSearchVideo = (payload) => ({
  type: 'GET_SEARCH_VIDEO',
  payload,
});

export const setError = (payload) => ({
  type: 'SET_ERROR',
  payload,
});

export const registerUser = (payload, redirectUrl) => {
  return (dispatch) => {
    axios.post('auth/sing-up', payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch((error) = dispatch(setError(error)));
  };
};
