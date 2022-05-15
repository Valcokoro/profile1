import React, {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import idea from '../resources/idea.jpg';
//import menu from '../resources/menu.svg';







const FirstSection = () =>{
    
  const[slogan, setSlogan] = useState('');

  
   
  useEffect(() =>{
    var i = 0;
    var txt = " Bring Your Ideas to Life."
    
  
    const motto = () => {
      if(i < txt.length){
        document.querySelector(".slogan").innerHTML += txt.charAt(i);
        i++;
        setTimeout(motto, 50);
      } 
    
    };

    setSlogan(motto);
    

    
      
       
   }, [])
    return (
    <section className='first-section' >
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
         {slogan}
         <p className='slogan'></p>
        </div>
        <div>
        <img src={idea} className='idea' alt='idea' align="center"/>
        </div>
        
      </div>
    </Container> 
    </section>

)};


export default FirstSection