import React, { useContext, useEffect } from 'react';
import CardComponent from '../components/CardComponent';
import UserContext from '../context/UserContext';
import CardsSkeleton from '../components/CardsSkeleton';

function HomeScreen() {
  const userContext = useContext(UserContext);

  //userData is where we colleect all the data from api
  const { userData, getData, deleteUserData } = userContext;

  useEffect(() => {
    //Gets the initial data from api in context
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='row'>
      {userData?.length === 0 ? (
        <CardsSkeleton count={8} />
      ) : (
        userData?.map((item) => (
          <CardComponent
            key={item?.id}
            user={item}
            deleteUserData={deleteUserData} //delete api call
          />
        ))
      )}
    </div>
  );
}

export default HomeScreen;
