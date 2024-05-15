import axios from 'axios';
import { PRICE_API_ENDPOINT } from '../constants/api';

export const getCurrency = () => {
  return axios.get(PRICE_API_ENDPOINT);
};