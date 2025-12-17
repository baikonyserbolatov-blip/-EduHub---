import Booking from "../models/Booking.js";

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.params.userId });
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createBooking = async (req, res) => {
  const { userId, mentor, date, time } = req.body;
  try {
    const booking = new Booking({ userId, mentor, date, time });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
