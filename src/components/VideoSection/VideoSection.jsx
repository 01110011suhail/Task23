// // VideoSection.jsx
// import React from 'react';
// import './VideoSection.css';

// const VideoSection = () => {
//   return (
//     <div className="video-section">
//       <h2>All the skills you need in one place</h2>
//       <div className="videos">
//         {/* Video Cards */}
//       </div>
//       <div className="filter-options">
//         {/* Filter logic */}
//       </div>
//     </div>
//   );
// };

// export default VideoSection;

// import React, { useState } from 'react';
// import './VideoSection.css';

// const videoData = [
//   {
//     title: 'Developing Kids Website from Scratch',
//     instructor: 'Ravikant Rathore',
//     duration: '7hrs',
//     modules: 7,
//     rating: 4.3,
//     thumbnail: '/path-to-thumbnail1.png',
//   },
//   {
//     title: 'Create Your Own Web Pages: A Kid’s Guide to HTML',
//     instructor: 'Ravikant Rathore',
//     duration: '7hrs',
//     modules: 7,
//     rating: 4.3,
//     thumbnail: '/path-to-thumbnail2.png',
//   },
//   {
//     title: 'Code Your First Website: HTML & CSS',
//     instructor: 'Ravikant Rathore',
//     duration: '7hrs',
//     modules: 7,
//     rating: 4.3,
//     thumbnail: '/path-to-thumbnail3.png',
//   },
//   // Add more video data as needed
// ];

// const VideoSection = () => {
//   const [filter, setFilter] = useState('All');

//   const filteredVideos = videoData.filter(video => {
//     if (filter === 'All') return true;
//     if (filter === 'Most Popular') return video.rating >= 4.3;
//     if (filter === 'Trending') return video.modules > 5;
//     return true;
//   });

//   return (
//     <div className="video-section">
//       <h2>All the skills you need in one place</h2>
      
//       <div className="filter-options">
//         <button onClick={() => setFilter('All')} className={filter === 'All' ? 'active' : ''}>All</button>
//         <button onClick={() => setFilter('Most Popular')} className={filter === 'Most Popular' ? 'active' : ''}>Most Popular</button>
//         <button onClick={() => setFilter('Trending')} className={filter === 'Trending' ? 'active' : ''}>Trending</button>
//       </div>

//       <div className="videos">
//         {filteredVideos.map((video, index) => (
//           <div key={index} className="video-card">
//             <img src={video.thumbnail} alt={`${video.title} Thumbnail`} />
//             <h3>{video.title}</h3>
//             <p>Course By: {video.instructor}</p>
//             <p>Duration: {video.duration}</p>
//             <p>Modules: {video.modules}</p>
//             <p>Rating: {video.rating}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoSection;

import React, { useState } from 'react';
import './VideoSection.css';

const VideoSection = () => {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [videoData, setVideoData] = useState({});

  const courses = [
    // Add other courses here...
    {
      title: 'Developing Kids Website from Scratch',
      author: 'Rankant Rathore',
      duration: '7 Hrs',
      modules: '7 Modules',
      rating: 4.3,
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
      title: 'Introduction to JavaScript',
      author: 'Jane Doe',
      duration: '5 Hrs',
      modules: '5 Modules',
      rating: 4.8,
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
      title: 'Introduction to JavaScript',
      author: 'Jane Doe',
      duration: '5 Hrs',
      modules: '5 Modules',
      rating: 4.8,
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
      title: 'Introduction to JavaScript',
      author: 'Jane Doe',
      duration: '5 Hrs',
      modules: '5 Modules',
      rating: 4.8,
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
      title: 'Introduction to JavaScript',
      author: 'Jane Doe',
      duration: '5 Hrs',
      modules: '5 Modules',
      rating: 4.8,
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
      title: 'Introduction to JavaScript',
      author: 'Jane Doe',
      duration: '5 Hrs',
      modules: '5 Modules',
      rating: 4.8,
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    // Add more courses here...
  ];

  const handlePlayPause = (index) => {
    if (currentPlaying === index) {
      setCurrentPlaying(null);
    } else {
      setCurrentPlaying(index);
    }
  };

  const handleVideoLoad = (index, duration) => {
    setVideoData((prev) => ({
      ...prev,
      [index]: { duration },
    }));
  };

  return (
    <section className="video-section">
      <h2>All the skills you need in one place</h2>
      <div className="course-card-container">
        <div className="course-card-wrapper">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="video-container">
                <video
                  controls
                  onClick={() => handlePlayPause(index)}
                  className={currentPlaying === index ? 'playing' : ''}
                  onLoadedMetadata={(e) =>
                    handleVideoLoad(index, e.target.duration)
                  }
                >
                  <source src={course.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h4>{course.title}</h4>
              <p>Course By: {course.author}</p>
              <p className='course-details'>
                {videoData[index]
                  ? `${Math.floor(videoData[index].duration / 3600)} Hrs | ${course.modules}`
                  : `${course.duration} | ${course.modules}`}
              </p>
              <p className='course-rating'>
                {'★'.repeat(Math.round(course.rating))} {course.rating}
              </p>
            </div>
          ))}
        </div>
        <div className="scroll-arrow">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5L4 10L9 15"
              stroke="#2D2D2D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
