import React from 'react';
import DropdownLocation from './DropdownLocation';

export default function () {
  return (
    <>
      <div class="relative bg-white">
        <div class="mx-auto max-w-7xl px-6">
          <div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div class="flex justify-start ">
              <a href="#">
                <span class="sr-only">Foody</span>

                <i class="fa-solid fa-bowl-food fa-lg "> Foody </i>
              </a>
            </div>
            <div class=" flex justify-start lg:w-0 lg:flex-1 space-x-4 ...">
              <a
                href="#"
                class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent px-4 py-2 text-base font-medium text-black shadow-sm bg-gray-200"
              >
                {' '}
                {/* <DropdownLocation /> */}
                <i class="fa-solid fa-location-dot"> </i>
                Location
              </a>

              <div>
                <input
                  className=" box-content h-14 w-auto sm:h-10 bg-white "
                  type="text"
                  placeholder="Search..."
                />
                <i class="fa-solid fa-magnifying-glass "></i>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-4">
              {/* <div class="bg-orange-200 text-base text-blue-600"></div> */}
              <div class="... invisible">02</div>
              <a
                href="#"
                class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm bg-orange-400"
              >
                <i class="fa-regular fa-circle-user"></i>
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
