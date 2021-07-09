const reducer = (state, action) => {
  switch (action.type) { // evaluar el type
    case 'SET_FAVORITE':
      return {
        ...state, //traer el estado que ya tengo
        myList: [...state.myList.filter((items) => items.id !== action.payload.id), action.payload], //action.payload=objeto que voy a guardar en la lista
      };
    case 'DELETE_FAVORITE':
      return {
        ...state, //traer el estado que ya tengo
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state, //traer el estado que ya tengo
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state, //traer el estado que ya tengo
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state, //traer el estado que ya tengo
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state, //traer el estado que ya tengo
        playing: state.trends.concat(state.originals).find((item) => item.id === Number(action.payload)) || [], // Usa el metodo concat para unir los 2 arrays y luego el metodo find para filtrar.
      };
    default:
      return state;

  }
};

export default reducer;
