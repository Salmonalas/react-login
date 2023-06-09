import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import Forget from './ForgetPass';
import Emt from './Emt-page';
// import Forgot2 from './ForgetPass2';
import Reset from './ResetPass';
import Edit from './Editprofile';
import Album from './Album';
// import Verify from './myverify';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import './App.css';
import Design from './Design';
import { Sticky } from 'semantic-ui-react';


// let image = 'http://127.0.0.1:3333/images/image-1684939567813.jpg'
// let data = {islogin:false,img:image}
function App() {
  return (
    <>
    {/* <Navbar isLoggedIn={image}/> */}
    <Sticky>
        <Navbar/>
    </Sticky>
    <Routes>
      <Route path = "/" element = {<Album />} />
      <Route path = "/login" element = {<Login />} />
      <Route path = "/register" element = {<Register />} />
      {/* <Route path= "/verify/:token" element = {<Verify/>}/> */}
      <Route path = "/profile" element = {<Profile />} />
      <Route path = "/edit" element = {<Edit />} />
      <Route path = "/forget" element = {<Forget />} />
      {/* <Route path = "/forget2" element = {<Forgot2 />} /> */}
      <Route path = "/reset/:token" element = {<Reset />} />
      <Route path= "/design/:token" element = {<Design />} />
      <Route path= "/emt/:token" element = {<Emt />} />
    </Routes>
    </>
  );
}

export default App;