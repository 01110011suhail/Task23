import React from 'react'
import Nbars from '../Navbar/Nbars'
import DailyFunGame from '../DailyFunGame/DailyFunGame'
import DailyStreak from '../DailyStreak/DailyStreak'
import Banner from '../Banner/Banner'
// import DailyFunGame from '../DailyFunGame/DailyFunGame'
import VideoSection from '../VideoSection/VideoSection'
// import PopularCourses
// import {Link,link } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <Nbars />
      <Banner />
      <div className="main-content">
         <VideoSection />
        <div className="side-content">
          <DailyStreak />
          <DailyFunGame />
          {/* <Events /> */}
        </div>
      </div>
      {/* // <PopularCourses /> */}

         {/* <Navbar/> */}
        {/* //  <DailyFunGame/> */}
        {/* <Link> <DailyStreak/></Link> */}
        <div>
          
        </div>
    </div>

  )
}

export default Home
