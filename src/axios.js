// src/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // Adjust as per your backend API URL
  withCredentials: true, // This is important for CSRF
});

// Interceptor to add Authorization header
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // Add CSRF token from localStorage or cookie
    const csrfToken = localStorage.getItem("csrf_token"); // Or get from a cookie
    if (csrfToken) {
      config.headers["X-CSRF-TOKEN"] = csrfToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
