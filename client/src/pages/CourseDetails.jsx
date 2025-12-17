import React from "react";
import Button from "../components/Button";
import "./CourseDetails.css";

const lessonsData = [
  { title: "Introduction", duration: "10 min" },
  { title: "Variables and Types", duration: "25 min" },
  { title: "Functions", duration: "30 min" },
  { title: "DOM Manipulation", duration: "40 min" },
];

const CourseDetails = () => {
  return (
    <div className="course-details-page">
      <header className="course-header">
        <h1>React for Beginners</h1>
        <p>Build dynamic UI applications using React.js</p>
        <Button glow>Start Course</Button>
      </header>

      <section className="lessons">
        <h2>Lessons</h2>
        <ul>
          {lessonsData.map((lesson, index) => (
            <li key={index}>
              <span>{lesson.title}</span>
              <span>{lesson.duration}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CourseDetails;
