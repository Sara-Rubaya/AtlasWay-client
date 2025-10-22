import axios from 'axios';
import { auth } from '../firebase/firebase.init';




const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});



axiosInstance.interceptors.request.use(async (config) => {
  const currentUser = auth.currentUser;
  

  if (currentUser) {
    const token = await currentUser.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

const useAxiosSecure = () => {
  return axiosInstance;
};

export default useAxiosSecure;
