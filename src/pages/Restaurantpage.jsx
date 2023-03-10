import React from 'react';
import ReviewContainer from '../features/comment/ReviewContainer';
import useAuth from '../hook/useAuth';
import ReviewLayout from '../layouts/ReviewLayout';
import Header from '../layouts/Header';
import InformationLayout from '../layouts/InformationLayout';

export default function Restaurantpage() {
  return (
    <>
      <InformationLayout />

      <ReviewContainer />
    </>
  );
}
