import React from 'react';
import './App.css';
// import AddNewItemForm from './components/AddNewItemForm.tsx';
import AddNewItemButton from './components/AddNewItemButton.tsx';

function App() {
  return (
    <div>
      <header className="welcome">
      WELCOME
      </header>
      <div className="body">
        <div className="body-top">
          <div></div>
         <AddNewItemButton/>
        </div>
        {/* <AddNewItemForm/> */}
      </div>
    </div>
  );
}

export default App;


