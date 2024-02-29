import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../assets/pic.jpg';

function CardComponent({ user, deleteUserData }) {
  const { id, name, username, email, website } = user;

  return (
    <div className='col-md-3 col-12 mb-3 d-flex align-items-stretch justify-content-evenly'>
      <div className='card shadow mt-2 text-start' style={{ width: '18rem' }}>
        <img
          src={pic}
          className='rounded-circle mt-2'
          alt='Cinque Terre'
          style={{ width: '6rem', height: '6rem', alignSelf: 'center' }}
        />
        <div className='card-body'>
          <h5 className='card-title fw-semibold'>
            Name: <span className='d-inline-flex fw-normal'>{name}</span>
          </h5>

          <p className='mb-2 fw-semibold'>
            Username: <span className='fw-normal'>{username}</span>
          </p>
          <p className='mb-2 fw-semibold'>
            Email: <span className='fw-normal'>{email}</span>
          </p>
          <p className='mb-2 fw-semibold'>
            Website: <span className='d-inline-flex fw-normal'>{website}</span>
          </p>
        </div>
        <div className='d-flex justify-content-evenly align-items-center flex-wrap mb-3'>
          <Link to={`/edit/${id}`} state={user}>
            <button className='btn btn-primary m-1'>View/Edit</button>
          </Link>
          <button
            className='btn btn-danger m-1'
            onClick={() => deleteUserData(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
