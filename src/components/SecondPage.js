import React from 'react';
import mypics from '../resources/mypics.jpeg';
import responsive from '../resources/responsive.svg'
import dynamic from '../resources/dynamic.svg';
import resume from '../resources/resume.pdf';


const SecondPage = () =>{
    return (
    <section className='second'>
    <div className='pics'>
        <img src={mypics} className='mypics' alt='mypics'/>
    </div>
    <div className='leftpane'>
        <h1 className='stack'>Frontend Software Engineer</h1>
        <aside>
        <img src={responsive} className='response' alt='response' align="left"/>
        <p className='desc1'><b className="bold1">Responsive:</b> My layouts will work on any device, big or small.</p>
        <img src={dynamic} className='dynamic' alt='dynamic' align="left"/>
        <p className='desc2'><b className="bold2">Dynamic:</b> Websites don't have to be static,
         I love making pages come alive..</p>
        </aside>
    </div>

    <div className='rightpane'>
      <table className='react'>
       <tbody>
       <tr>
         <td className='react1'> React.js </td> 
         <td className='react2'> </td>
         <td className='react3'> 80%</td>
       </tr>
       </tbody>
    </table>

    <table className='redux'>
      <tbody>
       <tr>
        <td className = 'rd1'> Redux </td> 
        <td className='rd2'> </td>
        <td className='rd3'> 80%</td>
       </tr>
      </tbody>
    </table>

    <table className='javascript'>
      <tbody>
       <tr>
        <td className='js1'> JavaScript </td> 
        <td className='js2'> </td>
        <td className='js3'> 85%</td>
       </tr>
      </tbody>
    </table>

    <table className='html'>
      <tbody>
       <tr>
        <td className='html1'> HTML </td> 
        <td className='html2'> </td>
        <td className='html3'> 90%</td>
       </tr>
     </tbody>
    </table>

    <table className='css'>
     <tbody>
      <tr>
       <td className='css1'> CSS </td> 
       <td className='css2'> </td>
       <td className='css3'> 90%</td>
      </tr>
     </tbody>
    </table>

    <table className='python'>
      <tbody>
       <tr>
        <td className='py1'> Python </td> 
        <td className='py2'> </td>
        <td className='py3'> 55%</td>
      </tr>
      </tbody>
    </table>

    <table className='django'>
      <tbody>
       <tr>
        <td className='dj1'> Django </td> 
        <td className='dj2'> </td>
        <td className='dj3'> 55%</td>
       </tr>
      </tbody>
    </table>

    <button className='resume'><a href={resume} className='resume1' download>Download CV</a></button>

    </div>

    
 
   
   </section>
)};


export default SecondPage;