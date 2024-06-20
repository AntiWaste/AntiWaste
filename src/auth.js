// auth.js
import axios from "axios";
export const register = async (credentials) => {
  const response = await axios.post("/register", credentials);
  const { token, user } = response.data;
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  }
  return response.data;
};
export const login = async (credentials) => {
  const response = await axios.post("/login", credentials);
  const { token, user } = response.data;
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  }
  return response.data;
};

export const logout = async () => {
  await axios.post("/auth/logout");
  delete axios.defaults.headers.common["Authorization"];
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const getUser = async () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const response = await axios.get("/auth/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user", error);
    return null;
  }
};
