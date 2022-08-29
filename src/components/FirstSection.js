import React from 'react';
import Container from '@mui/material/Container';
import HomeNavbar from './Navbar/HomeNavbar';
import Typewriter from 'typewriter-effect';
import idea from '../resources/idea.jpg';
//import menu from '../resources/menu.svg';

const FirstSection = () =>{
    return (
    <section className='first-section' >
      <HomeNavbar/>
      <Container fixed>
       <div 
        className='ui items'
        style={{textAlign : 'center'}}>
        <div className='name1'
         style={{ 
         marginTop: '0px',
         paddingTop: '40px',
         color: 'white'
        }}
        >
          <h1 className='name'>Valentine Okoro</h1>
        </div>
    
        <div className='motto' >
         <p className='slogan'>
         <Typewriter
              onInit={(typewriter) => {
                  typewriter.typeString("Bring Your Ideas to Life.")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Let's Build Your Dream!")
                  .start();
              }}
          />
         </p>
        </div>
        <div>
        <img src={idea} className='idea' alt='idea' align="center"/>
        </div>
        
      </div>
    </Container> 
    </section>

)};


export default FirstSection