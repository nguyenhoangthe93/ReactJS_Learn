import './App.css';
import TwoWayBindingSubmit2 from './components/Alert/TwoWayBindingSubmit2';
import TwoWayBindingSubmit3 from './components/Alert/TwoWayBindingSubmit3';
import InitStateCallback from './components/InitStateCallback';
import PlayListApp from './components/PlayList/PlayListApp';
import TwoWayBinding from './components/TwoWayBinding';
import TwoWayBindingSubmit from './components/TwoWayBindingSubmit';
import UseState from './components/UseState';

// const [state, setState] = useState(initState);
// Nhiệm vụ của useState : quản lý trạng thái trong component
// input : initState là tất cả các kiểu dữ liệu có trong js
//        - number , string , boolean , null , undefined ,
//        - array , Object , callback

function App() {
  return (
    <div className="Container">
      {/* <UseState/> */}
      {/* <TwoWayBinding/>   */}
      {/* <TwoWayBindingSubmit/> */}
      {/* <TwoWayBindingSubmit2/> */}
      {/* <TwoWayBindingSubmit3/> */}
      {/* <InitStateCallback /> */}
      <PlayListApp/>
    </div>
  );
}

export default App;
