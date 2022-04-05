import './App.css';
import Navbar from  './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';
import Dashboard from './Components/Dashboard/Dashboard';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Error from './Components/Error/Error';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
        <Route path='/home' element={<Home />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
