import React from 'react';
import CardSkeleton from './CardSkeleton';

function CardsSkeleton({ count = 4 }) {
  return (
    <>
      {Array(count)
        .fill(1)
        .map((index) => (
          // render your skeleton here
          <CardSkeleton key={index} />
        ))}
    </>
  );
}

export default CardsSkeleton;
