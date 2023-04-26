import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Main />
        <Nav />
      </div>
      <Footer />
    </div>
  );
}

export default App;

