import React, { useReducer } from 'react';
import BlogContext from './BlogContext';
import blogReducer from './blogReducer';

const BlogState = (props) => {
  const initialState = {
    data: [], //Product Data
  };

  const [state, dispatch] = useReducer(blogReducer, initialState);

  return (
    <BlogContext.Provider value={{}}>{props.children}</BlogContext.Provider>
  );
};

export default BlogState;
