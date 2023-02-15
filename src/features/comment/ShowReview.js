import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../config/axios';
import useAuth from '../../hook/useAuth';
import Avatar from '../../components/Avatar';

export default function ShowReview() {
  const [showReview, setShowReview] = useState([]);
  const { restaurantId } = useParams();
  const authenticatedUser = useAuth();
  console.log(authenticatedUser);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(`/reviews/${restaurantId}`);
      const reviewShow = response.data.review;
      setShowReview(reviewShow);
      console.log(reviewShow);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(showReview);
  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <>
      {showReview?.map(el => {
        return (
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="flex space-y-6 bg-white px-4 py-5 sm:p-6">
              <div>
                <Avatar
                  src={authenticatedUser.profileImage}
                  size="50"
                  borderSize="4"
                  borderColor="white"
                />
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  review
                </label>
                <span>{el.detail}</span>
              </div>
              <div className="">
                <i class="fa-solid fa-pencil"></i>
                <i class="fa-regular fa-trash-can"></i>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
