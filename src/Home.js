import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to My Library</h1>
        <p>Your gateway to a world of knowledge.</p>
        <button className="home-button">Browse Books</button>
      </header>
      <section className="home-categories">
        <h2>Explore Categories</h2>
        <div className="categories-grid">
          <div className="category">Fiction</div>
          <div className="category">Non-Fiction</div>
          <div className="category">Science</div>
          <div className="category">History</div>
        </div>
      </section>
    </div>
  );
}

export default Home;