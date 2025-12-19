import axios from 'axios';

const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL;

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 saniye
});

// Global response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      // network / timeout
      return Promise.reject(
        new Error('Network error. Check your connection.')
      );
    }

    if (error.response.status === 404) {
      return Promise.reject(
        new Error('Resource not found')
      );
    }

    if (error.response.status >= 500) {
      return Promise.reject(
        new Error('Server error. Please try again later.')
      );
    }

    return Promise.reject(error);
  }
);

