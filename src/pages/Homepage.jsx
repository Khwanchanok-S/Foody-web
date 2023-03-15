import React, { useEffect, useState } from 'react';
import axios from '../config/axios';
import Header from '../layouts/Header';
import { Link } from 'react-router-dom';

export default function Homepage() {
  const [restaurants, setRestaurants] = useState([]);

  console.log(restaurants);

  const fetchRes = async () => {
    try {
      const response = await axios.get('/restaurants');
      const restaurantCovers = response.data.restaurant;
      setRestaurants(restaurantCovers);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchRes();
  }, []);
  return (
    <>
      <div className="">
        <div className="flex justify-center">
          <input
            className=" box-content h-14  sm:h-10 bg-white w-96"
            type="text"
            placeholder="Search..."
          />
          <i className="fa-solid fa-magnifying-glass "></i>
        </div>

        {/* <div className=" flex justify-evenly ">
          <div className="items-center  rounded-full border border-transparent px-10 py-10 text-base font-medium text-white shadow-sm bg-orange-400">
            <Link className="navbar-brand" to="/login">
              ร้านน้องใหม่
            </Link>
          </div>
          <div className="items-center  rounded-full border border-transparent px-10 py-10 text-base font-medium text-white shadow-sm bg-orange-400">
            <Link className="navbar-brand" to="/login">
              {' '}
              ดิลพิเศษ{' '}
            </Link>
          </div>
          <div className="items-center rounded-full border border-transparent px-10 py-10 text-base font-medium text-white shadow-sm bg-orange-400">
            <Link className="navbar-brand" to="/login">
              {' '}
              รีวิว{' '}
            </Link>
          </div>
        </div> */}
      </div>

      <div className="bg-white ">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            <Link className="navbar-brand" to="/restaurant">
              ร้านยอดฮิต
            </Link>
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
            {restaurants.map(el => {
              return (
                <Link to={`/restaurant/${el.id}`}>
                  <div className="group relative">
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                      <img
                        src={el.profileImage}
                        alt="Front of men&#039;s Basic Tee in black."
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>

                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href="#">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            ></span>
                            {el.Category.Name}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{el.name}</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {el.location}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
