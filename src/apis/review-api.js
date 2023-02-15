import axios from '../config/axios';

export const createReview = input => axios.post('/review', input);
export const deleteReview = reivewId => axios.delete(`/review/${reivewId}`);
