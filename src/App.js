import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import Forget from './ForgetPass';
import Reset from './ResetPass';
import Edit from './Editprofile';
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
      <Route path = "/edit" element = {<Edit />} />
      <Route path = "/forget" element = {<Forget />} />
      <Route path = "/reset" element = {<Reset />} />
    </Routes>
    </>
  );
}

export default App;