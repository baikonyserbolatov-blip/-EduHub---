import React from "react";
import Button from "../components/Button";
import "./Booking.css";

const bookings = [
  { mentor: "John Doe", date: "2025-12-20", time: "14:00" },
  { mentor: "Jane Smith", date: "2025-12-22", time: "16:00" },
];

const Booking = () => {
  return (
    <div className="booking-page">
      <h2>Your Bookings</h2>
      <div className="booking-list">
        {bookings.map((b, index) => (
          <div key={index} className="booking-card">
            <h3>{b.mentor}</h3>
            <p>{b.date} at {b.time}</p>
            <Button glow>Cancel</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;
