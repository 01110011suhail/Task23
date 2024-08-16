// // DailyStreak.jsx
// import React, { useState, useEffect } from 'react';
// import './DailyStreak.css';

// const DailyStreak = () => {
//   const [streak, setStreak] = useState(1);
//   const [badges, setBadges] = useState([]);

//   useEffect(() => {
//     // Logic to calculate streak and badges
//   }, [streak]);

//   return (
//     <div className="daily-streak">
//       <h3>{streak} day streak</h3>
//       <p>Way to go!</p>
//       <div className="streak-calendar">
//         {/* Calendar logic */}
//       </div>
//       <div className="badge-tracker">
//         {/* Badges logic */}
//       </div>
//     </div>
//   );
// };

// export default DailyStreak;


import React, { useState, useEffect } from 'react';
import './DailyStreak.css';

const DailyStreak = () => {
//   const [streak, setStreak] = useState(1);
//   const [badges, setBadges] = useState([]);

//   useEffect(() => {
//     // Initialize streak from localStorage or set it to 1 if not found
//     const savedStreak = parseInt(localStorage.getItem('streak')) || 1;
//     const lastDate = localStorage.getItem('lastDate');
//     const today = new Date().toISOString().split('T')[0];

//     // Check if the streak is ongoing or should reset
//     if (lastDate !== today) {
//       if (isYesterday(lastDate)) {
//         setStreak(savedStreak + 1);
//         localStorage.setItem('streak', savedStreak + 1);
//       } else {
//         setStreak(1);
//         localStorage.setItem('streak', 1);
//       }
//       localStorage.setItem('lastDate', today);
//     } else {
//       setStreak(savedStreak);
//     }
//   }, []);

//   useEffect(() => {
//     // Update badges based on the streak
//     const newBadges = [];
//     if (streak >= 3) newBadges.push('3-day Badge');
//     if (streak >= 6) newBadges.push('6-day Badge');
//     if (streak >= 12) newBadges.push('12-day Badge');
//     setBadges(newBadges);
//   }, [streak]);

//   const isYesterday = (date) => {
//     if (!date) return false;
//     const yesterday = new Date();
//     yesterday.setDate(yesterday.getDate() - 1);
//     return date === yesterday.toISOString().split('T')[0];
//   };

//   return (
//     <div className="daily-streak">
//       <h3>{streak} day streak</h3>
//       <p>Way to go!</p>
//       <div className="streak-calendar">
//         {Array(7).fill(null).map((_, index) => (
//           <div
//             key={index}
//             className={`calendar-day ${index < streak ? 'active' : ''}`}
//           >
//             {index + 1}
//           </div>
//         ))}
//       </div>
//       <div className="badge-tracker">
//         <h4>Badges Earned</h4>
//         <ul>
//           {badges.map((badge, index) => (
//             <li key={index}>{badge}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };
const [streak, setStreak] = useState(16); // Example: Current streak is 16 days
  const [days, setDays] = useState(['M', 'T', 'W', 'T', 'F', 'S', 'S']);
  const [currentDay, setCurrentDay] = useState(5); // Example: Today is Thursday (index 4)

  useEffect(() => {
    // Logic to check if today the user continued their streak
    
    const lastLogin = localStorage.getItem('lastLogin');
    const today = new Date().getDay();

    if (lastLogin !== today) {
      if (today === (currentDay + 1) % 7) {
        setStreak(streak + 1);
      } else {
        setStreak(1);
      }
      localStorage.setItem('lastLogin', today);
    }

    setCurrentDay(today);
  }, []);

  const getBadge = () => {
    if (streak >= 12) return 'gold-badge';
    if (streak >= 6) return 'silver-badge';
    if (streak >= 3) return 'bronze-badge';
    return '';
  };

  return (
    <div className="streak-tracker-container">
      <div className="streak-info">
        <div className="streak-icon">
          <span role="img" aria-label="fire">
            🔥
          </span>
        </div>
        <div className="streak-details">
          <h3>{streak} day streak</h3>
          <p>Way to go!</p>
        </div>
      </div>

      <div className="streak-calendar">
        {days.map((day, index) => (
          <div
            key={index}
            className={`day ${index <= currentDay ? 'active' : ''}`}
          >
            {day}
          </div>
        ))}
      </div>

      <div className="streak-targets">
        <h4>Run Streaks Targets</h4>
        <div className="badges">
          <div className={`badge ${streak >= 3 ? 'achieved' : ''}`}>
            <span role="img" aria-label="3-day">
              ⭐️
            </span>
            3 day
          </div>
          <div className={`badge ${streak >= 6 ? 'achieved' : ''}`}>
            <span role="img" aria-label="6-day">
              🏅
            </span>
            6 day
          </div>
          <div className={`badge ${streak >= 12 ? 'achieved' : ''}`}>
            <span role="img" aria-label="12-day">
              🥇
            </span>
            12 day
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyStreak;
