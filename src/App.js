import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path = "/login" element = {<Login />} />
      <Route path = "/register" element = {<Register />} />
      <Route path = "/profile" element = {<Profile />} />
    </Routes>
    </>
  );
}

export default App;