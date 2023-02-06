import React from 'react';
import logo from "./image/logo.png";
import './App.css';
import {useNavigate} from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    
    const goTologin = () => {
    
      // This will navigate to second component
      navigate('/login'); 
    };
    const goToRegistration = () => {
    
      // This will navigate to first component
      navigate('/register'); 
    };
    
    return (
        <div id="home">
        <h3 style={{fontSize:'24px', textAlign:'center'}}>Logo</h3>
        <img src={logo} width="175" height="175" style={{marginLeft:"60px"}}/>
        <div className='buttons'>
         <button onClick={goTologin}  className='home-button'>Login</button>
         <button onClick={goToRegistration} className='home-button'>Register</button>
        
         </div>
         
     </div>
    );
  }
    
  export default Home;














// function  change() {
//     const navigate = useNavigate();
    
//     const goToSecondsComp = () => {
    
//       // This will navigate to second component
//       navigate('/login'); 
//     };
//     const gotToFirstComp = () => {
    
//       // This will navigate to first component
//       navigate('/register'); 
//     };
// }


// class Home extends React.Component{

    
//     constructor() {
//         super();
      
//     }
    

//     render(){

//         return (
//             <div id="home">
//                <h3 style={{fontSize:'24px', textAlign:'center'}}>Logo</h3>
//                <img src={logo} width="175" height="175" style={{marginLeft:"60px"}}/>
//                <div className='buttons'>
//                 <button onClick={gotToFirstComp}  className='home-button'>Login</button>
//                 <a href='register' className='home-button'>Register</a>
               
//                 </div>
                
//             </div>

//         );
//     }

// }
// export default Home;