import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import FirstSection from './components/FirstSection';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import Navbar from './components/Navbar/Navbar'


const App = () => {
    return (
         <div>
         <BrowserRouter >
         <Navbar />
            <div>
            <Switch>
            <Route path='/' exact component={FirstSection}/>
            <Route path='/profile' exact component={SecondPage}/>
            <Route path='/portfolio' component={ThirdPage}/>
            </Switch>
            </div>
         </BrowserRouter>
         </div>
    )};



export default App;