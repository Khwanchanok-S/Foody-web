import React from 'react';
import ProfileLayout from '../../layouts/ProfileLayout';
import ProfileAction from './ProfileAction';

export default function ProfilePanel({ profileUser }) {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center align-items-md-stretch mx-auto px-3 space-x-4 max-w-266 ">
      <ProfileLayout profileUser={profileUser} />
    </div>
  );
}
