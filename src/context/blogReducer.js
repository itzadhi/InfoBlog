const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return {
        ...state,
        blogData: action.payload,
      };
    default:
      return state;
  }
};

export default blogReducer;
