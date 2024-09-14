import logo from './logo.svg';
import './App.css';
import LoginButton from "./auth/login";

function App() {
  return (
    <div>
      <div className='header'>

      </div>
      <div className="app">
       <p className='welcome'>Welcome to Aegis. </p>
        <p className='desc'>A secure platform for storing your passwords</p>
        <div className='login-div'>
          <LoginButton/>
        </div>
    </div>
    </div>
  );
}

export default App;
