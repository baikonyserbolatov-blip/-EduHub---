import axios from "axios";

const API_URL = "http://localhost:5000/api/news";

export const getNews = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (err) {
    console.error("Get news error:", err);
    throw err;
  }
};
