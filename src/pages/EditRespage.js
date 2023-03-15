import React, { useRef, useState } from 'react';
import * as restaurantApi from '../apis/restaurant-api';

import Image from '../assets/blank.png';
import { Link, useLocation, useParams } from 'react-router-dom';
import Restaurantpage from './Restaurantpage';

import { toast } from 'react-toastify';
const initialInput = {
  name: '',
  location: '',
  mobile: '',
  information: '',
  categoryId: '',
  profileImage: null,
};

export default function Adminpage() {
  const {
    state: { showPhoto, restaurantId },
  } = useLocation();
  const [input, setInput] = useState(showPhoto);
  // console.log(input.name);
  const [profileImage, setProfileImage] = useState(input.profileImage);

  const inputEl = useRef();
  const handleSubmitForm = async e => {
    e.preventDefault();
    try {
      const formData = new FormData();
      console.log('88888888 ---> ', input);
      formData.append('name', input.name);
      formData.append('location', input.location);
      formData.append('mobile', input.mobile);
      formData.append('information', input.information);
      formData.append('categoryId', input.categoryId);
      if (profileImage) {
        formData.append('profileImage', profileImage);
      }
      console.log('3333333333333333333333333');
      await restaurantApi.updateRestaurant(restaurantId, formData);
      console.log('8888888888888888888');
      setInput(initialInput);
      setProfileImage(null);
      toast.success('Update restaurant successfully');
    } catch (err) {
      toast.error('Failed to update restaurant');
    } finally {
    }
  };

  const handleChangeInput = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="py-4 px-8">
        <div className="flex justify-end">
          <Link to="/">
            <button className=" border-none rounded  bg-zinc-400 w-40">
              Back to homepage
            </button>
          </Link>
        </div>

        <div className="w-full h-full py-20 px-80">
          <div className="  bg-orange-400  border rounded-lg w-full h-full flex  justify-center">
            <div className="w-full px-48">
              <div className="flex justify-center"> Edit restaurant</div>
              <form onSubmit={handleSubmitForm}>
                <div>
                  <div className="mb-6">
                    <label
                      for="name"
                      className="block  text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      name="name"
                      value={input.name}
                      onChange={handleChangeInput}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="location"
                      className="block  text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Location
                    </label>
                    <input
                      name="location"
                      value={input.location}
                      onChange={handleChangeInput}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="categoryId"
                      className="block  text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Category
                    </label>
                    <input
                      name="categoryId"
                      value={input.categoryId}
                      onChange={handleChangeInput}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="information"
                      className="block  text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Information
                    </label>
                    <input
                      name="information"
                      value={input.information}
                      onChange={handleChangeInput}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="moblie"
                      className="block  text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Mobile
                    </label>
                    <input
                      name="mobile"
                      value={input.mobile}
                      onChange={handleChangeInput}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="h-full flex col justify-center space-x-2">
                  <div>
                    <input
                      type="file"
                      className="hidden"
                      ref={inputEl}
                      onChange={e => {
                        setProfileImage(e.target.files[0]);
                      }}
                    />

                    <button
                      type="button"
                      className=" border-none rounded  bg-zinc-400 w-40"
                      onClick={() => {
                        console.log('---------->', inputEl.current);
                        inputEl.current.click();
                      }}
                    >
                      Image 1
                    </button>
                  </div>
                </div>

                <div className="flex col justify-center py-4">
                  <img
                    src={
                      //   profileImage ? URL.createObjectURL(profileImage) : Image
                      profileImage ? profileImage : Image
                    }
                    className="w-40 h-40"
                  />
                </div>
                <div>
                  <div className="py-8 space-x-2 flex justify-center">
                    <button
                      type="button"
                      className=" border-none rounded  bg-zinc-400 w-40"
                      onClick={() => {
                        setProfileImage(null);
                        // setImage1(null);
                        // setImage2(null);
                        // setImage3(null);
                        // setImage4(null);

                        inputEl.current.value = null;
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className=" border-none rounded  bg-emerald-500  w-40"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
