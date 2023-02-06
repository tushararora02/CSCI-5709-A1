import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './login';
import Registration from './Registration';
import Home from './Home';
import Reset from './reset';
function App() {
  return (
 <Routes>
  <Route path='/' element={<Home/>}/> 
  <Route path='/login' element={<Login/>}/> 
  <Route path='/register' element={<Registration/>}/>
  <Route path='/reset' element={<Reset/>}/>
 </Routes>
  );
}

export default App;
