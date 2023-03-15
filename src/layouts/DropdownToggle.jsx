import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../components/Avatar';
import useAuth from '../hook/useAuth';
import profileImage from '../assets/blank.png';

export default function DropdownToggle({ onClick }) {
  const { authenticatedUser } = useAuth();
  console.log(authenticatedUser);
  return (
    <div onClick={onClick}>
      <Link className="navbar-brand" to={`/profile/${authenticatedUser.id}`}>
        <Avatar src={authenticatedUser.profileImage} size="40" />
      </Link>
    </div>
  );
}

// profile napbar หน้าโฮม
