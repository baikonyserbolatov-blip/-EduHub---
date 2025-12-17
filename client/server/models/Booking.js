import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  mentor: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true }
});

export default mongoose.model("Booking", bookingSchema);
