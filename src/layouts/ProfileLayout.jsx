import Avatar from '../components/Avatar';
import React, { useEffect, useRef, useState } from 'react';
import useAuth from '../hook/useAuth';
import { useParams } from 'react-router-dom';
import * as userApi from '../apis/user-api';

export default function ProfileLayout() {
  const { authenticatedUser, setAuthenticatedUser } = useAuth();
  console.log(authenticatedUser);

  const initialEditInput = {
    firstName: authenticatedUser.firstName,
    lastName: authenticatedUser.lastName,
  };
  const [edit, setEdit] = useState(initialEditInput);
  const [image, setImage] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const inputEl = useRef();
  const { userId } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log('first');
        const response = await userApi.getProfileUser(userId);
        // setAuthenticatedUser(response.data.user);
        setAuthenticatedUser(response.data.user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
    // return () => setIsEdit(false);
  }, [isEdit]);

  useEffect(() => {
    setEdit({
      firstname: authenticatedUser.firstName,
      lastname: authenticatedUser.lastName,
    });
  }, [authenticatedUser]);

  const handleSubmitForm = async e => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('profileImage', image);
      formData.append('firstName', edit.firstName);
      formData.append('lastName', edit.lastName);
      await userApi.editProfile(formData);
      setIsEdit(!isEdit);
    } catch (err) {
      console.log(err?.response?.data?.message);
    }
  };

  const handleChangProfile = e => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="justify-center flex-col  w-full ">
        <div className="flex justify-center">
          <Avatar
            src={
              image
                ? URL.createObjectURL(image)
                : authenticatedUser.profileImage
            }
            size="168"
            borderSize="4"
            borderColor="white"
          />
        </div>

        <div className="my-3 flex-grow-1 d-flex flex col align-items-center d-md-block space-x-2 justify-center">
          <h2 className="fw-bold mb-0 flex justify-center">
            {authenticatedUser.firstName}
          </h2>
          <h2 className="fw-bold mb-0 flex justify-center">
            {authenticatedUser.lastName}
          </h2>
        </div>

        <div className="mb-3 align-self-md-end flex justify-center ">
          <input
            type="file"
            className="hidden"
            ref={inputEl}
            onChange={e => {
              if (e.target.files[0]) {
                setImage(e.target.files[0]);
              }
            }}
          />
          <button
            type="button"
            className="border rounded-md w-40"
            onClick={() => inputEl.current.click()}
          >
            <i className="fa-solid fa-pen" /> Edit Profile
          </button>
        </div>
        <div className="mb-6">
          <label
            for="information"
            className="block  text-sm font-medium text-gray-900 dark:text-white"
          >
            First Name
          </label>
          <input
            name="firstName"
            value={edit.firstName}
            type="text"
            onChange={handleChangProfile}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            for="information"
            className="block  text-sm font-medium text-gray-900 dark:text-white"
          >
            Last Name
          </label>
          <input
            name="lastName"
            value={edit.lastName}
            type="text"
            onChange={handleChangProfile}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        {/* {file && ( */}
        <div className="">
          <button
            className=" border-none rounded  bg-zinc-400 w-28"
            onClick={() => {
              setImage(null);
              inputEl.current.value = null;
            }}
          >
            Cancel
          </button>
          <button
            className=" border-none rounded  bg-emerald-500  w-28"
            type="submit"
          >
            Save
          </button>
        </div>
        {/* )} */}

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
    </form>
  );
}
