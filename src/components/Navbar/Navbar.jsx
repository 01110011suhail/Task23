// // Navbar.jsx
// import React from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img src="/path-to-logo.png" alt="Logo" />
//         <span>Stemsy</span>
//       </div>
//       <div className="navbar-explore">
//         <button className="explore-button">Explore &#x25BC;</button>
//         <div className="dropdown-content">
//           <a href="#">STEM Assessment Page</a>
//           <a href="#">Storytelling Page</a>
//           <a href="#">Library Page</a>
//           <a href="#">AI Chatbot Page</a>
//         </div>
//       </div>
//       <div className="navbar-search">
//         <input type="text" placeholder="Search here..." />
//         <button className="search-btn"><i className="fas fa-search"></i></button>
//       </div>
//       <div className="navbar-mic">
//         <button className="mic-btn"><i className="fas fa-microphone"></i></button>
//       </div>
//       <div className="navbar-auth">
//         <button className="sign-in-btn">Sign In</button>
//         <button className="sign-up-btn">Sign Up</button>
//       </div>
//       <div className="navbar-lang">
//         <select>
//           <option>English</option>
//           <option>Spanish</option>
//           <option>French</option>
//         </select>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
// import { useTranslation } from 'react-i18next';
// import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import { AiOutlineSearch } from "react-icons/ai";


import './Navbar.css';

const Navbar = () => {
  // const { t, i18n } = useTranslation();

  // const changeLanguage = (lang) => {
  //   i18n.changeLanguage(lang);
  // };

  return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img src="/path-to-logo.png" alt="Logo" />
//         <span>Stemsy</span>
//       </div>
//       <div className="navbar-explore">
//         <button className="explore-button">{t('navbar.explore')} &#x25BC;</button>
//         <div className="dropdown-content">
//           <a href="#">{t('navbar.explore')}</a>
//           <a href="#">Storytelling Page</a>
//           <a href="#">Library Page</a>
//           <a href="#">AI Chatbot Page</a>
//         </div>
//       </div>
//       <div className="navbar-search">
//         <input type="text" placeholder={t('navbar.searchPlaceholder')} />
//         <button className="search-btn"><i className="fas fa-search"></i></button>
//       </div>
//       <div className="navbar-mic">
//         <button className="mic-btn"><i className="fas fa-microphone"></i></button>
//       </div>
//       <div className="navbar-auth">
//         <button className="sign-in-btn">{t('navbar.signIn')}</button>
//         <button className="sign-up-btn">{t('navbar.signUp')}</button>
//       </div>
//       <div className="navbar-lang">
//         <select onChange={(e) => changeLanguage(e.target.value)}>
//           <option value="en">English</option>
//           <option value="fr">Français</option>
//           <option value="es">Español</option>
//         </select>
//       </div>
//     </nav>
//   );
// };


<div className='navbarBelt'>
        <div className='leftnavbelt'>
            <div className='leftNavBeltLogo'>
                {/* <img className='navbarbeltlogo' src={amazonlogo} alt='amazon.in'></img> */}
                <span className='navbarlogo'>Stemsy</span>

            </div>

        </div>

        <div className='navbarBeltSeacrhBox'>
            <div className='navbarBeltSearchDiv'>
                <div className='navbarBeltSearchBoxAll'>
                    <div className='navbarBeltSearchBoxAllText'>Explore</div>
                    {/* <ArrowDropDownOutlinedIcon sx={{ fontSize:"20px"}}/> */}
                    
                    

                </div>
               
                <input type='text' className='navbarBeltInputSeacrhBox' placeholder='Search Anything'/>
                {/* <div className='searchIconNavbarBelt'> */}
                    <AiOutlineSearch sx={{fontSize:"26px"}} className='searchIconNavbarBeltIcon'/>
                    {/* <KeyboardVoiceOutlinedIcon sx ={{fontSize:"26px"}} className='searchMicIcon'/> */}

                    

                {/* </div> */}

            </div>


</div>

            

<section section className='HomePagesignIn'>Sign in   </section>
<section className='HomePagesignUp'>Sign up</section>
 
     
        <div className='rightSideNavbarBelt'>
            <div className='IdianFlagCode'>
                {/* <img  className='indiaFlag'    /> */}
                <div className ='indiaCodeNavbarBelt'>English
                    {/* <ArrowDropDownOutlinedIcon sx={{fontSize:16,marginTop:1,marginLeft:-0.4}}
                           className='indiaCodeNavbarBeltDrp'/>*/}</div> 

                </div>

            </div>

        </div>
        
        
      


  )
}

export default Navbar;

