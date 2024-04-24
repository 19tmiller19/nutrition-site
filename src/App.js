
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import Home from './pages/Home/Home';
import { Water } from './pages/Water/Water';
import Foods from './pages/Foods/Foods';
import Testing from './pages/Testing/Testing';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/water' Component={Water}/>
        <Route path='/foods' Component={Foods}/>
        <Route path='/testing' Component={Testing}/>
        <Route path='/about' Component={About}/>
        <Route path='/products' Component={Products}/>
        <Route path='/signup' Component={SignUp}/>
      </Routes>
    </Router>
    </>    
  );
}

export default App;
