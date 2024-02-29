import React from 'react';
import Skeleton from 'react-loading-skeleton';

function CardSkeleton() {
  return (
    <div className='col-md-3 col-12 mb-3 d-flex align-items-stretch justify-content-evenly'>
      <div className='card shadow mt-2 text-start' style={{ width: '18rem' }}>
        <img
          alt='dummy'
          className='rounded-circle mt-2'
          style={{
            width: '6rem',
            height: '6rem',
            alignSelf: 'center',
            backgroundColor: '#D3D3D3',
          }}
        />
        <div className='card-body'>
          <h5 className='card-title fw-semibold'>
            <Skeleton />
          </h5>

          <p className='mb-2 fw-semibold'>
            <Skeleton />
          </p>
          <p className='mb-2 fw-semibold'>
            <Skeleton />
          </p>
          <p className='mb-2 fw-semibold'>
            <Skeleton />
          </p>
        </div>
        <div className='d-flex justify-content-evenly align-items-center flex-wrap mb-3'></div>
      </div>
    </div>
  );
}

export default CardSkeleton;
