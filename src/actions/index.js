// eslint-disable-next-line import/prefer-default-export
export const setFavorite = (payload) => ({ //payload= informacion que vamos a transmitir
  type: 'SET_FAVORITE',
  payload,
}); //guardar elementos en favoritos

export const deleteFavorite = (payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
}); //eliminar elementos en favoritos
