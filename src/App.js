// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';
import '@fortawesome/fontawesome-free/css/all.css';
import Login from './component/Login';
import SingUp from './component/SingUp';
import Error from './component/Error';
import "./App.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import About from './pages/About';
import Contact from './pages/Contact';
import Search from './component/Search';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SingUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/diamond" element={<Search />} />

          <Route path='*' element={<Error />} />


          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
