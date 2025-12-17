import News from "../models/News.js";

export const getNews = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
