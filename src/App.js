import './App.css';
import {useState} from 'react'
import Panel from './components/Panel';
function App() {

  const [theme, setTheme] = useState('light');
  
  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  console.log(theme);
  return (
    <div className="container">
      {/* <button className='btn btn-sm btn-danger'
         onClick={handleChangeTheme}
      > Dark mode </button> */}
      <Panel theme = {theme} handleChangeTheme = {handleChangeTheme}/>
    </div>
  );
}




export default App;
