import axios from 'axios';

export const validateCookie = (username, token) =>
  axios.post(`api/auth/validateCookie`, { username, token });