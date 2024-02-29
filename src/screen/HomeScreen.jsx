import React, { useContext, useEffect } from 'react';
import CardComponent from '../components/CardComponent';
import UserContext from '../context/UserContext';

function HomeScreen() {
  const userContext = useContext(UserContext);

  const { userData, getData, deleteUserData } = userContext;

  useEffect(() => {
    //Gets the initial data from api in context
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='row'>
      {userData?.length > 0 &&
        userData?.map((item) => (
          <CardComponent
            key={item?.id}
            user={item}
            deleteUserData={deleteUserData} //delete api call
          />
        ))}
    </div>
  );
}

export default HomeScreen;
