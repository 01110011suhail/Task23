// PopularCourses.jsx
import React from 'react';
import './PopularCourses.css';
import VideoSection from '../VideoSection/VideoSection';
import Video from './Videos/Video';

const PopularCourses = () => {
  return (
    <div className="popular-courses">
      <h3>Most Popular</h3>
      <div className="courses">
        <Video/>
        {/* Course Cards Logic */}
      </div>
    </div>
  );
};

export default PopularCourses;
