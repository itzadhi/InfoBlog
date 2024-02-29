import React, { useContext, useEffect, useState } from 'react';
import FormComponent from '../components/FormComponent';
import { useLocation, useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

function UserScreen() {
  //User Information state
  const [userInfo, setUserInfo] = useState({
    name: '',
    username: '',
    email: '',
    phoneNumber: '',

    street: '',
    suite: '',
    city: '',
    zipCode: '',
    latitude: '',
    longitude: '',

    companyName: '',
    website: '',
    catchPhrase: '',
    business: '',
  });

  //Button name whether is add or update based on pathname
  const [btnName, setBtnName] = useState('Add');

  const userContext = useContext(UserContext);

  const { loading, addUserData, updateUserData } = userContext;

  let { state, pathname } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    //Updating the userInfo based upon the pathname
    if (state && pathname !== '/add') {
      //if it is edit pathname
      //Via route state for the edit pathname alone,
      //we sent all the user details
      setUserInfo({
        name: state?.name,
        username: state?.username,
        email: state?.email,

        street: state?.address?.street,
        suite: state?.address?.suite,
        city: state?.address?.city,
        zipCode: state?.address?.zipcode,

        latitude: state?.address?.geo?.lat,
        longitude: state?.address?.geo?.lng,

        phoneNumber: state?.phone,
        website: state?.website,

        companyName: state?.company?.name,
        catchPhrase: state?.company?.catchPhrase,
        business: state?.company?.bs,
      });
      setBtnName('Update');
    } else {
      //if it is add pathname
      setUserInfo({
        name: '',
        username: '',
        email: '',
        phoneNumber: '',

        street: '',
        suite: '',
        city: '',
        zipCode: '',
        latitude: '',
        longitude: '',

        companyName: '',
        website: '',
        catchPhrase: '',
        business: '',
      });
      setBtnName('Add');
    }
  }, [state, pathname]);

  //Handles and updates all the input fields onChange event
  //and updates the userInfo state
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  //Creating the new user api call
  const handleAddUser = async () => {
    const reqBody = {
      name: userInfo?.name,
      username: userInfo?.username,
      email: userInfo?.email,
      address: {
        street: userInfo?.street,
        suite: userInfo?.suite,
        city: userInfo?.city,
        zipcode: userInfo?.zipCode,
        geo: {
          lat: userInfo?.latitude,
          lng: userInfo?.longitude,
        },
      },
      phone: userInfo?.phoneNumber,
      website: userInfo?.website,
      company: {
        name: userInfo?.companyName,
        catchPhrase: userInfo?.catchPhrase,
        bs: userInfo?.business,
      },
    };
    const res = await addUserData(reqBody);
    if (res) {
      navigate('/');
    }
  };

  //Updating the user api call
  const handleUpdateUser = async (id) => {
    const reqBody = {
      name: userInfo?.name,
      username: userInfo?.username,
      email: userInfo?.email,
      address: {
        street: userInfo?.street,
        suite: userInfo?.suite,
        city: userInfo?.city,
        zipcode: userInfo?.zipCode,
        geo: {
          lat: userInfo?.latitude,
          lng: userInfo?.longitude,
        },
      },
      phone: userInfo?.phoneNumber,
      website: userInfo?.website,
      company: {
        name: userInfo?.companyName,
        catchPhrase: userInfo?.catchPhrase,
        bs: userInfo?.business,
      },
    };
    const res = await updateUserData(id, reqBody);
    if (res) {
      navigate('/');
    }
  };

  //Submit which one should be called based on pathname
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pathname === `/add`) {
      handleAddUser();
    } else if (state && pathname === `/edit/${state?.id}`) {
      handleUpdateUser(state?.id);
    }
  };

  return (
    <div className='col-md-8 mx-auto my-5'>
      <FormComponent
        userInfo={userInfo}
        btnName={btnName}
        loading={loading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default UserScreen;
