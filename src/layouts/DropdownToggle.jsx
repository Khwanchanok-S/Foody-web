import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../components/Avatar';
import useAuth from '../hook/useAuth';
import profileImage from '../assets/blank.png';

export default function DropdownToggle({ onClick }) {
  // const {
  //   authenticatedUser: { profileImage },
  // } = useAuth();
  return (
    <div onClick={onClick}>
      <Link className="navbar-brand" to="">
        <Avatar src={profileImage} size="40" />
      </Link>
    </div>
  );
}
