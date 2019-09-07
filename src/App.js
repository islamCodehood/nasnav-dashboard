import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header'
import BodyWrapper from './Components/BodyWrapper/BodyWrapper';

function App() {
  return (
    <div className="App container-fluid px-0">
      <Header />
      <BodyWrapper />
    </div>
  );
}

export default App;
