import React from 'react';

const FormComponent = ({
  userInfo,
  btnName,
  loading,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form className='row g-3 text-start' onSubmit={handleSubmit}>
      <h4 className='mb-3'>Personal Information</h4>
      <div className='col-md-6'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          type='text'
          className='form-control'
          id='name'
          value={userInfo?.name}
          onChange={handleChange}
          required={true}
        />
      </div>
      <div className='col-md-6'>
        <label htmlFor='username' className='form-label'>
          Username
        </label>
        <input
          type='text'
          value={userInfo?.username}
          onChange={handleChange}
          className='form-control'
          id='username'
          required={true}
        />
      </div>
      <div className='col-md-6'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input
          type='email'
          value={userInfo?.email}
          onChange={handleChange}
          className='form-control'
          id='email'
          required={true}
        />
      </div>
      <div className='col-md-6'>
        <label htmlFor='phoneNumber' className='form-label'>
          Phone number
        </label>
        <input
          type='text'
          value={userInfo?.phoneNumber}
          onChange={handleChange}
          className='form-control'
          id='phoneNumber'
          required={true}
        />
      </div>

      <h4 className='mb-2 mt-5'>Address Details</h4>
      <div className='col-md-6'>
        <label htmlFor='street' className='form-label'>
          Street
        </label>
        <input
          value={userInfo?.street}
          onChange={handleChange}
          type='text'
          className='form-control'
          id='street'
          required={true}
        />
      </div>
      <div className='col-md-6'>
        <label htmlFor='suite' className='form-label'>
          Suite
        </label>
        <input
          value={userInfo?.suite}
          onChange={handleChange}
          type='text'
          className='form-control'
          id='suite'
          required={true}
        />
      </div>
      <div className='col-md-3'>
        <label htmlFor='city' className='form-label'>
          City
        </label>
        <input
          value={userInfo?.city}
          onChange={handleChange}
          type='text'
          className='form-control'
          id='city'
          required={true}
        />
      </div>
      <div className='col-md-3'>
        <label htmlFor='zipCode' className='form-label'>
          Zip Code
        </label>
        <input
          type='text'
          value={userInfo?.zipCode}
          onChange={handleChange}
          className='form-control'
          id='zipCode'
          required={true}
        />
      </div>
      <div className='col-md-3'>
        <label htmlFor='latitude' className='form-label'>
          Latitude
        </label>
        <input
          type='text'
          value={userInfo?.latitude}
          onChange={handleChange}
          className='form-control'
          id='latitude'
          required={true}
        />
      </div>
      <div className='col-md-3'>
        <label htmlFor='longitude' className='form-label'>
          Longitude
        </label>
        <input
          type='text'
          value={userInfo?.longitude}
          onChange={handleChange}
          className='form-control'
          id='longitude'
          required={true}
        />
      </div>

      <h4 className='mb-2 mt-5'>Company Details</h4>
      <div className='col-md-6'>
        <label htmlFor='companyName' className='form-label'>
          Company Name
        </label>
        <input
          type='text'
          value={userInfo?.companyName}
          onChange={handleChange}
          className='form-control'
          id='companyName'
          required={true}
        />
      </div>
      <div className='col-md-6'>
        <label htmlFor='website' className='form-label'>
          Website
        </label>
        <input
          value={userInfo?.website}
          onChange={handleChange}
          type='text'
          className='form-control'
          id='website'
          required={true}
        />
      </div>
      <div className='col-md-6'>
        <label htmlFor='catchPhrase' className='form-label'>
          Catch Phrase
        </label>
        <input
          value={userInfo?.catchPhrase}
          onChange={handleChange}
          type='text'
          className='form-control'
          id='catchPhrase'
          required={true}
        />
      </div>
      <div className='col-md-6'>
        <label htmlFor='business' className='form-label'>
          Business
        </label>
        <input
          value={userInfo?.business}
          onChange={handleChange}
          type='text'
          className='form-control'
          id='business'
          required={true}
        />
      </div>

      <div className='col-12 mb-5 mt-4 d-flex justify-content-center'>
        <button disabled={loading} type='submit' className='btn btn-primary'>
          {btnName}
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
