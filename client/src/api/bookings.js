import axios from "axios";

const API_URL = "http://localhost:5000/api/bookings";

export const getBookings = async (userId) => {
  try {
    const res = await axios.get(`${API_URL}/${userId}`);
    return res.data;
  } catch (err) {
    console.error("Get bookings error:", err);
    throw err;
  }
};

export const createBooking = async (userId, mentor, date, time) => {
  try {
    const res = await axios.post(API_URL, { userId, mentor, date, time });
    return res.data;
  } catch (err) {
    console.error("Create booking error:", err);
    throw err;
  }
};
