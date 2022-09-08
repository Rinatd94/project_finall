import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 import Login from './components/clients/Login/Login'
import Buttons from './components/clients/Appointments/Appointments';
import Aaa from './components/clients/cancellation/cancellation'
import Changing from './components/clients/Changing queues/Changingqueues';
import Myqueues from './components/clients/Myqueues/Myqueues';
import About from './components/clients/About/About';
import Shop from './components/clients/Shop/Shop';
import NavbarClient  from './components/clients/navbar/navbar';
import Hairsylist from './components/clients/Hairstylist/Hairstylist'
import Spreyhair from './components/clients/Shop/Spreyhair/Spreyhair'
import Spreyface from './components/clients/Shop/Spreyface/Spreyface';
import Fen from './components/clients/Shop/Fen/Fen'
import {Outlet} from 'react-router-dom'
function App() {
 

  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>HAIR STYLE STUDIO  </h1>
      <br></br>

      {/* <Login></Login>  */}
      {/* <Buttons></Buttons> */}
      {/* <Aaa></Aaa> */}
      {/* <Changing></Changing> */}
      {/* <Myqueues></Myqueues> */}
      {/* <About></About> */}
      {/* <Shop></Shop> */}
      <NavbarClient></NavbarClient>
      <Outlet />

    </div>
  );
}

export default App;
