import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Card from "../components/Card";
import Button from "../components/Button";
import "./Profile.css";

const enrolledCourses = [
  { title: "JavaScript Basics", progress: "40%" },
  { title: "React for Beginners", progress: "60%" },
];

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="profile-page">
      <header className="profile-header">
        <h1>Welcome, {user ? user.name : "Guest"}!</h1>
        <Button glow onClick={logout}>Logout</Button>
      </header>

      <section className="enrolled-courses">
        <h2>Enrolled Courses</h2>
        <div className="courses-grid">
          {enrolledCourses.map((course, index) => (
            <Card
              key={index}
              title={course.title}
              description={`Progress: ${course.progress}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Profile;
