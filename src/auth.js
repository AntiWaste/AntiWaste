// auth.js
import axios from "axios";
import { API_BASE_URL } from "./config"; // Adjust the path as per your project structure

// Function to register a user
export const register = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, credentials);
    const { token, user } = response.data;
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    }
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error; // Handle the error appropriately in your application
  }
};

// Function to login a user
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    const { token, user } = response.data;
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    }
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error; // Handle the error appropriately in your application
  }
};

// Function to log out a user
export const logout = async () => {
  try {
    await axios.post(`${API_BASE_URL}/auth/logout`);
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  } catch (error) {
    console.error("Error logging out:", error);
    throw error; // Handle the error appropriately in your application
  }
};

// Function to get current user information
export const getUser = async () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const response = await axios.get(`${API_BASE_URL}/auth/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw error; // Handle the error appropriately in your application
  }
};
