import axios from '../config/axios';

export const getProfileUser = profileUserId =>
  axios.get('/users/' + profileUserId);
export const editProfile = formData => axios.patch('/users/profile', formData);
