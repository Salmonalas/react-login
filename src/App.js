import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import Forget from './ForgetPass';
import Emt from './Emt-page';
import Reset from './ResetPass';
import Edit from './Editprofile';
import Album from './Album';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import './App.css';
import { Sticky } from 'semantic-ui-react';

import Design from './Design';
import Social from './designs/social/Social';
import Streaming from './designs/streaming/Streaming';
import Gaming from './designs/gaming/Gaming';
import Education from './designs/education/education';

function App() {
  return (
    <>
    <Sticky>
        <Navbar/>
    </Sticky>
    <Routes>
      <Route path = "/" element = {<Album />} />
      <Route path = "/login" element = {<Login />} />
      <Route path = "/register" element = {<Register />} />
      <Route path = "/profile" element = {<Profile />} />
      <Route path = "/edit" element = {<Edit />} />
      <Route path = "/forget" element = {<Forget />} />
      <Route path = "/reset/:token" element = {<Reset />} />
      <Route path= "/emt/:token" element = {<Emt />} />
      
      <Route path= "/design/:token" element = {<Design />} />
      <Route path= "/Social/:token" element = {<Social/>} />
      <Route path= "/Streaming/:token" element = {<Streaming/>} />
      <Route path= "/Gaming/:token" element = {<Gaming/>} />
      <Route path= "/Education/:token" element = {<Education/>} />
    </Routes>
    </>
  );
}

export default App;