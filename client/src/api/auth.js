import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const loginUser = async (email, name) => {
  try {
    const res = await axios.post(`${API_URL}/login`, { email, name });
    return res.data;
  } catch (err) {
    console.error("Login error:", err);
    throw err;
  }
};

export const registerUser = async (email, name) => {
  try {
    const res = await axios.post(`${API_URL}/register`, { email, name });
    return res.data;
  } catch (err) {
    console.error("Register error:", err);
    throw err;
  }
};
