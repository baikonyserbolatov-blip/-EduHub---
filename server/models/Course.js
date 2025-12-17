import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  lessons: [
    {
      title: String,
      duration: String
    }
  ]
});

export default mongoose.model("Course", courseSchema);
