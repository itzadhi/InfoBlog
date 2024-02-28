import React, { useReducer } from 'react';
import UserContext from './UserContext';
import userReducer from './userReducer';
import axios from 'axios';
import { toast } from 'react-toastify';

const UserState = (props) => {
  const initialState = {
    loading: false,
    userData: [], //User Data
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const { loading, userData } = state;

  const successToast = (msg) => {
    toast.success(msg, {
      position: 'top-right',
    });
  };

  const errorToast = (msg) => {
    toast.error(`Something went wrong, due to ${msg}`, {
      position: 'top-right',
    });
  };

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  const getData = async () => {
    setLoading();
    try {
      const data = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      dispatch({
        type: 'GET_DATA',
        payload: data?.data,
      });
    } catch (error) {
      console.log(error?.message);
      dispatch({ type: 'ERROR' });
    }
  };

  const addUserData = async (userInfo) => {
    setLoading();
    try {
      const data = await axios.post(
        `https://jsonplaceholder.typicode.com/users`,
        userInfo
      );

      if (data.status === 201) {
        dispatch({
          type: 'ADD_DATA',
          payload: [...userData, data?.data],
        });
        successToast('Successfully created!');
        return true;
      }
    } catch (error) {
      console.log(error?.message);
      errorToast(`Something went wrong, due to ${error?.message}`);
      dispatch({ type: 'ERROR' });
    }
  };

  const updateUserData = async (id, userInfo) => {
    setLoading();
    try {
      const data = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        userInfo
      );

      const userDetails = userData.map((info) => {
        if (info?.id === id) {
          return data?.data;
        }
        return info;
      });
      dispatch({
        type: 'UPDATE_DATA',
        payload: userDetails,
      });
      successToast('Successfully updated!');
      return true;
    } catch (error) {
      console.log(error?.message);
      errorToast(`Something went wrong, due to ${error?.message}`);
      dispatch({ type: 'ERROR' });
    }
  };

  return (
    <UserContext.Provider
      value={{
        loading: loading,
        userData: userData,
        getData,
        addUserData,
        updateUserData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
