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
import About from './about';
import './App.css';
import { Sticky } from 'semantic-ui-react';

import Design from './Design';
import Social from './designs/social/Social';
import Streaming from './designs/streaming/Streaming';
import Gaming from './designs/gaming/Gaming';
import Education from './designs/education/education';

import SelectCategory from './report/select-cate';
import ReportSocial from './report/report-social';
import ReportStreaming from './report/report-streaming';
import ReportGaming from './report/report-gaming';
import ReportEdu from './report/report-education';

import LawProxi from './Gastalt-Theory/Law-Proxi'
import LawSimilar from './Gastalt-Theory/Law-Similar'
import LawClosure from './Gastalt-Theory/Law-Closure'
import LawContinuity from './Gastalt-Theory/Law-Continuity'
import LawFigure from './Gastalt-Theory/Law-Figure'

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
      <Route path= "/about" element = {<About />} />
      
      <Route path= "/design/:token" element = {<Design />} />
      <Route path= "/Social/:token" element = {<Social/>} />
      <Route path= "/Streaming/:token" element = {<Streaming/>} />
      <Route path= "/Gaming/:token" element = {<Gaming/>} />
      <Route path= "/Education/:token" element = {<Education/>} />

      <Route path= "/Select-Category" element = {<SelectCategory />} />
      <Route path= "/report-social" element = {<ReportSocial/>} />
      <Route path= "/report-streaming" element = {<ReportStreaming/>} />
      <Route path= "/report-gaming" element = {<ReportGaming/>} />
      <Route path= "/report-education" element = {<ReportEdu/>} />

      <Route path= "/law-of-proximity" element = {<LawProxi/>} />
      <Route path= "/law-of-similarity" element = {<LawSimilar/>} />
      <Route path= "/law-of-closure" element = {<LawClosure/>} />
      <Route path= "/law-of-continuity" element={<LawContinuity/>} />
      <Route path= "/law-of-figure-ground" element={<LawFigure/>} />
    </Routes>
    </>
  );
}

export default App;