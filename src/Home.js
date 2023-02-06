import React from 'react';
import logo from "./image/logo.png";
import './App.css';

class Home extends React.Component{

    constructor() {
        super();
    }


    render(){

        return (
            <div id="home">
               <h3 style={{fontSize:'24px', textAlign:'center'}}>Logo</h3>
               <img src={logo} width="175" height="175" style={{marginLeft:"60px"}}/>
               <div className='buttons'>
                <a href='/login' className='home-button'>Login</a>
                <a href='register' className='home-button'>Register</a>
               
                </div>
                
            </div>

        );
    }

}
export default Home;