import axios from '../config/axios';

// const config = {
//   headers: {
//     'Content-Type': 'multipart/form-data',
//   },
// };
export const createRestaurant = formData =>
  axios.post('/restaurants/addRestaurant', formData);
export const updateRestaurant = (restaurantId, formData) =>
  axios.patch(`/restaurants/editRestaurant/${restaurantId}`, formData);
