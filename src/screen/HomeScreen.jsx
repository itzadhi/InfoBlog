import React, { useContext, useEffect, useState } from 'react';
import CardComponent from '../components/CardComponent';
import axios from 'axios';
import UserContext from '../context/UserContext';

function HomeScreen() {
  const userContext = useContext(UserContext);

  const { userData, getData } = userContext;

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='row'>
      {userData?.length > 0 &&
        userData?.map((item) => <CardComponent key={item?.id} user={item} />)}
    </div>
  );
}

export default HomeScreen;
