import { useEffect, useState } from 'react';
import ReviewLayout from '../../layouts/ReviewLayout';
import ReviewCreateToggle from './ReviewCreateToggle';
import ShowReview from './ShowReview';

export default function ReviewContainer() {
  const [reviews, setReviews] = useState([]);

  return (
    <div className="mx-auto py-10 px-60 max-w-152">
      <div className="mx-2 d-flex flex-colum gap-3">
        {/* <ReviewCreateToggle /> */}
        <ShowReview />
      </div>
    </div>
  );
}
