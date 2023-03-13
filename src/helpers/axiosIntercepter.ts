import {BACKEND_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosInstance} from 'axios';

let headers = {};

const http: AxiosInstance = axios.create({
  baseURL: BACKEND_URL,
  headers,
});

axios.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('TOKEN');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

export default http;
