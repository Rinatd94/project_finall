import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 import Login from './components/clients/Login/Login'
import Buttons from './components/clients/Appointments/Appointments';
import Aaa from './components/clients/cancellation/cancellation'
import Changing from './components/clients/Changing queues/Changingqueues';
import Myqueues from './components/clients/Myqueues/Myqueues';
import About from './components/clients/About/About';
function App() {
 

  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>HAIR STYLE STUDIO</h1>
      <br></br>

      {/* <Login></Login>  */}
      {/* <Buttons></Buttons> */}
      {/* <Aaa></Aaa> */}
      {/* <Changing></Changing> */}
      {/* <Myqueues></Myqueues> */}
      <About></About>
    </div>
  );
}

export default App;
