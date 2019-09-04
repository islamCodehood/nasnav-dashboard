import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MessagesLink from './Components/MessagesLink/MessagesLink'
import NotificationLink from './Components/NotificationLink/NotificationLink'
import Sorting from './Components/Sorting/Sorting'
import Status from './Components/Status/Status'
import Pages from './Components/Pages/Pages'

function App() {
  return (
    <div className="App">
      <MessagesLink />
      <NotificationLink />
      <Sorting />
      <Status />
      <Pages />
    </div>
  );
}

export default App;
