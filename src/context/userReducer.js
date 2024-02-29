const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'GET_DATA':
      return {
        ...state,
        userData: action.payload,
        loading: false,
      };
    case 'ADD_DATA':
      return {
        ...state,
        userData: action.payload,
        loading: false,
      };
    case 'UPDATE_DATA':
      return {
        ...state,
        userData: action.payload,
        loading: false,
      };
    case 'DELETE_DATA':
      return {
        ...state,
        userData: action.payload,
        loading: false,
      };
    case 'ERROR':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
