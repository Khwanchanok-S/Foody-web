import React, { useRef, useState } from 'react';
import * as restaurantApi from '../apis/restaurant-api';

import Image from '../assets/blank.png';
import { Link } from 'react-router-dom';
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
  const [input, setInput] = useState(initialInput);
  console.log(input);
  const [profileImage, setProfileImage] = useState(null);
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
      formData.append('profileImage', profileImage);
      console.log('3333333333333333333333333');
      await restaurantApi.createRestaurant(formData);
      console.log('8888888888888888888');
      setInput(initialInput);
      setProfileImage(null);
      toast.success('Create restaurant successfully');
    } catch (err) {
      toast.error('Failed to create restaurant');
    } finally {
    }
  };
  // export default function Adminpage() {
  //   const [input, setInput] = useState(initialInput);
  //   const [profileImage, setProfileImage] = useState(null);
  // const [image1, setImage1] = useState(null);
  // const [image2, setImage2] = useState(null);
  // const [image3, setImage3] = useState(null);
  // const [image4, setImage4] = useState(null);

  // const inputEl = useRef();

  // const inputEl2 = useRef();
  // const inputEl3 = useRef();
  // const inputEl4 = useRef();

  // const picArr = [];

  // for (let i = 0; i < 4; i++) {
  //   picArr.push(`'/'${i}`);
  // }

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   try {
  // const formData = new FormData();
  // for (let i = 0; i < 4; i++) {
  //   if (i === 0 && profileImage) {
  //     formData.append('profileImage', profileImage);
  //   } else if (i === 1 && image1) {
  //     formData.append('image1', image1);
  //   } else if (i === 2 && image2) {
  //     formData.append('image2', image2);
  //   } else if (i === 3 && image3) {
  //     formData.append('image3', image3);
  //   }
  // }
  // const formData = new FormData();
  // for (let i in picArr) {
  //   formData.append('photos', picArr[i]);
  // }
  // const handleSubmit = async e => {
  //   try {
  //     e.peventDefault();
  //     const formData = new FormData();
  //     const newFile = file.map(el => el.picture);
  //     if (input) {
  //       // formData.append('input',JSON.stringify(input),
  //       formData.append('Name', input.Name),
  //         formData.append('Location', input.Location),
  //         formData.append('mobile', input.mobile),
  //         formData.append('information', input.information),
  //         formData.append('categoryId', input.categoryId);
  //     }
  //     if (newFile) {
  //       newFile.map(el => formData.append('photos', el));
  //     }

  //     console.log('---------------> Before');
  //     console.log([...formData]);
  //     await restaurantApi.createRestaurant(formData);
  //     console.log('---------------> After');
  //     setInput(initialInput);
  //     // inputEl1.current.value = null;
  //     // inputEl2.current.value = null;
  //     // inputEl3.current.value = null;
  //     // inputEl4.current.value = null;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleChangeInput = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  //   fetch('/:restaurantId', {
  //     method: 'POST',
  //     body: formData,
  //   })
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.error(error));
  // };

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
              <div className="flex justify-center"> Create restaurant</div>
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

                      //   value={email}
                      //   onChange={e => setEmail(e.target.value)}
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

                      //   value={email}
                      //   onChange={e => setEmail(e.target.value)}
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

                      //   value={email}
                      //   onChange={e => setEmail(e.target.value)}
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

                      //   value={email}
                      //   onChange={e => setEmail(e.target.value)}
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

                      //   value={email}
                      //   onChange={e => setEmail(e.target.value)}
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
                      Select Image
                    </button>
                  </div>
                  {/* 
                  <div>
                    <input
                      type="file"
                      className="hidden"
                      ref={inputEl}
                      onChange={e => {
                        if (e.target.files[0]) {
                          setImage2(e.target.files[0]);
                        }
                      }}
                    />
                    <button
                      type="button"
                      className=" border-none rounded  bg-zinc-400 w-40"
                      onClick={() => inputEl1.current.click()}
                    >
                      Image 2
                    </button>
                  </div>

                  <div>
                    <input
                      type="file"
                      className="hidden"
                      ref={inputEl2}
                      onChange={e => {
                        if (e.target.files[0]) {
                          setImage3(e.target.files[0]);
                        }
                      }}
                    />
                    <button
                      type="button"
                      className=" border-none rounded  bg-zinc-400 w-40"
                      onClick={() => inputEl2.current.click()}
                    >
                      Image 3
                    </button>
                  </div>

                  <div>
                    <input
                      type="file"
                      className="hidden"
                      ref={inputEl3}
                      onChange={e => {
                        if (e.target.files[0]) {
                          setImage4(e.target.files[0]);
                        }
                      }}
                    />
                    <button
                      type="button"
                      className=" border-none rounded  bg-zinc-400 w-40"
                      onClick={() => inputEl3.current.click()}
                    >
                      Image 4
                    </button>
                  </div> */}
                </div>

                <div className="flex col justify-center py-4">
                  <img
                    src={
                      profileImage ? URL.createObjectURL(profileImage) : Image
                    }
                    className="w-40 h-40"
                  />
                  {/* <img
                    src={image1 ? URL.createObjectURL(image1) : Image}
                    className="w-40 h-40"
                  />
                  <img
                    src={image2 ? URL.createObjectURL(image2) : Image}
                    className="w-40 h-40"
                  />
                  <img
                    src={image3 ? URL.createObjectURL(image3) : Image}
                    className="w-40 h-40"
                  /> */}
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
