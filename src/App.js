import './App.css';
import {useState, createContext} from 'react'
import LoginForm from './components/LoginForm';
import Panel from './components/Panel';



function App() {
  return (
        <div className="container">
            <Panel/>
            {/* <LoginForm/> */}
        </div>
    
  );
}




export default App;
