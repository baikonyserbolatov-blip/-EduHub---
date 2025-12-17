import axios from "axios";

const API_URL = "http://localhost:5000/api/courses";

export const getCourses = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (err) {
    console.error("Get courses error:", err);
    throw err;
  }
};

export const getCourseById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
  } catch (err) {
    console.error("Get course by ID error:", err);
    throw err;
  }
};
