import './App.css';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Faqs from './components/Faqs';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <div className="app">
      <BrowserRouter>

        <nav className='navigation'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/faqs/0">FAQs 0</Link>
          <Link to="/faqs/1">FAQs 1</Link>
          <Link to="/faqs/2">FAQs 2</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/faqs/:id' element={<Faqs></Faqs>}></Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
