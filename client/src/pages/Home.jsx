import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import "./Home.css";

const coursesData = [
  { title: "JavaScript Basics", description: "Learn core JS concepts." },
  { title: "React for Beginners", description: "Build dynamic UI apps." },
  { title: "Node.js & Express", description: "Backend development made easy." },
];

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1>EduHub</h1>
        <p>Learn, Book, Connect</p>
        <Button glow>Start Learning</Button>
      </header>

      <section className="courses">
        {coursesData.map((course, index) => (
          <Card key={index} title={course.title} description={course.description} />
        ))}
      </section>
    </div>
  );
};

export default Home;
