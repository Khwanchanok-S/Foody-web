import React from 'react';
import Avatar from '../components/Avatar';

export default function ProfileLayout({
  profileUser: { profileImage, firstName, lastName },
}) {
  return (
    <>
      <div className="justify-center flex-col   ">
        {/* //  align-items-center align-items-md-stretch mx-auto px-3 space-x-4 max-w-266 */}
        <div className="">
          <Avatar
            src={profileImage}
            size="168"
            borderSize="4"
            borderColor="white"
          />
        </div>

        <div className="my-3 flex-grow-1 d-flex flex-column align-items-center d-md-block">
          <h2 className="fw-bold mb-0">
            {firstName}
            {lastName}
          </h2>
        </div>
        {/* <label
          for="firstName"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your name
        </label>
        <input
          type="Text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <label
          for="mobile"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your mobile
        </label>
        <input
          type="mobile"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        /> */}
      </div>
    </>
  );
}
