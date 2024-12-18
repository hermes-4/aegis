import React from 'react';
import './App.css';
import AddNewPassword from './components/AddNew.tsx';

function App() {
  return (
    <div>
      <header className="welcome">
      WELCOME
      </header>
      <div className="body">
        <div className="body-top">
          <div></div>
          <button className="add-new-button">
          Add New Password
          </button>
        </div>
        <AddNewPassword/>
      </div>
    </div>
  );
}

export default App;


