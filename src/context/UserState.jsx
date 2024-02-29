import React, { useReducer } from 'react';
import UserContext from './UserContext';
import userReducer from './userReducer';
import axios from 'axios';
import { toast } from 'react-toastify';

const UserState = (props) => {
  const initialState = {
    loading: false, // loading state
    userData: [], //User Data
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const { loading, userData } = state;

  //Success Toast
  const successToast = (msg) => {
    toast.success(msg, {
      position: 'top-right',
    });
  };

  //Error Toast
  const errorToast = (msg) => {
    toast.error(msg, {
      position: 'top-right',
    });
  };

  // const getSessionStorage = () => {
  //   const items = JSON.parse(sessionStorage.getItem('userData'));
  //   console.log('local', items);
  //   if (items) {
  //     dispatch({
  //       type: 'GET_DATA',
  //       payload: items,
  //     });
  //     return true;
  //   }
  //   return false;
  // };

  // const setSessionStorage = (data) => {
  //   sessionStorage.setItem('userData', JSON.stringify(data));
  // };

  //Loading state to set true whenever there is a api call
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  //Get API Call
  const getData = async () => {
    setLoading();
    try {
      const data = await axios.get(
        'https://65df2e51ff5e305f32a1a646.mockapi.io/fakeserver/users'
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

  //Post API Call
  const addUserData = async (userInfo) => {
    setLoading();
    try {
      const data = await axios.post(
        'https://65df2e51ff5e305f32a1a646.mockapi.io/fakeserver/users',
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

  //Put API Call
  const updateUserData = async (id, userInfo) => {
    setLoading();
    try {
      const data = await axios.put(
        `https://65df2e51ff5e305f32a1a646.mockapi.io/fakeserver/users/${id}`,
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

  //Delete API Call
  const deleteUserData = async (id) => {
    setLoading();
    try {
      await axios.delete(
        `https://65df2e51ff5e305f32a1a646.mockapi.io/fakeserver/users/${id}`
      );

      const updateData = userData.filter((item) => item?.id !== id);

      dispatch({
        type: 'DELETE_DATA',
        payload: updateData,
      });

      successToast('Successfully deleted!');
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
        deleteUserData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
