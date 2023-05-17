import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path = "/login" element = {<Login />} />
      <Route path = "/register" element = {<Register />} />
      <Route path = "/profile" element = {<Profile />} />
    </Routes>
  );
}

export default App;
