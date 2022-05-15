import React from 'react';
import counter from '../resources/counter.png';
import youtube from '../resources/youtube.png'


const ThirdPage = () => {
return <section className='projects'>
  <h2 className='section-head'>PROJECTS</h2>
  <div className='grid-container'>
    <div className='grid-item1'>
     <div className='grid-item1'>
     <img src={counter} className='counter' alt='counter' align="counter"/>
     <div>
     <button className='btn-p1'><a href='https://valcokoro.github.io/counter.github.io/' className='project1'>
      LEARN MORE</a></button>
      </div>
     </div>
    </div>

    <div className='grid-item2'>
     <div className='grid-item2'>
     <img src={youtube} className='youtube' alt='youtube' align="youtube"/>
     <button className='btn-p1'><a href='https://lovely-peony-86cdfd.netlify.app/' className='project2'>
      LEARN MORE</a></button>
     </div>
    </div>
   </div>
 </section>

}


export default ThirdPage;