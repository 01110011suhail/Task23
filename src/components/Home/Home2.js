import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import Navbar from '../Navbar/Navbar';
import VideoSection from '../VideoSection/VideoSection';
import Banner from '../Banner/Banner';
import DailyFunGame from '../DailyFunGame/DailyFunGame';
import DailyStreak from '../DailyStreak/DailyStreak';
import PopularCourses from '../PopularCourses/PopularCourses';


const Home2 = () => {
  return (
   <div>
    <Navbar/>
    <Banner/>
    <VideoSection/>
    <DailyFunGame/>
    <DailyStreak/>
    <PopularCourses/>
   </div>
  )
}

export default Home2