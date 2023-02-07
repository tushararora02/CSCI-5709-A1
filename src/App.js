import './App.css';

import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Login from './login';
import Registration from './Registration';
import Home from './Home';
import ResetEmail from './ResetEmail';
import Reset from './reset';
import GetOTP from './GetOTP';

function App() {
  return (
  <BrowserRouter>
 <Routes>
 <Route index element={<Home/>}/>
  <Route path='/' element={<Home/>}/> 

  <Route path='/login' element={<Login/>}/> 
  <Route path='/register' element={<Registration/>}/>
  <Route path='/ResetEmail' element={<ResetEmail/>}/>
  <Route path='/Reset' element={<Reset/>}/>
  <Route path='/GeTOTP' element={<GetOTP/>}/>
 </Routes>
 </BrowserRouter>

 
  );
}

export default App;
