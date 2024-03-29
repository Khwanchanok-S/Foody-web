import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}
