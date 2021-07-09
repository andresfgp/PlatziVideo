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
    default:
      return state;

  }
};

export default reducer;
