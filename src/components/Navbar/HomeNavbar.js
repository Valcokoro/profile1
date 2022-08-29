import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../resources/logo.jpg';
import './Navbar.css';


const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
   return (
       <nav className="home-navbar">
           <img src={logo} className='logo' alt='logo' />
           <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}
               onClick = {() => setIsMobile(false)}
           >
               <Link to='/' className='h-home'>
                   <li>Home</li>
               </Link>
               <Link to='/profile' className='h-profile'>
                   <li>Profile</li>
               </Link>
               <Link to='/portfolio' className='h-portfolio'>
                   <li>Projects</li>
               </Link>
               
           </ul>
           <button className='phone-menu-icon'
              onClick={ () => setIsMobile(!isMobile)} >
               {isMobile ? (
               <i className="times icon"></i> 
               )
               : (<i className="bars icon"></i>)}
           </button>
       </nav>
   )
}


export default Navbar;