import React from 'react';
import counter from '../resources/counter.png';
import youtube from '../resources/youtube.png'
import google from '../resources/google.png';
import translate from '../resources/translate.png';



const ThirdPage = () =>{

return <section className='projects'>
  <h2 className='section-head'>PROJECTS</h2>
  <div className='grid-container'>
    <div className='grid-item'>
    <div className='grid-item1'
    >
     <div>
    <button className='btn-p1'>
    <a href='https://valcokoro.github.io/counter.github.io/' 
    className='project1'>
    <img src={counter} className='counter' alt='counter' align="counter"/>
    </a><h4 className='count-app'>Counter App</h4></button>
    </div>
    </div>
  </div>

    <div className='grid-item'>
     <div className='grid-item2'
     data-aos="fade-left"
     data-aos-duration="3000"
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
     <a href='https://astounding-sunburst-2e5bf2.netlify.app/' 
     className='project3'>
     <img src={google} className='google' alt='google' align="google"/>
     </a> <h4 className='g-clone'>Google Clone</h4></button>
     </div>
   </div>

   <div className='grid-item'>
     <div className='grid-item4'
     data-aos="fade-right"
     data-aos-duration="3000"
     >
     <button className='btn-p4'>
     <a href='https://glittering-gecko-fb8cfd.netlify.app/' 
     className='project4'>
     <img src={translate} className='translate' alt='translate' align="translate"/>
     </a> <h4 className='lang-trans'>Language Translate</h4></button>
     </div>
   </div>
   
 </section>
}




export default ThirdPage;