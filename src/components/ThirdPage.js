import React from 'react';
import Navbar from './Navbar/Navbar';
import liveizy from '../resources/liveizy.png';
import prepschool from '../resources/prepschool.png';
import zms from '../resources/zms.png';
import babyknitting from '../resources/babyknitting.png';



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
    <img src={liveizy} className='liveizy' alt='liveizy' />
    <h4 className='liveizy-app'>Liveizy</h4>
    </a>
    </button>
    </div>
    </div>
  </div>
    <div className='grid-item'>
     <div className='grid-item2'
     data-aos="fade-left"
     data-aos-duration="2500"
     >
     <button className='btn-p2'>
     <a href='https://zeromarketingsolution.com/' 
     className='project2'>
     <img src={zms} className='zms' alt='zeromarketingsolution' />
     <h4 className='zeromarketingsolution'>Zero Marketing Solution</h4>
     </a> 
     </button>
     </div>
    </div>
   </div>

   <div className='grid-item'>
     <div className='grid-item3'
     >
     <button className='btn-p3'>
     <a href='https://prepschoolapp.netlify.app/' className='project3'>
     <img src={prepschool} className='prepschool' alt='prepschool' />
     <h4 className='prepschool-app'>Prepschool</h4>
     </a> 
     </button>
     </div>
   </div>

   <div className='grid-item'>
     <div className='grid-item4'
     >
     <button className='btn-p4'>
     <a href='https://babyknittingworld.com/' 
     className='project4'>
     <img src={babyknitting} className='babyknitting' alt='movies' />
     <h4 className='movies-app'>Baby Knitting World</h4>
     </a> 
     </button>
     </div>
   </div>
 </section>
}




export default ThirdPage;