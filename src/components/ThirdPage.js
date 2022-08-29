import React from 'react';
import Navbar from './Navbar/Navbar';
import liveizy from '../resources/liveizy.png';
import youtube from '../resources/youtube.png'
import prepschool from '../resources/prepschool.png';
import movies from '../resources/movies.png';



const ThirdPage = () =>{

return <section className='projects'>
  <Navbar/>
  <h2 className='section-head'>PROJECTS</h2>
  <div className='grid-container'>
    <div className='grid-item'>
    <div className='grid-item1'
    >
     <div
      data-aos="fade-right"
      data-aos-duration="2500"
     >
    <button className='btn-p1'>
    <a href='https://liveizy.com' 
    className='project1'>
    <img src={liveizy} className='liveizy' alt='liveizy' align="liveizy"/>
    </a><h4 className='liveizy-app'>Liveizy</h4></button>
    </div>
    </div>
  </div>
    <div className='grid-item'>
     <div className='grid-item2'
     data-aos="fade-left"
     data-aos-duration="2500"
     >
     <button className='btn-p2'>
     <a href='https://lovely-peony-86cdfd.netlify.app/' 
     className='project2'>
     <img src={youtube} className='youtube' alt='youtube' align="youtube"/>
     </a> <h4 className='vid-streamer'>Video Streamer</h4></button>
     </div>
    </div>
   </div>

   <div className='grid-item'>
     <div className='grid-item3'
     data-aos="fade-left"
     data-aos-duration="2500"
     >
     <button className='btn-p3'>
     <a href='https://prepschoolapp.netlify.app/' 
     className='project3'>
     <img src={prepschool} className='prepschool' alt='prepschool' align="prepschool"/>
     </a> <h4 className='prepschool-app'>Prepschool</h4></button>
     </div>
   </div>

   <div className='grid-item'>
     <div className='grid-item4'
     data-aos="fade-right"
     data-aos-duration="2500"
     >
     <button className='btn-p4'>
     <a href='https://search-movies-pearl.vercel.app/' 
     className='project4'>
     <img src={movies} className='movies' alt='movies' align="movies"/>
     </a> <h4 className='movies-app'>Movies Search</h4></button>
     </div>
   </div>
 </section>
}




export default ThirdPage;