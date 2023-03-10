import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../config/axios';
import useAuth from '../hook/useAuth';

export default function ReviewLayout({ setShowReview, showReview }) {
  const [title, setTitle] = useState('');
  const { restaurantId } = useParams();

  const handleSubmitForm = async event => {
    event.preventDefault();
    console.log(title);
    try {
      const response = await axios.post(`/reviews/${restaurantId}`, {
        detail: title,
      });
      setShowReview([...showReview, response.data.review]);
    } catch (error) {
      console.log(error);
    }
    setTitle('');
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div className=" flex justify-center md:grid md:grid-cols-1  md:gap-6">
          <h1 className="p text-xl">Review</h1>
          <div className="mt-5 md:col-span-2 md:mt-0">
            {/* <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6"></div>
              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  Comment
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows="3"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="you@example.com"
                  ></textarea>
                </div>
              </div>
            </div> */}{' '}
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className=" bg-white px-4 sm:p-6"></div>
              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  Comment
                </label>
                <div className="mt-1">
                  <textarea
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    rows="3"
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="you@example.com"
                  />
                  <button
                    type="submit"
                    className="focus:outline-none text-white bg-blue-300 hover:bg-blue-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                  >
                    ส่ง
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
