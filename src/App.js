// App.js
// import React from 'react';
// import Navbar from './components/Navbar/Navbar';
// import Banner from './components/Banner/Banner';
// import VideoSection from './components/VideoSection/VideoSection';
// import DailyStreak from './components/DailyStreak/DailyStreak';
// import DailyFunGame from './components/DailyFunGame/DailyFunGame';
// import Events from './components/Events/Events';
// import PopularCourses from './components/PopularCourses/PopularCourses';
// import './App.css';
// import Home from './components/Home/Home';
// import Home2 from './components/Home/Home2';
// import SignIn from './components/Home/SignIn/SignIn';

// const App = () => {
//   // return (
//     // <div className="App">
//       {/* <Home/> */}
//       {/* <Home2/> */}
//       {/* <SignIn/> */}
//       {/* <Navbar />
//       <Banner />
//       <div className="main-content">
//         <VideoSection />
//         <div className="side-content">
//           <DailyStreak />
//           <DailyFunGame />
//           <Events />
//         </div>
//       </div>
//       <PopularCourses />
//     </div> */}

// //   );
// // };
//       }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/components/Home/Home';
// import SignIn from '../src/components/SignIn/';
import SignIn from '../src/components/Home/SignIn/SignIn';
// import './App.css';
import Home2 from './components/Home/Home2';
// import LHome from './components/LoginInHome/LHome';
// import Library from './Pages/Library/Library';

function App() {
  return (
    // <Home2/>
    // <Library/>
    // <div><Home/>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
        {/* <Route path="/LHome" element={<LHome />} /> */}
      </Routes>
   
    </Router>
    // </div>
  );
}

export default App;

