import React from "react";
import Card from "../components/Card";
import "./Courses.css";

const coursesData = [
  { title: "JavaScript Basics", description: "Learn core JS concepts." },
  { title: "React for Beginners", description: "Build dynamic UI apps." },
  { title: "Node.js & Express", description: "Backend development made easy." },
  { title: "HTML & CSS", description: "Master frontend basics." },
  { title: "MongoDB Basics", description: "Learn how to store data." },
];

const Courses = () => {
  return (
    <div className="courses-page">
      <h2>Available Courses</h2>
      <div className="courses-list">
        {coursesData.map((course, index) => (
          <Card key={index} title={course.title} description={course.description} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
