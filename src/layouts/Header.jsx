import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

export default function () {
  return (
    <>
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start ">
              <Link className="navbar-brand" to="/">
                <span className="sr-only">Foody</span>

                <i className="fa-solid fa-bowl-food fa-lg "> Foody </i>
              </Link>
            </div>
            <div className=" flex justify-start lg:w-0 lg:flex-1 space-x-4 ...">
              <Link className=" ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent px-4 py-2 text-base font-medium text-black shadow-sm bg-gray-200">
                {' '}
                {/* <DropdownLocation /> */}
                <i className="fa-solid fa-location-dot"> </i>
                Location
              </Link>

              <div>
                <input
                  className=" box-content h-14 w-auto sm:h-10 bg-white "
                  type="text"
                  placeholder="Search..."
                />
                <i className="fa-solid fa-magnifying-glass "></i>
              </div>
            </div>

            {/* <div className="grid grid-cols-3 gap-4">
              {/* <div className="bg-orange-200 text-base text-blue-600"></div> */}
            {/* <div className="... invisible">02</div>
              <Link
                href="#"
                className="nav-link ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm bg-orange-400"
                to="/login"
              >
                <i className="fa-regular fa-circle-user"></i>
                Login
              </Link>
            </div> */}

            <div className="grid grid-cols-3 gap-4">
              <Dropdown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
