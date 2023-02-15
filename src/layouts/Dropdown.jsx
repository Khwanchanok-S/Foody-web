import React from 'react';
import DropdownMenu from './DropdownMenu';
import DropdownToggle from './DropdownToggle';

export default function Dropdown() {
  return (
    <div className="flex justify-content-end">
      <div className="dropdown">
        <DropdownToggle />
        {/* <DropdownMenu /> */}
      </div>
    </div>
  );
}
