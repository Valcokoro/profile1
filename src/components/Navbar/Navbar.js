import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
   return (
       <nav className="navbar">
           <h1 className='small'>Vala</h1>
           <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}
               onClick = {() => setIsMobile(false)}
           >
               <Link to='/' className='home'>
                   <li>Home</li>
               </Link>
               <Link to='/profile' className='profile'>
                   <li>Profile</li>
               </Link>
               <Link to='/portfolio' className='portfolio'>
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