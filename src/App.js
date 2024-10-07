import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
function App() {
  return (
    <div >
       <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
       </Router>
    </div>
  );
}

export default App;
