import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../config/axios';
import useAuth from '../../hook/useAuth';
import Avatar from '../../components/Avatar';
import ReviewLayout from '../../layouts/ReviewLayout';

export default function ShowReview() {
  const [showReview, setShowReview] = useState([]);
  console.log('show review -------> ', showReview);
  const { restaurantId } = useParams();
  const { authenticatedUser } = useAuth();
  console.log(authenticatedUser);
  const [openEdit, setOpenEdit] = useState(false);
  const [title, setTitle] = useState({});
  const [isUpdateReview, setIsUpdateReview] = useState(false);

  const { reviewId } = useParams();
  console.log(reviewId);
  useEffect(() => {
    console.log('11111111111111111');
    fetchReviews();
    setIsUpdateReview(false);
  }, [isUpdateReview]);

  console.log(showReview);

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
  const handleDeleteReview = async reviewId => {
    try {
      await axios.delete(`/reviews/${reviewId}`);
      fetchReviews();
    } catch (err) {
      console.log(err);
    }
  };
  const handleEditReview = async reviewId => {
    if (openEdit !== false) {
      setOpenEdit(false);
    } else {
      setOpenEdit(reviewId);
    }
  };

  const handleChangeReview = async (reviewId, e) => {
    e.preventDefault();
    console.log('hereeeeeeeeeeee reviewId', reviewId);
    try {
      const event = await axios.patch(`/reviews/${reviewId}`, {
        detail: title,
      });
      // setTitle({ ...title, detail: event.target.value });
      setShowReview(event.data.event);
      setIsUpdateReview(true);
      setOpenEdit(false);
    } catch (err) {
      console.log(err);
    }
  };
  // const handleSubmitForm = async event => {
  //   event.preventDefault();
  //   console.log(title);
  //   try {
  //     const response = await axios.post(`/reviews/${restaurantId}`, {
  //       detail: title,
  //     });
  //     setShowReview([...showReview, response.data.review]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setTitle('');
  // };

  //ถ้าเกิดการเปลี่นเเปลงให้ เอาข้อมูลออกมา

  // useEffect(() => {
  //   console.log('11111111111111111');
  //   fetchReviews();
  //   setIsUpdateReview(false);
  // }, [isUpdateReview]);
  return (
    <>
      <div className="px-10 h-full space-y-4">
        <h1 className="p text-xl">Review</h1>
        {showReview?.map(el => {
          return (
            <>
              <div className="shadow sm:overflow-hidden sm:rounded-md h-full ">
                <div className=" space-y-6 bg-white px-4 py-5 sm:p-6 ">
                  <div>
                    <Avatar
                      src={el.User?.profileImage}
                      size="50"
                      borderSize="4"
                      borderColor="white"
                    />
                    <div className="flex col">
                      <div className="flex col space-x-4">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium text-gray-700 "
                        >
                          {el.User?.firstName}{' '}
                        </label>
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium text-gray-700 "
                        >
                          {el.User?.lastName}
                        </label>
                      </div>
                      {authenticatedUser?.id === el.User?.id ? (
                        <div className="flex justify-end w-full">
                          <div className="">
                            <i
                              type="button"
                              class="fa-solid fa-pencil"
                              onClick={() => handleEditReview(el?.id)}
                            ></i>
                            <i
                              type="button"
                              className="fa-regular fa-trash-can"
                              onClick={() => handleDeleteReview(el?.id)}
                            ></i>
                          </div>
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                    {/* <div className=""><span>{el?.detail}</span></div> */}

                    {openEdit === el.id ? (
                      <form onSubmit={e => handleChangeReview(el?.id, e)}>
                        <div className="flex col w-full">
                          <textarea
                            type="text"
                            name="detail"
                            value={title.detail}
                            className="w-full border border-black "
                            onChange={e => setTitle(e.target.value)}
                          />
                          <button
                            type="submit"
                            className="focus:outline-none text-white bg-blue-300 hover:bg-blue-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                          >
                            ส่ง
                          </button>
                        </div>
                      </form>
                    ) : (
                      <div className="">
                        {' '}
                        <span>{el?.detail}</span>{' '}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          );
        })}
        <ReviewLayout setShowReview={setShowReview} showReview={showReview} />
      </div>
    </>
  );
}
