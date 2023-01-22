import React from 'react';
import './App.css';
import { NavLink, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import MyAccount from './components/MyAccount';
import Login from './components/Login';

// Import clásico para componentes no lazy
// import Faqs from './components/Faqs';
// import About from './components/About';
// import NotFound from './components/NotFound';

// Importamos componentes lazy
const About = React.lazy(() => import("./components/About"));
const Faqs = React.lazy(() => import("./components/Faqs"));
const NotFound = React.lazy(() => import("./components/NotFound"));

// Contexto de login
export const AuthContext = React.createContext({ user: null });

function App() {
  // Estado del login
  const [authInfo, setAuthInfo] = React.useState({ user: null });
  
  return (

    <AuthContext.Provider value={authInfo}>

      <div className="app">
        <BrowserRouter>

          <nav className='navigation'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/faqs/0">FAQs 0</NavLink>
            <NavLink to="/faqs/1">FAQs 1</NavLink>
            <NavLink to="/faqs/2">FAQs 2</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/my-account">My Account</NavLink>
          </nav>

          <Routes>
            {/* Rutas cargadas normal (no lazy) */}
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/login' element={<Login login={setAuthInfo}></Login>}></Route>
            <Route path='/my-account' element={<MyAccount></MyAccount>}></Route>

            {/* Rutas cargadas de forma lazy */}
            <Route path='/about' element={<React.Suspense fallback={<p>Cargando...</p>}> <About></About> </React.Suspense>}></Route>
            <Route path='/faqs/:id' element={<React.Suspense fallback={<p>Cargando...</p>}> <Faqs></Faqs> </React.Suspense>}></Route>

            {/* Paginas no encontradas */}
            <Route path="*" element={<React.Suspense fallback={<p>Cargando...</p>}> <NotFound></NotFound> </React.Suspense>}></Route>
          </Routes>

        </BrowserRouter>

      </div>

    </AuthContext.Provider>

  );
}

export default App;
