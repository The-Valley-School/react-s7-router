import React from 'react';
import './App.css';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';

// Import clásico para componentes no lazy
// import Faqs from './components/Faqs';
// import About from './components/About';

// Importamos componentes lazy
const About = React.lazy(() => import("./components/About"));
const Faqs = React.lazy(() => import("./components/Faqs"));

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
          {/* Ejemplo de ruta cargada normal (no lazy) */}
          <Route path='/' element={<Home></Home>}></Route>

          {/* Rutas cargadas de forma lazy */}
          <Route path='/about' element={<React.Suspense fallback={<p>Cargando...</p>}> <About></About> </React.Suspense>}></Route>
          <Route path='/faqs/:id' element={<React.Suspense fallback={<p>Cargando...</p>}> <Faqs></Faqs> </React.Suspense>}></Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
