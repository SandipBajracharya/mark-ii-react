import axios from 'axios';
import { toast } from 'react-toastify';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userInfo');
      window.location.href = '/sign-in';
      toast.error('Unauthorized action');
    }
    return Promise.reject(error);
  },
);

export default apiClient;
