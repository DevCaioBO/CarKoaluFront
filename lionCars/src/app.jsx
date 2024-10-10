import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/home'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home/>}/>

      </Routes>
    </Router>
  );
}

export default App;