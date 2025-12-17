import React from "react";
import Card from "../components/Card";
import "./News.css";

const newsData = [
  { title: "Platform Update", description: "New courses added this week!" },
  { title: "Webinar Announcement", description: "Join our React webinar." },
  { title: "Maintenance Notice", description: "Scheduled maintenance on Dec 25." },
];

const News = () => {
  return (
    <div className="news-page">
      <h2>Latest News</h2>
      <div className="news-grid">
        {newsData.map((news, index) => (
          <Card key={index} title={news.title} description={news.description} />
        ))}
      </div>
    </div>
  );
};

export default News;
