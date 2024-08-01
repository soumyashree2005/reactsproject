import React from 'react';
import LoginPage from './components/LoginPage';
import PlantCareGuide from './components/PlantCareGuide';
import ContactUs from './components/ContactUs';
import FeaturedProduct from './components/FeaturedProduct';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Plant App</h1>
        <nav>
          <ul>
            <li><a href="#login">Login</a></li>
            <li><a href="#plant-care">Plant Care Guide</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#featured">Featured Products</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="login">
          <LoginPage />
        </section>
        <section id="plant-care">
          <PlantCareGuide />
        </section>
        <section id="contact">
          <ContactUs />
        </section>
        <section id="featured">
          <FeaturedProduct />
        </section>
      </main>
      <footer>
        <p>© 2024 My Plant App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
